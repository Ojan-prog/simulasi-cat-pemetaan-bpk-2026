/* ==========================================================================
   Level 1: Bank Soal Standar CAT / CACT BKN - Potensi (50 Soal)
   Subtes 1: Potensi Kognitif (30 Soal) & Subtes 2: Potensi Perilaku (20 Soal)
   ========================================================================== */

(function () {
  function svgBox(title, body, viewBox) {
    return (
      '<svg role="img" viewBox="' +
      (viewBox || "0 0 360 120") +
      '" aria-label="' +
      title +
      '">' +
      "<title>" +
      title +
      "</title>" +
      body +
      "</svg>"
    );
  }

  function miniSvg(title, body) {
    return (
      '<svg role="img" width="64" height="64" viewBox="0 0 64 64" aria-label="' +
      title +
      '">' +
      "<title>" +
      title +
      "</title>" +
      '<rect x="2" y="2" width="60" height="60" rx="6" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.45"></rect>' +
      body +
      "</svg>"
    );
  }

  window.BANK_BKN_POTENSI = [
    /* ===================== SUBTES 1: POTENSI KOGNITIF (30 SOAL) ===================== */
    /* --- Verbal & Pemahaman Bacaan (8 soal: BKN-PK-01 s.d. BKN-PK-08) --- */
    {
      id: "BKN-PK-01",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Persamaan kata (sinonim) dari kata KREDIBEL adalah ...",
      opsi: [
        { huruf: "A", teks: "Dapat dipercaya dan dipertanggungjawabkan" },
        { huruf: "B", teks: "Sangat mudah berubah setiap waktu" },
        { huruf: "C", teks: "Bersifat sementara tanpa kepastian" },
        { huruf: "D", teks: "Tertutup dari pengawasan masyarakat" }
      ],
      kunci: "A",
      pembahasan:
        "Dalam KBBI dan tes verbal CAT BKN, kredibel berarti dapat dipercaya atau andal (A)."
    },
    {
      id: "BKN-PK-02",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Persamaan kata (sinonim) dari kata AKUNTABEL adalah ...",
      opsi: [
        { huruf: "A", teks: "Bebas dari aturan yang mengikat" },
        { huruf: "B", teks: "Dapat dipertanggungjawabkan secara jelas" },
        { huruf: "C", teks: "Rahasia dan hanya diketahui atasan" },
        { huruf: "D", teks: "Dilaksanakan tanpa catatan tertulis" }
      ],
      kunci: "B",
      pembahasan:
        "Akuntabel berarti dapat dipertanggungjawabkan sesuai aturan dan bukti yang berlaku (B)."
    },
    {
      id: "BKN-PK-03",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Lawan kata (antonim) dari kata PROGRESIF adalah ...",
      opsi: [
        { huruf: "A", teks: "Maju ke arah perbaikan sistem" },
        { huruf: "B", teks: "Terus bergerak mengikuti perubahan" },
        { huruf: "C", teks: "Stagnan atau mundur tanpa kemajuan" },
        { huruf: "D", teks: "Cepat beradaptasi di lingkungan baru" }
      ],
      kunci: "C",
      pembahasan:
        "Progresif berarti bergerak maju atau meningkat. Lawan katanya adalah stagnan atau mundur (C)."
    },
    {
      id: "BKN-PK-04",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Lawan kata (antonim) dari kata SPORADIS adalah ...",
      opsi: [
        { huruf: "A", teks: "Jarang terjadi di berbagai tempat" },
        { huruf: "B", teks: "Muncul secara tidak menentu" },
        { huruf: "C", teks: "Terpencar di beberapa wilayah kecil" },
        { huruf: "D", teks: "Rutin, teratur, dan terus-menerus" }
      ],
      kunci: "D",
      pembahasan:
        "Sporadis berarti tidak tentu, kadang kala, atau terpencar. Lawan katanya adalah rutin dan teratur (D)."
    },
    {
      id: "BKN-PK-05",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "HAKIM : PUTUSAN = DOKTER : ...",
      opsi: [
        { huruf: "A", teks: "Resep pengobatan" },
        { huruf: "B", teks: "Ruang tunggu rumah sakit" },
        { huruf: "C", teks: "Seragam perawat jaga" },
        { huruf: "D", teks: "Kartu antrean apotek" }
      ],
      kunci: "A",
      pembahasan:
        "Hakim menghasilkan putusan berdasarkan pemeriksaan perkara; dokter menghasilkan resep pengobatan berdasarkan pemeriksaan pasien (A)."
    },
    {
      id: "BKN-PK-06",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "ARSITEK : RANCANGAN BANGUNAN = PENULIS : ...",
      opsi: [
        { huruf: "A", teks: "Rak buku perpustakaan" },
        { huruf: "B", teks: "Naskah atau karya tulis" },
        { huruf: "C", teks: "Pembaca surat kabar pagi" },
        { huruf: "D", teks: "Mesin cetak percetakan kota" }
      ],
      kunci: "B",
      pembahasan:
        "Arsitek menghasilkan rancangan bangunan; penulis menghasilkan naskah atau karya tulis (B)."
    },
    {
      id: "BKN-PK-07",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus:
        "<p><strong>Bacaan Singkat:</strong> Layanan pengaduan daring yang baru diluncurkan pemerintah daerah mempercepat waktu tanggap keluhan warga dari rata-rata tujuh hari menjadi dua hari. Meski demikian, warga di wilayah tanpa sinyal stabil tetap disediakan loket tatap muka agar tidak ada kelompok yang tertinggal.</p>",
      pertanyaan: "Simpulan yang paling sesuai dengan bacaan tersebut adalah ...",
      opsi: [
        { huruf: "A", teks: "Seluruh loket layanan tatap muka di kantor pemerintah daerah resmi ditutup." },
        { huruf: "B", teks: "Warga yang tidak memiliki sinyal internet dilarang mengajukan pengaduan resmi." },
        { huruf: "C", teks: "Digitalisasi layanan mempercepat respons sekaligus tetap menjaga akses tatap muka." },
        { huruf: "D", teks: "Waktu tanggap pengaduan di seluruh kelurahan kini pasti selesai dalam satu jam." }
      ],
      kunci: "C",
      pembahasan:
        "Bacaan menyatakan layanan daring mempercepat respons menjadi dua hari, namun loket tatap muka tetap dibuka bagi wilayah minim sinyal (C)."
    },
    {
      id: "BKN-PK-08",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus:
        "<p><strong>Bacaan Singkat:</strong> Penerapan sistem kerja fleksibel menuntut pengukuran kinerja berbasis keluaran nyata, bukan sekadar catatan jam masuk kantor. Pegawai yang menyelesaikan target tepat waktu dan bermutu dinilai berkinerja baik tanpa harus selalu bekerja di meja yang sama.</p>",
      pertanyaan: "Gagasan utama bacaan tersebut adalah ...",
      opsi: [
        { huruf: "A", teks: "Presensi jam masuk kantor masih menjadi satu-satunya penentu tunjangan." },
        { huruf: "B", teks: "Pegawai tidak lagi wajib memiliki target penyelesaian tugas tahunan." },
        { huruf: "C", teks: "Sistem kerja fleksibel hanya cocok diterapkan bagi pejabat struktural." },
        { huruf: "D", teks: "Penilaian kerja fleksibel menekankan capaian output nyata, bukan lokasi meja." }
      ],
      kunci: "D",
      pembahasan:
        "Inti paragraf menekankan bahwa ukuran kinerja pada pola kerja fleksibel bergeser dari jam/lokasi fisik menuju capaian output yang bermutu dan tepat waktu (D)."
    },

    /* --- Numerik & Interpretasi Data (8 soal: BKN-PK-09 s.d. BKN-PK-16) --- */
    {
      id: "BKN-PK-09",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Perhatikan deret angka berikut: 5, 9, 13, 17, 21, ... Angka berikutnya adalah ...",
      opsi: [
        { huruf: "A", teks: "24" },
        { huruf: "B", teks: "25" },
        { huruf: "C", teks: "26" },
        { huruf: "D", teks: "27" }
      ],
      kunci: "B",
      pembahasan:
        "Pola penambahan tetap +4 pada setiap suku: 5, 9, 13, 17, 21, maka 21 + 4 = 25 (B)."
    },
    {
      id: "BKN-PK-10",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Perhatikan deret angka berikut: 2, 4, 8, 16, 32, ... Angka berikutnya adalah ...",
      opsi: [
        { huruf: "A", teks: "64" },
        { huruf: "B", teks: "48" },
        { huruf: "C", teks: "56" },
        { huruf: "D", teks: "72" }
      ],
      kunci: "A",
      pembahasan:
        "Setiap angka dikalikan 2: 2, 4, 8, 16, 32, maka 32 × 2 = 64 (A)."
    },
    {
      id: "BKN-PK-11",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Perhatikan deret dua larik berikut: 10, 20, 13, 25, 16, 30, 19, ... Angka berikutnya adalah ...",
      opsi: [
        { huruf: "A", teks: "22" },
        { huruf: "B", teks: "33" },
        { huruf: "C", teks: "35" },
        { huruf: "D", teks: "40" }
      ],
      kunci: "C",
      pembahasan:
        "Larik ganjil (+3): 10, 13, 16, 19. Larik genap (+5): 20, 25, 30, maka suku ke-8 = 30 + 5 = 35 (C)."
    },
    {
      id: "BKN-PK-12",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Sebuah ruang rapat berisi 40 peserta diklat. Jika 35% peserta adalah pejabat pengawas, berapa orang peserta yang bukan pejabat pengawas?",
      opsi: [
        { huruf: "A", teks: "14 orang" },
        { huruf: "B", teks: "22 orang" },
        { huruf: "C", teks: "24 orang" },
        { huruf: "D", teks: "26 orang" }
      ],
      kunci: "D",
      pembahasan:
        "Persentase bukan pejabat pengawas = 100% - 35% = 65%. Jumlahnya = 65% × 40 = 26 orang (D)."
    },
    {
      id: "BKN-PK-13",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Seorang pegawai memeriksa 45 berkas dalam 3 jam. Dengan kecepatan yang sama, berapa berkas yang dapat diperiksanya dalam 5 jam?",
      opsi: [
        { huruf: "A", teks: "60 berkas" },
        { huruf: "B", teks: "65 berkas" },
        { huruf: "C", teks: "75 berkas" },
        { huruf: "D", teks: "80 berkas" }
      ],
      kunci: "C",
      pembahasan:
        "Kecepatan per jam = 45 ÷ 3 = 15 berkas/jam. Dalam 5 jam = 5 × 15 = 75 berkas (C)."
    },
    {
      id: "BKN-PK-14",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Pekerjaan penataan arsip selesai dalam 6 hari oleh 4 pegawai. Jika pimpinan menambah tenaga menjadi 8 pegawai dengan kecepatan sama, berapa hari pekerjaan tersebut selesai?",
      opsi: [
        { huruf: "A", teks: "2 hari" },
        { huruf: "B", teks: "3 hari" },
        { huruf: "C", teks: "4 hari" },
        { huruf: "D", teks: "12 hari" }
      ],
      kunci: "B",
      pembahasan:
        "Perbandingan berbalik nilai: 6 hari × 4 pegawai = 24 hari-orang. Dibagi 8 pegawai = 24 ÷ 8 = 3 hari (B)."
    },
    {
      id: "BKN-PK-15",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus:
        '<table><caption>Jumlah Peserta Pemetaan Pegawai per Sesi</caption><thead><tr><th scope="col">Hari</th><th scope="col">Sesi Pagi</th><th scope="col">Sesi Siang</th></tr></thead><tbody><tr><th scope="row">Hari 1</th><td>45</td><td>50</td></tr><tr><th scope="row">Hari 2</th><td>55</td><td>40</td></tr></tbody></table>',
      pertanyaan: "Berdasarkan tabel di atas, berapakah total seluruh peserta pemetaan pegawai selama dua hari tersebut?",
      opsi: [
        { huruf: "A", teks: "180 peserta" },
        { huruf: "B", teks: "185 peserta" },
        { huruf: "C", teks: "195 peserta" },
        { huruf: "D", teks: "190 peserta" }
      ],
      kunci: "D",
      pembahasan:
        "Total peserta = (45 + 50) + (55 + 40) = 95 + 95 = 190 peserta (D)."
    },
    {
      id: "BKN-PK-16",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus:
        '<table><caption>Capaian Penyelesaian Tugas Tiga Subbagian</caption><thead><tr><th scope="col">Unit Kerja</th><th scope="col">Target Berkas</th><th scope="col">Selesai</th></tr></thead><tbody><tr><th scope="row">Subbagian A</th><td>100</td><td>80</td></tr><tr><th scope="row">Subbagian B</th><td>80</td><td>72</td></tr><tr><th scope="row">Subbagian C</th><td>50</td><td>40</td></tr></tbody></table>',
      pertanyaan: "Unit kerja manakah yang memiliki persentase capaian tertinggi?",
      opsi: [
        { huruf: "A", teks: "Subbagian B" },
        { huruf: "B", teks: "Subbagian A" },
        { huruf: "C", teks: "Subbagian C" },
        { huruf: "D", teks: "Ketiganya sama persis" }
      ],
      kunci: "A",
      pembahasan:
        "Subbagian A = 80/100 = 80%; Subbagian B = 72/80 = 90%; Subbagian C = 40/50 = 80%. Tertinggi adalah Subbagian B sebesar 90% (A)."
    },

    /* --- Logis & Analitis (7 soal: BKN-PK-17 s.d. BKN-PK-23) --- */
    {
      id: "BKN-PK-17",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Semua ASN wajib menjaga netralitas. Budi adalah seorang ASN. Simpulan yang tepat adalah ...",
      opsi: [
        { huruf: "A", teks: "Budi tidak perlu mematuhi aturan kerja kantor." },
        { huruf: "B", teks: "Sebagian ASN tidak wajib menjaga netralitas." },
        { huruf: "C", teks: "Budi wajib menjaga netralitas." },
        { huruf: "D", teks: "Hanya Budi yang wajib menjaga netralitas." }
      ],
      kunci: "C",
      pembahasan:
        "Dari premis umum 'Semua ASN wajib menjaga netralitas' dan 'Budi adalah ASN', ditarik simpulan langsung 'Budi wajib menjaga netralitas' (C)."
    },
    {
      id: "BKN-PK-18",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Semua peserta tes CAT membawa kartu identitas. Sebagian peserta tes CAT memakai kemeja batik. Simpulan yang pasti benar adalah ...",
      opsi: [
        { huruf: "A", teks: "Sebagian pemakai kemeja batik membawa kartu identitas." },
        { huruf: "B", teks: "Semua peserta tes CAT wajib memakai kemeja batik." },
        { huruf: "C", teks: "Pemakai kemeja batik tidak perlu membawa kartu identitas." },
        { huruf: "D", teks: "Semua orang yang membawa kartu identitas adalah peserta tes." }
      ],
      kunci: "A",
      pembahasan:
        "Sebagian peserta tes CAT memakai kemeja batik, dan semua peserta tes CAT membawa kartu identitas. Maka sebagian pemakai kemeja batik membawa kartu identitas (A)."
    },
    {
      id: "BKN-PK-19",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Jika hari ini hujan deras, maka apel pagi dilaksanakan di aula tertutup. Hari ini apel pagi dilaksanakan di lapangan terbuka. Simpulan yang sahih adalah ...",
      opsi: [
        { huruf: "A", teks: "Hari ini terjadi hujan deras sepanjang pagi." },
        { huruf: "B", teks: "Hari ini tidak hujan deras." },
        { huruf: "C", teks: "Aula tertutup sedang digunakan untuk rapat dinas." },
        { huruf: "D", teks: "Besok apel pagi akan kembali ke aula tertutup." }
      ],
      kunci: "B",
      pembahasan:
        "Modus tollens: Jika P maka Q; tidak Q (apel tidak di aula, melainkan di lapangan terbuka); maka tidak P (hari ini tidak hujan deras) (B)."
    },
    {
      id: "BKN-PK-20",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Tidak ada surat keluar yang boleh dikirim sebelum ditandatangani kepala kantor. Surat undangan ini belum ditandatangani kepala kantor. Simpulan yang benar adalah ...",
      opsi: [
        { huruf: "A", teks: "Surat undangan ini sudah boleh langsung dikirim." },
        { huruf: "B", teks: "Kepala kantor sedang bertugas di luar kota." },
        { huruf: "C", teks: "Surat undangan ini harus dibatalkan seluruhnya." },
        { huruf: "D", teks: "Surat undangan ini belum boleh dikirim." }
      ],
      kunci: "D",
      pembahasan:
        "Karena syarat pengiriman adalah tanda tangan kepala kantor, surat yang belum ditandatangani belum boleh dikirim (D)."
    },
    {
      id: "BKN-PK-21",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus:
        "<p><strong>Kasus Urutan:</strong> Empat pegawai — Adi, Bima, Citra, dan Dewi — menyelesaikan ujian CAT. Nilai Dewi lebih tinggi dari Bima. Nilai Adi lebih tinggi dari Dewi. Nilai Citra lebih rendah dari Bima.</p>",
      pertanyaan: "Siapakah yang memperoleh nilai tertinggi?",
      opsi: [
        { huruf: "A", teks: "Adi" },
        { huruf: "B", teks: "Bima" },
        { huruf: "C", teks: "Citra" },
        { huruf: "D", teks: "Dewi" }
      ],
      kunci: "A",
      pembahasan:
        "Urutan dari tertinggi ke terendah: Adi > Dewi > Bima > Citra. Jadi nilai tertinggi adalah Adi (A)."
    },
    {
      id: "BKN-PK-22",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus:
        "<p><strong>Kasus Antrean:</strong> Empat peserta — Eko, Fani, Gilang, dan Hana — duduk berurutan dari kursi 1 ke kursi 4. Eko duduk di kursi 1. Fani duduk tepat di sebelah kanan Gilang. Hana duduk di kursi paling ujung kanan (kursi 4).</p>",
      pertanyaan: "Siapakah yang duduk di kursi nomor 2?",
      opsi: [
        { huruf: "A", teks: "Eko" },
        { huruf: "B", teks: "Fani" },
        { huruf: "C", teks: "Gilang" },
        { huruf: "D", teks: "Hana" }
      ],
      kunci: "C",
      pembahasan:
        "Kursi 1 = Eko, Kursi 4 = Hana. Sisa kursi 2 dan 3 harus diisi berurutan oleh Gilang di kiri dan Fani di sebelah kanannya. Jadi kursi 2 = Gilang (C)."
    },
    {
      id: "BKN-PK-23",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus:
        "<p><strong>Kasus Jadwal:</strong> Rapat unit A, B, dan C digelar pada hari Senin, Selasa, dan Rabu (satu rapat per hari). Rapat A bukan hari Rabu. Rapat C digelar tepat sehari setelah Rapat A. Rapat B bukan hari Senin.</p>",
      pertanyaan: "Pada hari apakah Rapat B dilaksanakan?",
      opsi: [
        { huruf: "A", teks: "Senin" },
        { huruf: "B", teks: "Selasa" },
        { huruf: "C", teks: "Rabu" },
        { huruf: "D", teks: "Kamis" }
      ],
      kunci: "C",
      pembahasan:
        "Pasangan berurutan (A, C) hanya bisa di (Senin, Selasa) atau (Selasa, Rabu). Jika (Selasa, Rabu), maka sisa Senin harus diisi B, melanggar 'B bukan Senin'. Jadi A=Senin, C=Selasa, dan B=Rabu (C)."
    },

    /* --- Spasial & Pola Abstrak (7 soal: BKN-PK-24 s.d. BKN-PK-30) --- */
    {
      id: "BKN-PK-24",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Deret penambahan jumlah garis tegak: 1 garis, 2 garis, 3 garis, dan tanda tanya",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="45" y1="30" x2="45" y2="70" stroke="currentColor" stroke-width="3"/><text x="45" y="106" text-anchor="middle" font-size="12" fill="currentColor">1</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="120" y1="30" x2="120" y2="70" stroke="currentColor" stroke-width="3"/><line x1="140" y1="30" x2="140" y2="70" stroke="currentColor" stroke-width="3"/><text x="130" y="106" text-anchor="middle" font-size="12" fill="currentColor">2</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="199" y1="30" x2="199" y2="70" stroke="currentColor" stroke-width="3"/><line x1="215" y1="30" x2="215" y2="70" stroke="currentColor" stroke-width="3"/><line x1="231" y1="30" x2="231" y2="70" stroke="currentColor" stroke-width="3"/><text x="215" y="106" text-anchor="middle" font-size="12" fill="currentColor">3</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="300" y="106" text-anchor="middle" font-size="12" fill="currentColor">4</text>'
      ),
      pertanyaan: "Gambar yang tepat untuk mengisi kotak keempat adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Empat garis vertikal sejajar",
          svg: miniSvg("4 garis vertikal", '<line x1="17" y1="16" x2="17" y2="48" stroke="currentColor" stroke-width="3"/><line x1="27" y1="16" x2="27" y2="48" stroke="currentColor" stroke-width="3"/><line x1="37" y1="16" x2="37" y2="48" stroke="currentColor" stroke-width="3"/><line x1="47" y1="16" x2="47" y2="48" stroke="currentColor" stroke-width="3"/>')
        },
        {
          huruf: "B",
          teks: "Tiga garis mendatar sejajar",
          svg: miniSvg("3 garis mendatar", '<line x1="16" y1="20" x2="48" y2="20" stroke="currentColor" stroke-width="3"/><line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" stroke-width="3"/><line x1="16" y1="44" x2="48" y2="44" stroke="currentColor" stroke-width="3"/>')
        },
        {
          huruf: "C",
          teks: "Dua garis vertikal sejajar",
          svg: miniSvg("2 garis vertikal", '<line x1="24" y1="16" x2="24" y2="48" stroke="currentColor" stroke-width="3"/><line x1="40" y1="16" x2="40" y2="48" stroke="currentColor" stroke-width="3"/>')
        },
        {
          huruf: "D",
          teks: "Lima garis vertikal sejajar",
          svg: miniSvg("5 garis vertikal", '<line x1="14" y1="16" x2="14" y2="48" stroke="currentColor" stroke-width="2.5"/><line x1="23" y1="16" x2="23" y2="48" stroke="currentColor" stroke-width="2.5"/><line x1="32" y1="16" x2="32" y2="48" stroke="currentColor" stroke-width="2.5"/><line x1="41" y1="16" x2="41" y2="48" stroke="currentColor" stroke-width="2.5"/><line x1="50" y1="16" x2="50" y2="48" stroke="currentColor" stroke-width="2.5"/>')
        }
      ],
      kunci: "A",
      pembahasan:
        "Jumlah garis vertikal bertambah 1 di setiap langkah (1 → 2 → 3 → 4 garis vertikal) (A)."
    },
    {
      id: "BKN-PK-25",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Deret segitiga berputar 90 derajat searah jarum jam",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="45,27 60,65 30,65" fill="currentColor"/><text x="45" y="106" text-anchor="middle" font-size="12" fill="currentColor">1 (Atas)</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="150,50 112,35 112,65" fill="currentColor"/><text x="130" y="106" text-anchor="middle" font-size="12" fill="currentColor">2 (Kanan)</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="215,70 200,32 230,32" fill="currentColor"/><text x="215" y="106" text-anchor="middle" font-size="12" fill="currentColor">3 (Bawah)</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="300" y="106" text-anchor="middle" font-size="12" fill="currentColor">4</text>'
      ),
      pertanyaan: "Posisi segitiga yang tepat untuk urutan keempat adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Puncak segitiga menghadap ke atas",
          svg: miniSvg("Segitiga ke atas", '<polygon points="32,16 46,48 18,48" fill="currentColor"/>')
        },
        {
          huruf: "B",
          teks: "Puncak segitiga menghadap ke kiri",
          svg: miniSvg("Segitiga ke kiri", '<polygon points="16,32 48,18 48,46" fill="currentColor"/>')
        },
        {
          huruf: "C",
          teks: "Puncak segitiga menghadap ke kanan",
          svg: miniSvg("Segitiga ke kanan", '<polygon points="48,32 16,18 16,46" fill="currentColor"/>')
        },
        {
          huruf: "D",
          teks: "Puncak segitiga menghadap ke bawah",
          svg: miniSvg("Segitiga ke bawah", '<polygon points="32,48 18,16 46,16" fill="currentColor"/>')
        }
      ],
      kunci: "B",
      pembahasan:
        "Puncak segitiga berputar 90° searah jarum jam: Atas → Kanan → Bawah → Kiri (B)."
    },
    {
      id: "BKN-PK-26",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Empat kotak berisi bangun datar: tiga berwarna kosong dan satu terisi penuh",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="45" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="45" y="105" text-anchor="middle" font-size="12" fill="currentColor">(1)</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="112" y="32" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="130" y="105" text-anchor="middle" font-size="12" fill="currentColor">(2)</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="215,30 235,68 195,68" fill="currentColor"/><text x="215" y="105" text-anchor="middle" font-size="12" fill="currentColor">(3)</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="300,30 320,50 300,70 280,50" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="300" y="105" text-anchor="middle" font-size="12" fill="currentColor">(4)</text>'
      ),
      pertanyaan: "Manakah gambar yang memiliki ciri berbeda dari tiga gambar lainnya?",
      opsi: [
        { huruf: "A", teks: "Gambar (1)" },
        { huruf: "B", teks: "Gambar (2)" },
        { huruf: "C", teks: "Gambar (3)" },
        { huruf: "D", teks: "Gambar (4)" }
      ],
      kunci: "C",
      pembahasan:
        "Gambar (1), (2), dan (4) berbentuk garis luar kosong, sedangkan Gambar (3) terisi hitam penuh (C)."
    },
    {
      id: "BKN-PK-27",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Deret selang-seling isi warna lingkaran: hitam, putih, hitam, tanda tanya",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="27" y="32" width="36" height="36" fill="currentColor"/><text x="45" y="105" text-anchor="middle" font-size="12" fill="currentColor">1</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="130" y="105" text-anchor="middle" font-size="12" fill="currentColor">2</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="197" y="32" width="36" height="36" fill="currentColor"/><text x="215" y="105" text-anchor="middle" font-size="12" fill="currentColor">3</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="300" y="105" text-anchor="middle" font-size="12" fill="currentColor">4</text>'
      ),
      pertanyaan: "Bangun yang tepat mengisi posisi keempat adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Persegi hitam penuh",
          svg: miniSvg("Persegi hitam", '<rect x="16" y="16" width="32" height="32" fill="currentColor"/>')
        },
        {
          huruf: "B",
          teks: "Lingkaran hitam penuh",
          svg: miniSvg("Lingkaran hitam", '<circle cx="32" cy="32" r="16" fill="currentColor"/>')
        },
        {
          huruf: "C",
          teks: "Segitiga garis luar kosong",
          svg: miniSvg("Segitiga kosong", '<polygon points="32,16 48,48 16,48" fill="none" stroke="currentColor" stroke-width="2.5"/>')
        },
        {
          huruf: "D",
          teks: "Lingkaran garis luar kosong",
          svg: miniSvg("Lingkaran kosong", '<circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>')
        }
      ],
      kunci: "D",
      pembahasan:
        "Pola bergantian antara persegi hitam (1, 3) dan lingkaran kosong (2, 4). Maka posisi ke-4 adalah lingkaran garis luar kosong (D)."
    },
    {
      id: "BKN-PK-28",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Pencerminan vertikal panah ke kanan atas terhadap garis cermin vertikal",
        '<rect x="15" y="15" width="85" height="80" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M35 72L75 32M75 32H55M75 32V52" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><text x="57" y="110" text-anchor="middle" font-size="12" fill="currentColor">Asal</text>' +
          '<line x1="130" y1="15" x2="130" y2="95" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="130" y="110" text-anchor="middle" font-size="11" fill="currentColor">Cermin</text>' +
          '<rect x="160" y="15" width="85" height="80" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="202" y="62" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="202" y="110" text-anchor="middle" font-size="12" fill="currentColor">Bayangan</text>',
        "0 0 265 120"
      ),
      pertanyaan: "Hasil pencerminan vertikal yang tepat dari panah di atas adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Panah menunjuk ke serong kiri atas",
          svg: miniSvg("Serong kiri atas", '<path d="M46 46L18 18M18 18H34M18 18V34" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>')
        },
        {
          huruf: "B",
          teks: "Panah menunjuk ke serong kanan bawah",
          svg: miniSvg("Serong kanan bawah", '<path d="M18 18L46 46M46 46H30M46 46V30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>')
        },
        {
          huruf: "C",
          teks: "Panah menunjuk ke serong kiri bawah",
          svg: miniSvg("Serong kiri bawah", '<path d="M46 18L18 46M18 46H34M18 46V30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>')
        },
        {
          huruf: "D",
          teks: "Panah menunjuk lurus ke atas",
          svg: miniSvg("Lurus ke atas", '<path d="M32 48V16M32 16L22 26M32 16L42 26" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>')
        }
      ],
      kunci: "A",
      pembahasan:
        "Cermin vertikal membalik arah kanan menjadi kiri tanpa mengubah posisi atas. Panah serong kanan atas berubah menjadi serong kiri atas (A)."
    },
    {
      id: "BKN-PK-29",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Pertambahan jumlah sisi bangun: segitiga (3), persegi (4), segi lima (5), dan tanda tanya",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="45,28 62,65 28,65" fill="none" stroke="currentColor" stroke-width="2"/><text x="45" y="106" text-anchor="middle" font-size="12" fill="currentColor">3 sisi</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="112" y="32" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="106" text-anchor="middle" font-size="12" fill="currentColor">4 sisi</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="215,27 234,42 227,65 203,65 196,42" fill="none" stroke="currentColor" stroke-width="2"/><text x="215" y="106" text-anchor="middle" font-size="12" fill="currentColor">5 sisi</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="300" y="106" text-anchor="middle" font-size="12" fill="currentColor">?</text>'
      ),
      pertanyaan: "Bangun datar yang tepat melanjutkan urutan tersebut adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Lingkaran tanpa sudut",
          svg: miniSvg("Lingkaran", '<circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" stroke-width="2"/>')
        },
        {
          huruf: "B",
          teks: "Segi enam (6 sisi)",
          svg: miniSvg("Segi enam", '<polygon points="32,14 48,23 48,41 32,50 16,41 16,23" fill="none" stroke="currentColor" stroke-width="2"/>')
        },
        {
          huruf: "C",
          teks: "Segi empat (4 sisi)",
          svg: miniSvg("Segi empat", '<rect x="16" y="16" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/>')
        },
        {
          huruf: "D",
          teks: "Segi tiga (3 sisi)",
          svg: miniSvg("Segi tiga", '<polygon points="32,16 48,48 16,48" fill="none" stroke="currentColor" stroke-width="2"/>')
        }
      ],
      kunci: "B",
      pembahasan:
        "Jumlah sisi poligon bertambah 1 per langkah: 3 sisi → 4 sisi → 5 sisi → 6 sisi (segi enam) (B)."
    },
    {
      id: "BKN-PK-30",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Deret posisi titik: kiri atas, tengah atas, kanan atas, tanda tanya",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="30" r="6" fill="currentColor"/><text x="45" y="106" text-anchor="middle" font-size="12" fill="currentColor">1</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="30" r="6" fill="currentColor"/><text x="130" y="106" text-anchor="middle" font-size="12" fill="currentColor">2</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="236" cy="30" r="6" fill="currentColor"/><text x="215" y="106" text-anchor="middle" font-size="12" fill="currentColor">3</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="300" y="106" text-anchor="middle" font-size="12" fill="currentColor">4</text>'
      ),
      pertanyaan: "Apabila titik terus bergeser searah jarum jam di sepanjang tepi kotak (satu titik tengah tepi setelah sudut), posisi titik keempat adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Titik di tengah sisi kiri",
          svg: miniSvg("Tengah kiri", '<circle cx="14" cy="32" r="6" fill="currentColor"/>')
        },
        {
          huruf: "B",
          teks: "Titik di sudut kiri bawah",
          svg: miniSvg("Kiri bawah", '<circle cx="14" cy="50" r="6" fill="currentColor"/>')
        },
        {
          huruf: "C",
          teks: "Titik di tengah sisi kanan",
          svg: miniSvg("Tengah kanan", '<circle cx="50" cy="32" r="6" fill="currentColor"/>')
        },
        {
          huruf: "D",
          teks: "Titik di tengah sisi bawah",
          svg: miniSvg("Tengah bawah", '<circle cx="32" cy="50" r="6" fill="currentColor"/>')
        }
      ],
      kunci: "C",
      pembahasan:
        "Urutan tepi searah jarum jam: Kiri Atas (1) → Tengah Atas (2) → Kanan Atas (3) → Tengah Sisi Kanan (4) (C)."
    },

    /* ===================== SUBTES 2: POTENSI PERILAKU (20 SOAL) ===================== */
    /* --- Berpikir Kritis & Strategis (4 soal: BKN-PP-01 s.d. BKN-PP-04) --- */
    {
      id: "BKN-PP-01",
      subtes: "potensi_perilaku",
      aspek: "Berpikir Kritis & Strategis",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Anda menerima pesan berantai di grup pegawai yang mengabarkan perubahan aturan tunjangan kinerja mulai bulan depan tanpa melampirkan surat edaran resmi. Sikap kritis Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Langsung meneruskan pesan tersebut ke grup keluarga dan rekan bagian lain agar semuanya segera mengetahui informasi terbaru.", skor: 1 },
        { huruf: "B", teks: "Mengecek portal resmi kepegawaian atau bertanya ke bagian SDM sebelum memercayai dan menyebarkan isi pesan tersebut.", skor: 4 },
        { huruf: "C", teks: "Menanyakan langsung ke pengirim pesan dari mana ia memperoleh kabar itu tanpa memverifikasi ke portal resmi instansi.", skor: 3 },
        { huruf: "D", teks: "Mempercayai sebagian isi pesan tersebut sambil menunggu apakah ada pengumuman resmi di papan informasi kantor pekan depan.", skor: 2 }
      ],
      pembahasan:
        "Skor 4 (B) memverifikasi kebenaran informasi ke sumber resmi terlebih dahulu sebelum menyebarkannya. Skor 3 (C) mencoba menelusuri sumber awal namun kurang otoritatif, Skor 2 (D) pasif, dan Skor 1 (A) menyebarkan berita belum terverifikasi."
    },
    {
      id: "BKN-PP-02",
      subtes: "potensi_perilaku",
      aspek: "Berpikir Kritis & Strategis",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Dalam rapat mingguan, seorang rekan mengusulkan pemangkasan tahapan verifikasi berkas agar layanan selesai dua kali lebih cepat. Bagaimana cara Anda menanggapi usulan tersebut?",
      opsi: [
        { huruf: "A", teks: "Menolak usulan tersebut secara langsung karena tahapan verifikasi tidak boleh diubah sama sekali dari kebiasaan lama.", skor: 2 },
        { huruf: "B", teks: "Langsung menyetujui usulan tersebut supaya target kecepatan pelayanan unit kerja langsung terlihat meningkat drastis.", skor: 1 },
        { huruf: "C", teks: "Meminta rekan tersebut menjelaskan ulang alasannya di akhir rapat setelah seluruh agenda rutin lainnya selesai dibahas.", skor: 3 },
        { huruf: "D", teks: "Mengevaluasi risiko kesalahan yang muncul jika verifikasi dipangkas serta mencari otomatisasi yang tetap menjaga akurasi.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menganalisis keseimbangan antara efisiensi waktu dan pengendalian risiko akurasi melalui solusi cerdas. Skor 3 (C) membuka diskusi namun belum menguji risiko, Skor 2 (A) kaku, dan Skor 1 (B) mengabaikan risiko kesalahan."
    },
    {
      id: "BKN-PP-03",
      subtes: "potensi_perilaku",
      aspek: "Berpikir Kritis & Strategis",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Laporan capaian bulanan unit kerja menunjukkan antrean permohonan selalu menumpuk setiap hari Senin dan Jumat pagi. Langkah strategis yang Anda usulkan adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengusulkan penyesuaian jadwal piket loket tambahan pada jam padat Senin-Jumat dan penyederhanaan formulir pra-isi.", skor: 4 },
        { huruf: "B", teks: "Meminta seluruh petugas loket datang lebih awal setiap hari kerja sepanjang minggu tanpa melihat jam puncak kedatangan.", skor: 2 },
        { huruf: "C", teks: "Menyarankan pembatasan jumlah pemohon yang dilayani per hari agar petugas di loket tidak kewalahan di jam pagi.", skor: 1 },
        { huruf: "D", teks: "Melaporkan fenomena antrean Senin dan Jumat tersebut kepada atasan langsung agar pimpinan segera mengambil keputusan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) memanfaatkan pola data antrean menjadi solusi kapasitas yang tepat sasaran dan efisien. Skor 3 (D) melapor tanpa usulan solusi, Skor 2 (B) kurang efisien sumber daya, dan Skor 1 (C) menurunkan kualitas layanan publik."
    },
    {
      id: "BKN-PP-04",
      subtes: "potensi_perilaku",
      aspek: "Berpikir Kritis & Strategis",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Sebelum menetapkan jadwal kegiatan tim di awal triwulan, langkah persiapan yang paling mencerminkan pola pikir antisipatif adalah ...",
      opsi: [
        { huruf: "A", teks: "Menyusun jadwal persis sama dengan kalender tahun lalu karena dianggap sudah pernah berhasil dijalankan sebelumnya.", skor: 2 },
        { huruf: "B", teks: "Mengisi jadwal seluruh hari kerja secara rapat tanpa menyisakan cadangan waktu sama sekali untuk kendala mendadak.", skor: 1 },
        { huruf: "C", teks: "Menandai hari libur, tenggat unit lain, serta menyisakan waktu cadangan agar risiko keterlambatan terkendali.", skor: 4 },
        { huruf: "D", teks: "Menunggu jadwal resmi seluruh unit lain ditetapkan terlebih dahulu sebelum mulai menyusun draf jadwal tim sendiri.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) memperhitungkan ketergantungan lintas pihak dan menyertakan penyangga risiko dalam perencanaan. Skor 3 (D) berhati-hati namun lambat bergerak, Skor 2 (A) kurang adaptif, dan Skor 1 (B) rapuh terhadap gangguan."
    },

    /* --- Pemecahan Masalah (4 soal: BKN-PP-05 s.d. BKN-PP-08) --- */
    {
      id: "BKN-PP-05",
      subtes: "potensi_perilaku",
      aspek: "Pemecahan Masalah",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Menjelang batas akhir pengumpulan laporan kinerja instansi, sistem server pusat tiba-tiba mengalami gangguan sehingga unggahan terhenti. Tindakan paling tepat Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menyerah menunggu sampai ada pengumuman resmi perpanjangan tenggat dari kantor pusat tanpa menyiapkan berkas apa pun.", skor: 1 },
        { huruf: "B", teks: "Berkoordinasi dengan tim TI untuk pencadangan data lokal dan menyiapkan jalur pengiriman alternatif sesuai arahan pimpinan.", skor: 4 },
        { huruf: "C", teks: "Menyalahkan tim pengelola server di ruang kerja karena dianggap tidak memelihara sistem dengan baik menjelang tenggat.", skor: 2 },
        { huruf: "D", teks: "Mencoba menekan tombol unggah ulang berkali-kali setiap lima menit sembari berharap sistem segera pulih sendiri.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) merespons gangguan teknis dengan tenang, melindungi data lewat pencadangan, serta menyusun jalur alternatif bersama pihak berwenang. Skor 3 (D) berusaha mencoba namun tanpa rencana cadangan, Skor 2 (C) emosional, dan Skor 1 (A) pasif."
    },
    {
      id: "BKN-PP-06",
      subtes: "potensi_perilaku",
      aspek: "Pemecahan Masalah",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Printer bersama di ruangan mendadak macet lima menit sebelum rapat pimpinan dimulai padahal bahan paparan perlu dibagikan. Apa langkah cepat Anda?",
      opsi: [
        { huruf: "A", teks: "Mengirimkan salinan PDF bahan paparan ke perangkat peserta rapat atau mencetak cepat di ruangan sebelah bila diperlukan.", skor: 4 },
        { huruf: "B", teks: "Membongkar seluruh komponen printer sendirian di ruangan meskipun Anda belum pernah memperbaiki mesin cetak sebelumnya.", skor: 2 },
        { huruf: "C", teks: "Menunda pembukaan rapat hingga teknisi kantor datang memperbaiki printer bersama tersebut sampai normal kembali.", skor: 1 },
        { huruf: "D", teks: "Menghubungi petugas perlengkapan kantor untuk memeriksa kerusakan printer sementara rapat dimulai tanpa bahan paparan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menyelesaikan tujuan utama rapat tepat waktu dengan alternatif praktis (salinan PDF/printer lain). Skor 3 (D) membiarkan rapat kurang optimal, Skor 2 (B) berisiko memperparah kerusakan, dan Skor 1 (C) menghentikan agenda penting."
    },
    {
      id: "BKN-PP-07",
      subtes: "potensi_perilaku",
      aspek: "Pemecahan Masalah",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Dalam sebuah rapat, muncul perbedaan pendapat mengenai tata cara pengarsipan surat masuk yang membuat proses persetujuan tersendat dua hari. Bagaimana Anda menyelesaikannya?",
      opsi: [
        { huruf: "A", teks: "Mengabaikan perdebatan tersebut dan mengarsipkan surat dengan cara pribadi Anda sendiri tanpa berkoordinasi lagi.", skor: 1 },
        { huruf: "B", teks: "Menyarankan agar keputusan ditunda hingga rapat evaluasi bulanan minggu depan supaya semua peserta sempat berpikir.", skor: 2 },
        { huruf: "C", teks: "Merujuk kembali ke tata naskah dinas baku, membandingkan kedua usulan, dan menyepakati alur ringkas bersama.", skor: 4 },
        { huruf: "D", teks: "Meminta kedua pegawai yang berbeda pendapat mencari jalan keluar sendiri di luar jam kerja lalu melaporkan hasilnya.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menyelesaikan kebuntuan berdasarkan pedoman resmi agar kesepakatan cepat dan sahih. Skor 3 (D) melepas tanggung jawab koordinasi, Skor 2 (B) memperlama penundaan, dan Skor 1 (A) mengabaikan standar."
    },
    {
      id: "BKN-PP-08",
      subtes: "potensi_perilaku",
      aspek: "Pemecahan Masalah",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Saat mengolah tabel absensi bulanan pegawai, Anda menemukan ada tiga hari data yang terlewat karena pembaruan mesin sidik jari. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengisi status hadir penuh pada tiga hari yang kosong tersebut supaya seluruh pegawai tidak mengalami pemotongan tunjangan.", skor: 1 },
        { huruf: "B", teks: "Mengecek catatan piket, log aktivitas kerja harian, dan konfirmasi atasan langsung untuk merekap kehadiran secara sahih.", skor: 4 },
        { huruf: "C", teks: "Mengosongkan kolom tiga hari tersebut apa adanya pada laporan bulanan lalu menuliskannya sebagai catatan sistem rusak.", skor: 2 },
        { huruf: "D", teks: "Meminta masing-masing pegawai menulis pengakuan jam datang mereka di secarik kertas tanpa mencocokkan bukti pendukung.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) mencari bukti pembanding yang objektif dan dapat dipertanggungjawabkan untuk memulihkan data kosong. Skor 3 (D) kurang verifikasi silang, Skor 2 (C) membiarkan data bolong, dan Skor 1 (A) memalsukan kehadiran."
    },

    /* --- Kemampuan Interpersonal (4 soal: BKN-PP-09 s.d. BKN-PP-12) --- */
    {
      id: "BKN-PP-09",
      subtes: "potensi_perilaku",
      aspek: "Kemampuan Interpersonal",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Seorang rekan satu tim terlihat kewalahan dan sering terlambat menyelesaikan bagiannya sejak minggu lalu. Sikap yang paling membangun kerja tim adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengajak rekan tersebut berdiskusi santai menanyakan kendalanya lalu membantu memetakan prioritas atau pembagian beban.", skor: 4 },
        { huruf: "B", teks: "Melaporkan langsung keterlambatan rekan tersebut kepada pimpinan unit tanpa sempat berbicara empat mata dengannya.", skor: 1 },
        { huruf: "C", teks: "Mengingatkannya secara singkat melalui pesan grup tim supaya ia merasa terdorong mengejar ketertinggalan jadwal kerja.", skor: 2 },
        { huruf: "D", teks: "Mengirimkan daftar tenggat waktu tertulis kepadanya agar seluruh jadwal serah terima dokumen terdokumentasi rapi.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menunjukkan empati interpersonal sekaligus aksi kolaboratif menjaga capaian tim. Skor 3 (D) tertib administrasi tetapi kurang dukungan personal, Skor 2 (C) mempermalukan di grup, dan Skor 1 (B) merusak kepercayaan tim."
    },
    {
      id: "BKN-PP-10",
      subtes: "potensi_perilaku",
      aspek: "Kemampuan Interpersonal",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Ketika Anda memberi saran perbaikan atas draf surat milik rekan kerja, ia tampak tersinggung dan membalas dengan nada ketus. Respons terbaik Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Membalas dengan nada suara lebih tinggi agar ia paham bahwa saran Anda semata-mata demi kebaikan surat kantor.", skor: 1 },
        { huruf: "B", teks: "Menjelaskan maksud baik secara tenang, menghargai usahanya, dan berdiskusi bersama melihat poin aturan yang perlu disesuaikan.", skor: 4 },
        { huruf: "C", teks: "Langsung pergi meninggalkan mejanya dan berjanji tidak akan pernah memberi masukan lagi pada hasil kerjanya di masa depan.", skor: 2 },
        { huruf: "D", teks: "Meminta maaf lalu menyarankan agar rekan lain saja yang memeriksa ulang draf surat tersebut sebelum diajukan ke pimpinan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) meredakan ketegangan dengan ketenangan, pengakuan atas usaha rekan, serta dialog objektif. Skor 3 (D) menghindari diskusi substansi, Skor 2 (C) memutus kerja sama, dan Skor 1 (A) memicu pertengkaran."
    },
    {
      id: "BKN-PP-11",
      subtes: "potensi_perilaku",
      aspek: "Kemampuan Interpersonal",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Anda baru dipindahkan ke bagian baru yang sebagian besar pegawainya belum Anda kenal. Agar cepat beradaptasi dengan tim baru, tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Memperkenalkan diri dengan ramah, menyimak budaya kerja bagian baru, dan proaktif membantu tugas awal yang tersedia.", skor: 4 },
        { huruf: "B", teks: "Menunggu seluruh rekan di ruangan baru datang menyapa Anda terlebih dahulu supaya tidak terkesan terlalu mencampuri.", skor: 2 },
        { huruf: "C", teks: "Menghabiskan waktu istirahat kembali ke bagian kerja lama karena merasa lebih nyaman berbincang dengan teman lama.", skor: 1 },
        { huruf: "D", teks: "Menyapa seperlunya saat rapat perdana lalu lebih banyak fokus bekerja diam di meja masing-masing sepanjang bulan pertama.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) aktif membangun hubungan positif dan keterlibatan kerja sejak hari pertama. Skor 3 (D) sopan namun lambat membangun kohesi, Skor 2 (B) pasif, dan Skor 1 (C) gagal beradaptasi."
    },
    {
      id: "BKN-PP-12",
      subtes: "potensi_perilaku",
      aspek: "Kemampuan Interpersonal",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Dua rekan kerja berselisih mengenai siapa yang seharusnya mencatat notulen rapat lintas bagian sehingga suasana menjadi canggung. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Tetap duduk diam memperhatikan perdebatan mereka berdua sampai pimpinan rapat turun tangan menunjuk salah satunya.", skor: 2 },
        { huruf: "B", teks: "Menyampaikan bahwa perdebatan soal mencatat notulen itu kekanak-kanakan dan menghambat jalannya seluruh agenda rapat.", skor: 1 },
        { huruf: "C", teks: "Mengusulkan pembagian giliran notulis secara adil atau bersedia mencatat sementara agar rapat segera dimulai tepat waktu.", skor: 4 },
        { huruf: "D", teks: "Menyarankan salah satu rekan yang paling muda di ruangan itu untuk langsung mengambil alih tugas mencatat notulen rapat.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) meredam gesekan dengan solusi adil dan berorientasi kelancaran rapat. Skor 3 (D) menentukan berdasar senioritas bukan kesepakatan, Skor 2 (A) pasif, dan Skor 1 (B) memperburuk suasana."
    },

    /* --- Kesadaran Diri & Pengelolaan Emosi (4 soal: BKN-PP-13 s.d. BKN-PP-16) --- */
    {
      id: "BKN-PP-13",
      subtes: "potensi_perilaku",
      aspek: "Kesadaran Diri & Pengelolaan Emosi",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Atasan langsung mengoreksi hasil analisis Anda dan menilai bagian simpulannya masih kurang tajam. Reaksi terbaik yang menunjukkan kedewasaan diri adalah ...",
      opsi: [
        { huruf: "A", teks: "Merasa tersinggung karena Anda sudah lembur mengerjakannya lalu langsung membela diri dengan berbagai alasan padatnya tugas.", skor: 1 },
        { huruf: "B", teks: "Menerima koreksi dengan lapang dada, menanyakan poin spesifik yang perlu dipertajam, dan segera menyempurnakan drafnya.", skor: 4 },
        { huruf: "C", teks: "Mengangguk setuju saat dikoreksi namun tidak menanyakan bagian mana yang keliru supaya pertemuan cepat berakhir.", skor: 2 },
        { huruf: "D", teks: "Mencatat seluruh koreksi dari atasan dan berencana mempelajari ulang naskah tersebut keesokan harinya sebelum merevisi.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) mencerminkan keterbukaan terhadap umpan balik, kejelasan komunikasi, dan tindakan korektif cepat. Skor 3 (D) tenang tetapi melewatkan klarifikasi langsung, Skor 2 (C) pasif, dan Skor 1 (A) defensif."
    },
    {
      id: "BKN-PP-14",
      subtes: "potensi_perilaku",
      aspek: "Kesadaran Diri & Pengelolaan Emosi",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Anda menyadari sering lupa mencatat detail janji rapat ketika sedang mengerjakan beberapa tugas berbarengan. Cara pengelolaan diri terbaik adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengandalkan daya ingat pribadi saja dan berharap rekan tim lain mengingatkan Anda menjelang jam rapat dimulai.", skor: 1 },
        { huruf: "B", teks: "Menolak menghadiri rapat lintas tim apa pun supaya fokus pada satu tugas rutin di meja Anda tidak terganggu.", skor: 2 },
        { huruf: "C", teks: "Langsung memasukkan jadwal rapat ke kalender pengingat digital serta menyiapkan catatan agenda harian di setiap pagi.", skor: 4 },
        { huruf: "D", teks: "Menuliskan agenda rapat di kertas tempel lepas di meja kerja meski terkadang tertumpuk berkas dokumen lain.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) mengubah kesadaran kelemahan diri menjadi sistem pengingat yang andal dan teratur. Skor 3 (D) berupaya mencatat namun masih rawan hilang, Skor 2 (B) menghindar, dan Skor 1 (A) abai."
    },
    {
      id: "BKN-PP-15",
      subtes: "potensi_perilaku",
      aspek: "Kesadaran Diri & Pengelolaan Emosi",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Pada sore hari yang sibuk dengan antrean berkas, seorang pemohon layanan berbicara dengan nada kesal karena merasa sudah menunggu lama. Bagaimana Anda menjaga ketenangan diri?",
      opsi: [
        { huruf: "A", teks: "Menarik napas sejenak, tetap bersikap ramah dan empatik, lalu menjelaskan perkiraan waktu layanan dengan bahasa yang menenangkan.", skor: 4 },
        { huruf: "B", teks: "Membalas dengan nada tegas dan suara keras agar pemohon sadar bahwa seluruh petugas loket juga bekerja sangat keras.", skor: 1 },
        { huruf: "C", teks: "Diam tidak menanggapi keluhannya dan terus mengetik di komputer sampai giliran nomor antreannya selesai diproses.", skor: 2 },
        { huruf: "D", teks: "Meminta pemohon tersebut menunggu sebentar lalu langsung memanggil rekan petugas lain untuk menggantikan Anda melayani.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) mengendalikan emosi di bawah tekanan sekaligus menjaga pelayanan publik yang ramah dan informatif. Skor 3 (D) menghindar dari situasi, Skor 2 (C) terkesan abai, dan Skor 1 (B) memperburuk ketegangan."
    },
    {
      id: "BKN-PP-16",
      subtes: "potensi_perilaku",
      aspek: "Kesadaran Diri & Pengelolaan Emosi",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Ketika menyadari melakukan kesalahan input angka pada laporan yang baru saja Anda kirim melalui email dinas, langkah pertama Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Membiarkan saja email tersebut dengan harapan penerima laporan tidak menyadari kesalahan kecil pada satu baris tabel.", skor: 1 },
        { huruf: "B", teks: "Menunggu rapat pembahasan besok baru menyampaikan secara lisan bahwa ada angka yang perlu diperbaiki nanti.", skor: 2 },
        { huruf: "C", teks: "Segera mengakui kekeliruan secara terbuka, mengirimkan email ralat bertanda versi revisi final, dan mengecek ulang baris lain.", skor: 4 },
        { huruf: "D", teks: "Mengirimkan ulang berkas yang sudah diperbaiki tanpa penjelasan bahwa berkas sebelumnya keliru agar kesalahan tidak menonjol.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menunjukkan tanggung jawab penuh, transparansi ralat agar tidak terjadi salah pakai data, dan pengecekan menyeluruh. Skor 3 (D) memperbaiki namun membingungkan penerima, Skor 2 (B) terlambat, dan Skor 1 (A) tidak bertanggung jawab."
    },

    /* --- Literasi Digital & Adaptabilitas ASN (4 soal: BKN-PP-17 s.d. BKN-PP-20) --- */
    {
      id: "BKN-PP-17",
      subtes: "potensi_perilaku",
      aspek: "Literasi Digital & Adaptabilitas",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Anda menerima email yang mengaku dari pengelola sistem kepegawaian dan meminta Anda segera mengeklik tautan asing untuk mengisi ulang kata sandi agar tunjangan tidak diblokir. Tindakan literasi digital paling aman adalah ...",
      opsi: [
        { huruf: "A", teks: "Segera mengeklik tautan tersebut sebelum batas waktu berakhir supaya pencairan tunjangan bulanan tidak terhambat.", skor: 1 },
        { huruf: "B", teks: "Memeriksa alamat pengirim, tidak mengeklik tautan mencurigakan, lalu mengonfirmasi dan melapor ke tim keamanan TI.", skor: 4 },
        { huruf: "C", teks: "Meneruskan email tersebut ke grup WhatsApp rekan kantor untuk menanyakan apakah mereka juga menerima pesan serupa.", skor: 3 },
        { huruf: "D", teks: "Mengabaikan dan langsung menghapus email itu tanpa memberitahu tim TI meskipun mungkin menarget pegawai lain.", skor: 2 }
      ],
      pembahasan:
        "Skor 4 (B) mengenali ancaman phishing serta melindungi diri maupun organisasi melalui pelaporan resmi ke tim TI. Skor 3 (C) berisiko membuat rekan lain tidak sengaja mengeklik tautan, Skor 2 (D) aman pribadi namun kurang protektif bagi kantor, dan Skor 1 (A) terjebak phishing."
    },
    {
      id: "BKN-PP-18",
      subtes: "potensi_perilaku",
      aspek: "Literasi Digital & Adaptabilitas",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Saat bekerja dari luar kantor, Anda harus menyimpan dan membagikan dokumen kedinasan yang bersifat rahasia kepada anggota tim. Cara paling aman sesuai literasi digital ASN adalah ...",
      opsi: [
        { huruf: "A", teks: "Menggunakan penyimpanan awan resmi instansi yang terenkripsi dengan pengaturan hak akses khusus anggota tim terkait.", skor: 4 },
        { huruf: "B", teks: "Mengirimkan dokumen melalui alamat email pribadi menggunakan jaringan Wi-Fi gratis terbuka di kedai kopi umum.", skor: 1 },
        { huruf: "C", teks: "Menyimpan berkas di diska lepas (flashdisk) pribadi lalu menitipkannya bergantian antarkaryawan tanpa kata sandi.", skor: 2 },
        { huruf: "D", teks: "Mengunggah berkas ke drive pribadi dengan tautan akses terbuka bagi siapa saja yang memiliki tautan agar praktis.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menerapkan standar keamanan data ASN menggunakan platform resmi terenkripsi dan kendali akses terbatas. Skor 3 (D) berisiko kebocoran tautan, Skor 2 (C) rawan hilang tanpa enkripsi, dan Skor 1 (B) sangat rentan penyadapan."
    },
    {
      id: "BKN-PP-19",
      subtes: "potensi_perilaku",
      aspek: "Literasi Digital & Adaptabilitas",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Kantor mulai menerapkan tanda tangan elektronik tersertifikasi untuk seluruh surat dinas menggantikan tanda tangan basah di kertas. Sikap adaptif Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menunda aktivasi akun sertifikat elektronik dan tetap mencetak surat kertas selama staf pengarsipan masih menerima.", skor: 2 },
        { huruf: "B", teks: "Mengajukan penolakan karena merasa tanda tangan elektronik kurang sah secara hukum dibandingkan tinta basah.", skor: 1 },
        { huruf: "C", teks: "Segera mengaktifkan sertifikat elektronik, mempelajari alurnya, dan mulai menggunakannya pada setiap naskah dinas.", skor: 4 },
        { huruf: "D", teks: "Mengikuti sosialisasi kantor saja dan menunggu rekan satu ruangan menggunakannya lebih dahulu sebelum beralih.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menunjukkan kesiapan adaptasi teknologi pemerintahan berbasis elektronik secara cepat dan taat aturan. Skor 3 (D) menunggu orang lain, Skor 2 (A) menunda perubahan, dan Skor 1 (B) keliru memahami keabsahan TTE."
    },
    {
      id: "BKN-PP-20",
      subtes: "potensi_perilaku",
      aspek: "Literasi Digital & Adaptabilitas",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Saat mengunduh perangkat lunak pendukung untuk menganalisis data tabel di komputer kantor, muncul situs web tidak dikenal yang menawarkan versi gratisan bajakan. Keputusan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengunduh dan memasang aplikasi dari situs gratis tersebut agar pekerjaan analisis data lebih cepat tanpa menunggu izin.", skor: 1 },
        { huruf: "B", teks: "Menghindari situs ilegal, memilih aplikasi resmi berlisensi atau sumber terbuka tepercaya melalui persetujuan tim TI.", skor: 4 },
        { huruf: "C", teks: "Memasang aplikasi bajakan tersebut di laptop pribadi lalu memindahkan hasilnya ke komputer kantor melalui kabel data.", skor: 2 },
        { huruf: "D", teks: "Menyuruh rekan lain mencarikan tautan unduhan aplikasi yang aman di internet tanpa berkonsultasi dengan bagian TI.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) mematuhi etika legalitas perangkat lunak sekaligus mencegah masuknya malware ke jaringan instansi. Skor 3 (D) melewati tata kelola keamanan TI, Skor 2 (C) tetap membawa risiko ke perangkat, dan Skor 1 (A) melanggar keamanan siber dan hukum."
    }
  ];
})();
