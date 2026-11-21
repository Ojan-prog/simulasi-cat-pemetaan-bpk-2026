/* ==========================================================================
   Simulasi CAT Pemetaan Pegawai BPK RI 2026 - Core Application Engine
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_SESSION = "cat-bpk-2026-session";
  var STORAGE_HISTORY = "cat-bpk-2026-history";
  var STORAGE_SCHEME = "cat-bpk-color-scheme";
  var STORAGE_SCALE = "cat-bpk-font-scale";

  var SUBTEST_META = {
    potensi_kognitif: {
      id: "potensi_kognitif",
      shortLabel: "Subtes 1: Kognitif",
      label: "Subtes 1: Potensi Kognitif",
      minutes: 60
    },
    potensi_perilaku: {
      id: "potensi_perilaku",
      shortLabel: "Subtes 2: Perilaku",
      label: "Subtes 2: Potensi Perilaku",
      minutes: 45
    },
    manajerial: {
      id: "manajerial",
      shortLabel: "Subtes 3: Manajerial",
      label: "Subtes 3: Kompetensi Manajerial",
      minutes: 90
    },
    sosiokultural: {
      id: "sosiokultural",
      shortLabel: "Subtes 4: Sosial Kultural",
      label: "Subtes 4: Kompetensi Sosial Kultural",
      minutes: 45
    }
  };

  var SUBTEST_ORDER = [
    "potensi_kognitif",
    "potensi_perilaku",
    "manajerial",
    "sosiokultural"
  ];

  var ROLE_TARGETS = {
    jf_pertama: {
      label: "JF Ahli Pertama / Pelaksana",
      targetLevel: 2.5,
      targetPct: 70
    },
    jf_muda: {
      label: "JF Ahli Muda",
      targetLevel: 2.8,
      targetPct: 75
    },
    jf_madya: {
      label: "JF Ahli Madya / Pengawas",
      targetLevel: 3.2,
      targetPct: 80
    },
    manajerial: {
      label: "Manajerial / Administrator",
      targetLevel: 3.5,
      targetPct: 85
    }
  };

  var MODE_CONFIG = {
    full: { label: "Simulasi Penuh CAT (240 Menit)", minutes: 240 },
    sprint: { label: "Latihan Cepat / Sprint (45 Menit)", minutes: 45 },
    subtes_1: { label: "Fokus Subtes 1: Potensi Kognitif", minutes: 60 },
    subtes_2: { label: "Fokus Subtes 2: Potensi Perilaku", minutes: 45 },
    subtes_3: { label: "Fokus Subtes 3: Kompetensi Manajerial", minutes: 90 },
    subtes_4: { label: "Fokus Subtes 4: Sosial Kultural", minutes: 45 }
  };

  var LEVEL_CONFIG = {
    standar_bkn: {
      id: "standar_bkn",
      shortLabel: "Level 1: Standar CAT BKN",
      label: "Level 1 — Standar CAT BKN"
    },
    lanjutan_bpk: {
      id: "lanjutan_bpk",
      shortLabel: "Level 2: Lanjutan BPK RI",
      label: "Level 2 — Lanjutan BPK RI"
    }
  };

  var COMPETENCY_RADAR_AXES = [
    { key: "Integritas", short: "Integritas" },
    { key: "Kerja Sama", short: "Kerja Sama" },
    { key: "Komunikasi", short: "Komunikasi" },
    { key: "Orientasi pada Hasil", short: "Orientasi Hasil" },
    { key: "Pelayanan Publik", short: "Pelayanan Publik" },
    { key: "Pengembangan Diri dan Orang Lain", short: "Pengembangan" },
    { key: "Mengelola Perubahan", short: "Kelola Perubahan" },
    { key: "Pengambilan Keputusan", short: "Ambil Keputusan" },
    { key: "Perekat Bangsa", short: "Perekat Bangsa" }
  ];

  /* Safe storage abstraction for restricted file:// environments */
  var memoryStore = {};
  function storageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return Object.prototype.hasOwnProperty.call(memoryStore, key)
        ? memoryStore[key]
        : null;
    }
  }
  function storageSet(key, val) {
    try {
      window.localStorage.setItem(key, val);
    } catch (e) {
      memoryStore[key] = String(val);
    }
  }
  function storageRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      delete memoryStore[key];
    }
  }

  /* Pure Scoring Engine (exported for Node verification & UI rendering) */
  function getQuestionMaxScore(q) {
    return q.tipe === "single" ? 1 : 4;
  }

  function getQuestionScore(q, chosenLetter) {
    if (!chosenLetter) return 0;
    if (q.tipe === "single") {
      return chosenLetter === q.kunci ? 1 : 0;
    }
    for (var i = 0; i < q.opsi.length; i++) {
      if (q.opsi[i].huruf === chosenLetter) {
        return Number(q.opsi[i].skor || 0);
      }
    }
    return 0;
  }

  function getBestLetter(q) {
    if (q.tipe === "single") return q.kunci;
    var best = q.opsi[0];
    for (var i = 1; i < q.opsi.length; i++) {
      if ((q.opsi[i].skor || 0) > (best.skor || 0)) best = q.opsi[i];
    }
    return best.huruf;
  }

  function pctToLevel(pct) {
    if (pct >= 87.5) return 4.0;
    if (pct >= 72.5) return 3.0 + ((pct - 72.5) / 15) * 0.9;
    if (pct >= 55) return 2.0 + ((pct - 55) / 17.5) * 0.9;
    return Math.max(1.0, 1.0 + (pct / 55) * 0.9);
  }

  function classifyJpm(jpmPct) {
    if (jpmPct >= 80) {
      return {
        kategori: "Optimal",
        badgeClass: "badge-success",
        ringkasan: "Memenuhi atau melampaui standar profil jabatan yang dipersyaratkan."
      };
    }
    if (jpmPct >= 68) {
      return {
        kategori: "Cukup Optimal",
        badgeClass: "badge-warning",
        ringkasan: "Memenuhi sebagian besar standar; perlu penguatan terarah pada aspek yang masih memiliki gap."
      };
    }
    return {
      kategori: "Kurang Optimal",
      badgeClass: "badge-danger",
      ringkasan: "Masih berada di bawah ambang minimal; perlu pendalaman materi dan pembiasaan SJT PermenPANRB 38/2017."
    };
  }

  function scaleToJpm(pct, targetPct) {
    if (pct >= targetPct) {
      return Math.min(
        100,
        Math.round((80 + ((pct - targetPct) / (100 - targetPct || 1)) * 20) * 10) / 10
      );
    }
    return Math.round((pct / targetPct) * 80 * 10) / 10;
  }

  function band3(pct) {
    if (pct >= 80) return 2; // Tinggi
    if (pct >= 68) return 1; // Sedang
    return 0; // Rendah
  }

  var NINE_BOX_INFO = {
    "2-2": { box: 9, title: "Talenta Unggul (High Potential & High Competency)", advice: "Siap mengemban penugasan strategis lintas perwakilan/tim utama, peran pengendali teknis, atau penugasan kepemimpinan lanjutan." },
    "2-1": { box: 7, title: "Potensi Tinggi — Perlu Penguatan Kompetensi", advice: "Kapasitas nalar dan potensi perilaku kuat; fokuskan latihan pada penerapan SJT manajerial dan tata kelola BPK (Integritas, Komunikasi, Pengambilan Keputusan)." },
    "2-0": { box: 4, title: "Potensi Berkembang — Kesenjangan Kompetensi", advice: "Daya nalar baik namun penerapan kompetensi manajerial/sosial kultural masih perlu pembiasaan kasus PermenPANRB 38/2017." },
    "1-2": { box: 8, title: "Kinerja Kompetensi Kuat — Potensi Terjaga", advice: "Penerapan kompetensi sangat solid; pertahankan konsistensi dan latih kecepatan analisis kognitif kuantitatif/logis." },
    "1-1": { box: 5, title: "Kontributor Andal (Core Performer)", advice: "Berada pada zona cukup optimal; identifikasi 2–3 aspek dengan gap terbesar pada tabel rincian untuk didorong ke level optimal." },
    "1-0": { box: 2, title: "Perlu Penguatan Kompetensi Dasar", advice: "Perkuat pemahaman indikator perilaku level 2–3 PermenPANRB 38/2017 melalui simulasi fokus Subtes 3 dan Subtes 4." },
    "0-2": { box: 6, title: "Ahli Terapan — Perlu Penguatan Potensi", advice: "Penguasaan sikap kerja dan etika baik; tingkatkan kelincahan kognitif (numerik, silogisme, dan manajemen waktu 4 jam)." },
    "0-1": { box: 3, title: "Cukup di Jabatan Saat Ini — Perlu Akselerasi", advice: "Latih konsistensi di bawah batas waktu CAT dan perdalam analisis kasus multi-pihak." },
    "0-0": { box: 1, title: "Prioritas Pengembangan Intensif", advice: "Gunakan Mode Belajar per subtes untuk memahami pola nalar kognitif serta perbedaan opsi skor 4 vs skor 3 pada SJT." }
  };

  function evaluateAttempt(questions, answers, roleKey) {
    var role = ROLE_TARGETS[roleKey] || ROLE_TARGETS.jf_muda;
    var subtestStats = {};
    var aspectStats = {};
    var radarScores = {};
    var i;

    for (i = 0; i < SUBTEST_ORDER.length; i++) {
      var sid = SUBTEST_ORDER[i];
      subtestStats[sid] = { id: sid, label: SUBTEST_META[sid].label, count: 0, answered: 0, raw: 0, max: 0, pct: 0 };
    }

    for (i = 0; i < questions.length; i++) {
      var q = questions[i];
      var chosen = answers[q.id] || null;
      var score = getQuestionScore(q, chosen);
      var maxScore = getQuestionMaxScore(q);

      var st = subtestStats[q.subtes];
      st.count += 1;
      if (chosen) st.answered += 1;
      st.raw += score;
      st.max += maxScore;

      var aspKey = q.subtes === "sosiokultural" ? q.aspek : q.aspek;
      if (!aspectStats[aspKey]) {
        aspectStats[aspKey] = {
          aspek: aspKey,
          subtes: q.subtes,
          count: 0,
          raw: 0,
          max: 0,
          pct: 0,
          level: 1.0,
          targetLevel: role.targetLevel,
          gap: 0
        };
      }
      aspectStats[aspKey].count += 1;
      aspectStats[aspKey].raw += score;
      aspectStats[aspKey].max += maxScore;

      var radarKey = q.subtes === "sosiokultural" ? "Perekat Bangsa" : q.aspek;
      if (q.subtes === "manajerial" || q.subtes === "sosiokultural") {
        if (!radarScores[radarKey]) radarScores[radarKey] = { raw: 0, max: 0 };
        radarScores[radarKey].raw += score;
        radarScores[radarKey].max += maxScore;
      }
    }

    for (i = 0; i < SUBTEST_ORDER.length; i++) {
      var sObj = subtestStats[SUBTEST_ORDER[i]];
      sObj.pct = sObj.max > 0 ? Math.round((sObj.raw / sObj.max) * 1000) / 10 : null;
    }

    var aspectList = Object.keys(aspectStats).map(function (k) {
      var a = aspectStats[k];
      a.pct = a.max > 0 ? Math.round((a.raw / a.max) * 1000) / 10 : 0;
      a.level = Math.round(pctToLevel(a.pct) * 100) / 100;
      a.gap = Math.round((a.level - role.targetLevel) * 100) / 100;
      return a;
    });

    // Aggregate Potensi & Kompetensi percentages (only across subtests actually included)
    var potWeightedSum = 0;
    var potWeightTotal = 0;
    if (subtestStats.potensi_kognitif.max > 0) {
      potWeightedSum += subtestStats.potensi_kognitif.pct * 0.55;
      potWeightTotal += 0.55;
    }
    if (subtestStats.potensi_perilaku.max > 0) {
      potWeightedSum += subtestStats.potensi_perilaku.pct * 0.45;
      potWeightTotal += 0.45;
    }
    var potensiPct = potWeightTotal > 0 ? Math.round((potWeightedSum / potWeightTotal) * 10) / 10 : null;

    var komWeightedSum = 0;
    var komWeightTotal = 0;
    if (subtestStats.manajerial.max > 0) {
      komWeightedSum += subtestStats.manajerial.pct * 0.72;
      komWeightTotal += 0.72;
    }
    if (subtestStats.sosiokultural.max > 0) {
      komWeightedSum += subtestStats.sosiokultural.pct * 0.28;
      komWeightTotal += 0.28;
    }
    var kompetensiPct = komWeightTotal > 0 ? Math.round((komWeightedSum / komWeightTotal) * 10) / 10 : null;

    var overallPct = 0;
    if (potensiPct !== null && kompetensiPct !== null) {
      overallPct = Math.round((potensiPct * 0.4 + kompetensiPct * 0.6) * 10) / 10;
    } else if (potensiPct !== null) {
      overallPct = potensiPct;
    } else if (kompetensiPct !== null) {
      overallPct = kompetensiPct;
    }

    // JPM and 9-Box axes scale consistently against selected role target threshold
    var jpmPct = scaleToJpm(overallPct, role.targetPct);
    var jpmInfo = classifyJpm(jpmPct);

    var potScaled = potensiPct !== null ? scaleToJpm(potensiPct, role.targetPct) : jpmPct;
    var komScaled = kompetensiPct !== null ? scaleToJpm(kompetensiPct, role.targetPct) : jpmPct;
    var gridKey = band3(potScaled) + "-" + band3(komScaled);
    var nineBox = NINE_BOX_INFO[gridKey] || NINE_BOX_INFO["1-1"];

    var radarData = COMPETENCY_RADAR_AXES.map(function (ax) {
      var entry = radarScores[ax.key];
      var pct = entry && entry.max > 0 ? (entry.raw / entry.max) * 100 : null;
      return {
        key: ax.key,
        short: ax.short,
        pct: pct !== null ? Math.round(pct * 10) / 10 : null,
        level: pct !== null ? Math.round(pctToLevel(pct) * 100) / 100 : null,
        target: role.targetLevel
      };
    });

    return {
      roleKey: roleKey,
      roleLabel: role.label,
      targetLevel: role.targetLevel,
      targetPct: role.targetPct,
      subtests: subtestStats,
      aspects: aspectList,
      radarData: radarData,
      potensiPct: potensiPct,
      kompetensiPct: kompetensiPct,
      overallPct: overallPct,
      jpmPct: jpmPct,
      jpmInfo: jpmInfo,
      potBand: band3(potScaled),
      komBand: band3(komScaled),
      nineBox: nineBox
    };
  }

  /* Fast Solving Tips & Shortcuts Generator */
  function getFastSolvingTip(q) {
    if (!q) return "";
    var qText = q.pertanyaan || "";
    var sub = q.subtes || "";
    var asp = q.aspek || "";

    // 1. KOGNITIF VERBAL
    if (sub === "potensi_kognitif" && asp.indexOf("Verbal") !== -1) {
      if (/sinonim|persamaan kata/i.test(qText)) {
        return "<strong>Trik Eliminasi Sinonim:</strong> Identifikasi rasa bahasa (konotasi positif/netral/negatif) dan kelas kata (kata benda/sifat/kerja). Singkirkan 2 opsi yang maknanya bertentangan atau menyimpang jauh. Jangan memilih kata hanya karena kemiripan bunyi fonetik.";
      }
      if (/antonim|lawan kata/i.test(qText)) {
        return "<strong>Trik Membalik Antonim:</strong> Waspada jebakan sinonim! Pikirkan arti kata yang ditanyakan dalam 1 frasa singkat, lalu bayangkan kutub lawannya (180°). Pastikan kata lawan berada pada tingkatan perbandingan yang setara.";
      }
      if (/:/.test(qText)) {
        return "<strong>Trik Jembatan Keledai (Analogi):</strong> Buat 1 kalimat aktif sederhana yang mengikat pasangan kata pertama: <em>'[Kata 1] bertugas/berfungsi untuk [Kata 2]'</em>. Terapkan pola kalimat yang sama persis pada pasangan kata kedua. Jika hubungan kalimat tidak simetris, coret opsi tersebut.";
      }
      return "<strong>Trik Bacaan Cepat (Scanning):</strong> Baca kalimat pertanyaan dan kata kunci utamanya DULU sebelum membaca teks. Cari kata kunci tersebut di paragraf dengan teknik <em>scanning</em>, lalu baca 1 kalimat sebelum dan sesudahnya untuk menemukan jawaban tanpa membaca utuh seluruh teks.";
    }

    // 2. KOGNITIF NUMERIK
    if (sub === "potensi_kognitif" && asp.indexOf("Numerik") !== -1) {
      if (/deret/i.test(qText)) {
        return "<strong>Trik Deret Cepat:</strong> Cek selisih antarsuku berdekatan (+/- bertingkat). Jika loncatan angka drastis, curigai perkalian/geometri. Jika angka naik-turun berselang-seling, segera bagi menjadi 2 larik terpisah (larik suku ganjil dan larik suku genap).";
      }
      if (/persen|diskon|anggaran|biaya/i.test(qText)) {
        return "<strong>Trik Persentase Basis 10%:</strong> Gunakan trik 10% (geser koma ke kiri 1 digit). Misal 35% = (3 &times; 10%) + (separuh dari 10%). Trik ini jauh lebih cepat daripada mencakar pecahan panjang.";
      }
      if (/jam|berkas|kecepatan|pekerja/i.test(qText)) {
        return "<strong>Trik Perbandingan Cepat:</strong> Periksa jenis hubungan: jika waktu bertambah hasil bertambah (senilai &rarr; kali silang). Jika pekerja bertambah waktu berkurang (berbalik nilai &rarr; kali sejajar lalu bagi). Sederhanakan angka pecahan sebelum mengalikan.";
      }
      if (q.stimulus && /<table/i.test(q.stimulus)) {
        return "<strong>Trik Interpretasi Tabel:</strong> Jangan hitung seluruh baris! Cukup hitung taksiran rasio (Capaian &divide; Target) pada unit-unit yang nilainya mendekati batas atas atau ekstrem. Coret opsi unit yang targetnya jelas jauh lebih kecil.";
      }
      return "<strong>Trik Hitung Taksiran:</strong> Bulatkan angka ke puluhan atau ratusan terdekat untuk menaksir hasil dengan cepat. Periksa digit terakhir (angka satuan) untuk mengeliminasi opsi yang salah tanpa menghitung cakar penuh.";
    }

    // 3. KOGNITIF LOGIS
    if (sub === "potensi_kognitif" && asp.indexOf("Logis") !== -1) {
      if (/semua|sebagian|hanya|tidak ada/i.test(qText)) {
        return "<strong>Hukum Silogisme Baku:</strong> (1) Jika ada salah satu premis partikular (<em>sebagian/beberapa</em>), simpulan WAJIB memuat kata <em>sebagian</em>. (2) Jangan memilih simpulan yang memuat asumsi baru di luar premis. (3) Rumus <em>Modus Tollens</em>: Jika P maka Q; Tidak Q; maka pasti Tidak P.";
      }
      if (/posisi|kursi|urutan|peringkat/i.test(qText)) {
        return "<strong>Trik Sketsa Cepat:</strong> Buat 4 slot garis (1–2–3–4) di kertas corat-coret. Kunci posisi yang sudah pasti (misal kursi 1 dan kursi 4), lalu pasang sisa peserta yang bersebelahan. Jawaban langsung terlihat dalam &lt;20 detik!";
      }
      return "<strong>Trik Logika Formal:</strong> Pegang teguh premis yang tertulis di soal sebagai kebenaran mutlak, abaikan pengetahuan umum di luar teks, dan coret opsi yang mengandung generalisasi berlebihan.";
    }

    // 4. KOGNITIF SPASIAL
    if (sub === "potensi_kognitif" && asp.indexOf("Spasial") !== -1) {
      if (/putar|rotasi|searah/i.test(qText) || /berputar/i.test(q.pembahasan || "")) {
        return "<strong>Trik Elemen Jangkar (Rotasi):</strong> Kunci pandangan pada SATU titik atau sudut paling unik pada gambar (jangkar). Amati perputarannya (misal 45&deg; atau 90&deg; searah jarum jam). Putar elemen jangkar tersebut satu langkah lagi, lalu coret opsi yang arah jangkarnya tidak sesuai.";
      }
      if (/banyak|jumlah|lingkaran|deret/i.test(qText)) {
        return "<strong>Trik Pola Hitung Bangun:</strong> Hitung jumlah elemen (1, 2, 3... atau 1, 3, 5...). Pastikan jumlah elemen gambar berikutnya sesuai pola barisan aritmatika sebelum membandingkan bentuk detail.";
      }
      if (/berbeda|beda/i.test(qText)) {
        return "<strong>Trik Eliminasi 3 vs 1:</strong> Uji 3 parameter utama: (1) Garis lurus vs kurva lengkung, (2) Jumlah sudut ganjil vs genap, atau (3) Pola arsir (penuh hitam vs kosong berongga). Gambar yang menyimpang dari aturan mayoritas itulah jawabannya.";
      }
      if (/cermin|pencerminan/i.test(qText)) {
        return "<strong>Trik Sumbu Cermin:</strong> Garis cermin vertikal membalik posisi kiri-kanan (posisi atas-bawah tetap sama). Garis cermin horizontal membalik posisi atas-bawah (posisi kiri-kanan tetap). Bayangkan melipat kertas tepat di garis cermin.";
      }
      return "<strong>Trik Pola Spasial:</strong> Perhatikan konsistensi arah hadap, jumlah sudut poligon, dan perubahan arsir yang berulang secara teratur.";
    }

    // 5. SITUATIONAL JUDGEMENT TEST (POTENSI PERILAKU, MANAJERIAL, SOSIAL KULTURAL)
    if (q.tipe === "weighted") {
      var indicatorTip = "";
      if (asp.indexOf("Integritas") !== -1) {
        indicatorTip = "<strong>Kunci Integritas (Skor 4):</strong> Selalu tolak segala bentuk gratifikasi secara santun, patuhi SOP kedinasan tanpa kompromi, dan berani mengakui kesalahan diri untuk diperbaiki secepatnya.";
      } else if (asp.indexOf("Kerja Sama") !== -1) {
        indicatorTip = "<strong>Kunci Kerja Sama (Skor 4):</strong> Utamakan pembagian tugas yang adil, bersedia membimbing rekan yang kesulitan, dan jembatani perbedaan pendapat demi tujuan bersama tim.";
      } else if (asp.indexOf("Komunikasi") !== -1) {
        indicatorTip = "<strong>Kunci Komunikasi (Skor 4):</strong> Dengarkan lawan bicara secara tuntas (active listening), gunakan bahasa yang santun dan jelas sesuai audiens, serta segera klarifikasi instruksi yang ambigu.";
      } else if (asp.indexOf("Orientasi pada Hasil") !== -1) {
        indicatorTip = "<strong>Kunci Orientasi Hasil (Skor 4):</strong> Buat skala prioritas berdasarkan urgensi dan tenggat, lakukan kendali mutu sebelum menyerahkan hasil, dan ciptakan inovasi efisiensi kerja.";
      } else if (asp.indexOf("Pelayanan Publik") !== -1) {
        indicatorTip = "<strong>Kunci Pelayanan Publik (Skor 4):</strong> Bersikap adil tanpa diskriminasi, bantu pemohon yang rentan (lansia/disabilitas) secara solutif, transparan mengenai waktu/biaya, dan tanggap atas aduan.";
      } else if (asp.indexOf("Pengembangan Diri") !== -1) {
        indicatorTip = "<strong>Kunci Pengembangan Diri (Skor 4):</strong> Proaktif belajar mandiri saat ada tuntutan baru, terbuka menerima kritik atasan untuk perbaikan, dan bagikan ilmu baru kepada rekan kerja.";
      } else if (asp.indexOf("Mengelola Perubahan") !== -1) {
        indicatorTip = "<strong>Kunci Mengelola Perubahan (Skor 4):</strong> Cepat beradaptasi dengan sistem baru, bersikap positif, dan sabar mendampingi rekan yang mengalami kendala adaptasi teknologi.";
      } else if (asp.indexOf("Pengambilan Keputusan") !== -1) {
        indicatorTip = "<strong>Kunci Pengambilan Keputusan (Skor 4):</strong> Kumpulkan data dan fakta objektif terlebih dahulu, timbang risiko jangka pendek dan panjang, serta putuskan secara berani dan bertanggung jawab.";
      } else if (asp.indexOf("Perekat Bangsa") !== -1 || sub === "sosiokultural") {
        indicatorTip = "<strong>Kunci Perekat Bangsa &amp; Soskul (Skor 4):</strong> Hormati adat istiadat dan keberagaman lokal, bersikap inklusif tanpa kelompok eksklusif, netral secara politik (ASN), serta jadilah mediator damai saat terjadi salah paham.";
      } else {
        indicatorTip = "<strong>Kunci Potensi Perilaku (Skor 4):</strong> Tunjukkan inisiatif proaktif, analisis masalah berbasis data, kendalikan emosi saat tertekan, dan patuhi standar keamanan data/digital.";
      }

      return (
        indicatorTip +
        "<span class='tip-rule'><strong>Formula Cepat Opsi Skor 4:</strong> Tindakan nyata, solutif, mandiri, dan beretika. Coret opsi Skor 1–2: Pasif menunggu, menyalahkan orang lain, melanggar SOP diam-diam, atau melempar risiko ke pimpinan tanpa analisis awal.</span>"
      );
    }

    return "<strong>Tips Menjawab:</strong> Baca cermat inti permasalahan, eliminasi opsi yang tidak logis, dan pilih tindakan yang paling solutif serta sesuai etika kedinasan.";
  }

  /* Export core functions when running under Node for verification */
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      evaluateAttempt: evaluateAttempt,
      getQuestionScore: getQuestionScore,
      getBestLetter: getBestLetter,
      getFastSolvingTip: getFastSolvingTip,
      ROLE_TARGETS: ROLE_TARGETS,
      SUBTEST_META: SUBTEST_META
    };
  }

  if (typeof document === "undefined") {
    return;
  }

  /* ==================== BROWSER UI & CONTROLLER ==================== */
  var BANK_BY_LEVEL = {
    standar_bkn: []
      .concat(window.BANK_BKN_POTENSI || [])
      .concat(window.BANK_BKN_KOMPETENSI || [])
      .concat(window.BANK_BKN_EKSTRA || []),
    lanjutan_bpk: []
      .concat(window.BANK_POTENSI || [])
      .concat(window.BANK_KOMPETENSI || [])
  };

  var ALL_QUESTIONS = BANK_BY_LEVEL.standar_bkn.concat(BANK_BY_LEVEL.lanjutan_bpk);

  var QUESTION_MAP = {};
  ALL_QUESTIONS.forEach(function (q) {
    QUESTION_MAP[q.id] = q;
  });

  function resolveLevelConfig(levelId) {
    return LEVEL_CONFIG[levelId] || LEVEL_CONFIG.lanjutan_bpk;
  }

  var state = {
    view: "lobby",
    session: null,
    timerId: null,
    lastTickMs: 0,
    announcedMilestones: {},
    pendingResetAction: null,
    lastReport: null
  };

  /* DOM References */
  var elViewLobby = document.getElementById("view-lobby");
  var elViewExam = document.getElementById("view-exam");
  var elViewReport = document.getElementById("view-report");
  var elHeaderExamMeta = document.getElementById("header-exam-meta");
  var elHeaderLevelBadge = document.getElementById("header-level-badge");
  var elHeaderRoleBadge = document.getElementById("header-role-badge");
  var elHeaderSubtestBadge = document.getElementById("header-subtest-badge");
  var elTimerDisplay = document.getElementById("timer-display");
  var elTimerValue = document.getElementById("timer-value");

  var elLobbyForm = document.getElementById("lobby-form");
  var elParticipantName = document.getElementById("participant-name");
  var elParticipantUnit = document.getElementById("participant-unit");
  var elParticipantRole = document.getElementById("participant-role");
  var elOptStudyMode = document.getElementById("opt-study-mode");
  var elOptShuffleMode = document.getElementById("opt-shuffle-mode");
  var elLobbyError = document.getElementById("lobby-error");
  var elResumeBanner = document.getElementById("resume-banner");
  var elResumeSummary = document.getElementById("resume-summary");
  var elHistoryList = document.getElementById("history-list");
  var elBtnClearHistory = document.getElementById("btn-clear-history");

  var elSubtestNav = document.getElementById("subtest-nav");
  var elBtnPauseTimer = document.getElementById("btn-pause-timer");
  var elQuestionHeading = document.getElementById("question-heading");
  var elQSubtestLabel = document.getElementById("q-subtest-label");
  var elQAspectLabel = document.getElementById("q-aspect-label");
  var elProgressText = document.getElementById("progress-text");
  var elExamProgress = document.getElementById("exam-progress");
  var elQuestionStimulus = document.getElementById("question-stimulus");
  var elQuestionStem = document.getElementById("question-stem");
  var elOptionsContainer = document.getElementById("options-container");
  var elInstantFeedback = document.getElementById("instant-feedback");
  var elInstantScore = document.getElementById("instant-feedback-score");
  var elInstantText = document.getElementById("instant-feedback-text");
  var elBtnPrevQ = document.getElementById("btn-prev-q");
  var elBtnFlagQ = document.getElementById("btn-flag-q");
  var elBtnNextQ = document.getElementById("btn-next-q");
  var elSidebarCounts = document.getElementById("sidebar-counts");
  var elQuestionGrid = document.getElementById("question-grid");

  var elReportModeBadge = document.getElementById("report-mode-badge");
  var elReportParticipantMeta = document.getElementById("report-participant-meta");
  var elReportKpiGrid = document.getElementById("report-kpi-grid");
  var elRadarContainer = document.getElementById("radar-chart-container");
  var elNineBoxContainer = document.getElementById("nine-box-container");
  var elNineBoxAdvice = document.getElementById("nine-box-recommendation");
  var elAspectBody = document.getElementById("aspect-breakdown-body");
  var elFilterSubtest = document.getElementById("filter-subtest");
  var elFilterStatus = document.getElementById("filter-status");
  var elFilterAspect = document.getElementById("filter-aspect");
  var elReviewList = document.getElementById("review-list");

  var elSettingsDialog = document.getElementById("settings-dialog");
  var elGuideDialog = document.getElementById("guide-dialog");
  var elSubmitDialog = document.getElementById("confirm-submit-dialog");
  var elResetDialog = document.getElementById("confirm-reset-dialog");
  var elLivePolite = document.getElementById("live-polite");
  var elLiveAssertive = document.getElementById("live-assertive");

  function announce(msg, urgent) {
    var target = urgent ? elLiveAssertive : elLivePolite;
    if (!target) return;
    target.textContent = "";
    window.setTimeout(function () {
      target.textContent = msg;
    }, 40);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDuration(seconds) {
    var s = Math.max(0, Math.floor(seconds));
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var sec = s % 60;
    return (
      String(h).padStart(2, "0") +
      ":" +
      String(m).padStart(2, "0") +
      ":" +
      String(sec).padStart(2, "0")
    );
  }

  function shuffleArray(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  /* ==================== THEME & SETTINGS ==================== */
  var darkMq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function updateThemeSystemLabel() {
    var label = document.getElementById("theme-system-label");
    if (!label) return;
    var isDark = darkMq ? darkMq.matches : false;
    label.textContent = "Ikuti Sistem (Saat ini " + (isDark ? "Gelap" : "Terang") + ")";
  }

  function applyColorScheme(value) {
    var meta = document.querySelector('meta[name="color-scheme"]');
    if (value === "light" || value === "dark") {
      storageSet(STORAGE_SCHEME, value);
      if (meta) meta.content = value;
    } else {
      storageRemove(STORAGE_SCHEME);
      if (meta) meta.content = "light dark";
    }
    var radioVal = value === "light" || value === "dark" ? value : "system";
    var radio = document.querySelector('input[name="colorScheme"][value="' + radioVal + '"]');
    if (radio) radio.checked = true;
    updateThemeSystemLabel();
  }

  function applyFontScale(scale) {
    var valid = scale === "large" || scale === "xlarge" ? scale : "normal";
    document.documentElement.setAttribute("data-font-scale", valid);
    storageSet(STORAGE_SCALE, valid);
    var radio = document.querySelector('input[name="fontScale"][value="' + valid + '"]');
    if (radio) radio.checked = true;
  }

  function setupDialogFallbacks() {
    /* Fallback for closedby="any" in browsers without HTMLDialogElement.prototype.closedBy */
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      var outside = function (e, dialog) {
        var r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      document.querySelectorAll('dialog[closedby="any"]').forEach(function (dialog) {
        var pressedOutside = false;
        dialog.addEventListener("pointerdown", function (e) {
          pressedOutside = outside(e, dialog);
        });
        dialog.addEventListener("pointerup", function (e) {
          if (pressedOutside && outside(e, dialog)) dialog.close("dismiss");
        });
      });
    }

    elSubmitDialog.addEventListener("close", function () {
      var val = elSubmitDialog.returnValue;
      elSubmitDialog.returnValue = "";
      if (val === "confirm") {
        finishAndScoreExam();
      }
    });

    elResetDialog.addEventListener("close", function () {
      var val = elResetDialog.returnValue;
      elResetDialog.returnValue = "";
      if (val === "confirm") {
        if (state.pendingResetAction === "exit_to_lobby") {
          stopTimer();
          switchView("lobby");
        } else if (state.pendingResetAction === "discard_session") {
          storageRemove(STORAGE_SESSION);
          state.session = null;
          renderLobbyState();
          announce("Sesi tersimpan dihapus.");
        }
      }
      state.pendingResetAction = null;
    });

    [elSettingsDialog, elGuideDialog].forEach(function (dlg) {
      dlg.addEventListener("close", function () {
        dlg.returnValue = "";
      });
    });
  }

  /* ==================== VIEW SWITCHING ==================== */
  function switchView(viewName) {
    state.view = viewName;
    elViewLobby.hidden = viewName !== "lobby";
    elViewExam.hidden = viewName !== "exam";
    elViewReport.hidden = viewName !== "report";
    elHeaderExamMeta.hidden = viewName !== "exam";

    if (viewName === "lobby") {
      document.title = "Beranda | Simulasi CAT Pemetaan Pegawai BPK RI 2026";
      renderLobbyState();
      document.getElementById("main-heading").focus();
    } else if (viewName === "exam") {
      document.title = "Sesi Ujian | Simulasi CAT Pemetaan Pegawai BPK RI 2026";
      elQuestionHeading.focus();
    } else if (viewName === "report") {
      document.title = "Hasil & Evaluasi | Simulasi CAT Pemetaan Pegawai BPK RI 2026";
      document.getElementById("report-heading").focus();
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ==================== LOBBY LOGIC ==================== */
  function updateModeOptionAvailability() {
    var selectedMode = document.querySelector('input[name="simMode"]:checked').value;
    var isFull = selectedMode === "full";
    elOptStudyMode.disabled = isFull;
    elOptShuffleMode.disabled = isFull;
    if (isFull) {
      elOptStudyMode.checked = false;
      elOptShuffleMode.checked = false;
    }
  }

  function renderLobbyState() {
    var savedRaw = storageGet(STORAGE_SESSION);
    if (savedRaw) {
      try {
        var saved = JSON.parse(savedRaw);
        if (saved && Array.isArray(saved.questionIds) && saved.questionIds.length > 0) {
          var ansCount = Object.keys(saved.answers || {}).length;
          var lvlInfo = resolveLevelConfig(saved.level);
          elResumeSummary.textContent =
            saved.participantName +
            " • " +
            lvlInfo.shortLabel +
            " • " +
            (MODE_CONFIG[saved.mode] ? MODE_CONFIG[saved.mode].label : saved.mode) +
            " • " +
            ansCount +
            "/" +
            saved.questionIds.length +
            " soal terjawab • sisa waktu " +
            formatDuration(saved.remainingSeconds);
          elResumeBanner.hidden = false;
        } else {
          elResumeBanner.hidden = true;
        }
      } catch (e) {
        elResumeBanner.hidden = true;
      }
    } else {
      elResumeBanner.hidden = true;
    }

    renderHistoryList();
  }

  function renderHistoryList() {
    var histRaw = storageGet(STORAGE_HISTORY);
    var history = [];
    if (histRaw) {
      try {
        history = JSON.parse(histRaw) || [];
      } catch (e) {
        history = [];
      }
    }

    if (!history.length) {
      elBtnClearHistory.hidden = true;
      elHistoryList.innerHTML =
        '<p class="empty-state">Belum ada riwayat simulasi tersimpan di perangkat ini.</p>';
      return;
    }

    elBtnClearHistory.hidden = false;
    elHistoryList.innerHTML = history
      .slice(0, 8)
      .map(function (item) {
        var lvlPrefix = item.levelLabel ? item.levelLabel + " • " : "";
        return (
          '<div class="history-item">' +
          "<div>" +
          "<strong>" +
          escapeHtml(lvlPrefix + item.modeLabel) +
          "</strong>" +
          '<div class="history-item-meta">' +
          escapeHtml(item.participantName) +
          " • " +
          escapeHtml(item.roleLabel) +
          " • " +
          escapeHtml(item.dateStr) +
          "</div>" +
          "</div>" +
          '<span class="badge ' +
          escapeHtml(item.badgeClass) +
          '">JPM ' +
          item.jpmPct +
          "% (" +
          escapeHtml(item.kategori) +
          ")</span>" +
          "</div>"
        );
      })
      .join("");
  }

  function buildQuestionList(level, mode, shouldShuffle) {
    var bank = BANK_BY_LEVEL[level] || BANK_BY_LEVEL.standar_bkn;
    var list = [];
    if (mode === "full") {
      if (bank.length > 100) {
        // Pool besar (Level 1 BKN 1.000 soal): undi acak 100 soal proporsional per subtes
        var sub1Full = shuffleArray(bank.filter(function (q) { return q.subtes === "potensi_kognitif"; })).slice(0, 30);
        var sub2Full = shuffleArray(bank.filter(function (q) { return q.subtes === "potensi_perilaku"; })).slice(0, 20);
        var sub3Full = shuffleArray(bank.filter(function (q) { return q.subtes === "manajerial"; })).slice(0, 36);
        var sub4Full = shuffleArray(bank.filter(function (q) { return q.subtes === "sosiokultural"; })).slice(0, 14);
        list = sub1Full.concat(sub2Full, sub3Full, sub4Full);
      } else {
        list = bank.slice();
        if (shouldShuffle) {
          var groupedFull = [];
          SUBTEST_ORDER.forEach(function (sid) {
            groupedFull = groupedFull.concat(shuffleArray(list.filter(function (q) { return q.subtes === sid; })));
          });
          list = groupedFull;
        }
      }
    } else if (mode === "sprint") {
      // Proportional 28 items: 9 Kognitif, 5 Perilaku, 10 Manajerial, 4 Sosial Kultural
      var sub1 = shuffleArray(bank.filter(function (q) { return q.subtes === "potensi_kognitif"; })).slice(0, 9);
      var sub2 = shuffleArray(bank.filter(function (q) { return q.subtes === "potensi_perilaku"; })).slice(0, 5);
      var sub3 = shuffleArray(bank.filter(function (q) { return q.subtes === "manajerial"; })).slice(0, 10);
      var sub4 = shuffleArray(bank.filter(function (q) { return q.subtes === "sosiokultural"; })).slice(0, 4);
      list = sub1.concat(sub2, sub3, sub4);
    } else {
      var targetSub =
        mode === "subtes_1"
          ? "potensi_kognitif"
          : mode === "subtes_2"
            ? "potensi_perilaku"
            : mode === "subtes_3"
              ? "manajerial"
              : "sosiokultural";
      var targetCount =
        mode === "subtes_1" ? 30 : mode === "subtes_2" ? 20 : mode === "subtes_3" ? 36 : 14;
      var subPool = bank.filter(function (q) {
        return q.subtes === targetSub;
      });
      if (subPool.length > targetCount) {
        list = shuffleArray(subPool).slice(0, targetCount);
      } else {
        list = subPool.slice();
        if (shouldShuffle) list = shuffleArray(list);
      }
    }

    if (shouldShuffle && mode === "sprint") {
      // Keep grouped by subtest order while questions inside each subtest are shuffled
      var grouped = [];
      SUBTEST_ORDER.forEach(function (sid) {
        grouped = grouped.concat(list.filter(function (q) { return q.subtes === sid; }));
      });
      list = grouped;
    }
    return list.map(function (q) {
      return q.id;
    });
  }

  function startNewSession(e) {
    e.preventDefault();
    var name = elParticipantName.value.trim();
    if (!name) {
      elLobbyError.textContent = "Harap isi Nama Peserta terlebih dahulu sebelum memulai simulasi.";
      elLobbyError.hidden = false;
      elParticipantName.focus();
      return;
    }
    elLobbyError.hidden = true;

    var levelInput = document.querySelector('input[name="simLevel"]:checked');
    var level = levelInput ? levelInput.value : "standar_bkn";
    var mode = document.querySelector('input[name="simMode"]:checked').value;
    var roleKey = elParticipantRole.value;
    var unit = elParticipantUnit.value;
    var isFull = mode === "full";
    var studyMode = !isFull && elOptStudyMode.checked;
    var shuffle = !isFull && elOptShuffleMode.checked;

    var questionIds = buildQuestionList(level, mode, shuffle);
    var totalSeconds = MODE_CONFIG[mode].minutes * 60;

    state.session = {
      participantName: name,
      participantUnit: unit,
      roleKey: roleKey,
      level: level,
      mode: mode,
      studyMode: studyMode,
      questionIds: questionIds,
      currentIndex: 0,
      answers: {},
      flagged: {},
      totalSeconds: totalSeconds,
      remainingSeconds: totalSeconds,
      paused: false,
      startedAt: new Date().toISOString()
    };

    state.announcedMilestones = {};
    persistSession();
    openExamView();
  }

  function persistSession() {
    if (!state.session) return;
    storageSet(STORAGE_SESSION, JSON.stringify(state.session));
  }

  /* ==================== EXAM ENGINE ==================== */
  function openExamView() {
    switchView("exam");
    renderSubtestTabs();
    renderExamQuestion();
    renderQuestionGrid();
    updateExamHeader();
    startTimer();
  }

  function updateExamHeader() {
    if (!state.session) return;
    var role = ROLE_TARGETS[state.session.roleKey] || ROLE_TARGETS.jf_muda;
    var curQ = QUESTION_MAP[state.session.questionIds[state.session.currentIndex]];
    var lvlInfo = resolveLevelConfig(state.session.level);
    if (elHeaderLevelBadge) elHeaderLevelBadge.textContent = lvlInfo.shortLabel;
    elHeaderRoleBadge.textContent = role.label;
    elHeaderSubtestBadge.textContent = SUBTEST_META[curQ.subtes].shortLabel;
    elBtnPauseTimer.hidden = state.session.mode === "full";
    elBtnPauseTimer.textContent = state.session.paused ? "Lanjutkan Waktu" : "Jeda Waktu";
    renderTimerDisplay();
  }

  function renderTimerDisplay() {
    if (!state.session) return;
    elTimerValue.textContent = formatDuration(state.session.remainingSeconds);
    elTimerDisplay.classList.remove("timer-warning", "timer-critical");
    if (state.session.remainingSeconds <= 60) {
      elTimerDisplay.classList.add("timer-critical");
    } else if (state.session.remainingSeconds <= 300) {
      elTimerDisplay.classList.add("timer-warning");
    }
  }

  function startTimer() {
    stopTimer();
    if (!state.session) return;
    state.lastTickMs = Date.now();
    state.timerId = window.setInterval(function () {
      if (!state.session || state.view !== "exam") return;
      if (state.session.paused) {
        state.lastTickMs = Date.now();
        return;
      }
      var now = Date.now();
      var elapsed = Math.floor((now - state.lastTickMs) / 1000);
      if (elapsed >= 1) {
        state.lastTickMs += elapsed * 1000;
        state.session.remainingSeconds = Math.max(0, state.session.remainingSeconds - elapsed);
        renderTimerDisplay();
        persistSession();

        [900, 300, 60].forEach(function (sec) {
          if (state.session.remainingSeconds <= sec && !state.announcedMilestones[sec]) {
            state.announcedMilestones[sec] = true;
            announce("Peringatan waktu: sisa waktu tinggal " + Math.round(sec / 60) + " menit.", true);
          }
        });

        if (state.session.remainingSeconds <= 0) {
          stopTimer();
          announce("Waktu simulasi habis. Jawaban Anda sedang dinilai.", true);
          finishAndScoreExam();
        }
      }
    }, 500);
  }

  function stopTimer() {
    if (state.timerId !== null) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function renderSubtestTabs() {
    if (!state.session) return;
    var present = [];
    SUBTEST_ORDER.forEach(function (sid) {
      var firstIdx = -1;
      for (var i = 0; i < state.session.questionIds.length; i++) {
        if (QUESTION_MAP[state.session.questionIds[i]].subtes === sid) {
          firstIdx = i;
          break;
        }
      }
      if (firstIdx !== -1) {
        present.push({ id: sid, label: SUBTEST_META[sid].shortLabel, startIndex: firstIdx });
      }
    });

    var currentSub = QUESTION_MAP[state.session.questionIds[state.session.currentIndex]].subtes;
    elSubtestNav.innerHTML = present
      .map(function (tab) {
        var currentAttr = tab.id === currentSub ? ' aria-current="true"' : "";
        return (
          '<button type="button" class="subtest-tab-btn" data-jump-idx="' +
          tab.startIndex +
          '"' +
          currentAttr +
          ">" +
          escapeHtml(tab.label) +
          "</button>"
        );
      })
      .join("");
  }

  function renderExamQuestion() {
    if (!state.session) return;
    var idx = state.session.currentIndex;
    var total = state.session.questionIds.length;
    var q = QUESTION_MAP[state.session.questionIds[idx]];
    var chosen = state.session.answers[q.id] || "";
    var isFlagged = Boolean(state.session.flagged[q.id]);

    elQuestionHeading.textContent = "Soal " + (idx + 1) + " dari " + total;
    elQSubtestLabel.textContent = SUBTEST_META[q.subtes].label;

    if (state.session.mode !== "full") {
      elQAspectLabel.textContent = q.aspek;
      elQAspectLabel.hidden = false;
    } else {
      elQAspectLabel.hidden = true;
    }

    var answeredCount = Object.keys(state.session.answers).length;
    elProgressText.textContent = answeredCount + " / " + total + " terjawab";
    elExamProgress.max = total;
    elExamProgress.value = answeredCount;
    elExamProgress.textContent = Math.round((answeredCount / total) * 100) + "%";

    if (q.stimulus) {
      elQuestionStimulus.innerHTML = q.stimulus;
      elQuestionStimulus.hidden = false;
    } else {
      elQuestionStimulus.innerHTML = "";
      elQuestionStimulus.hidden = true;
    }

    elQuestionStem.innerHTML = "<p>" + escapeHtml(q.pertanyaan) + "</p>";

    elOptionsContainer.innerHTML = q.opsi
      .map(function (opt) {
        var checkedAttr = chosen === opt.huruf ? " checked" : "";
        var optId = "opt-" + q.id + "-" + opt.huruf;
        var inner = opt.svg
          ? '<span class="option-svg-wrap">' + opt.svg + "<span>" + escapeHtml(opt.teks) + "</span></span>"
          : "<span>" + escapeHtml(opt.teks) + "</span>";
        return (
          '<label class="option-label" for="' +
          optId +
          '">' +
          '<input type="radio" id="' +
          optId +
          '" name="currentAnswer" value="' +
          opt.huruf +
          '"' +
          checkedAttr +
          ">" +
          '<span class="option-content">' +
          '<span class="option-letter">' +
          opt.huruf +
          ".</span>" +
          inner +
          "</span>" +
          "</label>"
        );
      })
      .join("");

    elBtnFlagQ.setAttribute("aria-pressed", isFlagged ? "true" : "false");
    elBtnFlagQ.textContent = isFlagged ? "Hapus Tanda Ragu-ragu" : "Tandai Ragu-ragu";
    elBtnPrevQ.disabled = idx === 0;
    elBtnNextQ.textContent = idx === total - 1 ? "Simpan Jawaban Terakhir" : "Simpan & Lanjutkan";

    renderInstantFeedback(q, chosen);
    renderSubtestTabs();
    updateExamHeader();
  }

  function renderInstantFeedback(q, chosen) {
    // Sesuai sistem CAT resmi, kunci jawaban yang benar dan pembahasan HANYA ditampilkan di halaman Laporan Evaluasi setelah simulasi selesai
    if (elInstantFeedback) {
      elInstantFeedback.hidden = true;
    }
  }

  function renderQuestionGrid() {
    if (!state.session) return;
    var qIds = state.session.questionIds;
    var answered = 0;
    var flagged = 0;
    var empty = 0;

    elQuestionGrid.innerHTML = qIds
      .map(function (qid, idx) {
        var isAns = Boolean(state.session.answers[qid]);
        var isFlag = Boolean(state.session.flagged[qid]);
        var isCur = idx === state.session.currentIndex;

        if (isAns) answered += 1;
        else empty += 1;
        if (isFlag) flagged += 1;

        var cls = "q-grid-btn";
        var statusText = "Belum dijawab";
        if (isFlag) {
          cls += " is-flagged";
          statusText = isAns ? "Terjawab, ditandai ragu-ragu" : "Ditandai ragu-ragu";
        } else if (isAns) {
          cls += " is-answered";
          statusText = "Terjawab";
        }
        if (isCur) cls += " is-current";

        return (
          '<button type="button" class="' +
          cls +
          '" data-q-idx="' +
          idx +
          '" aria-label="Soal ' +
          (idx + 1) +
          ", " +
          statusText +
          '"' +
          (isCur ? ' aria-current="step"' : "") +
          ">" +
          (idx + 1) +
          "</button>"
        );
      })
      .join("");

    elSidebarCounts.textContent =
      answered + " terjawab • " + flagged + " ragu • " + empty + " kosong";
  }

  function selectAnswerLetter(letter) {
    if (!state.session || state.view !== "exam") return;
    var qId = state.session.questionIds[state.session.currentIndex];
    var q = QUESTION_MAP[qId];
    state.session.answers[qId] = letter;
    persistSession();

    var radio = elOptionsContainer.querySelector('input[value="' + letter + '"]');
    if (radio && !radio.checked) radio.checked = true;

    var answeredCount = Object.keys(state.session.answers).length;
    var total = state.session.questionIds.length;
    elProgressText.textContent = answeredCount + " / " + total + " terjawab";
    elExamProgress.value = answeredCount;

    renderInstantFeedback(q, letter);
    renderQuestionGrid();
    announce("Jawaban " + letter + " dipilih untuk soal " + (state.session.currentIndex + 1) + ".");
  }

  function jumpToQuestion(idx) {
    if (!state.session) return;
    var total = state.session.questionIds.length;
    if (idx < 0 || idx >= total) return;
    state.session.currentIndex = idx;
    persistSession();
    renderExamQuestion();
    renderQuestionGrid();
  }

  function toggleFlagCurrent() {
    if (!state.session) return;
    var qId = state.session.questionIds[state.session.currentIndex];
    if (state.session.flagged[qId]) {
      delete state.session.flagged[qId];
      announce("Tanda ragu-ragu dihapus.");
    } else {
      state.session.flagged[qId] = true;
      announce("Soal ditandai ragu-ragu.");
    }
    persistSession();
    renderExamQuestion();
    renderQuestionGrid();
  }

  function requestSubmitDialog() {
    if (!state.session) return;
    var total = state.session.questionIds.length;
    var answered = Object.keys(state.session.answers).length;
    var flagged = Object.keys(state.session.flagged).length;
    var empty = total - answered;

    document.getElementById("submit-summary-text").textContent =
      "Anda telah menjawab " + answered + " dari " + total + " soal.";
    var warnBox = document.getElementById("submit-warning-box");
    if (empty > 0 || flagged > 0) {
      warnBox.textContent =
        "Perhatian: terdapat " +
        empty +
        " soal belum dijawab dan " +
        flagged +
        " soal berstatus ragu-ragu.";
      warnBox.hidden = false;
    } else {
      warnBox.hidden = true;
    }
    elSubmitDialog.showModal();
  }

  /* ==================== REPORT & ANALYTICS ==================== */
  function finishAndScoreExam() {
    if (!state.session) return;
    stopTimer();
    var sess = state.session;
    var questions = sess.questionIds.map(function (id) {
      return QUESTION_MAP[id];
    });
    var evalResult = evaluateAttempt(questions, sess.answers, sess.roleKey);
    var usedSec = Math.max(1, sess.totalSeconds - sess.remainingSeconds);

    var lvlInfo = resolveLevelConfig(sess.level);

    var report = {
      participantName: sess.participantName,
      participantUnit: sess.participantUnit,
      level: lvlInfo.id,
      levelLabel: lvlInfo.shortLabel,
      mode: sess.mode,
      modeLabel: MODE_CONFIG[sess.mode] ? MODE_CONFIG[sess.mode].label : sess.mode,
      durationUsed: formatDuration(usedSec),
      finishedAt: new Date().toISOString(),
      dateStr: new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }),
      questions: questions,
      answers: sess.answers,
      evaluation: evalResult
    };

    state.lastReport = report;
    saveHistoryEntry(report);
    storageRemove(STORAGE_SESSION);
    state.session = null;
    renderReportView(report);
    switchView("report");
  }

  function saveHistoryEntry(report) {
    var existing = [];
    try {
      existing = JSON.parse(storageGet(STORAGE_HISTORY) || "[]") || [];
    } catch (e) {
      existing = [];
    }
    existing.unshift({
      participantName: report.participantName,
      roleLabel: report.evaluation.roleLabel,
      levelLabel: report.levelLabel,
      modeLabel: report.modeLabel,
      jpmPct: report.evaluation.jpmPct,
      kategori: report.evaluation.jpmInfo.kategori,
      badgeClass: report.evaluation.jpmInfo.badgeClass,
      dateStr: report.dateStr
    });
    storageSet(STORAGE_HISTORY, JSON.stringify(existing.slice(0, 15)));
  }

  function renderReportView(report) {
    var ev = report.evaluation;
    elReportModeBadge.textContent = (report.levelLabel ? report.levelLabel + " • " : "") + report.modeLabel;
    elReportParticipantMeta.textContent =
      report.participantName +
      " • " +
      report.participantUnit +
      " • " +
      ev.roleLabel +
      " • Waktu pengerjaan " +
      report.durationUsed;

    var kpis = [
      {
        label: "Job Person Match (JPM)",
        value: ev.jpmPct + "%",
        sub: '<span class="badge ' + ev.jpmInfo.badgeClass + '">' + ev.jpmInfo.kategori + "</span> — " + ev.jpmInfo.ringkasan
      },
      {
        label: "Skor Potensi Gabungan",
        value: ev.potensiPct !== null ? ev.potensiPct + "%" : "—",
        sub:
          (ev.subtests.potensi_kognitif.max > 0 ? "Kognitif: " + ev.subtests.potensi_kognitif.pct + "% " : "") +
          (ev.subtests.potensi_perilaku.max > 0 ? "• Perilaku: " + ev.subtests.potensi_perilaku.pct + "%" : "")
      },
      {
        label: "Skor Kompetensi Gabungan",
        value: ev.kompetensiPct !== null ? ev.kompetensiPct + "%" : "—",
        sub:
          (ev.subtests.manajerial.max > 0 ? "Manajerial: " + ev.subtests.manajerial.pct + "% " : "") +
          (ev.subtests.sosiokultural.max > 0 ? "• Soskul: " + ev.subtests.sosiokultural.pct + "%" : "")
      },
      {
        label: "Target Standar Jabatan",
        value: "Level " + ev.targetLevel,
        sub: "Ambang optimal >= 80% JPM (Kotak Talenta #" + ev.nineBox.box + ")"
      }
    ];

    elReportKpiGrid.innerHTML = kpis
      .map(function (k) {
        return (
          '<div class="kpi-card">' +
          '<div class="kpi-label">' +
          escapeHtml(k.label) +
          "</div>" +
          '<div class="kpi-value">' +
          escapeHtml(k.value) +
          "</div>" +
          '<div class="kpi-sub">' +
          k.sub +
          "</div>" +
          "</div>"
        );
      })
      .join("");

    renderRadarSvg(ev.radarData, ev.targetLevel);
    renderNineBox(ev);
    renderAspectTable(ev.aspects);
    populateReviewFilters(ev.aspects);
    renderReviewList();
  }

  function renderRadarSvg(radarData, targetLevel) {
    var cx = 210;
    var cy = 190;
    var maxR = 122;
    var n = radarData.length;
    var angleStep = (Math.PI * 2) / n;

    function pointAt(idx, levelVal) {
      var angle = -Math.PI / 2 + idx * angleStep;
      var r = (Math.max(0, Math.min(4, levelVal)) / 4) * maxR;
      return [
        (cx + r * Math.cos(angle)).toFixed(1),
        (cy + r * Math.sin(angle)).toFixed(1)
      ];
    }

    var rings = [1, 2, 3, 4].map(function (lv) {
      var pts = radarData.map(function (_, i) { return pointAt(i, lv).join(","); }).join(" ");
      return '<polygon points="' + pts + '" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="1"/>';
    }).join("");

    var spokes = radarData.map(function (ax, i) {
      var end = pointAt(i, 4);
      var lblPos = pointAt(i, 4.72);
      var anchor = Math.abs(Number(lblPos[0]) - cx) < 12 ? "middle" : Number(lblPos[0]) > cx ? "start" : "end";
      return (
        '<line x1="' + cx + '" y1="' + cy + '" x2="' + end[0] + '" y2="' + end[1] + '" stroke="currentColor" stroke-opacity="0.2" stroke-width="1"/>' +
        '<text x="' + lblPos[0] + '" y="' + lblPos[1] + '" text-anchor="' + anchor + '" dominant-baseline="middle" font-size="11" fill="currentColor">' +
        escapeHtml(ax.short) +
        "</text>"
      );
    }).join("");

    var targetPts = radarData.map(function (ax, i) {
      return pointAt(i, ax.target).join(",");
    }).join(" ");

    var actualPts = radarData.map(function (ax, i) {
      var lv = ax.level !== null ? ax.level : 0;
      return pointAt(i, lv).join(",");
    }).join(" ");

    var dots = radarData.map(function (ax, i) {
      if (ax.level === null) return "";
      var p = pointAt(i, ax.level);
      return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#1d6fd6"/>';
    }).join("");

    elRadarContainer.innerHTML =
      '<svg role="img" viewBox="0 0 420 385" aria-label="Grafik radar 9 kompetensi manajerial dan sosial kultural dibanding target jabatan level ' +
      targetLevel +
      '">' +
      "<title>Profil 9 Kompetensi vs Target Jabatan Level " +
      targetLevel +
      "</title>" +
      rings +
      spokes +
      '<polygon points="' + targetPts + '" fill="none" stroke="#d49514" stroke-width="2" stroke-dasharray="6 4"/>' +
      '<polygon points="' + actualPts + '" fill="#1d6fd6" fill-opacity="0.22" stroke="#1d6fd6" stroke-width="2.5"/>' +
      dots +
      "</svg>";
  }

  function renderNineBox(ev) {
    /* Rows top->bottom: Potensi Tinggi(2), Sedang(1), Rendah(0)
       Cols left->right: Kompetensi Rendah(0), Sedang(1), Tinggi(2) */
    var cells = [];
    for (var p = 2; p >= 0; p--) {
      for (var k = 0; k <= 2; k++) {
        var info = NINE_BOX_INFO[p + "-" + k];
        var isActive = ev.potBand === p && ev.komBand === k;
        cells.push(
          '<div class="nine-box-cell' +
            (isActive ? " is-active" : "") +
            '">' +
            '<span class="nine-box-num">Kotak ' +
            info.box +
            (isActive ? " • Posisi Anda" : "") +
            "</span>" +
            '<span class="nine-box-title">' +
            escapeHtml(info.title) +
            "</span>" +
            "</div>"
        );
      }
    }
    elNineBoxContainer.innerHTML = cells.join("");
    elNineBoxAdvice.innerHTML =
      "<strong>Rekomendasi Pengembangan (Kotak " +
      ev.nineBox.box +
      "):</strong> " +
      escapeHtml(ev.nineBox.advice);
  }

  function renderAspectTable(aspects) {
    elAspectBody.innerHTML = aspects
      .map(function (a) {
        var badge =
          a.pct >= 80
            ? '<span class="badge badge-success">Optimal</span>'
            : a.pct >= 68
              ? '<span class="badge badge-warning">Cukup</span>'
              : '<span class="badge badge-danger">Perlu Penguatan</span>';
        var gapText = (a.gap >= 0 ? "+" : "") + a.gap.toFixed(2);
        return (
          "<tr>" +
          '<th scope="row">' +
          escapeHtml(a.aspek) +
          "</th>" +
          "<td>" +
          a.count +
          "</td>" +
          "<td>" +
          a.raw +
          " / " +
          a.max +
          "</td>" +
          "<td>" +
          a.pct +
          "%</td>" +
          "<td>" +
          a.level.toFixed(2) +
          "</td>" +
          "<td>" +
          a.targetLevel.toFixed(1) +
          "</td>" +
          "<td>" +
          gapText +
          "</td>" +
          "<td>" +
          badge +
          "</td>" +
          "</tr>"
        );
      })
      .join("");
  }

  function populateReviewFilters(aspects) {
    elFilterSubtest.value = "all";
    elFilterStatus.value = "all";
    elFilterAspect.innerHTML =
      '<option value="all">Semua Aspek</option>' +
      aspects
        .map(function (a) {
          return '<option value="' + escapeHtml(a.aspek) + '">' + escapeHtml(a.aspek) + "</option>";
        })
        .join("");
  }

  function renderReviewList() {
    if (!state.lastReport) return;
    var subF = elFilterSubtest.value;
    var statF = elFilterStatus.value;
    var aspF = elFilterAspect.value;

    var items = state.lastReport.questions.filter(function (q) {
      if (subF !== "all" && q.subtes !== subF) return false;
      if (aspF !== "all" && q.aspek !== aspF) return false;
      var chosen = state.lastReport.answers[q.id] || null;
      var sc = getQuestionScore(q, chosen);
      var maxSc = getQuestionMaxScore(q);
      if (statF === "suboptimal" && sc >= maxSc) return false;
      if (statF === "optimal" && sc < maxSc) return false;
      return true;
    });

    if (!items.length) {
      elReviewList.innerHTML = '<p class="empty-state">Tidak ada soal yang cocok dengan filter yang dipilih.</p>';
      return;
    }

    elReviewList.innerHTML = items
      .map(function (q) {
        var chosen = state.lastReport.answers[q.id] || null;
        var sc = getQuestionScore(q, chosen);
        var maxSc = getQuestionMaxScore(q);
        var best = getBestLetter(q);

        var statusBadge =
          sc === maxSc
            ? '<span class="badge badge-success">Optimal (' + sc + "/" + maxSc + ")</span>"
            : chosen
              ? '<span class="badge badge-warning">Skor ' + sc + "/" + maxSc + " (Pilihan: " + chosen + ")</span>"
              : '<span class="badge badge-danger">Tidak Dijawab (0/' + maxSc + ")</span>";

        var optsHtml = q.opsi
          .map(function (opt) {
            var isBest = opt.huruf === best;
            var isChosen = chosen === opt.huruf;
            var isUserSuboptimal = isChosen && !isBest;
            var cls = "review-opt" + (isBest ? " is-best" : isUserSuboptimal ? " is-user-low" : "");

            var tag = "";
            if (q.tipe === "single") {
              if (isBest && isChosen) {
                tag = "Kunci Benar • Pilihan Anda (Skor 1)";
              } else if (isBest) {
                tag = "Kunci Benar (Skor 1)";
              } else if (isChosen) {
                tag = "Pilihan Anda (Salah - Skor 0)";
              }
            } else {
              if (isBest && isChosen) {
                tag = "Kunci Optimal • Pilihan Anda (Skor 4)";
              } else if (isBest) {
                tag = "Kunci Optimal (Skor 4)";
              } else if (isChosen) {
                tag = "Pilihan Anda (Bobot " + opt.skor + ")";
              } else {
                tag = "Bobot " + opt.skor;
              }
            }

            return (
              '<div class="' +
              cls +
              '">' +
              "<span><strong>" +
              opt.huruf +
              ".</strong> " +
              escapeHtml(opt.teks) +
              "</span>" +
              (tag ? '<span class="badge">' + escapeHtml(tag) + "</span>" : "") +
              "</div>"
            );
          })
          .join("");

        var fastTip = getFastSolvingTip(q);
        var fastTipHtml = fastTip
          ? '<div class="fast-tip-box">' +
            '<div class="fast-tip-title">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' +
            "<span>Tips &amp; Cara Cepat Menjawab:</span>" +
            "</div>" +
            '<div class="fast-tip-content">' +
            fastTip +
            "</div>" +
            "</div>"
          : "";

        return (
          '<article class="review-card">' +
          '<div class="review-card-head">' +
          "<div><strong>" +
          escapeHtml(q.id) +
          "</strong> — " +
          escapeHtml(q.aspek) +
          "</div>" +
          statusBadge +
          "</div>" +
          (q.stimulus ? '<div class="stimulus-box">' + q.stimulus + "</div>" : "") +
          "<p>" +
          escapeHtml(q.pertanyaan) +
          "</p>" +
          (q.indikator
            ? '<p class="history-item-meta"><strong>Indikator PermenPANRB 38/2017:</strong> ' +
              escapeHtml(q.indikator) +
              "</p>"
            : "") +
          '<div class="review-options">' +
          optsHtml +
          "</div>" +
          '<div class="review-rationale"><strong>Pembahasan Lengkap:</strong> ' +
          escapeHtml(q.pembahasan) +
          "</div>" +
          fastTipHtml +
          "</article>"
        );
      })
      .join("");
  }

  function exportReportJson() {
    if (!state.lastReport) return;
    var payload = {
      exportedAt: new Date().toISOString(),
      participantName: state.lastReport.participantName,
      participantUnit: state.lastReport.participantUnit,
      levelLabel: state.lastReport.levelLabel,
      modeLabel: state.lastReport.modeLabel,
      durationUsed: state.lastReport.durationUsed,
      evaluation: state.lastReport.evaluation,
      answers: state.lastReport.answers
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "hasil-simulasi-cat-bpk-2026.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    announce("Laporan hasil simulasi berhasil diekspor ke JSON.");
  }

  /* ==================== EVENT BINDINGS ==================== */
  function init() {
    setupDialogFallbacks();

    /* Initialize theme & font scale controls */
    var storedScheme = storageGet(STORAGE_SCHEME);
    applyColorScheme(storedScheme || "system");
    applyFontScale(storageGet(STORAGE_SCALE) || "normal");

    if (darkMq && darkMq.addEventListener) {
      darkMq.addEventListener("change", updateThemeSystemLabel);
    }

    window.addEventListener("storage", function (ev) {
      if (ev.key === STORAGE_SCHEME) {
        applyColorScheme(ev.newValue || "system");
      } else if (ev.key === STORAGE_SCALE) {
        applyFontScale(ev.newValue || "normal");
      }
    });

    document.querySelectorAll('input[name="colorScheme"]').forEach(function (inp) {
      inp.addEventListener("change", function (e) {
        applyColorScheme(e.target.value);
      });
    });

    document.querySelectorAll('input[name="fontScale"]').forEach(function (inp) {
      inp.addEventListener("change", function (e) {
        applyFontScale(e.target.value);
      });
    });

    document.getElementById("btn-open-settings").addEventListener("click", function () {
      updateThemeSystemLabel();
      elSettingsDialog.showModal();
    });

    document.getElementById("btn-open-guide").addEventListener("click", function () {
      elGuideDialog.showModal();
    });

    /* Lobby Events */
    document.querySelectorAll('input[name="simMode"]').forEach(function (r) {
      r.addEventListener("change", updateModeOptionAvailability);
    });
    updateModeOptionAvailability();

    elLobbyForm.addEventListener("submit", startNewSession);

    document.getElementById("btn-resume-session").addEventListener("click", function () {
      try {
        var saved = JSON.parse(storageGet(STORAGE_SESSION));
        if (saved && Array.isArray(saved.questionIds) && saved.questionIds.length) {
          state.session = saved;
          openExamView();
        }
      } catch (e) {
        announce("Gagal memuat sesi tersimpan.", true);
      }
    });

    document.getElementById("btn-discard-session").addEventListener("click", function () {
      state.pendingResetAction = "discard_session";
      document.getElementById("reset-summary-text").textContent =
        "Sesi simulasi yang belum selesai di penyimpanan lokal akan dihapus permanen.";
      elResetDialog.showModal();
    });

    elBtnClearHistory.addEventListener("click", function () {
      storageRemove(STORAGE_HISTORY);
      renderHistoryList();
      announce("Riwayat hasil simulasi telah dihapus.");
    });

    /* Exam Events */
    elOptionsContainer.addEventListener("change", function (e) {
      if (e.target && e.target.name === "currentAnswer") {
        selectAnswerLetter(e.target.value);
      }
    });

    elBtnPrevQ.addEventListener("click", function () {
      if (state.session && state.session.currentIndex > 0) {
        jumpToQuestion(state.session.currentIndex - 1);
      }
    });

    elBtnNextQ.addEventListener("click", function () {
      if (!state.session) return;
      if (state.session.currentIndex < state.session.questionIds.length - 1) {
        jumpToQuestion(state.session.currentIndex + 1);
      } else {
        requestSubmitDialog();
      }
    });

    elBtnFlagQ.addEventListener("click", toggleFlagCurrent);

    elQuestionGrid.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-q-idx]");
      if (btn) jumpToQuestion(Number(btn.getAttribute("data-q-idx")));
    });

    elSubtestNav.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-jump-idx]");
      if (btn) jumpToQuestion(Number(btn.getAttribute("data-jump-idx")));
    });

    elBtnPauseTimer.addEventListener("click", function () {
      if (!state.session) return;
      state.session.paused = !state.session.paused;
      persistSession();
      updateExamHeader();
      announce(state.session.paused ? "Timer dijeda." : "Timer dilanjutkan.");
    });

    document.getElementById("btn-exit-lobby").addEventListener("click", function () {
      state.pendingResetAction = "exit_to_lobby";
      document.getElementById("reset-summary-text").textContent =
        "Progres jawaban saat ini sudah tersimpan otomatis. Kembali ke beranda sekarang?";
      elResetDialog.showModal();
    });

    document.getElementById("btn-finish-exam").addEventListener("click", requestSubmitDialog);

    /* Keyboard Shortcuts during Exam */
    document.addEventListener("keydown", function (e) {
      if (state.view !== "exam" || !state.session) return;
      if (document.querySelector("dialog[open]")) return;
      var tag = document.activeElement ? document.activeElement.tagName : "";
      if (tag === "INPUT" && document.activeElement.type !== "radio") return;
      if (tag === "TEXTAREA" || tag === "SELECT") return;

      var key = e.key.toUpperCase();
      var mapKey = { A: "A", B: "B", C: "C", D: "D", "1": "A", "2": "B", "3": "C", "4": "D" };
      if (mapKey[key]) {
        e.preventDefault();
        selectAnswerLetter(mapKey[key]);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        jumpToQuestion(state.session.currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        jumpToQuestion(state.session.currentIndex + 1);
      } else if (key === "R") {
        e.preventDefault();
        toggleFlagCurrent();
      }
    });

    /* Report Events */
    elFilterSubtest.addEventListener("change", renderReviewList);
    elFilterStatus.addEventListener("change", renderReviewList);
    elFilterAspect.addEventListener("change", renderReviewList);

    document.getElementById("btn-print-report").addEventListener("click", function () {
      window.print();
    });
    document.getElementById("btn-export-json").addEventListener("click", exportReportJson);
    document.getElementById("btn-back-to-lobby").addEventListener("click", function () {
      switchView("lobby");
    });

    renderLobbyState();
  }

  init();
})();
