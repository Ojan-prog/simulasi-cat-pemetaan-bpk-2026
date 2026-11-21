/* Generator deterministik 900 soal tambahan Level 1 (Standar CAT BKN).
   Jalankan: node tools/gen_bank_bkn_ekstra.js  -> menulis data/bank-soal-bkn-ekstra.js */
const fs = require("fs");
const path = require("path");

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(20261121);
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const L = "ABCD";
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const rp = (n) => "Rp" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/* ---------- target huruf jawaban terbaik (seimbang) ---------- */
const TOTAL = 900;
const targets = shuffle(Array.from({ length: TOTAL }, (_, i) => i % 4));
let tIdx = 0;
const nextT = () => targets[tIdx++];

/* ---------- builder ---------- */
function buildSingle(id, aspek, stimulus, pertanyaan, correct, distractors, t, pembahasan) {
  const arr = new Array(4);
  arr[t] = correct;
  const ds = shuffle(distractors);
  let k = 0;
  for (let i = 0; i < 4; i++) if (i !== t) arr[i] = ds[k++];
  const opsi = arr.map((o, i) => {
    const x = { huruf: L[i], teks: o.teks };
    if (o.svg) x.svg = o.svg;
    return x;
  });
  return {
    id, subtes: "potensi_kognitif", aspek, tipe: "single", stimulus: stimulus || null,
    pertanyaan, opsi, kunci: L[t], pembahasan: pembahasan.replace(/\{L\}/g, L[t]),
  };
}
function buildWeighted(id, subtes, aspek, indikator, pertanyaan, opts, t, extra) {
  // opts: urut skor 4,3,2,1 -> [{teks,r}]
  const arr = new Array(4);
  const skorAt = new Array(4);
  arr[t] = opts[0]; skorAt[t] = 4;
  const rest = shuffle([[opts[1], 3], [opts[2], 2], [opts[3], 1]]);
  let k = 0;
  for (let i = 0; i < 4; i++) if (i !== t) { arr[i] = rest[k][0]; skorAt[i] = rest[k][1]; k++; }
  const letterOf = {};
  for (let i = 0; i < 4; i++) letterOf[skorAt[i]] = L[i];
  const pembahasan = [4, 3, 2, 1]
    .map((s, idx) => `Skor ${s} (${letterOf[s]}) ${opts[idx].r}`)
    .join(". ") + ".";
  const q = {
    id, subtes, aspek, tipe: "weighted",
    pertanyaan,
    opsi: arr.map((o, i) => ({ huruf: L[i], teks: o.teks, skor: skorAt[i] })),
    pembahasan,
  };
  if (indikator) q.indikator = indikator;
  return q;
}

/* ---------- SVG helper ---------- */
function svgBox(title, body, viewBox) {
  return `<svg role="img" viewBox="${viewBox || "0 0 360 120"}" aria-label="${title}"><title>${title}</title>${body}</svg>`;
}
function mini(title, inner) {
  return `<svg role="img" width="64" height="64" viewBox="0 0 64 64" aria-label="${title}"><title>${title}</title><rect x="2" y="2" width="60" height="60" rx="6" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.45"></rect><g transform="translate(32,32)">${inner}</g></svg>`;
}
const CXS = [45, 130, 215, 300];
function seqSvg(title, cells) {
  let body = "";
  for (let i = 0; i < 4; i++) {
    const x = 10 + 85 * i;
    body += `<rect x="${x}" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"${i === 3 ? ' stroke-dasharray="5 4"' : ""}/>`;
    if (i < 3) body += `<g transform="translate(${CXS[i]},50)">${cells[i]}</g>`;
    else body += `<text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text>`;
    body += `<text x="${CXS[i]}" y="106" text-anchor="middle" font-size="12" fill="currentColor">${i + 1}</text>`;
  }
  return svgBox(title, body);
}
function fourSvg(title, cells) {
  let body = "";
  for (let i = 0; i < 4; i++) {
    const x = 10 + 85 * i;
    body += `<rect x="${x}" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>`;
    body += `<g transform="translate(${CXS[i]},50)">${cells[i]}</g>`;
    body += `<text x="${CXS[i]}" y="106" text-anchor="middle" font-size="12" fill="currentColor">(${i + 1})</text>`;
  }
  return svgBox(title, body);
}
const arrowSh = (a) => `<g transform="rotate(${a})"><path d="M0 20V-18M0 -18L-10 -8M0 -18L10 -8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></g>`;
const triSh = (a) => `<g transform="rotate(${a})"><polygon points="0,-20 14,16 -14,16" fill="currentColor"/></g>`;
const DIR = { 0: "ke atas", 45: "serong kanan atas", 90: "ke kanan", 135: "serong kanan bawah", 180: "ke bawah", 225: "serong kiri bawah", 270: "ke kiri", 315: "serong kiri atas" };
function dotsG(n) {
  let s = "";
  for (let i = 0; i < n; i++) {
    const col = i % 3, row = Math.floor(i / 3);
    s += `<circle cx="${(col - 1) * 14}" cy="${(row - 1) * 14}" r="4.5" fill="currentColor"/>`;
  }
  return s;
}
function polyG(n, fill) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    pts.push(`${(20 * Math.cos(a)).toFixed(1)},${(20 * Math.sin(a)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(" ")}" fill="${fill ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2.5"/>`;
}
const SHAPES = {
  lingkaran: (f) => `<circle r="16" fill="${f ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2.5"/>`,
  persegi: (f) => `<rect x="-15" y="-15" width="30" height="30" fill="${f ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2.5"/>`,
  segitiga: (f) => `<polygon points="0,-18 17,14 -17,14" fill="${f ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2.5"/>`,
  "belah ketupat": (f) => `<polygon points="0,-18 16,0 0,18 -16,0" fill="${f ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2.5"/>`,
  bintang: (f) => `<polygon points="0,-18 5,-5 18,-4 8,5 11,18 0,10 -11,18 -8,5 -18,-4 -5,-5" fill="${f ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"/>`,
  pentagon: (f) => polyG(5, f),
};
const LSH = `<path d="M-8 -20V14H16" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="-8" cy="-20" r="5" fill="currentColor"/>`;

/* ---------- generator VERBAL (72) ---------- */
const SYN = [
  ["transparan", "terbuka", "tertutup", "rahasia", "samar"],
  ["akurat", "tepat", "keliru", "lambat", "lalai"],
  ["prioritas", "hal utama", "hal sepele", "tambahan", "sisa"],
  ["optimal", "paling baik", "paling buruk", "cukup saja", "tertunda"],
  ["efektif", "berhasil guna", "boros", "sia-sia", "rumit"],
  ["valid", "sah", "batal", "palsu", "ragu"],
  ["inovasi", "pembaruan", "kebiasaan lama", "pengulangan", "penundaan"],
  ["koordinasi", "penyelarasan", "pemisahan", "pertentangan", "pembatalan"],
  ["evaluasi", "penilaian", "pembiaran", "pengabaian", "penundaan"],
  ["kolaborasi", "kerja sama", "persaingan", "perpecahan", "pengasingan"],
  ["verifikasi", "pemeriksaan kebenaran", "penghapusan", "penyembunyian", "pengabaian"],
  ["mitigasi", "pengurangan risiko", "penambahan risiko", "pengabaian risiko", "penundaan risiko"],
  ["signifikan", "bermakna", "sepele", "biasa saja", "keliru"],
  ["intensif", "sungguh-sungguh", "sambil lalu", "sekadarnya", "singkat"],
  ["representatif", "mewakili", "menyimpang", "menolak", "mengabaikan"],
  ["fleksibel", "lentur", "kaku", "keras", "tetap"],
  ["prosedural", "sesuai tata cara", "serampangan", "acak", "sembarang"],
  ["implementasi", "penerapan", "perencanaan", "pembatalan", "pengabaian"],
  ["adaptif", "mudah menyesuaikan diri", "sulit berubah", "menolak perubahan", "menetap"],
  ["mandiri", "berdiri sendiri", "bergantung", "tertinggal", "terikat"],
  ["solusi", "jalan keluar", "masalah", "hambatan", "kendala"],
  ["integritas", "kejujuran", "kecurangan", "kemalasan", "keraguan"],
  ["sinergi", "kerja sama saling menguatkan", "pertentangan", "pemisahan", "persaingan"],
  ["komprehensif", "menyeluruh", "sepintas", "sebagian", "terpecah"],
];
const ANT = [
  ["disiplin", "lalai", "tertib", "patuh", "taat"],
  ["hemat", "boros", "irit", "cermat", "bijak"],
  ["cepat", "lambat", "segera", "kilat", "gesit"],
  ["naik", "turun", "meningkat", "menjulang", "melonjak"],
  ["maju", "mundur", "berkembang", "bergerak", "melaju"],
  ["jujur", "curang", "lurus", "terbuka", "tulus"],
  ["rajin", "malas", "tekun", "giat", "ulet"],
  ["aktif", "pasif", "sibuk", "bergerak", "giat"],
  ["sah", "ilegal", "resmi", "benar", "legal"],
  ["sederhana", "rumit", "ringkas", "mudah", "lugas"],
  ["terbuka", "tertutup", "lapang", "jelas", "bebas"],
  ["wajib", "opsional", "diharuskan", "mutlak", "penting"],
  ["awal", "akhir", "mula", "permulaan", "pertama"],
  ["tinggi", "rendah", "menjulang", "jangkung", "lebar"],
  ["cermat", "ceroboh", "teliti", "saksama", "hati-hati"],
  ["konsisten", "berubah-ubah", "tetap", "taat asas", "stabil"],
  ["mandiri", "bergantung", "bebas", "swasembada", "otonom"],
  ["optimis", "pesimis", "yakin", "berharap", "percaya diri"],
  ["progresif", "konservatif", "maju", "dinamis", "inovatif"],
  ["akurat", "keliru", "tepat", "cermat", "presisi"],
  ["efisien", "boros", "hemat", "tepat guna", "ringkas"],
  ["kuat", "lemah", "kokoh", "tangguh", "perkasa"],
  ["mudah", "sulit", "gampang", "ringan", "sederhana"],
  ["stabil", "goyah", "mantap", "kokoh", "tetap"],
];
const ANA = [
  ["pilot", "pesawat", "masinis", "kereta api", "stasiun", "tiket", "peron"],
  ["buku", "perpustakaan", "lukisan", "galeri", "kanvas", "pelukis", "cat"],
  ["hakim", "pengadilan", "dokter", "rumah sakit", "obat", "resep", "apotek"],
  ["api", "panas", "es", "dingin", "air", "kulkas", "minuman"],
  ["petani", "sawah", "nelayan", "laut", "ikan", "jala", "kapal"],
  ["pena", "menulis", "pisau", "memotong", "dapur", "tajam", "logam"],
  ["mata", "melihat", "telinga", "mendengar", "kepala", "suara", "anting"],
  ["siang", "terang", "malam", "gelap", "sunyi", "bulan", "tidur"],
  ["roda", "mobil", "halaman", "buku", "penulis", "tinta", "penerbit"],
  ["sepatu", "kaki", "topi", "kepala", "baju", "tangan", "matahari"],
  ["ijazah", "kelulusan", "sertifikat", "kompetensi", "ujian", "sekolah", "belajar"],
  ["anggaran", "perencanaan", "laporan", "pertanggungjawaban", "pembelian", "penyimpanan", "pengiriman"],
  ["audit", "pemeriksaan", "sensus", "pendataan", "pelatihan", "penyuluhan", "pembayaran"],
  ["kapal", "laut", "pesawat", "udara", "bandara", "pilot", "sayap"],
  ["dingin", "beku", "panas", "mendidih", "hangat", "api", "kompor"],
  ["benih", "padi", "telur", "ayam", "sawah", "kandang", "petani"],
  ["jam", "waktu", "termometer", "suhu", "panas", "udara", "derajat"],
  ["dokter", "diagnosis", "auditor", "opini", "gedung", "kertas", "rapat"],
  ["kunci", "pintu", "kata sandi", "akun", "komputer", "huruf", "layar"],
  ["hujan", "banjir", "kemarau", "kekeringan", "panas", "sawah", "debu"],
  ["kapten", "kapal", "kepala sekolah", "sekolah", "murid", "kelas", "guru"],
  ["peta", "arah", "kamus", "arti kata", "huruf", "halaman", "bahasa"],
  ["obat", "kesembuhan", "latihan", "kemahiran", "kelelahan", "lapangan", "pelatih"],
  ["lampu", "terang", "kipas angin", "sejuk", "listrik", "putar", "plastik"],
];
function genVerbal(counter) {
  const out = [];
  let n = 0;
  const id = () => `BKN-X-V-${String(++n).padStart(3, "0")}`;
  for (const e of SYN) {
    const t = nextT();
    out.push(buildSingle(id(), "Verbal & Pemahaman Bacaan", null,
      `Persamaan kata (sinonim) dari kata ${e[0].toUpperCase()} adalah ...`,
      { teks: cap(e[1]) }, [e[2], e[3], e[4]].map((x) => ({ teks: cap(x) })), t,
      `${cap(e[0])} bersinonim dengan ${e[1]} ({L}).`));
  }
  for (const e of ANT) {
    const t = nextT();
    out.push(buildSingle(id(), "Verbal & Pemahaman Bacaan", null,
      `Lawan kata (antonim) dari kata ${e[0].toUpperCase()} adalah ...`,
      { teks: cap(e[1]) }, [e[2], e[3], e[4]].map((x) => ({ teks: cap(x) })), t,
      `Lawan kata ${e[0]} adalah ${e[1]} ({L}).`));
  }
  for (const e of ANA) {
    const t = nextT();
    out.push(buildSingle(id(), "Verbal & Pemahaman Bacaan", null,
      `${e[0].toUpperCase()} : ${e[1].toUpperCase()} = ${e[2].toUpperCase()} : ...`,
      { teks: cap(e[3]) }, [e[4], e[5], e[6]].map((x) => ({ teks: cap(x) })), t,
      `Hubungan ${e[0]} dengan ${e[1]} sama dengan hubungan ${e[2]} dengan ${e[3]} ({L}).`));
  }
  return out;
}

/* ---------- generator NUMERIK (72) ---------- */
function numOpts(ans, cands, fmt) {
  const set = [];
  for (const c of cands) if (c !== ans && c > 0 && !set.includes(c)) set.push(c);
  let k = 3;
  while (set.length < 3) { const c = ans + k++; if (!set.includes(c)) set.push(c); }
  return { correct: { teks: fmt(ans) }, dist: set.slice(0, 3).map((x) => ({ teks: fmt(x) })) };
}
const plain = (x) => String(x);
function numeric(kind) {
  if (kind === "arith") {
    const desc = rnd() < 0.4;
    const d = ri(2, 9);
    const a = desc ? ri(60, 120) : ri(2, 40);
    const sg = desc ? -1 : 1;
    const terms = Array.from({ length: 5 }, (_, i) => a + sg * i * d);
    const ans = a + sg * 5 * d;
    const o = numOpts(ans, [ans + 1, ans - 1, ans + d, ans + 2], plain);
    return { q: `Perhatikan deret angka berikut: ${terms.join(", ")}, ... Angka berikutnya adalah ...`, ...o,
      p: `Pola ${desc ? "pengurangan" : "penambahan"} tetap ${desc ? "-" : "+"}${d}; ${terms[4]} ${desc ? "-" : "+"} ${d} = ${ans} ({L}).` };
  }
  if (kind === "geo") {
    const a = ri(1, 4), r = ri(2, 3);
    const terms = Array.from({ length: 5 }, (_, i) => a * Math.pow(r, i));
    const ans = a * Math.pow(r, 5);
    const o = numOpts(ans, [ans + r, ans - r, ans + a, terms[4] * (r + 1)], plain);
    return { q: `Perhatikan deret angka berikut: ${terms.join(", ")}, ... Angka berikutnya adalah ...`, ...o,
      p: `Setiap suku dikalikan ${r}; ${terms[4]} × ${r} = ${ans} ({L}).` };
  }
  if (kind === "alt") {
    const a = ri(2, 20), d1 = ri(2, 6), b = ri(30, 60), d2 = ri(2, 9);
    const t = [a, b, a + d1, b + d2, a + 2 * d1, b + 2 * d2, a + 3 * d1];
    const ans = b + 3 * d2;
    const o = numOpts(ans, [ans + 1, ans - 1, a + 4 * d1, ans + d2], plain);
    return { q: `Perhatikan deret dua larik berikut: ${t.join(", ")}, ... Angka berikutnya adalah ...`, ...o,
      p: `Larik ganjil bertambah ${d1}, larik genap bertambah ${d2}. Suku berikutnya: ${b + 2 * d2} + ${d2} = ${ans} ({L}).` };
  }
  if (kind === "inc") {
    const a = ri(1, 10), d = ri(1, 4), e = ri(1, 3);
    const t = [a];
    for (let i = 0; i < 4; i++) t.push(t[i] + d + e * i);
    const ans = t[4] + d + 4 * e;
    const o = numOpts(ans, [ans + 1, ans - 1, t[4] + d + 3 * e, ans + e], plain);
    return { q: `Perhatikan deret angka berikut: ${t.join(", ")}, ... Angka berikutnya adalah ...`, ...o,
      p: `Selisih antarsuku naik ${e} tiap langkah (${d}, ${d + e}, ${d + 2 * e}, ${d + 3 * e}); selisih berikutnya ${d + 4 * e}, sehingga ${t[4]} + ${d + 4 * e} = ${ans} ({L}).` };
  }
  if (kind === "pctA") {
    let N, p;
    do { N = pick([40, 60, 80, 120, 150, 200, 250]); p = pick([20, 25, 30, 35, 40, 45, 60]); } while ((N * p) % 100 !== 0);
    const ans = N - (N * p) / 100;
    const o = numOpts(ans, [(N * p) / 100, ans - 5, ans + 5, ans + 10], (x) => `${x} orang`);
    return { q: `Ruang pelatihan diikuti ${N} peserta. Jika ${p}% di antaranya adalah pegawai baru, berapa peserta yang bukan pegawai baru?`, ...o,
      p: `Bukan pegawai baru = ${100 - p}% × ${N} = ${ans} orang ({L}).` };
  }
  if (kind === "pctB") {
    let P, r;
    do { P = pick([200, 240, 300, 400, 500, 600]); r = pick([25, 30, 40, 50, 60, 75]); } while ((P * r) % 100 !== 0);
    const real = (P * r) / 100, ans = P - real;
    const o = numOpts(ans, [real, ans + 10, ans - 10, ans + 20], (x) => `Rp${x} juta`);
    return { q: `Anggaran perjalanan dinas suatu unit Rp${P} juta. Hingga bulan ini terealisasi ${r}%. Berapa sisa anggaran yang belum terealisasi?`, ...o,
      p: `Realisasi = ${r}% × ${P} = ${real} juta, sisa = ${P} - ${real} = ${ans} juta ({L}).` };
  }
  if (kind === "pctC") {
    let X, pct, Y;
    do { X = pick([40, 50, 80, 200, 250]); pct = pick([10, 20, 25, 30, 40, 50]); Y = X + (X * pct) / 100; } while (!Number.isInteger(Y));
    const o = numOpts(pct, [pct + 5, pct - 5, pct + 10, pct * 2], (x) => `${x}%`);
    return { q: `Jumlah permohonan layanan naik dari ${X} menjadi ${Y} permohonan. Berapa persen kenaikannya?`, ...o,
      p: `Kenaikan = (${Y} - ${X}) ÷ ${X} × 100% = ${pct}% ({L}).` };
  }
  if (kind === "pctD") {
    const H = pick([200000, 250000, 400000, 500000, 600000, 800000]);
    const dc = pick([10, 20, 25, 30, 40]);
    const price = (H * (100 - dc)) / 100;
    const o = numOpts(price, [(H * dc) / 100, price + H * 0.05, price - H * 0.05, Math.round(H - (H * (dc / 2)) / 100)], rp);
    return { q: `Harga satu paket alat tulis kantor ${rp(H)}. Jika mendapat diskon ${dc}%, berapa harga yang dibayar?`, ...o,
      p: `Harga dibayar = ${100 - dc}% × ${rp(H)} = ${rp(price)} ({L}).` };
  }
  if (kind === "sen") {
    const r = ri(4, 15), y = ri(2, 5), x = r * y, z = ri(y + 1, 9);
    const ans = r * z;
    const o = numOpts(ans, [ans + r, ans - r, x + z, ans + y], (v) => `${v} berkas`);
    return { q: `Seorang pegawai memeriksa ${x} berkas dalam ${y} jam. Dengan kecepatan yang sama, berapa berkas yang dapat diperiksa dalam ${z} jam?`, ...o,
      p: `Kecepatan = ${x} ÷ ${y} = ${r} berkas/jam; ${z} jam = ${ans} berkas ({L}).` };
  }
  if (kind === "inv") {
    const w1 = pick([3, 4, 5, 6, 8]), h1 = pick([6, 8, 10, 12, 15]);
    const total = w1 * h1;
    const divs = [];
    for (let d = w1 + 1; d <= total; d++) if (total % d === 0) divs.push(d);
    const w2 = pick(divs);
    const ans = total / w2;
    const o = numOpts(ans, [ans + 1, ans + 2, ans - 1, h1 + w2 - w1], (v) => `${v} hari`);
    return { q: `Penataan arsip selesai dalam ${h1} hari oleh ${w1} pegawai. Jika dikerjakan ${w2} pegawai dengan kecepatan sama, berapa hari pekerjaan selesai?`, ...o,
      p: `Beban kerja = ${h1} × ${w1} = ${total} hari-orang; dibagi ${w2} pegawai = ${ans} hari ({L}).` };
  }
  if (kind === "avg1") {
    let v, s;
    do { v = Array.from({ length: 4 }, () => ri(60, 95)); s = v.reduce((a, b) => a + b, 0); } while (s % 4 !== 0);
    const ans = s / 4;
    const o = numOpts(ans, [ans + 1, ans - 1, ans + 2, ans - 2], plain);
    return { q: `Nilai tes empat peserta adalah ${v.join(", ")}. Berapakah rata-rata nilai tersebut?`, ...o,
      p: `Rata-rata = (${v.join(" + ")}) ÷ 4 = ${s} ÷ 4 = ${ans} ({L}).` };
  }
  if (kind === "avg2") {
    let v, ans, m;
    do {
      m = ri(70, 88);
      v = Array.from({ length: 4 }, () => ri(60, 95));
      ans = m * 5 - v.reduce((a, b) => a + b, 0);
    } while (ans < 55 || ans > 100);
    const o = numOpts(ans, [ans + 5, ans - 5, ans + 10, ans - 10], plain);
    return { q: `Rata-rata lima nilai tes adalah ${m}. Empat nilai di antaranya ${v.join(", ")}. Berapakah nilai kelima?`, ...o,
      p: `Jumlah lima nilai = ${m} × 5 = ${m * 5}; nilai kelima = ${m * 5} - ${v.reduce((a, b) => a + b, 0)} = ${ans} ({L}).` };
  }
  return null;
}
function genNumerik() {
  const plan = [["arith", 8], ["geo", 8], ["alt", 8], ["inc", 8], ["pctA", 5], ["pctB", 5], ["pctC", 4], ["pctD", 4], ["sen", 6], ["inv", 6], ["avg1", 3], ["avg2", 3]];
  const out = [], seen = new Set();
  let n = 0;
  for (const [kind, cnt] of plan) {
    let made = 0, guard = 0;
    while (made < cnt && guard++ < 500) {
      const x = numeric(kind);
      if (seen.has(x.q)) continue;
      seen.add(x.q);
      const t = nextT();
      out.push(buildSingle(`BKN-X-N-${String(++n).padStart(3, "0")}`, "Numerik & Interpretasi Data", null, x.q, x.correct, x.dist, t, x.p));
      made++;
    }
    if (made < cnt) throw new Error("numerik gagal unik " + kind);
  }
  // tabel (4)
  const NAMES = ["Subbagian A", "Subbagian B", "Subbagian C", "Subbagian D", "Seksi 1", "Seksi 2", "Seksi 3", "Seksi 4"];
  for (let i = 0; i < 4; i++) {
    let rows;
    for (;;) {
      const names = shuffle(NAMES).slice(0, 4);
      const pcts = shuffle([60, 65, 70, 75, 80, 85, 90, 95]).slice(0, 4);
      rows = names.map((nm, j) => {
        let tg = 0;
        for (let k = 0; k < 20; k++) { const c = pick([80, 100, 120, 200]); if ((c * pcts[j]) % 100 === 0) { tg = c; break; } }
        return { nm, tg, pc: pcts[j], cap: (tg * pcts[j]) / 100 };
      });
      if (rows.every((r) => r.tg)) break;
    }
    const best = rows.reduce((a, b) => (b.pc > a.pc ? b : a));
    const stim = `<table><caption>Capaian Penyelesaian Berkas Empat Unit Kerja</caption><thead><tr><th scope="col">Unit Kerja</th><th scope="col">Target Berkas</th><th scope="col">Selesai</th></tr></thead><tbody>${rows.map((r) => `<tr><th scope="row">${r.nm}</th><td>${r.tg}</td><td>${r.cap}</td></tr>`).join("")}</tbody></table>`;
    const t = nextT();
    out.push(buildSingle(`BKN-X-N-${String(++n).padStart(3, "0")}`, "Numerik & Interpretasi Data", stim,
      "Unit kerja manakah yang memiliki persentase capaian tertinggi?",
      { teks: best.nm }, rows.filter((r) => r !== best).map((r) => ({ teks: r.nm })), t,
      `Persentase capaian: ${rows.map((r) => `${r.nm} ${r.pc}%`).join(", ")}. Tertinggi adalah ${best.nm} ({L}).`));
  }
  return out;
}

/* ---------- generator LOGIS (63) ---------- */
const NAMES_P = ["Andi", "Budi", "Citra", "Dewi", "Eko", "Fani", "Gilang", "Hana", "Indra", "Joko", "Kiki", "Lina", "Maya", "Nando", "Rina", "Sari", "Tono", "Wati"];
const SUBJ = ["pegawai", "auditor", "peserta diklat", "petugas loket", "staf administrasi", "pejabat pengawas", "analis data", "operator sistem", "pustakawan", "bendahara"];
const PRED = ["wajib mengikuti apel pagi", "memiliki kartu identitas", "menaati kode etik", "mengisi daftar hadir", "mengikuti pelatihan dasar", "menggunakan akun resmi", "menyimpan arsip dengan tertib", "menjaga kerahasiaan data", "membuat laporan harian", "mengikuti sosialisasi aturan baru"];
const TRIP = [
  ["auditor", "pemeriksa keuangan", "pihak yang wajib menjaga independensi"],
  ["bendahara", "pengelola keuangan", "pihak yang wajib membuat pertanggungjawaban"],
  ["operator sistem", "pengguna akun resmi", "pihak yang wajib menjaga kata sandi"],
  ["peserta diklat", "peserta pembelajaran", "pihak yang wajib mengisi daftar hadir"],
  ["petugas loket", "pemberi layanan publik", "pihak yang wajib melayani tanpa diskriminasi"],
  ["pejabat pengawas", "pemimpin unit", "pihak yang bertanggung jawab atas capaian unit"],
  ["arsiparis", "pengelola arsip", "pihak yang wajib menjaga keutuhan dokumen"],
  ["pustakawan", "pengelola informasi", "pihak yang wajib menjaga ketertiban katalog"],
  ["analis data", "pengolah data", "pihak yang wajib memverifikasi sumber data"],
];
const XS = ["peserta rapat", "anggota tim", "pegawai muda", "staf pendukung", "pemohon layanan", "tamu undangan", "peserta pelatihan", "narasumber", "petugas piket"];
const COND = [
  ["hujan deras", "apel dilaksanakan di aula"],
  ["server sedang dipelihara", "layanan daring dihentikan sementara"],
  ["berkas tidak lengkap", "berkas dikembalikan kepada pemohon"],
  ["rapat dimulai pukul 08.00", "seluruh peserta hadir sebelum pukul 08.00"],
  ["akun belum diaktifkan", "pegawai belum dapat mengakses sistem"],
  ["tenggat laporan terlewati", "unit wajib menyampaikan penjelasan tertulis"],
  ["pimpinan berhalangan hadir", "rapat dipimpin oleh wakil pimpinan"],
  ["listrik padam", "genset dinyalakan"],
  ["anggaran belum disahkan", "kegiatan belum dapat dilaksanakan"],
];
const ATTR = [
  ["nilai ujian", "lebih tinggi dari", "nilai tertinggi", "nilai terendah", "peringkat kedua dari atas"],
  ["masa kerja", "lebih lama daripada", "masa kerja terlama", "masa kerja tersingkat", "masa kerja terlama kedua"],
  ["jumlah berkas yang diselesaikan", "lebih banyak daripada", "berkas terbanyak", "berkas tersedikit", "berkas terbanyak kedua"],
];
function genLogis() {
  const out = [];
  let n = 0;
  const id = () => `BKN-X-L-${String(++n).padStart(3, "0")}`;
  const mk = (stim, q, c, ds, p) => {
    const t = nextT();
    out.push(buildSingle(id(), "Logis & Analitis", stim, q, { teks: c }, ds.map((x) => ({ teks: x })), t, p));
  };
  const txt = (s) => `<p>${s}</p>`;
  // 1: silogisme kategorik langsung
  for (let i = 0; i < 9; i++) {
    const S = SUBJ[i], P = PRED[(i * 3 + 1) % PRED.length], N = NAMES_P[i];
    mk(null, `Semua ${S} ${P}. ${N} adalah seorang ${S}. Simpulan yang tepat adalah ...`,
      `${N} ${P}.`, [`${N} tidak ${P}.`, `Hanya ${N} yang ${P}.`, `Sebagian ${S} tidak ${P}.`],
      `Dari premis umum dan fakta bahwa ${N} termasuk ${S}, berlaku bahwa ${N} ${P} ({L}).`);
  }
  // 2: rantai
  for (let i = 0; i < 9; i++) {
    const [a, b, c] = TRIP[i];
    mk(null, `Semua ${a} adalah ${b}. Semua ${b} adalah ${c}. Simpulan yang pasti benar adalah ...`,
      `Semua ${a} adalah ${c}.`, [`Semua ${c} adalah ${a}.`, `Sebagian ${b} bukan ${c}.`, `Tidak ada ${a} yang merupakan ${c}.`],
      `Silogisme berantai: A ⊂ B dan B ⊂ C maka A ⊂ C ({L}).`);
  }
  // 3: modus ponens
  for (let i = 0; i < 9; i++) {
    const [c, r] = COND[i];
    mk(null, `Jika ${c}, maka ${r}. Diketahui bahwa ${c}. Simpulan yang tepat adalah ...`,
      `Maka ${r}.`, [`Maka tidak benar bahwa ${r}.`, `Maka tidak benar bahwa ${c}.`, "Tidak ada kesimpulan yang dapat ditarik."],
      `Modus ponens: jika P maka Q, P benar, maka Q benar ({L}).`);
  }
  // 4: modus tollens
  for (let i = 0; i < 9; i++) {
    const [c, r] = COND[(i + 4) % COND.length];
    mk(null, `Jika ${c}, maka ${r}. Diketahui bahwa tidak benar ${r}. Simpulan yang sahih adalah ...`,
      `Maka tidak benar bahwa ${c}.`, [`Maka ${c}.`, `Maka ${c} dan ${r}.`, "Tidak ada kesimpulan yang dapat ditarik."],
      `Modus tollens: jika P maka Q, Q tidak benar, maka P tidak benar ({L}).`);
  }
  // 5: sebagian + semua
  for (let i = 0; i < 9; i++) {
    const X = XS[i], [, b, c] = TRIP[(i + 2) % TRIP.length];
    mk(null, `Sebagian ${X} adalah ${b}. Semua ${b} adalah ${c}. Simpulan yang pasti benar adalah ...`,
      `Sebagian ${X} adalah ${c}.`, [`Semua ${X} adalah ${c}.`, `Tidak ada ${X} yang merupakan ${c}.`, `Semua ${c} adalah ${X}.`],
      `Sebagian X termasuk B, semua B termasuk C, maka sebagian X termasuk C ({L}).`);
  }
  // 6: urutan perbandingan
  for (let i = 0; i < 9; i++) {
    const ns = shuffle(NAMES_P).slice(0, 4);
    const at = ATTR[i % 3];
    const kind = Math.floor(i / 3); // 0 tertinggi, 1 terendah, 2 kedua
    const sts = shuffle([0, 1, 2]).map((j) => `${ns[j]} memiliki ${at[0]} ${at[1]} ${ns[j + 1]}.`);
    const askText = kind === 0 ? at[2] : kind === 1 ? at[3] : at[4];
    const ansName = kind === 0 ? ns[0] : kind === 1 ? ns[3] : ns[1];
    const t = nextT();
    out.push(buildSingle(id(), "Logis & Analitis", txt(`<strong>Kasus Urutan:</strong> ${sts.join(" ")}`),
      `Siapakah yang memiliki ${askText}?`,
      { teks: ansName }, ns.filter((x) => x !== ansName).map((x) => ({ teks: x })), t,
      `Urutan dari atas ke bawah: ${ns.join(" > ")}. Jawabannya ${ansName} ({L}).`));
  }
  // 7: posisi kursi
  for (let i = 0; i < 9; i++) {
    const q = shuffle(NAMES_P).slice(0, 4);
    const ask2 = i % 2 === 0;
    const stim = txt(`<strong>Kasus Posisi:</strong> Empat peserta ${q.join(", ")} duduk berurutan dari kursi 1 hingga kursi 4. ${q[0]} duduk di kursi 1. ${q[3]} duduk di kursi 4. ${q[2]} duduk tepat di sebelah kanan ${q[1]}.`);
    const ansName = ask2 ? q[1] : q[2];
    const t = nextT();
    out.push(buildSingle(id(), "Logis & Analitis", stim, `Siapakah yang duduk di kursi nomor ${ask2 ? 2 : 3}?`,
      { teks: ansName }, q.filter((x) => x !== ansName).map((x) => ({ teks: x })), t,
      `Kursi 1 = ${q[0]} dan kursi 4 = ${q[3]}; dua kursi tengah berurutan ${q[1]} lalu ${q[2]}. Kursi ${ask2 ? 2 : 3} = ${ansName} ({L}).`));
  }
  return out;
}

/* Helper bentuk visual spesifik */
const sqsG = (c) => {
  const pts = {
    1: [[0, 0]],
    2: [[-12, 0], [12, 0]],
    3: [[-14, 0], [0, 0], [14, 0]],
    4: [[-12, -12], [12, -12], [-12, 12], [12, 12]],
    5: [[-12, -12], [12, -12], [0, 0], [-12, 12], [12, 12]],
    6: [[-14, -12], [0, -12], [14, -12], [-14, 12], [0, 12], [14, 12]],
    7: [[-14, -14], [0, -14], [14, -14], [0, 0], [-14, 14], [0, 14], [14, 14]],
    8: [[-15, -14], [-5, -14], [5, -14], [15, -14], [-15, 14], [-5, 14], [5, 14], [15, 14]],
  }[c] || [[0, 0]];
  return pts.map(([x, y]) => `<rect x="${x - 4}" y="${y - 4}" width="8" height="8" fill="currentColor"/>`).join("");
};
const triG = (c) => {
  const pts = {
    1: [[0, 0]],
    2: [[-12, 0], [12, 0]],
    3: [[-14, 0], [0, 0], [14, 0]],
    4: [[-12, -10], [12, -10], [-12, 10], [12, 10]],
    5: [[-12, -10], [12, -10], [0, 0], [-12, 10], [12, 10]],
    7: [[-14, -12], [0, -12], [14, -12], [0, 0], [-14, 12], [0, 12], [14, 12]],
  }[c] || [[0, 0]];
  return pts.map(([x, y]) => `<polygon points="${x},${y - 5} ${x + 5},${y + 4} ${x - 5},${y + 4}" fill="currentColor"/>`).join("");
};
const starG = (c) => {
  const pts = {
    1: [[0, 0]],
    2: [[-12, 0], [12, 0]],
    3: [[-14, 0], [0, 0], [14, 0]],
    4: [[-12, -10], [12, -10], [-12, 10], [12, 10]],
    6: [[-14, -10], [0, -10], [14, -10], [-14, 10], [0, 10], [14, 10]],
    8: [[-15, -10], [-5, -10], [5, -10], [15, -10], [-15, 10], [-5, 10], [5, 10], [15, 10]],
  }[c] || [[0, 0]];
  return pts.map(([x, y]) => `<polygon points="${x},${y - 6} ${x + 2},${y - 2} ${x + 6},${y} ${x + 2},${y + 2} ${x},${y + 6} ${x - 2},${y + 2} ${x - 6},${y} ${x - 2},${y - 2}" fill="currentColor"/>`).join("");
};
const rhomG = (c) => {
  const pts = {
    1: [[0, 0]],
    3: [[-14, 0], [0, 0], [14, 0]],
    5: [[-14, -10], [14, -10], [0, 0], [-14, 10], [14, 10]],
    7: [[-14, -12], [0, -12], [14, -12], [0, 0], [-14, 12], [0, 12], [14, 12]],
  }[c] || [[0, 0]];
  return pts.map(([x, y]) => `<polygon points="${x},${y - 5} ${x + 5},${y} ${x},${y + 5} ${x - 5},${y}" fill="currentColor"/>`).join("");
};
const barG = (c) => {
  const w = 4;
  const start = -((c - 1) * 7) / 2;
  return Array.from({ length: c }, (_, i) => `<rect x="${start + i * 7 - w / 2}" y="-16" width="${w}" height="32" rx="1.5" fill="currentColor"/>`).join("");
};
const ringG = (c) => {
  return Array.from({ length: c }, (_, i) => `<circle cx="0" cy="0" r="${(i + 1) * 6}" fill="none" stroke="currentColor" stroke-width="2.5"/>`).join("");
};

/* ---------- generator SPASIAL (63) ---------- */
function genSpasial() {
  const out = [];
  let n = 0;
  const id = () => `BKN-X-S-${String(++n).padStart(3, "0")}`;
  const add = (stim, q, correct, ds, t, p) =>
    out.push(buildSingle(id(), "Spasial & Pola Abstrak", stim, q, correct, ds, t, p));

  // 1. ROTASI (13 items, 13 objek unik)
  const ROT_MOTIFS = [
    { nm: "Panah berujung lancip", fn: (a) => `<g transform="rotate(${a})"><path d="M0 -22 L10 -4 L4 -4 L4 20 L-4 20 L-4 -4 L-10 -4 Z" fill="currentColor"/></g>` },
    { nm: "Segitiga sama kaki", fn: (a) => `<g transform="rotate(${a})"><polygon points="0,-22 14,16 -14,16" fill="currentColor"/></g>` },
    { nm: "Huruf T balok", fn: (a) => `<g transform="rotate(${a})"><path d="M-14 -18 H14 V-8 H5 V18 H-5 V-8 H-14 Z" fill="currentColor"/></g>` },
    { nm: "Huruf L bertitik", fn: (a) => `<g transform="rotate(${a})"><path d="M-10 -18 V14 H14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="-10" cy="-18" r="5" fill="currentColor"/></g>` },
    { nm: "Bintang empat sudut condong", fn: (a) => `<g transform="rotate(${a})"><polygon points="0,-22 5,-5 22,0 5,5 0,22 -5,5 -22,0 -5,-5" fill="currentColor"/></g>` },
    { nm: "Bulan sabit geometris", fn: (a) => `<g transform="rotate(${a})"><path d="M0 -20 A20 20 0 1 0 20 0 A15 15 0 0 1 0 -20 Z" fill="currentColor"/></g>` },
    { nm: "Palang bertitik di satu puncak", fn: (a) => `<g transform="rotate(${a})"><rect x="-3" y="-18" width="6" height="36" fill="currentColor"/><rect x="-18" y="-3" width="36" height="6" fill="currentColor"/><circle cx="0" cy="-18" r="5" fill="currentColor"/></g>` },
    { nm: "Segitiga siku-siku", fn: (a) => `<g transform="rotate(${a})"><polygon points="-12,-18 14,16 -12,16" fill="currentColor"/></g>` },
    { nm: "Trapesium siku", fn: (a) => `<g transform="rotate(${a})"><polygon points="-12,-16 4,-16 14,16 -12,16" fill="currentColor"/></g>` },
    { nm: "Anak panah bergaris ekor", fn: (a) => `<g transform="rotate(${a})"><line x1="0" y1="20" x2="0" y2="-20" stroke="currentColor" stroke-width="3"/><polyline points="-8,-12 0,-20 8,-12" fill="none" stroke="currentColor" stroke-width="3"/><polyline points="-6,16 0,20 6,16" fill="none" stroke="currentColor" stroke-width="3"/></g>` },
    { nm: "Huruf F balok", fn: (a) => `<g transform="rotate(${a})"><path d="M-10 -18 H12 V-10 H-2 V-4 H8 V4 H-2 V18 H-10 Z" fill="currentColor"/></g>` },
    { nm: "Sektor lingkaran terbuka", fn: (a) => `<g transform="rotate(${a})"><path d="M0 0 L18 -10 A20 20 0 1 0 18 10 Z" fill="currentColor"/></g>` },
    { nm: "Bendera segitiga di tiang", fn: (a) => `<g transform="rotate(${a})"><line x1="-10" y1="18" x2="-10" y2="-18" stroke="currentColor" stroke-width="3"/><polygon points="-10,-18 14,-8 -10,2" fill="currentColor"/></g>` },
  ];
  for (let i = 0; i < 13; i++) {
    const item = ROT_MOTIFS[i];
    const s = [90, -90, 45, -45, 90, -90, 90, -90, 45, -45, 90, -90, 90][i];
    const a0 = [0, 90, 180, 270, 0, 90, 180, 270, 0, 90, 180, 270, 0][i];
    const ang = (i2) => (((a0 + i2 * s) % 360) + 360) % 360;
    const ans = ang(3);
    const stim = seqSvg(`Deret ${item.nm} berputar ${Math.abs(s)} derajat ${s > 0 ? "searah" : "berlawanan arah"} jarum jam`,
      [item.fn(ang(0)), item.fn(ang(1)), item.fn(ang(2))]);
    const opt = (a) => ({ teks: `${item.nm} berarah ${DIR[a] || a + "°"}`, svg: mini(`${item.nm} ${DIR[a] || a + "°"}`, item.fn(a)) });
    const t = nextT();
    add(stim, `Berdasarkan pola rotasi di atas, posisi yang tepat untuk gambar keempat adalah ... (Soal Rotasi #${i + 1})`,
      opt(ans), [opt((ans + 90) % 360), opt((ans + 180) % 360), opt((ans + 270) % 360)], t,
      `${item.nm} berputar ${Math.abs(s)}° ${s > 0 ? "searah" : "berlawanan arah"} jarum jam pada tiap langkah, sehingga gambar keempat menghadap ${DIR[ans] || ans + "°"} ({L}).`);
  }

  // 2. HITUNG (13 items, 13 pola deret visual unik)
  const COUNT_SPECS = [
    { nm: "lingkaran hitam", fn: (c) => dotsG(c), c: [1, 2, 3], ans: 4, k: 1, cands: [3, 5, 6] },
    { nm: "lingkaran hitam", fn: (c) => dotsG(c), c: [2, 4, 6], ans: 8, k: 2, cands: [7, 9, 10] },
    { nm: "lingkaran hitam", fn: (c) => dotsG(c), c: [1, 3, 5], ans: 7, k: 2, cands: [6, 8, 9] },
    { nm: "persegi hitam", fn: (c) => sqsG(c), c: [1, 2, 3], ans: 4, k: 1, cands: [3, 5, 6] },
    { nm: "persegi hitam", fn: (c) => sqsG(c), c: [2, 4, 6], ans: 8, k: 2, cands: [6, 7, 9] },
    { nm: "segitiga kecil", fn: (c) => triG(c), c: [1, 3, 5], ans: 7, k: 2, cands: [6, 8, 9] },
    { nm: "segitiga kecil", fn: (c) => triG(c), c: [2, 3, 4], ans: 5, k: 1, cands: [4, 6, 7] },
    { nm: "bintang kecil", fn: (c) => starG(c), c: [1, 2, 3], ans: 4, k: 1, cands: [3, 5, 6] },
    { nm: "bintang kecil", fn: (c) => starG(c), c: [2, 4, 6], ans: 8, k: 2, cands: [6, 7, 9] },
    { nm: "belah ketupat", fn: (c) => rhomG(c), c: [1, 3, 5], ans: 7, k: 2, cands: [5, 8, 9] },
    { nm: "garis batang tegak", fn: (c) => barG(c), c: [2, 4, 6], ans: 8, k: 2, cands: [7, 9, 10] },
    { nm: "garis batang tegak", fn: (c) => barG(c), c: [3, 4, 5], ans: 6, k: 1, cands: [5, 7, 8] },
    { nm: "cincin konsentris", fn: (c) => ringG(c), c: [1, 2, 3], ans: 4, k: 1, cands: [3, 5, 6] },
  ];
  for (let i = 0; i < 13; i++) {
    const cs = COUNT_SPECS[i];
    const stim = seqSvg(`Deret jumlah ${cs.nm} (${cs.c.join(", ")}) dan tanda tanya`, cs.c.map(cs.fn));
    const opt = (x) => ({ teks: `${x} ${cs.nm}`, svg: mini(`${x} ${cs.nm}`, cs.fn(x)) });
    const t = nextT();
    add(stim, `Berapa banyak ${cs.nm} yang tepat untuk mengisi posisi gambar keempat? (Soal Hitung #${i + 1})`,
      opt(cs.ans), cs.cands.slice(0, 3).map(opt), t,
      `Jumlah ${cs.nm} bertambah ${cs.k} pada tiap langkah (${cs.c.join(" → ")} → ${cs.ans}) ({L}).`);
  }

  // 3. POLIGON (11 items, variasi sisi dan keteraturan)
  const POLY_SPECS = [
    { label: "Poligon bertambah 1 sisi", c: [3, 4, 5], ans: 6, fill: false, k: 1, desc: "bertambah 1 sisi (3 → 4 → 5 → 6)" },
    { label: "Poligon bertambah 1 sisi", c: [4, 5, 6], ans: 7, fill: false, k: 1, desc: "bertambah 1 sisi (4 → 5 → 6 → 7)" },
    { label: "Poligon bertambah 1 sisi", c: [5, 6, 7], ans: 8, fill: false, k: 1, desc: "bertambah 1 sisi (5 → 6 → 7 → 8)" },
    { label: "Poligon berkurang 1 sisi", c: [8, 7, 6], ans: 5, fill: false, k: -1, desc: "berkurang 1 sisi (8 → 7 → 6 → 5)" },
    { label: "Poligon berkurang 1 sisi", c: [7, 6, 5], ans: 4, fill: false, k: -1, desc: "berkurang 1 sisi (7 → 6 → 5 → 4)" },
    { label: "Poligon ganjil bertambah 2 sisi", c: [3, 5, 7], ans: 9, fill: false, k: 2, desc: "bertambah 2 sisi (3 → 5 → 7 → 9)" },
    { label: "Poligon genap bertambah 2 sisi", c: [4, 6, 8], ans: 10, fill: false, k: 2, desc: "bertambah 2 sisi (4 → 6 → 8 → 10)" },
    { label: "Poligon hitam bertambah 1 sisi", c: [3, 4, 5], ans: 6, fill: true, k: 1, desc: "bertambah 1 sisi hitam (3 → 4 → 5 → 6)" },
    { label: "Poligon hitam bertambah 1 sisi", c: [4, 5, 6], ans: 7, fill: true, k: 1, desc: "bertambah 1 sisi hitam (4 → 5 → 6 → 7)" },
    { label: "Poligon hitam berkurang 1 sisi", c: [8, 7, 6], ans: 5, fill: true, k: -1, desc: "berkurang 1 sisi hitam (8 → 7 → 6 → 5)" },
    { label: "Poligon hitam bertambah 2 sisi", c: [3, 5, 7], ans: 9, fill: true, k: 2, desc: "bertambah 2 sisi hitam (3 → 5 → 7 → 9)" },
  ];
  for (let i = 0; i < 11; i++) {
    const ps = POLY_SPECS[i];
    const stim = seqSvg(`${ps.label} (${ps.c.join(", ")} sisi) dan tanda tanya`, ps.c.map((s) => polyG(s, ps.fill)));
    const opt = (s) => ({ teks: `Segi-${s} (${s} sisi${ps.fill ? " hitam" : ""})`, svg: mini(`Segi-${s}`, polyG(s, ps.fill)) });
    const distCands = ps.k > 0 ? [ps.ans - 1, ps.ans + 1, ps.ans + 2] : [ps.ans + 1, ps.ans - 1, ps.ans + 2];
    const t = nextT();
    add(stim, `Bangun datar yang tepat untuk melengkapi posisi keempat deret adalah ... (Soal Poligon #${i + 1})`,
      opt(ps.ans), distCands.map(opt), t,
      `Pola deret ${ps.desc}, sehingga bangun keempat adalah segi-${ps.ans} ({L}).`);
  }

  // 4. BEDA SENDIRI (13 items, 13 puzzle diskriminasi visual)
  const ODD_SPECS = [
    { t: "Pilihan bentuk dasar: tiga lingkaran, satu persegi", norm: "lingkaran", odd: "persegi", rNorm: "berbentuk lingkaran", rOdd: "berbentuk persegi" },
    { t: "Pilihan bentuk dasar: tiga segitiga, satu bintang", norm: "segitiga", odd: "bintang", rNorm: "berbentuk segitiga", rOdd: "berbentuk bintang" },
    { t: "Pilihan bentuk dasar: tiga persegi, satu belah ketupat", norm: "persegi", odd: "belah ketupat", rNorm: "berbentuk persegi", rOdd: "berbentuk belah ketupat" },
    { t: "Pilihan bentuk dasar: tiga belah ketupat, satu pentagon", norm: "belah ketupat", odd: "pentagon", rNorm: "berbentuk belah ketupat", rOdd: "berbentuk pentagon (segi-5)" },
    { t: "Pilihan bentuk dasar: tiga pentagon, satu lingkaran", norm: "pentagon", odd: "lingkaran", rNorm: "berbentuk pentagon (segi-5)", rOdd: "berbentuk lingkaran" },
    { t: "Pilihan bentuk dasar: tiga bintang, satu segitiga", norm: "bintang", odd: "segitiga", rNorm: "berbentuk bintang", rOdd: "berbentuk segitiga" },
    { t: "Pola arsir: tiga lingkaran hitam, satu lingkaran berongga", norm: ["lingkaran", true], odd: ["lingkaran", false], rNorm: "lingkaran terisi hitam penuh", rOdd: "lingkaran kosong berongga" },
    { t: "Pola arsir: tiga persegi berongga, satu persegi hitam", norm: ["persegi", false], odd: ["persegi", true], rNorm: "persegi kosong berongga", rOdd: "persegi terisi hitam penuh" },
    { t: "Pola arsir: tiga segitiga hitam, satu segitiga berongga", norm: ["segitiga", true], odd: ["segitiga", false], rNorm: "segitiga terisi hitam penuh", rOdd: "segitiga kosong berongga" },
    { t: "Pola arsir: tiga bintang hitam, satu bintang berongga", norm: ["bintang", true], odd: ["bintang", false], rNorm: "bintang terisi hitam penuh", rOdd: "bintang kosong berongga" },
    { t: "Pola arsir: tiga belah ketupat berongga, satu belah ketupat hitam", norm: ["belah ketupat", false], odd: ["belah ketupat", true], rNorm: "belah ketupat kosong berongga", rOdd: "belah ketupat terisi hitam penuh" },
    { t: "Pilihan bangun: tiga bangun garis lurus, satu lingkaran melengkung", norm: "persegi", odd: "lingkaran", rNorm: "dibatasi garis lurus (poligon)", rOdd: "dibatasi kurva melengkung (lingkaran)" },
    { t: "Pilihan bangun: tiga poligon ganjil, satu segiempat genap", norm: "pentagon", odd: "persegi", rNorm: "bersudut ganjil (segi-5)", rOdd: "bersudut genap (segi-4)" },
  ];
  for (let i = 0; i < 13; i++) {
    const os = ODD_SPECS[i];
    const odd = nextT();
    const cells = [0, 1, 2, 3].map((j) => {
      const s = j === odd ? os.odd : os.norm;
      if (Array.isArray(s)) return SHAPES[s[0]](s[1]);
      return SHAPES[s](false);
    });
    const stim = fourSvg(`Empat bangun pada kotak (1) sampai (4) untuk soal beda sendiri #${i + 1}`, cells);
    const opts = [0, 1, 2, 3].map((j) => ({ teks: `Gambar (${j + 1})` }));
    const reason = `Tiga gambar ${os.rNorm}, sedangkan satu gambar ${os.rOdd}`;
    const qObj = buildSingle(id(), "Spasial & Pola Abstrak", stim,
      `Manakah di antara keempat gambar berikut yang polanya berbeda dari tiga gambar lainnya? (Soal Diskriminasi #${i + 1})`,
      opts[odd], [opts[(odd + 1) % 4], opts[(odd + 2) % 4], opts[(odd + 3) % 4]], odd,
      `${reason} ({L}).`);
    qObj.opsi = opts.map((o, j) => ({ huruf: L[j], teks: o.teks }));
    qObj.kunci = L[odd];
    qObj.pembahasan = `${reason}. Jawaban: Gambar (${odd + 1}) (${L[odd]}).`;
    out.push(qObj);
  }

  // 5. PENCERMINAN (13 items, 13 objek geometri asimetris unik)
  const MIRROR_OBJECTS = [
    { nm: "Huruf L bertitik di ujung vertikal", svg: `<path d="M-8 -20V14H16" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="-8" cy="-20" r="5" fill="currentColor"/>`, vert: true },
    { nm: "Huruf F balok bergaris tebal", svg: `<path d="M-10 -18 H12 V-10 H-2 V-4 H8 V4 H-2 V18 H-10 Z" fill="currentColor"/>`, vert: false },
    { nm: "Bendera segitiga berkibar di tiang", svg: `<line x1="-12" y1="20" x2="-12" y2="-20" stroke="currentColor" stroke-width="4"/><polygon points="-12,-20 16,-8 -12,4" fill="currentColor"/>`, vert: true },
    { nm: "Panah miring condong ke kanan atas", svg: `<line x1="-14" y1="14" x2="14" y2="-14" stroke="currentColor" stroke-width="4"/><polygon points="4,-16 16,-16 16,-4" fill="currentColor"/>`, vert: false },
    { nm: "Tangga tiga undakan menghadap kanan", svg: `<path d="M-16 16 H-6 V6 H4 V-4 H14 V-16 H-16 Z" fill="currentColor"/>`, vert: true },
    { nm: "Bulan sabit membuka ke sisi kanan", svg: `<path d="M-4 -20 A20 20 0 1 0 16 0 A15 15 0 0 1 -4 -20 Z" fill="currentColor"/>`, vert: false },
    { nm: "Angka 4 geometris bergaris tegas", svg: `<path d="M6 -18 V18 M-12 -6 L6 -18 M-12 -6 H14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`, vert: true },
    { nm: "Huruf R balok berkaki miring", svg: `<path d="M-10 -18 H6 Q14 -18 14 -8 Q14 -2 6 -2 H-2 V18 H-10 Z M-2 -10 H4 Q6 -10 6 -8 Q6 -6 4 -6 H-2 Z" fill="currentColor"/><polygon points="2,-2 14,18 6,18 -2,4" fill="currentColor"/>`, vert: false },
    { nm: "Kunci bertakik sisi kanan", svg: `<rect x="-14" y="-4" width="28" height="8" rx="2" fill="currentColor"/><circle cx="-14" cy="0" r="8" fill="none" stroke="currentColor" stroke-width="3"/><rect x="4" y="4" width="4" height="8" fill="currentColor"/><rect x="10" y="4" width="4" height="6" fill="currentColor"/>`, vert: true },
    { nm: "Trapesium siku-siku bertitik sudut", svg: `<polygon points="-14,-14 6,-14 14,14 -14,14" fill="currentColor"/><circle cx="6" cy="-14" r="4" fill="var(--bg,#fff)" stroke="currentColor" stroke-width="2"/>`, vert: false },
    { nm: "Segitiga siku-siku bergaris bagi", svg: `<polygon points="-14,-16 14,16 -14,16" fill="none" stroke="currentColor" stroke-width="3"/><line x1="-14" y1="-16" x2="-4" y2="16" stroke="currentColor" stroke-width="2"/>`, vert: true },
    { nm: "Profil cangkir dengan gagang samping", svg: `<rect x="-12" y="-12" width="22" height="26" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M10 -6 Q18 -6 18 2 Q18 10 10 10" fill="none" stroke="currentColor" stroke-width="3"/>`, vert: false },
    { nm: "Perahu layar asimetris", svg: `<path d="M-16 10 L16 10 L10 18 L-10 18 Z" fill="currentColor"/><polygon points="-2,6 -2,-18 12,6" fill="currentColor"/>`, vert: true },
  ];
  for (let i = 0; i < 13; i++) {
    const mo = MIRROR_OBJECTS[i];
    const vertical = mo.vert;
    const fH = (g) => `<g transform="scale(-1,1)">${g}</g>`;
    const fV = (g) => `<g transform="scale(1,-1)">${g}</g>`;
    const r180 = (g) => `<g transform="rotate(180)">${g}</g>`;
    let stim;
    if (vertical) {
      stim = svgBox(`Pencerminan vertikal untuk ${mo.nm}`,
        `<rect x="15" y="15" width="90" height="80" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><g transform="translate(60,55)">${mo.svg}</g><line x1="135" y1="15" x2="135" y2="95" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><rect x="165" y="15" width="90" height="80" rx="6" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="210" y="62" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text>`,
        "0 0 270 110");
    } else {
      stim = svgBox(`Pencerminan horizontal untuk ${mo.nm}`,
        `<rect x="90" y="5" width="90" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><g transform="translate(135,40)">${mo.svg}</g><line x1="70" y1="85" x2="200" y2="85" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><rect x="90" y="95" width="90" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="135" y="140" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text>`,
        "0 0 270 170");
    }
    const O = {
      H: { teks: `Pencerminan horizontal (kiri-kanan terbalik)`, svg: mini("Refleksi horizontal", fH(mo.svg)) },
      V: { teks: `Pencerminan vertikal (atas-bawah terbalik)`, svg: mini("Refleksi vertikal", fV(mo.svg)) },
      R: { teks: `Rotasi 180 derajat`, svg: mini("Rotasi 180", r180(mo.svg)) },
      S: { teks: `Sama persis tanpa pembalikan`, svg: mini("Asli", mo.svg) },
    };
    const ansK = vertical ? "H" : "V";
    const t = nextT();
    add(stim, `Manakah bayangan pencerminan yang tepat untuk ${mo.nm} terhadap garis cermin ${vertical ? "vertikal" : "horizontal"}? (Soal Pencerminan #${i + 1})`,
      O[ansK], ["H", "V", "R", "S"].filter((x) => x !== ansK).map((x) => O[x]), t,
      `Garis cermin ${vertical ? "vertikal membalik orientasi kiri-kanan" : "horizontal membalik orientasi atas-bawah"}, sehingga bayangan yang benar adalah ${O[ansK].teks} ({L}).`);
  }
  return out;
}

/* ---------- SJT (perilaku, manajerial, sosial kultural) ---------- */
const SL = {
  rekan: ["seorang rekan satu tim", "staf baru di bagian Anda", "pegawai senior di ruangan Anda", "rekan dari subbagian lain", "pegawai yang baru dimutasi ke unit Anda", "rekan yang duduk di sebelah meja Anda", "anggota tim proyek Anda", "pegawai pendukung administrasi", "rekan dari bidang pelayanan", "rekan seangkatan Anda"],
  dok: ["laporan bulanan", "rekap data kehadiran", "draf surat dinas", "bahan paparan rapat", "daftar inventaris barang", "notulen rapat koordinasi", "rekapitulasi realisasi anggaran", "formulir layanan", "laporan kegiatan triwulanan", "register surat masuk"],
  unit: ["Bagian Umum", "Subbagian Keuangan", "Bagian Kepegawaian", "Subbagian Perencanaan", "Unit Layanan", "Bagian Hukum dan Humas", "Subbagian Kearsipan", "Bagian Teknologi Informasi", "Subbagian Perlengkapan", "Sekretariat unit"],
  tgl: ["pada hari Jumat sore", "menjelang akhir bulan", "dua hari sebelum tenggat", "pada pagi hari rapat", "di tengah minggu yang sibuk", "menjelang akhir tahun anggaran", "setelah jam istirahat siang", "pada awal triwulan", "di sela penyusunan laporan", "menjelang libur panjang"],
  pimp: ["atasan langsung Anda", "kepala subbagian", "kepala bagian", "pimpinan unit", "koordinator tim", "kepala seksi", "pejabat pengawas", "sekretaris unit", "ketua tim kerja", "kepala unit"],
};
function fill(str, idx) {
  return str.replace(/\{(rekan|dok|unit|tgl|pimp)\}/gi, (m, k) => {
    const v = SL[k.toLowerCase()][idx[k.toLowerCase()]];
    return m.charAt(1) === m.charAt(1).toUpperCase() ? cap(v) : v;
  });
}
const A = {
  BK: "Berpikir Kritis & Strategis", PM: "Pemecahan Masalah", IP: "Kemampuan Interpersonal",
  KD: "Kesadaran Diri & Pengelolaan Emosi", LD: "Literasi Digital & Adaptabilitas",
  INT: "Integritas", KS: "Kerja Sama", KOM: "Komunikasi", OH: "Orientasi pada Hasil", PP: "Pelayanan Publik",
  PD: "Pengembangan Diri dan Orang Lain", MP: "Mengelola Perubahan", PK: "Pengambilan Keputusan",
  SB: "Perekat Bangsa — Kepekaan Budaya & Adat", SI: "Perekat Bangsa — Hubungan Sosial & Inklusivitas", SM: "Perekat Bangsa — Kepekaan & Mediasi Konflik",
};
// core: [skenario, [o4,r4],[o3,r3],[o2,r2],[o1,r1]]
const CORES = {
  BK: ["Berpikir kritis: memverifikasi informasi dan menimbang risiko sebelum memutuskan", [
    ["{Tgl}, Anda menerima kabar melalui grup pesan bahwa format {dok} akan diubah mulai pekan depan, tetapi belum ada surat edaran resmi.", ["Memeriksa surat edaran atau bertanya ke {unit} lebih dulu sebelum memercayai maupun meneruskan kabar tersebut.", "memverifikasi ke sumber resmi sebelum menyebarkan informasi"], ["Menanyakan kepada pengirim pesan dari mana ia mendapat kabar itu tanpa mengecek ke sumber resmi lainnya.", "menelusuri sumber awal namun belum otoritatif"], ["Menunggu beberapa hari untuk melihat apakah ada rekan lain yang membenarkan kabar itu di grup.", "pasif dan bergantung pada pembenaran pihak lain"], ["Meneruskan kabar itu ke grup bagian lain agar semua orang segera menyesuaikan format dokumennya.", "menyebarkan informasi yang belum terverifikasi"]],
    ["Saat menelaah {dok}, Anda melihat angka bulan ini naik 40% dibanding bulan lalu tanpa ada keterangan penyebabnya.", ["Menelusuri sumber data, membandingkannya dengan bukti pendukung, dan mengonfirmasi penyebabnya ke {unit} sebelum dipakai.", "menguji kewajaran angka dengan bukti sebelum digunakan"], ["Menandai angka tersebut dan menanyakannya pada rapat koordinasi berikutnya sambil tetap memakainya sementara.", "peduli pada anomali namun tetap memakai angka yang belum teruji"], ["Memakai angka itu apa adanya karena sudah tercantum pada dokumen resmi yang diterima dari unit lain.", "menerima data tanpa uji kewajaran"], ["Menurunkan angka tersebut seperlunya agar kenaikannya terlihat wajar bagi pimpinan yang membaca laporan.", "mengubah data tanpa dasar"]],
    ["{Rekan} mengusulkan memangkas dua tahap pengecekan pada {dok} agar pekerjaan selesai lebih cepat.", ["Menimbang risiko salah data bila pengecekan dipangkas, lalu mencari cara mempercepat yang tetap menjaga ketelitian.", "menyeimbangkan kecepatan dan pengendalian risiko"], ["Meminta rekan itu menjelaskan alasannya dan menunda keputusan sampai ada waktu membahasnya bersama.", "membuka diskusi tetapi belum menilai risiko"], ["Menolak usulan itu seketika karena tahapan pengecekan tidak pernah boleh diubah dalam kondisi apa pun.", "kaku dan tidak menimbang alternatif"], ["Menyetujui usulan itu agar target kecepatan unit terlihat meningkat tanpa memeriksa dampaknya.", "mengabaikan risiko kesalahan"]],
    ["{Tgl}, {pimp} meminta Anda menyusun rencana kerja bagian untuk satu triwulan ke depan.", ["Memetakan tugas menurut prioritas dan tenggat unit lain, serta menyisakan waktu cadangan untuk hal tak terduga.", "perencanaan berbasis prioritas dengan penyangga risiko"], ["Menunggu seluruh unit lain menetapkan jadwalnya terlebih dahulu sebelum mulai menyusun draf rencana kerja bagian.", "berhati-hati namun terlambat bergerak"], ["Menyalin rencana kerja triwulan lalu dan hanya mengganti tanggal tanpa meninjau perubahan beban kerja.", "kurang menyesuaikan dengan kondisi terbaru"], ["Mengisi seluruh hari kerja secara penuh tanpa menyisakan waktu cadangan sama sekali.", "rencana rapuh terhadap gangguan"]],
    ["Dua rekan berbeda pendapat tentang penyebab keterlambatan {dok}: satu menyalahkan sistem, yang lain menyalahkan beban kerja.", ["Mengumpulkan catatan waktu dan log kerja untuk menguji kedua dugaan itu sebelum menyimpulkan penyebab utamanya.", "menguji hipotesis dengan data"], ["Mencatat kedua pendapat itu lalu melaporkannya kepada {pimp} agar pimpinan yang menentukan penyebabnya.", "melapor tanpa analisis awal"], ["Memilih pendapat rekan yang lebih senior karena dianggap lebih berpengalaman menilai persoalan ini.", "memilih berdasarkan senioritas, bukan bukti"], ["Menyimpulkan bahwa keduanya sama-sama keliru tanpa memeriksa data apa pun terlebih dahulu.", "menyimpulkan tanpa dasar"]],
  ]],
  PM: ["Pemecahan masalah: mencari solusi praktis ketika terjadi hambatan kerja", [
    ["{Tgl}, koneksi internet kantor terputus padahal {dok} harus diunggah sebelum pukul 16.00.", ["Memakai jaringan cadangan yang diizinkan, mengunggah berkas utama lebih dulu, dan mengabari {pimp} tentang kendalanya.", "mencari jalur alternatif sambil menjaga koordinasi"], ["Melaporkan gangguan ke {unit} dan memberi tahu atasan bahwa unggahan mungkin terlambat tanpa mencoba jalur lain.", "melapor namun belum berupaya memenuhi tenggat"], ["Menunggu jaringan pulih sambil mengerjakan tugas lain yang tidak membutuhkan internet sama sekali.", "pasif menunggu"], ["Mengirim berkas melalui akun pribadi rekan di luar kantor agar cepat terunggah ke sistem.", "melanggar keamanan data dan akun"]],
    ["Saat menyusun {dok}, Anda menemukan dua angka yang seharusnya sama namun berbeda selisih Rp12 juta.", ["Merekonsiliasi kedua sumber per tanggal dan kode akun untuk menemukan transaksi penyebab selisihnya.", "menelusuri akar selisih secara sistematis"], ["Mengembalikan kedua data kepada penyusunnya dan memintanya menghitung ulang tanpa ikut menelusuri.", "mendelegasikan tanpa penelusuran awal"], ["Menulis catatan bahwa terdapat selisih lalu tetap melanjutkan penyusunan dokumen seperti biasa.", "membiarkan masalah terbuka"], ["Memakai angka yang lebih besar saja agar laporan tampak aman dan tidak kekurangan catat.", "mengambil angka tanpa dasar"]],
    ["Printer bersama macet lima menit sebelum rapat, padahal {dok} harus dibagikan kepada peserta.", ["Mengirim berkas digital ke perangkat peserta atau mencetak di ruangan lain agar rapat tetap tepat waktu.", "menyelesaikan tujuan utama dengan alternatif cepat"], ["Menghubungi {unit} untuk memperbaiki printer sementara rapat berjalan tanpa bahan yang dibagikan.", "mengatasi kerusakan namun mengorbankan rapat"], ["Membongkar printer sendiri meski belum pernah memperbaikinya sehingga rapat justru tertunda.", "berisiko merusak dan menunda"], ["Menunda rapat sampai teknisi datang dan printer berfungsi normal kembali seperti semula.", "menghentikan agenda penting"]],
    ["Dua subtim memerlukan satu kendaraan dinas pada hari yang sama {tgl}.", ["Memetakan jadwal dan urgensi tiap kegiatan, lalu mengatur penggunaan bergiliran atau sewa sesuai ketentuan.", "solusi berbasis urgensi dan aturan"], ["Menyerahkan keputusan penggunaan kendaraan kepada {unit} tanpa mengusulkan opsi apa pun.", "melempar keputusan tanpa opsi"], ["Mengundi penggunaan kendaraan agar terkesan adil tanpa menilai kepentingan masing-masing kegiatan.", "mengabaikan prioritas kerja"], ["Meminta subtim yang lebih muda mengalah dan membatalkan kegiatannya pada hari itu.", "memutuskan sepihak"]],
    ["{Rekan} mengeluh bahwa aplikasi pengolah {dok} sering menutup sendiri saat berkas besar dibuka.", ["Memecah berkas menjadi bagian kecil, menyimpan cadangan, dan melaporkan galat itu ke {unit} beserta contoh kasusnya.", "memberi solusi sementara dan melaporkan akar masalah"], ["Menyarankan rekan itu sering menyimpan pekerjaan dan menunggu pembaruan aplikasi dari {unit}.", "melindungi data tetapi pasif terhadap masalah"], ["Menyarankan rekan itu mengerjakan ulang seluruhnya dari awal setiap kali aplikasi menutup sendiri.", "boros waktu tanpa solusi"], ["Menyarankan rekan itu memasukkan data secara manual tanpa pemeriksaan agar tidak memakai aplikasi tersebut.", "berisiko salah data"]],
  ]],
  IP: ["Interpersonal: membangun hubungan kerja yang sehat dan empatik", [
    ["{Rekan} tampak murung dan {dok} darinya terlambat diserahkan kepada Anda selama seminggu ini.", ["Menemuinya secara pribadi dengan empati, menanyakan kendalanya, dan menyepakati jadwal serah yang realistis.", "empati disertai kesepakatan tenggat"], ["Mengirim pengingat tertulis tentang tenggat agar ada catatan bahwa Anda telah menagihnya.", "tertib administrasi tetapi kurang suportif"], ["Membiarkannya dahulu sambil mengerjakan bagian Anda sendiri tanpa membahas keterlambatannya.", "membiarkan hambatan kerja berlanjut"], ["Melaporkan keterlambatan itu kepada {pimp} tanpa berbicara terlebih dahulu dengannya.", "merusak kepercayaan"]],
    ["Saran perbaikan Anda atas {dok} milik {rekan} dibalas dengan nada tersinggung.", ["Tetap tenang, menghargai bagian yang sudah baik, lalu menunjukkan poin yang perlu diselaraskan dengan contoh jelas.", "menjaga suasana dan fokus pada substansi"], ["Menunda diskusi sampai suasana mereda lalu mengirim catatan perbaikan melalui pesan singkat.", "meredakan tegang tetapi komunikasi tertulis rawan salah paham"], ["Memperbaiki sendiri dokumen itu diam-diam agar tidak terjadi perdebatan lagi di kemudian hari.", "menghindari dialog"], ["Menegaskan dengan nada keras bahwa koreksi Anda pasti benar sesuai aturan yang berlaku.", "memicu pertengkaran"]],
    ["Anda baru dipindahkan ke {unit} dan belum mengenal sebagian besar pegawainya, sementara pekerjaan sudah berjalan.", ["Memperkenalkan diri dengan ramah, mempelajari cara kerja unit, dan menawarkan bantuan pada tugas yang mendesak.", "proaktif membangun hubungan dan berkontribusi"], ["Berinteraksi seperlunya sesuai pembagian tugas agar terkesan profesional sampai suasana lebih akrab.", "sopan tetapi lambat membangun kohesi"], ["Menunggu diperkenalkan secara resmi oleh atasan pada rapat bulanan sebelum menyapa pegawai lain.", "pasif menunggu"], ["Lebih sering berkumpul dengan pegawai dari angkatan atau daerah yang sama dengan Anda.", "membentuk kelompok eksklusif"]],
    ["Dua rekan berdebat sengit soal format {dok}, sehingga rapat tidak membahas inti persoalan.", ["Meminta izin menengahi, merangkum titik temu usulan, dan mengusulkan format sementara agar rapat lanjut ke inti.", "memfasilitasi kesepakatan dan menjaga fokus rapat"], ["Mengusulkan agar perdebatan dilanjutkan oleh keduanya di luar rapat setelah agenda inti selesai.", "menjaga fokus tetapi belum membantu titik temu"], ["Diam saja menyimak perdebatan sampai {pimp} turun tangan menengahi kedua rekan tersebut.", "pasif"], ["Menyela dan menyebut perdebatan soal format itu hanya membuang waktu rapat yang berharga.", "memperkeruh suasana"]],
    ["{Rekan} meminta bantuan Anda menyelesaikan {dok} padahal pekerjaan Anda sendiri juga hampir tenggat.", ["Menjelaskan kondisi beban kerja Anda, menawarkan bantuan pada bagian tertentu setelah tugas selesai, dan menyepakati waktunya.", "jujur dan menyepakati bantuan yang realistis"], ["Membantu seketika walau tugas sendiri jadi terlambat karena merasa tidak enak untuk menolak.", "membantu tetapi mengorbankan tenggat sendiri"], ["Menolak singkat tanpa penjelasan karena merasa permintaan itu bukan urusan Anda sama sekali.", "kurang empati dan tidak solutif"], ["Mengiyakan lalu mengabaikan permintaan itu sampai rekan tersebut menagih kembali dengan kesal.", "janji tidak ditepati"]],
  ]],
  KD: ["Kesadaran diri: menerima umpan balik dan mengelola emosi", [
    ["{Pimp} mengatakan analisis dalam {dok} yang Anda susun masih dangkal dan melewatkan pengujian penting.", ["Menerima koreksi, menanyakan bagian yang perlu dipertajam, dan segera menyusun perbaikan.", "terbuka pada umpan balik dan segera bertindak"], ["Mencatat seluruh masukan lalu meminta waktu mempelajarinya sebelum menanggapi koreksi tersebut.", "tenang namun menunda klarifikasi"], ["Mengiyakan semua kritik tanpa bertanya agar pembahasan cepat berakhir di ruangan itu.", "pasif dan tidak belajar"], ["Membela diri dengan alasan beban kerja Anda paling berat pekan ini dibanding yang lain.", "defensif"]],
    ["Anda menyadari sering tergesa-gesa memeriksa angka kecil pada {dok} ketika tenggat berdekatan.", ["Menyusun daftar periksa mandiri, memberi jeda ulas sebelum finalisasi, dan memakai rumus cek silang otomatis.", "membangun sistem kendali atas kelemahan diri"], ["Meminta rekan memeriksa seluruh angka hasil kerja Anda setiap kali tenggat mendekat.", "menggantungkan kendali mutu pada orang lain"], ["Berusaha lebih hati-hati saja dalam hati tanpa mengubah cara kerja sama sekali.", "niat tanpa mekanisme"], ["Menghindari tugas yang memuat banyak angka dan meminta dialihkan ke pegawai lain.", "menghindar dari tanggung jawab"]],
    ["{Tgl}, Anda merasa lelah dan mudah tersinggung ketika {rekan} bertanya berulang soal {dok}.", ["Mengambil jeda singkat untuk menenangkan diri, lalu menjawab dengan sabar dan menuliskan jawabannya agar tidak ditanyakan lagi.", "mengelola emosi dan mencegah pengulangan"], ["Meminta rekan itu bertanya lagi besok setelah Anda cukup beristirahat dan lebih tenang.", "menjaga nada namun menunda koordinasi"], ["Memaksakan diri terus bekerja sambil menahan kesal sepanjang hari tanpa istirahat sama sekali.", "emosi menumpuk berisiko meledak"], ["Menjawab dengan nada tinggi agar rekan itu tidak bertanya lagi kepada Anda.", "merusak hubungan kerja"]],
    ["Anda diminta menilai kekuatan dan kelemahan diri untuk profil kompetensi yang akan dibaca {pimp}.", ["Menilai jujur berdasarkan bukti capaian dan mencatat dua area pengembangan sesuai umpan balik yang pernah diterima.", "objektif berbasis bukti dan terbuka"], ["Menulis kekuatan dari hasil kerja terakhir dan mengosongkan kelemahan karena belum ada keluhan.", "kurang reflektif"], ["Memilih nilai tengah di hampir semua butir agar tampak rendah hati dan aman.", "menghindari evaluasi nyata"], ["Mengisi nilai tertinggi di semua aspek agar terlihat siap dipromosikan ke jabatan lebih tinggi.", "tidak objektif"]],
    ["Anda melakukan kesalahan input pada {dok} yang baru dikirim ke {unit}.", ["Segera mengakui kesalahan, mengirim ralat bertanda versi revisi, dan mengecek ulang bagian lain.", "bertanggung jawab dan transparan"], ["Mengirim ulang berkas yang sudah benar tanpa menyebut bahwa berkas sebelumnya keliru.", "memperbaiki namun membingungkan penerima"], ["Menunggu rapat berikutnya untuk menyampaikan secara lisan bahwa ada angka yang perlu diperbaiki.", "terlambat menyampaikan"], ["Membiarkan kesalahan itu dengan harapan tidak ada yang menyadarinya.", "tidak bertanggung jawab"]],
  ]],
  LD: ["Literasi digital: keamanan data, etika digital, dan adaptasi teknologi", [
    ["Anda menerima surel yang mengaku dari {unit} dan meminta Anda segera mengeklik tautan asing untuk memperbarui kata sandi.", ["Memeriksa alamat pengirim, tidak mengeklik tautan, lalu mengonfirmasi ke {unit} dan melaporkannya ke tim keamanan TI.", "mengenali phishing dan melapor"], ["Meneruskan surel itu ke grup rekan untuk menanyakan apakah mereka juga menerimanya.", "berisiko menyebarkan tautan berbahaya"], ["Menghapus surel itu tanpa memberi tahu siapa pun di kantor.", "aman bagi diri sendiri tetapi tidak melindungi kantor"], ["Mengeklik tautan itu agar akun tidak terblokir dan pekerjaan tidak terganggu.", "terjebak phishing"]],
    ["Anda perlu membagikan {dok} yang bersifat terbatas kepada tim saat bekerja di luar kantor.", ["Memakai penyimpanan awan resmi instansi yang terenkripsi dengan hak akses terbatas bagi anggota tim terkait.", "menerapkan standar keamanan data"], ["Mengunggah ke drive pribadi dan membagikan tautan terbuka agar praktis diakses semua anggota.", "tautan terbuka rawan bocor"], ["Menyimpan di flashdisk pribadi tanpa kata sandi lalu menitipkannya kepada rekan yang akan ke kantor.", "mudah hilang dan tanpa enkripsi"], ["Mengirim lewat surel pribadi memakai Wi-Fi umum terbuka di tempat makan.", "rentan disadap"]],
    ["Kantor mewajibkan tanda tangan elektronik untuk {dok} menggantikan tanda tangan basah.", ["Segera mengaktifkan sertifikat elektronik, mempelajari alurnya, dan menggunakannya pada naskah dinas.", "adaptif dan taat aturan"], ["Mengikuti sosialisasi dan menunggu rekan lain memakainya lebih dahulu sebelum ikut beralih.", "menunggu orang lain"], ["Menunda aktivasi dan tetap mencetak dokumen selama petugas arsip masih menerimanya.", "menunda adaptasi"], ["Menolak karena menganggap tanda tangan elektronik kurang sah dibandingkan tanda tangan basah.", "keliru memahami keabsahan"]],
    ["Untuk menganalisis {dok}, muncul situs tak dikenal yang menawarkan aplikasi bajakan gratis.", ["Menghindari situs itu dan memakai aplikasi resmi atau sumber terbuka tepercaya dengan persetujuan {unit}.", "mematuhi legalitas dan keamanan siber"], ["Meminta rekan mencarikan tautan unduhan yang dianggap aman tanpa berkonsultasi dengan {unit}.", "melewati tata kelola TI"], ["Memasang aplikasi itu di laptop pribadi lalu memindahkan hasilnya ke komputer kantor.", "tetap membawa risiko ke perangkat kantor"], ["Mengunduh dan memasangnya di komputer kantor agar pekerjaan cepat selesai.", "melanggar hukum dan membuka risiko malware"]],
    ["Muncul pesan viral berisi aturan baru terkait {dok} tanpa sumber yang jelas {tgl}.", ["Menelusuri dasar hukum atau pengumuman resmi di kanal instansi sebelum menyebarkan atau menerapkannya.", "memverifikasi hoaks sebelum bertindak"], ["Menanyakan pendapat rekan di ruangan apakah pesan itu benar sebelum meneruskannya.", "validasi berbasis opini rekan"], ["Menyimpan pesan itu dan menunggu pimpinan menyinggungnya dalam rapat.", "pasif"], ["Membagikan pesan itu ke semua grup karena banyak orang sudah membagikannya.", "ikut menyebarkan hoaks"]],
  ]],
  INT: ["Integritas: jujur, taat aturan, menolak gratifikasi dan intervensi", [
    ["Anda tiba terlambat lima belas menit karena macet, sementara presensi elektronik menutup kehadiran tepat waktu pada pukul 07.30.", ["Tetap melakukan presensi apa adanya, melapor ke atasan, dan mengganti waktu kerja yang tertunda.", "jujur dan akuntabel"], ["Melakukan presensi lalu menulis alasan kemacetan di aplikasi tanpa memberi tahu atasan langsung.", "jujur namun minim komunikasi"], ["Langsung bekerja tanpa presensi agar keterlambatan tidak tercatat di sistem kehadiran.", "menghindari pencatatan"], ["Meminta rekan memindai kartu Anda agar tercatat hadir tepat waktu.", "memalsukan presensi"]],
    ["Pemohon layanan yang berkasnya cepat selesai meninggalkan amplop uang terima kasih di meja Anda.", ["Menolak dengan santun, mengembalikan amplop, dan menjelaskan bahwa layanan instansi bebas biaya dan gratifikasi.", "menolak dan mengedukasi"], ["Mengembalikan amplop saat pemohon masih di tempat tanpa menjelaskan aturan gratifikasi.", "menolak tanpa edukasi"], ["Menerima amplop lalu menyerahkannya ke kas sosial ruangan agar tidak dipakai pribadi.", "tetap menerima gratifikasi"], ["Menyimpan amplop sebagai uang lelah karena layanan sudah sesuai prosedur.", "melanggar kode etik"]],
    ["{Pimp} meminta Anda mempercepat berkas kerabatnya yang belum melengkapi dua dokumen syarat.", ["Menolak dengan sopan dan menjelaskan bahwa semua berkas harus lengkap sesuai prosedur sebelum diproses.", "teguh pada prosedur secara santun"], ["Menunda berkas itu di laci tanpa menjelaskan aturan kepada atasan yang meminta.", "menghindar tanpa keberanian menjelaskan"], ["Meminta rekan menandatangani berkas agar risiko kesalahan prosedur tidak Anda tanggung sendiri.", "melempar risiko"], ["Memproses berkas itu diam-diam demi menjaga hubungan kerja dengan atasan.", "melanggar integritas"]],
    ["Biaya penginapan riil perjalanan dinas Anda lebih rendah daripada batas maksimal standar biaya.", ["Melaporkan sesuai kuitansi riil dan menyetor sisa uang muka ke bendahara pengeluaran.", "jujur dan transparan pada keuangan"], ["Menyerahkan kuitansi riil ke staf administrasi dan membiarkannya menghitung sisa yang harus disetor.", "jujur namun pasif"], ["Memakai selisih anggaran untuk membeli oleh-oleh bagi rekan satu ruangan.", "menyalahgunakan dana"], ["Meminta kuitansi sebesar batas maksimal agar selisihnya bisa dipakai sendiri.", "memalsukan bukti"]],
    ["Anda tidak sengaja menghapus lembar data {dok} yang harus dikirim pagi ini.", ["Mengakui kekeliruan kepada atasan, memulihkan data dari cadangan atau menyusunnya ulang secepatnya.", "bertanggung jawab atas kesalahan"], ["Mengirim berkas tanpa lembar itu dulu dan menyusulkannya besok bila tidak ada yang bertanya.", "tidak transparan soal kelengkapan"], ["Meminta rekan menyusun ulang lembar itu karena ia menyimpan salinan lama.", "mengalihkan pekerjaan"], ["Mengatakan gangguan komputer menghilangkan file itu dengan sendirinya semalam.", "berbohong"]],
  ]],
  KS: ["Kerja sama: kolaborasi, pembagian tugas adil, dan koordinasi lintas unit", [
    ["Ada {rekan} baru di tim yang kesulitan mengikuti ritme kerja sehingga tugas {dok} sering terlambat.", ["Mengajaknya berdiskusi pribadi, menanyakan kendala, dan membimbing cara kerjanya.", "memberdayakan rekan dengan bimbingan"], ["Mengambil alih bagian tugasnya diam-diam agar tim tetap tepat waktu.", "menyelesaikan jangka pendek tanpa mendidik"], ["Membiarkannya belajar sendiri menghadapi tekanan kerja instansi pemerintah.", "pasif"], ["Melaporkan kinerjanya kepada {pimp} agar segera ditegur secara resmi.", "kurang membangun solidaritas"]],
    ["Tim Anda mendapat tugas menyusun {dok} dalam empat hari.", ["Membagi bagian sesuai keahlian, menyepakati tenggat tiap bagian, dan menggabungkannya bersama.", "pembagian adil dan terkoordinasi"], ["Menyusun kerangka sendiri dulu lalu membagi sisa pekerjaan di hari kedua.", "kurang partisipatif di tahap awal"], ["Menyerahkan sebagian besar penulisan kepada satu orang yang paling cepat mengetik.", "beban timpang"], ["Membiarkan tiap orang memilih bagian sendiri lalu mengumpulkannya di sore hari keempat.", "berisiko bentrok dan terlambat"]],
    ["Penyusunan program kerja Anda membutuhkan data dari {unit} yang sedang sibuk.", ["Menghubungi narahubung {unit} sejak awal dengan daftar kebutuhan jelas dan menyepakati jadwal kirim bertahap.", "koordinasi terencana lintas unit"], ["Menitipkan permintaan lisan kepada staf {unit} saat berpapasan tanpa menyebut rincian data.", "rawan terlupa"], ["Memakai data tahun lalu agar tidak mengganggu kesibukan {unit}.", "menurunkan akurasi"], ["Mengirim permintaan mendadak di hari tenggat dan mendesak segera dipenuhi.", "memicu konflik lintas unit"]],
    ["Anggota tim mengkritik jadwal kegiatan usulan Anda yang dianggap terlalu padat.", ["Menghargai masukan, membahas titik jadwal yang padat, dan menyusun ulang jadwal yang lebih realistis bersama.", "terbuka dan kolaboratif"], ["Mencatat semua keluhan tanpa mengubah jadwal dan melihat pelaksanaan hari pertama.", "mendengar tanpa menindaklanjuti"], ["Mundur dari peran koordinator dan membiarkan pengkritik menyusun ulang jadwal.", "emosional"], ["Mempertahankan jadwal karena sudah lama menyusunnya sejak pekan lalu.", "kaku"]],
    ["Dua anggota tim berbeda pendapat tentang urutan penyajian {dok} sehingga diskusi buntu.", ["Menengahi dengan merangkum tujuan, menyatukan poin kuat kedua usulan, dan mengajak menyepakati satu urutan.", "pemersatu yang berorientasi tujuan bersama"], ["Meminta {pimp} mengambil alih keputusan karena tim dianggap tidak mampu sepakat.", "kurang upaya penyelesaian di tingkat tim"], ["Diam agar tidak dianggap memihak salah satu rekan yang berselisih.", "pasif"], ["Menghentikan diskusi dan membatalkan agenda sampai keduanya berdamai sendiri.", "mengorbankan jadwal kerja"]],
  ]],
  KOM: ["Komunikasi: menyampaikan dan mengklarifikasi informasi secara jelas dan santun", [
    ["Anda diminta menjelaskan perubahan prosedur terkait {dok} kepada pegawai dari berbagai usia.", ["Menyajikan alur langkah demi langkah dengan bahasa sederhana, contoh layar, dan sesi tanya jawab.", "menyesuaikan bahasa dan media dengan audiens"], ["Menjelaskan lisan cepat saat apel pagi tanpa panduan tertulis pendukung.", "terlalu singkat tanpa rujukan"], ["Membagikan salinan peraturan tiga puluh halaman ke grup pesan untuk dibaca sendiri-sendiri.", "sulit dicerna cepat"], ["Memakai banyak istilah teknis agar terdengar profesional di depan peserta.", "berjarak dengan audiens"]],
    ["Perwakilan {unit} menyampaikan keluhan panjang bernada kecewa soal keterlambatan {dok} dari unit Anda.", ["Menyimak tuntas, mengakui ketidaknyamanannya, lalu menjelaskan status dan target penyelesaian.", "mendengar aktif dan memberi kejelasan"], ["Meminta ia menemui {pimp} setelah rapat agar penjelasan disampaikan oleh pimpinan.", "mengalihkan tanpa penjelasan awal"], ["Menatap ponsel selagi ia berbicara lalu menjawab singkat bahwa dokumen masih diproses.", "tidak menghargai lawan bicara"], ["Menyela dan menegaskan bahwa unit Anda juga sedang sangat sibuk menangani banyak berkas.", "memicu debat"]],
    ["{Pimp} memberi disposisi yang kurang jelas apakah {dok} dibuat ringkas atau lengkap.", ["Segera mengonfirmasi dengan sopan format yang dibutuhkan sebelum mulai menyusun.", "klarifikasi cepat mencegah kerja ulang"], ["Menyusun dua versi sekaligus sampai lembur meski belum yakin keduanya diperlukan.", "aman tetapi tidak efisien"], ["Menebak maksud pimpinan berdasarkan kebiasaan sebelumnya agar tidak mengganggu waktunya.", "berisiko salah format"], ["Membiarkan disposisi itu sampai pimpinan menanyakan hasilnya beberapa hari kemudian.", "pasif"]],
    ["Anda perlu mengirim surat pengingat kepada {unit} yang belum melengkapi {dok} melewati batas waktu.", ["Menyampaikan pengingat sopan berisi daftar kekurangan, batas tanggal baru, dan kontak bantuan.", "santun, jelas, dan mudah ditindaklanjuti"], ["Menyebut nama surat awal saja tanpa merinci batas waktu pengiriman ulang.", "kurang tenggat jelas"], ["Menulis pesan singkat meminta segera mengirim dokumen tanpa menyebut bagian yang kurang.", "terlalu kabur"], ["Menulis tuduhan bahwa unit itu sengaja menghambat kinerja instansi.", "bernada konfrontatif"]],
    ["Anda harus menyampaikan ringkasan {dok} kepada {pimp} dalam waktu sepuluh menit.", ["Menyusun tiga pesan utama berikut angka kunci dan tindak lanjut, lalu menyampaikannya runtut dengan data pendukung siap ditanyakan.", "ringkas, terstruktur, dan siap diuji"], ["Membacakan seluruh isi dokumen secara berurutan hingga waktu habis.", "tidak memilah pesan kunci"], ["Menyampaikan kesimpulan saja tanpa angka pendukung agar singkat dan cepat.", "kurang bukti"], ["Menyerahkan dokumen dan meminta pimpinan membacanya sendiri tanpa penjelasan.", "tidak berkomunikasi"]],
  ]],
  OH: ["Orientasi pada hasil: prioritas, ketelitian, efisiensi, dan evaluasi", [
    ["{Pimp} menugaskan Anda merampungkan {dok} sebelum pukul 15.00, padahal ada dua surat rutin yang tenggatnya lusa.", ["Memprioritaskan dokumen yang mendesak hingga tuntas dan teliti sebelum pukul 15.00, lalu melanjutkan surat rutin.", "prioritas sesuai tenggat dan urgensi"], ["Meminta rekan menyusun dokumen itu agar Anda tetap bisa menyelesaikan surat rutin.", "melepas tanggung jawab utama"], ["Menyelesaikan dua surat rutin dulu agar meja bersih baru mengerjakan dokumen mendesak.", "keliru urutan prioritas"], ["Mengerjakan dokumen itu seadanya setengah jam sebelum rapat dimulai.", "menurunkan mutu hasil"]],
    ["Sebelum menyerahkan {dok} kepada pimpinan, waktu tersisa dua puluh menit.", ["Memeriksa ulang nama, angka, dasar hukum, dan lampiran sebelum menyerahkannya.", "menjamin ketelitian sebelum diserahkan"], ["Meminta petugas pengantar surat memeriksa sekilas kelengkapan halaman dokumen.", "tidak memeriksa substansi"], ["Langsung menyerahkan karena merasa sudah mengikuti contoh dokumen sebelumnya.", "rawan salah salin"], ["Menyerahkan tanpa dicek karena kesalahan bisa diperbaiki setelah ditandatangani.", "merugikan citra unit"]],
    ["Penyusunan rekap {dok} setiap bulan masih memakan dua hari karena diketik ulang dari lima berkas.", ["Membuat templat terhubung otomatis untuk menyatukan data dan menguji akurasinya.", "efisiensi nyata dengan akurasi terjaga"], ["Meminta pengirim data menyalin angka ke satu surel agar lebih cepat dilihat.", "mengurangi beban tapi belum mengatasi salah ketik"], ["Tetap mengetik ulang agar sesuai dengan kebiasaan yang sudah berjalan lama.", "pasif"], ["Mengeluh dan meminta tambahan lembur setiap bulan.", "tidak produktif"]],
    ["Listrik kantor padam satu jam {tgl} saat Anda menyusun {dok}.", ["Memakai waktu padam menelaah dokumen cetak dan menyusun kerangka poin sebelum listrik pulih.", "tetap produktif"], ["Menunggu di meja sambil memberi kabar ke atasan bahwa listrik padam.", "membuang waktu efektif"], ["Mengobrol santai di koridor menunggu genset menyala kembali.", "pasif"], ["Pulang lebih awal karena komputer tidak bisa dipakai.", "melanggar disiplin"]],
    ["Kegiatan yang Anda panitiai selesai tepat waktu namun peserta mengeluhkan sesi praktik terlalu singkat.", ["Merekap umpan balik menjadi usulan tambahan porsi praktik untuk kegiatan berikutnya.", "evaluasi menjadi perbaikan nyata"], ["Membahas keluhan sepintas bersama panitia tanpa mencatat perbaikan.", "tidak terdokumentasi"], ["Menganggap kegiatan sudah sukses karena tepat waktu.", "cepat puas diri"], ["Menyimpan lembar evaluasi tanpa dibaca.", "abai evaluasi"]],
  ]],
  PP: ["Pelayanan publik: adil, ramah, transparan, dan responsif terhadap aduan", [
    ["Seorang kenalan lama meminta berkasnya didahulukan melewati warga yang sudah mengantre sejak pagi.", ["Menolak santun, menjelaskan antrean berlaku adil, dan memintanya mengambil nomor antrean.", "adil dan bebas perlakuan khusus"], ["Memproses diam-diam saat jam istirahat agar tidak terlihat pengantre lain.", "tetap melanggar keadilan secara tersembunyi"], ["Meminta warga di depan mengalah demi kenalan Anda.", "membebani warga lain"], ["Melayaninya lebih dulu supaya ia tidak kecewa.", "diskriminatif"]],
    ["Seorang warga lanjut usia kebingungan mengisi formulir daring di anjungan layanan.", ["Menghampiri dengan ramah dan menuntunnya mengisi tahap demi tahap hingga selesai.", "layanan inklusif dan solutif"], ["Menunjuk petunjuk di dinding dan memintanya membaca sendiri dulu.", "kurang membantu"], ["Memintanya kembali besok bersama keluarga yang lebih muda.", "menyulitkan warga"], ["Menyuruhnya mengisi seadanya lalu mengembalikan berkas bila ada yang kurang.", "buruk dalam pelayanan"]],
    ["Pemohon menanyakan kapan layanannya selesai dan apakah ada biaya tambahan.", ["Menjelaskan estimasi waktu sesuai standar layanan, menyatakan tidak ada biaya tambahan, dan memberi tanda terima.", "transparan dan terdokumentasi"], ["Memintanya membaca brosur karena informasi sudah tercetak di sana.", "kurang komunikatif"], ["Menjawab singkat agar ia menunggu panggilan telepon.", "tidak memberi kepastian"], ["Menjanjikan selesai dalam dua jam padahal belum mengecek antrean tanda tangan.", "janji tidak realistis"]],
    ["Masyarakat mengadu lewat kanal resmi bahwa tautan formulir di situs kantor tidak bisa dibuka dua hari.", ["Mengecek tautan, berkoordinasi dengan {unit} untuk memperbaikinya, dan membalas aduan dengan tautan aktif.", "respons cepat dan tuntas"], ["Meneruskan laporan ke {unit} lalu menunggu seminggu sebelum memberi kabar ke pelapor.", "kurang responsif"], ["Membalas terima kasih tanpa mengecek atau meneruskan perbaikan.", "formalitas belaka"], ["Menghapus komentar aduan agar citra kantor terjaga.", "anti kritik"]],
    ["Pemohon marah karena merasa dipersulit oleh aturan baru terkait {dok}.", ["Menenangkannya, mendengar keluhannya, lalu menjelaskan aturan beserta cara memenuhinya dengan sabar.", "empati dan kejelasan solusi"], ["Menyarankannya menulis keluhan di kotak saran tanpa menjelaskan aturan.", "menghindari penjelasan langsung"], ["Menegaskan bahwa aturan tidak bisa diubah lalu memanggil pemohon berikutnya.", "kaku"], ["Meminta petugas keamanan mengeluarkannya dari ruangan.", "memicu eskalasi"]],
  ]],
  PD: ["Pengembangan diri dan orang lain: belajar mandiri, membimbing, dan berbagi ilmu", [
    ["Pekerjaan mulai menuntut kemampuan menyusun infografis untuk {dok}, sementara keterampilan desain Anda terbatas.", ["Mempelajari panduan dasar dan aplikasi desain, berlatih membuat contoh, lalu meminta umpan balik.", "belajar mandiri aktif"], ["Menunggu pelatihan desain resmi tahun depan sebelum mulai belajar.", "pasif menunggu diklat"], ["Memakai satu templat lama terus-menerus tanpa menyesuaikan isi.", "tidak berkembang"], ["Meminta pekerjaan itu dialihkan ke pegawai lain.", "menghindar"]],
    ["{Rekan} baru bergabung dan belum pernah mengerjakan {dok}.", ["Menjelaskan alur dengan contoh, mendampingi tugas awal, lalu mereviu hasilnya dengan umpan balik.", "bimbingan bertahap"], ["Memberinya buku pedoman untuk dibaca beberapa hari tanpa praktik.", "terlalu teoretis"], ["Memintanya mengerjakan sendiri berbekal contoh lama.", "melepas tanpa arah"], ["Hanya menyuruhnya mengantar surat.", "meniadakan proses belajar"]],
    ["Dalam evaluasi, {pimp} menilai penyampaian paparan Anda terlalu terburu-buru.", ["Berterima kasih, berlatih mengatur tempo, dan meminta masukan lagi setelah paparan berikutnya.", "mengubah umpan balik menjadi latihan"], ["Menerima catatan itu tanpa melakukan latihan perubahan.", "tanpa rencana aksi"], ["Tidak lagi bersedia menjadi penyaji paparan.", "menghindar"], ["Menganggap peserta rapat kurang fokus menyimak.", "menyalahkan audiens"]],
    ["Anda baru mengikuti bimbingan teknis fitur aplikasi pengolah {dok}.", ["Membagikan contoh dan panduan singkat serta mengadakan sesi praktik bersama rekan.", "menyebarkan ilmu secara aktif"], ["Menawarkan diri mengerjakan bagian rekan tanpa mengajarkan caranya.", "membantu tanpa transfer keahlian"], ["Menyebut nama situs pelatihan bila ada yang bertanya.", "pasif"], ["Menyimpan ilmunya untuk diri sendiri agar tampak menonjol.", "egois"]],
    ["Anda menyadari metode kerja lama untuk {dok} tidak lagi memadai karena volume data meningkat.", ["Mempelajari alat pengolah data yang lebih sesuai, mencobanya pada data latihan, dan mendokumentasikan alurnya untuk tim.", "inisiatif peningkatan kompetensi"], ["Memecah data menjadi banyak berkas agar tetap memakai cara lama.", "solusi darurat yang lambat"], ["Menunggu bimbingan teknis resmi dari kantor pusat.", "pasif"], ["Selalu meminta bantuan {unit} setiap kali data banyak.", "ketergantungan"]],
  ]],
  MP: ["Mengelola perubahan: adaptif, mendampingi rekan, dan terbuka pada pembaruan", [
    ["Instansi beralih ke sistem persuratan digital untuk {dok}. Pegawai senior mengeluh kesulitan.", ["Mempelajari sistem lebih dulu lalu mendampingi rekan senior secara sabar dan bertahap.", "agen perubahan yang membimbing"], ["Mengambil alih penginputan mereka agar antrean tetap lancar.", "menghambat kemandirian"], ["Membiarkan mereka memakai cara manual.", "membiarkan adopsi gagal"], ["Melaporkan mereka ke pimpinan agar ditegur.", "menghukum tanpa pendampingan"]],
    ["{Pimp} baru menerapkan pelaporan mingguan setiap Jumat pagi, berbeda dari kebiasaan sebelumnya.", ["Menyesuaikan pencatatan harian agar ringkasan Jumat pagi rapi dan memberi masukan bila ada kendala.", "adaptif dan komunikatif"], ["Mengumpulkan laporan Jumat seadanya demi menggugurkan kewajiban.", "asal memenuhi"], ["Tetap melapor akhir bulan berharap aturan dilupakan.", "abai"], ["Mengeluhkan kebijakan baru kepada rekan.", "resisten"]],
    ["Format {dok} diganti mulai lusa, padahal masih banyak formulir lama di meja.", ["Menarik stok lama, menyiapkan versi baru, dan memasang pemberitahuan bagi petugas serta pemohon.", "transisi tertib dan seragam"], ["Menyiapkan formulir baru untuk diri sendiri tanpa memberi tahu petugas lain.", "kurang koordinasi tim"], ["Menghabiskan stok lama selama sebulan.", "melanggar keberlakuan format baru"], ["Tetap memakai format lama karena isinya dianggap mirip.", "mengabaikan standar baru"]],
    ["Seorang pegawai muda mengusulkan survei kepuasan berbasis kode QR menggantikan kotak saran kertas untuk {dok}.", ["Mengapresiasi ide itu, mengujicobakannya paralel dua minggu, dan mengevaluasi hasilnya.", "terbuka pada inovasi dengan uji terukur"], ["Memuji ide itu secara lisan tanpa menindaklanjuti.", "hanya retorika"], ["Menolak karena tradisi kotak saran dianggap lebih aman.", "kaku"], ["Mengabaikan usulan karena berasal dari pegawai baru.", "meremehkan ide"]],
    ["Anda dirotasi ke {unit} yang bidang tugasnya berbeda dari sebelumnya.", ["Mempelajari standar kerja unit baru, mengamati praktik terbaik rekan, dan berlatih hingga mahir.", "menerima rotasi sebagai peluang tumbuh"], ["Meminta tetap mengerjakan tugas lama di unit baru.", "membatasi peran baru"], ["Menjalankan tugas dengan enggan sambil menanyakan kapan dikembalikan.", "setengah hati"], ["Meminta rotasi dibatalkan karena merasa tidak cocok.", "menolak kebijakan organisasi"]],
  ]],
  PK: ["Pengambilan keputusan: berbasis fakta, risiko, dan prioritas", [
    ["Dua vendor mengajukan penawaran untuk {dok}: yang murah belum melampirkan dokumen garansi, yang sedikit lebih mahal lengkap syaratnya.", ["Merekomendasikan vendor yang memenuhi syarat atau memberi batas klarifikasi sesuai aturan pengadaan.", "keputusan berbasis syarat dan aturan"], ["Memilih vendor murah dengan asumsi garansi dapat disusulkan setelah barang tiba.", "berisiko barang tanpa jaminan"], ["Menunda penilaian sampai kedua vendor menjelaskan sendiri.", "menghambat jadwal"], ["Memilih vendor murah karena dianggap paling hemat.", "abai syarat"]],
    ["Server penyimpanan arsip {dok} hampir penuh menjelang libur panjang.", ["Berkoordinasi dengan {unit} memindahkan arsip tidak aktif ke penyimpanan cadangan terverifikasi lalu mengosongkan ruang.", "mengatasi risiko tanpa menghilangkan arsip"], ["Meminta pegawai berhenti mengunggah berkas dua minggu menunggu penambahan kapasitas.", "menghambat operasional"], ["Membiarkan sampai libur selesai karena layanan dianggap sepi.", "berisiko sistem macet"], ["Menghapus arsip lama tanpa cadangan.", "menghilangkan arsip penting"]],
    ["Rapat koordinasi sudah dihadiri tamu, tetapi pendingin ruangan rusak dan {pimp} belum bisa dihubungi.", ["Memindahkan rapat ke ruang cadangan yang nyaman, mengarahkan tamu dengan tertib, dan melapor setelahnya.", "keputusan operasional tepat dalam batas wewenang"], ["Menunda pembukaan rapat sampai pimpinan bisa dihubungi dan mengizinkan pindah ruang.", "membuang waktu tamu"], ["Melanjutkan rapat di ruangan pengap.", "mengorbankan kenyamanan"], ["Membatalkan rapat dan memulangkan tamu.", "mengecewakan mitra"]],
    ["Anggaran pemeliharaan tersisa terbatas: memperbaiki atap ruang arsip yang bocor atau mengecat ulang koridor.", ["Memperbaiki atap ruang arsip lebih dulu untuk melindungi dokumen, lalu menjadwalkan pengecatan.", "prioritas pada perlindungan aset penting"], ["Membagi dana sama rata dan menambal atap seadanya dengan terpal.", "tidak menuntaskan kebocoran"], ["Mengecat koridor lebih dulu supaya tampak rapi bagi tamu.", "mengutamakan penampilan di atas keselamatan arsip"], ["Tidak memakai anggaran sama sekali.", "lalai"]],
    ["Data {dok} yang diterima dari {unit} tampak janggal namun tenggat penyerahan tinggal sehari.", ["Memverifikasi bagian janggal ke {unit} dan memakai data terverifikasi, dengan catatan keterbatasan bila belum tuntas.", "memutuskan berbasis verifikasi dan transparan"], ["Memakai data itu dan menambahkan catatan kecil bahwa mungkin ada kekeliruan.", "tetap memakai data belum teruji"], ["Menunda penyerahan beberapa hari tanpa memberi tahu siapa pun.", "melanggar tenggat tanpa komunikasi"], ["Mengoreksi angka sendiri berdasarkan perkiraan.", "mengubah data tanpa dasar"]],
  ]],
  SB: ["Sosial kultural: menghormati budaya, adat, agama, dan menolak stereotip", [
    ["Anda bertugas di wilayah yang adat dan tata kramanya berbeda dari daerah asal Anda.", ["Mempelajari adat setempat dan menghormati norma yang berlaku tanpa memaksakan kebiasaan asal.", "terbuka dan menghormati budaya"], ["Bersikap acuh terhadap kegiatan adat selama tugas kantor berjalan.", "menjaga jarak sosial"], ["Hanya bergaul dengan rekan sedaerah agar nyaman.", "eksklusif"], ["Menganggap budaya asal lebih modern sehingga warga harus menyesuaikan.", "etnosentris"]],
    ["Jadwal tradisi adat setempat beririsan dengan jam layanan kantor {tgl}.", ["Berkomunikasi dengan tokoh adat untuk mencari titik temu agar layanan dan tradisi sama-sama berjalan.", "dialog inklusif"], ["Meminta tokoh adat menggeser jadwal upacara ke akhir pekan.", "kurang menghormati tradisi"], ["Mengabaikan kegiatan adat demi aturan jam kerja.", "kaku"], ["Meliburkan layanan tanpa persetujuan pimpinan.", "melanggar wewenang"]],
    ["Jadwal piket akhir pekan harus disusun untuk pegawai dengan waktu ibadah berbeda-beda.", ["Mempertimbangkan waktu ibadah tiap pegawai dan membuka tukar jadwal sukarela yang disetujui koordinator.", "adil dan menghormati ibadah"], ["Membiarkan pegawai memilih hari sendiri tanpa pengaturan.", "kurang terkoordinasi"], ["Mengundi jadwal tanpa melihat waktu ibadah.", "abai kebutuhan ibadah"], ["Menugaskan kelompok minoritas selalu piket hari libur mayoritas.", "diskriminatif"]],
    ["Dalam rapat multisuku, dua rekan terus berbahasa daerah sehingga peserta lain tidak paham.", ["Mengajak dengan santun memakai bahasa Indonesia agar semua peserta dapat berpartisipasi.", "menjaga kesetaraan akses komunikasi"], ["Diam menebak isi pembicaraan sampai rapat selesai.", "membiarkan miskomunikasi"], ["Menegur dengan kesal bahwa bahasa daerah dilarang.", "terlalu keras"], ["Ikut berbahasa daerah bersama rekan sedaerah.", "memperburuk sekat kelompok"]],
    ["Seorang rekan menilai pegawai baru dari daerah tertentu pasti lamban karena stereotip budaya.", ["Menyatakan santun bahwa kemampuan dinilai dari kinerja nyata individu, bukan asal daerah.", "meluruskan prasangka secara objektif"], ["Meninggalkan percakapan tanpa meluruskan.", "pasif"], ["Menanyakan rekan lain apakah stereotip itu memang sering terjadi.", "melanggengkan stereotip"], ["Mengangguk setuju agar obrolan tidak berdebat.", "mendukung prasangka"]],
  ]],
  SI: ["Sosial kultural: inklusivitas, empati, dan kesetaraan dalam hubungan kerja", [
    ["Dalam tim, seorang anggota dari kelompok minoritas sering terpinggirkan dalam diskusi informal.", ["Mengajaknya bergabung, menghargai pendapatnya, dan membangun suasana tim yang inklusif.", "membangun rasa diterima"], ["Menegur rekan-rekan keras di depan umum agar malu.", "niat baik tetapi mempermalukan"], ["Membiarkan karena dianggap urusan kecocokan pribadi.", "pasif"], ["Ikut menjaga jarak agar tidak berbeda dari mayoritas.", "ikut mengeksklusifkan"]],
    ["Rumah seorang rekan dari luar daerah terkena banjir sehingga ia izin padahal tim sedang mengejar {dok}.", ["Menanyakan kabar dan kebutuhannya, lalu bersama tim membantu tugas mendesaknya.", "empati dan solidaritas"], ["Menunggu pengumuman penggalangan bantuan resmi sebelum menghubunginya.", "menunggu komando"], ["Menanyakan kapan ia bisa masuk lagi agar jadwal tak meleset.", "kurang empati"], ["Kesal karena ketidakhadirannya menambah beban tim.", "tidak peduli sesama"]],
    ["Seorang rekan merendahkan petugas kebersihan karena minuman rapat terlambat datang.", ["Berterima kasih ramah kepada petugas, membantu kelancaran sajian, dan mengingatkan rekan dengan halus tentang etika.", "menjaga martabat semua mitra kerja"], ["Menyapa petugas setelah acara tanpa menegur rekan.", "menghibur tanpa mencegah pengulangan"], ["Ikut meminta petugas bekerja lebih cepat dengan wajah datar.", "tidak menghargai"], ["Membiarkan karena dianggap bagian dari tuntutan kecepatan.", "mengabaikan perlakuan tidak pantas"]],
    ["Dalam diskusi, pegawai muda yang pendiam sering terpotong saat ingin menyampaikan usulan tentang {dok}.", ["Meminta ruang secara sopan agar ia dapat menyampaikan gagasannya dengan utuh.", "keadilan partisipasi"], ["Tersenyum kepadanya tanpa memberi giliran bicara.", "simpatik tetapi tidak memberi ruang"], ["Menyuruhnya menulis ide lewat surel setelah rapat.", "meminggirkan partisipasi"], ["Melanjutkan diskusi dengan yang vokal agar cepat selesai.", "tidak inklusif"]],
    ["Info perubahan jadwal sering hanya tersebar saat makan siang bersama sehingga pegawai yang membawa bekal tertinggal.", ["Membiasakan pembaruan jadwal dikirim di grup resmi tim agar semua mendapat informasi serentak.", "akses informasi merata"], ["Menghampiri meja mereka bila kebetulan sempat.", "rawan terlewat"], ["Meminta mereka selalu ikut makan siang di kantin.", "memaksakan kebiasaan pribadi"], ["Menganggap itu tanggung jawab masing-masing untuk bertanya.", "tidak kolaboratif"]],
  ]],
  SM: ["Sosial kultural: meredam konflik SARA, menjaga netralitas, dan memediasi", [
    ["Perdebatan antarrekan di unit mulai menyinggung isu suku dan agama sehingga suasana tegang.", ["Mengajak kedua pihak mendinginkan suasana, berdialog terbuka, dan mengingatkan pentingnya toleransi.", "mendinginkan emosi dan meneguhkan toleransi"], ["Langsung melapor ke aparat hukum tanpa upaya mendamaikan.", "eskalasi tanpa mediasi"], ["Menjauh dan berpura-pura tidak mendengar.", "pasif"], ["Membela rekan dari kelompok yang sama dengan Anda.", "memperdalam perpecahan"]],
    ["Warga menuduh petugas loket mempersulit karena alasan daerah asal, padahal ia salah paham aturan baru.", ["Menenangkan kedua pihak, mendengar keluhan secara objektif, lalu menjelaskan aturan yang sama bagi semua.", "empati dan keadilan prosedur"], ["Meminta warga menulis pengaduan di kotak saran tanpa penjelasan.", "menghindari penjelasan langsung"], ["Membela petugas dengan suara keras di depan antrean.", "memicu eskalasi"], ["Meminta keamanan mengeluarkan warga.", "memicu konflik"]],
    ["Menjelang pilkada, teman mengirim konten provokatif dan mengajak Anda ikut menyebarkannya.", ["Menolak menyebarkan, mengingatkan netralitas ASN dan bahaya hoaks, lalu tidak memperpanjang debat.", "menjaga netralitas dan mencegah provokasi"], ["Menghapus pesan diam-diam tanpa memberi respons.", "aman pribadi namun kurang edukatif"], ["Menanyakan kebenarannya di grup kantor agar ramai dikomentari.", "menyebarkan ke ruang kerja"], ["Membagikan ke lingkaran dekat yang sependapat.", "melanggar netralitas ASN"]],
    ["Dua rekan saling menghindar setelah berselisih panas sehingga koordinasi {dok} terhambat.", ["Mendekati keduanya secara santai dan mengajak membahas fokus kerja bersama untuk mencairkan hubungan.", "membantu rekonsiliasi"], ["Meminta atasan memisahkan mereka ke tim berbeda.", "menghindari pemulihan hubungan"], ["Menjadi pembawa pesan di antara keduanya terus-menerus.", "koordinasi tidak efisien"], ["Membiarkan mereka agar belajar dewasa.", "membiarkan kinerja tim terganggu"]],
    ["Pemuda setempat mendatangi posko tim peninjau proyek jalan kampung karena mengira proyek akan dihentikan.", ["Menemui perwakilan dengan tenang, mendengar aspirasi, dan menjelaskan peninjauan bertujuan menjaga mutu serta manfaat proyek.", "meluruskan salah paham dengan damai"], ["Meminta pegawai dinas setempat yang menghadapi mereka.", "melempar risiko"], ["Menjanjikan hasil peninjauan pasti baik agar mereka pulang.", "melanggar independensi"], ["Menyuruh keamanan mengusir mereka.", "memicu eskalasi"]],
  ]],
};
const SJT_PLAN = [
  ["BK", "potensi_perilaku", 36], ["PM", "potensi_perilaku", 36], ["IP", "potensi_perilaku", 36], ["KD", "potensi_perilaku", 36], ["LD", "potensi_perilaku", 36],
  ["INT", "manajerial", 45], ["KS", "manajerial", 45], ["KOM", "manajerial", 36], ["OH", "manajerial", 45], ["PP", "manajerial", 36], ["PD", "manajerial", 36], ["MP", "manajerial", 45], ["PK", "manajerial", 36],
  ["SB", "sosiokultural", 45], ["SI", "sosiokultural", 45], ["SM", "sosiokultural", 36],
];
const OPENERS = [
  "{Tgl}, saat Anda bertugas di {unit}, ",
  "{Tgl}, dalam rangka penyelesaian tugas kedinasan di {unit}, ",
  "{Tgl}, ketika menangani agenda pelayanan di {unit}, ",
  "{Tgl}, sewaktu berkoordinasi menyelesaikan pekerjaan di {unit}, ",
  "{Tgl}, menjelang batas akhir penyampaian laporan di {unit}, ",
  "{Tgl}, di tengah persiapan rapat koordinasi internal di {unit}, ",
  "{Tgl}, saat beban kerja sedang meningkat di {unit}, ",
  "{Tgl}, dalam pelaksanaan pemantauan kinerja tim di {unit}, ",
  "{Tgl}, saat mendampingi pelaksanaan tugas administrasi di {unit}, ",
  "{Tgl}, ketika menjalankan tugas harian di {unit}, ",
];
const ELAB = {
  3: [
    " demi menjaga kepatuhan terhadap alur birokrasi yang berlaku.",
    " sambil menunggu instruksi dan arahan tertulis lebih lanjut dari pimpinan.",
    " agar seluruh proses koordinasi terdokumentasi dengan tertib dan rapi.",
    " untuk memastikan tidak ada tahapan verifikasi yang terlewatkan.",
    " sebagai langkah kehati-hatian dalam menjalankan prosedur kedinasan.",
  ],
  2: [
    " dengan pertimbangan untuk memprioritaskan tugas rutin pribadi terlebih dahulu.",
    " karena menganggap persoalan tersebut merupakan ranah tanggung jawab unit kerja lain.",
    " agar tidak memicu perdebatan yang berpotensi menghambat ritme kerja tim.",
    " demi mencegah timbulnya kesalahpahaman antarsesama rekan kerja di kantor.",
    " dengan harapan koordinasi dapat berjalan lebih cepat tanpa birokrasi tambahan.",
  ],
  1: [
    " karena merasa hal tersebut di luar rincian tugas pokok dan fungsi jabatan Anda.",
    " agar pekerjaan dapat segera diselesaikan tanpa memerlukan waktu verifikasi berulang.",
    " demi menjaga agar beban tugas harian tidak semakin bertumpuk di meja kerja.",
    " dengan asumsi kendala operasional tersebut akan terselesaikan dengan sendirinya.",
    " untuk mempersingkat waktu pengerjaan demi mengejar batas akhir pelaporan.",
  ],
};

function genSJT() {
  const out = [];
  let n = 0;
  SJT_PLAN.forEach(([key, subtes, need]) => {
    const [indikator, cores] = CORES[key];
    const V = Math.ceil(need / cores.length);
    const pool = [];
    cores.forEach((core, ci) => {
      for (let v = 0; v < V; v++) {
        const idx = {
          rekan: (v + ci) % 10, dok: (v * 3 + ci) % 10, unit: (v * 7 + ci * 2) % 10,
          tgl: (v * 9 + ci) % 10, pimp: (v + ci * 3 + 4) % 10,
        };
        const rawScen = core[0];
        let cleanScen = rawScen.replace(/^\{(tgl|Tgl)\},\s*/, "");
        cleanScen = cleanScen.charAt(0).toLowerCase() + cleanScen.slice(1);
        const fullScen = OPENERS[v % OPENERS.length] + cleanScen;
        pool.push({ core, idx, fullScen, v });
      }
    });
    shuffle(pool).slice(0, need).forEach(({ core, idx, fullScen, v }) => {
      const [, o4, o3, o2, o1] = core;
      const rawOpts = [o4, o3, o2, o1];
      const opts = rawOpts.map((o, idxOpt) => {
        const score = 4 - idxOpt;
        let txt = cap(fill(o[0], idx));
        if (score < 4 && ((v + score) % 2 === 0 || txt.length < 65)) {
          txt = txt.replace(/\.\s*$/, "") + ELAB[score][(v + idxOpt) % ELAB[score].length];
        }
        return { teks: txt, r: o[1] };
      });
      const t = nextT();
      out.push(buildWeighted(`BKN-X-${key}-${String(++n).padStart(3, "0")}`, subtes, A[key], indikator, cap(fill(fullScen, idx)) + " Sikap atau tindakan Anda adalah ...", opts, t));
    });
  });
  return out;
}

/* ---------- rakit ---------- */
const all = [].concat(genVerbal(), genNumerik(), genLogis(), genSpasial(), genSJT());
if (all.length !== 900) throw new Error("Jumlah soal " + all.length);
const ids = new Set(all.map((q) => q.id));
if (ids.size !== 900) throw new Error("ID tidak unik");
if (tIdx !== 900) throw new Error("target terpakai " + tIdx);
const dup = new Set();
for (const q of all) {
  const k = (q.stimulus || "") + "|" + q.pertanyaan + "|" + q.opsi.map((o) => o.teks).join("/");
  if (dup.has(k)) throw new Error("duplikat: " + q.id);
  dup.add(k);
}
const outPath = path.join(__dirname, "..", "data", "bank-soal-bkn-ekstra.js");
fs.writeFileSync(outPath,
  "/* 900 soal tambahan Level 1 (Standar CAT BKN). Dihasilkan oleh tools/gen_bank_bkn_ekstra.js (seed tetap). */\nwindow.BANK_BKN_EKSTRA = " + JSON.stringify(all) + ";\n");
console.log("Ditulis:", outPath, "soal:", all.length, "ukuran KB:", Math.round(fs.statSync(outPath).size / 1024));
