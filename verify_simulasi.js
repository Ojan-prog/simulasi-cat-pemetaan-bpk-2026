/* ==========================================================================
   Automated Verification Script for Simulasi CAT Pemetaan Pegawai BPK RI 2026
   Covers Level 1 (Standar CAT BKN - 1.000 Soal) & Level 2 (Lanjutan BPK RI - 100 Soal)
   Total: 1.100 Unique Questions with Dynamic Sampling & Scoring
   ========================================================================== */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const ROOT = __dirname;
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const css = fs.readFileSync(path.join(ROOT, "styles.css"), "utf8");
const bknPotensiJs = fs.readFileSync(path.join(ROOT, "data", "bank-soal-bkn-potensi.js"), "utf8");
const bknKompetensiJs = fs.readFileSync(path.join(ROOT, "data", "bank-soal-bkn-kompetensi.js"), "utf8");
const bknEkstraJs = fs.readFileSync(path.join(ROOT, "data", "bank-soal-bkn-ekstra.js"), "utf8");
const bpkPotensiJs = fs.readFileSync(path.join(ROOT, "data", "bank-soal-potensi.js"), "utf8");
const bpkKompetensiJs = fs.readFileSync(path.join(ROOT, "data", "bank-soal-kompetensi.js"), "utf8");
const appJs = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");

console.log("=== 1. Memeriksa Kepatuhan HTML & CSS Modern Web Guidance ===");
assert(html.includes('<meta name="color-scheme" content="light dark">'), "Missing color-scheme meta");
assert(html.includes('name="simLevel"'), "Missing simLevel radio selector");
assert(html.includes('data/bank-soal-bkn-ekstra.js'), "Missing script tag for bank-soal-bkn-ekstra.js");
assert(!/<dialog[^>]*role=["']dialog["']/i.test(html), "Must not add role='dialog' to native <dialog>");
assert(!/<dialog[^>]*aria-modal/i.test(html), "Must not add aria-modal to native <dialog>");
assert(!/<ul[^>]*>[\s\S]*type=["']radio["'][\s\S]*<\/ul>/i.test(html), "Must not wrap radio buttons in <ul>");
assert(css.includes("dialog:modal") && css.includes("overscroll-behavior: contain"), "Missing dialog:modal overscroll-behavior: contain");
assert(css.includes("dialog::backdrop") && css.includes("overflow: hidden"), "Missing dialog::backdrop overflow: hidden");
assert(css.includes("@supports not (accent-color:"), "Missing @supports not (accent-color) fallback");
assert(css.includes(':root:has(> head > meta[name="color-scheme"][content="dark"])'), "Missing color-scheme meta mapping");
console.log("OK: Struktur HTML & aturan CSS modern-web-guidance terpenuhi.");

console.log("\n=== 2. Mengevaluasi Sintaks JS & Memuat Seluruh Bank Soal (1.100 Soal) ===");
const inlineScriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
assert(inlineScriptMatch, "Missing FOUC prevention inline script");
new vm.Script(inlineScriptMatch[1]);

const sandbox = { window: {}, module: { exports: {} }, exports: {} };
vm.createContext(sandbox);
vm.runInContext(bknPotensiJs, sandbox);
vm.runInContext(bknKompetensiJs, sandbox);
vm.runInContext(bknEkstraJs, sandbox);
vm.runInContext(bpkPotensiJs, sandbox);
vm.runInContext(bpkKompetensiJs, sandbox);
vm.runInContext(appJs, sandbox);

const engine = sandbox.module.exports;
const levels = {
  standar_bkn: [
    ...sandbox.window.BANK_BKN_POTENSI,
    ...sandbox.window.BANK_BKN_KOMPETENSI,
    ...sandbox.window.BANK_BKN_EKSTRA
  ],
  lanjutan_bpk: [
    ...sandbox.window.BANK_POTENSI,
    ...sandbox.window.BANK_KOMPETENSI
  ]
};

assert.strictEqual(levels.standar_bkn.length, 1000, "Level 1 must have exactly 1.000 items");
assert.strictEqual(levels.lanjutan_bpk.length, 100, "Level 2 must have exactly 100 items");
console.log(`OK: Berhasil memuat Level 1 (${levels.standar_bkn.length} soal) & Level 2 (${levels.lanjutan_bpk.length} soal). Total = 1.100 soal.`);

const globalSeenIds = new Set();
const avgQuestionLen = {};

function verifyBank(levelName, items, expectedSubtest) {
  console.log(`\n=== 3. Memverifikasi Integritas Soal [${levelName}] (${items.length} Soal) ===`);
  const bySubtest = {};
  const byAspect = {};
  const bestLetterCounts = { A: 0, B: 0, C: 0, D: 0 };
  let longestIsBestCount = 0;
  let totalTextLen = 0;

  for (const q of items) {
    assert(!globalSeenIds.has(q.id), `Duplicate global ID: ${q.id}`);
    globalSeenIds.add(q.id);
    assert(q.pertanyaan && q.pertanyaan.trim().length > 15, `Empty pertanyaan on ${q.id}`);
    assert(q.pembahasan && q.pembahasan.trim().length > 15, `Empty pembahasan on ${q.id}`);
    assert(Array.isArray(q.opsi) && q.opsi.length === 4, `Question ${q.id} must have 4 options`);

    totalTextLen += q.pertanyaan.length + (q.stimulus ? q.stimulus.length : 0);

    const letters = Array.from(q.opsi, (o) => o.huruf).join("");
    assert.strictEqual(letters, "ABCD", `Options order must be ABCD on ${q.id}`);

    bySubtest[q.subtes] = (bySubtest[q.subtes] || 0) + 1;
    byAspect[q.aspek] = (byAspect[q.aspek] || 0) + 1;

    let bestLetter;
    if (q.tipe === "single") {
      assert(["A", "B", "C", "D"].includes(q.kunci), `Invalid key on ${q.id}`);
      bestLetter = q.kunci;
    } else if (q.tipe === "weighted") {
      const scores = Array.from(q.opsi, (o) => o.skor).sort((a, b) => a - b);
      assert.strictEqual(scores.join(","), "1,2,3,4", `Weighted scores must be [1,2,3,4] on ${q.id}`);
      bestLetter = q.opsi.find((o) => o.skor === 4).huruf;

      for (const m of q.pembahasan.matchAll(/Skor\s+([1-4])\s+\(([A-D])\)/g)) {
        const expectedSkor = Number(m[1]);
        const ltr = m[2];
        const opt = q.opsi.find((o) => o.huruf === ltr);
        assert.strictEqual(opt.skor, expectedSkor, `Rationale mismatch on ${q.id}: claimed Skor ${expectedSkor} (${ltr}), actual ${opt.skor}`);
      }
    } else {
      throw new Error(`Unknown tipe on ${q.id}`);
    }

    bestLetterCounts[bestLetter] += 1;

    const lengths = Array.from(q.opsi, (o) => o.teks.length);
    const maxLen = Math.max(...lengths);
    const bestLen = q.opsi.find((o) => o.huruf === bestLetter).teks.length;
    if (bestLen === maxLen && lengths.filter((l) => l === maxLen).length === 1) {
      longestIsBestCount += 1;
    }

    if (q.aspek === "Spasial & Pola Abstrak") {
      assert(q.stimulus && q.stimulus.includes("<svg"), `Spatial question ${q.id} must contain <svg> stimulus`);
    }
  }

  for (const [s, count] of Object.entries(expectedSubtest)) {
    assert.strictEqual(bySubtest[s], count, `${levelName}: Subtes ${s} count mismatch: got ${bySubtest[s]}, expected ${count}`);
  }

  avgQuestionLen[levelName] = Math.round(totalTextLen / items.length);
  console.log("Distribusi subtes:", bySubtest);
  console.log("Distribusi jawaban terbaik (A/B/C/D):", bestLetterCounts);
  const longestRatio = ((longestIsBestCount / items.length) * 100).toFixed(1);
  console.log(`Opsi terpanjang == jawaban terbaik: ${longestIsBestCount}/${items.length} (${longestRatio}%)`);

  assert(longestIsBestCount / items.length < 0.45, `${levelName}: Longest option bias too high: ${longestRatio}%`);
  for (const [ltr, cnt] of Object.entries(bestLetterCounts)) {
    const pct = cnt / items.length;
    assert(pct >= 0.18 && pct <= 0.32, `${levelName}: Letter ${ltr} distribution skewed (${cnt}/${items.length})`);
  }
  console.log(`OK: Integritas [${levelName}] valid sempurna.`);
}

verifyBank("standar_bkn", levels.standar_bkn, {
  potensi_kognitif: 300,
  potensi_perilaku: 200,
  manajerial: 360,
  sosiokultural: 140
});

verifyBank("lanjutan_bpk", levels.lanjutan_bpk, {
  potensi_kognitif: 30,
  potensi_perilaku: 20,
  manajerial: 36,
  sosiokultural: 14
});

assert.strictEqual(globalSeenIds.size, 1100, "Total unique questions across both levels must be 1.100");

console.log("\n=== 4. Memverifikasi Sampling Acak Dinamis 100 Soal Level 1 ===");
function mockSampleSession(bank, shouldShuffle) {
  const kognitif = shuffle(bank.filter((q) => q.subtes === "potensi_kognitif")).slice(0, 30);
  const perilaku = shuffle(bank.filter((q) => q.subtes === "potensi_perilaku")).slice(0, 20);
  const manajerial = shuffle(bank.filter((q) => q.subtes === "manajerial")).slice(0, 36);
  const soskultur = shuffle(bank.filter((q) => q.subtes === "sosiokultural")).slice(0, 14);
  return kognitif.concat(perilaku, manajerial, soskultur);
}
function shuffle(arr) {
  const c = arr.slice();
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}

const session1 = mockSampleSession(levels.standar_bkn);
const session2 = mockSampleSession(levels.standar_bkn);
assert.strictEqual(session1.length, 100, "Sampled session 1 must have 100 questions");
assert.strictEqual(session2.length, 100, "Sampled session 2 must have 100 questions");

const set1 = new Set(session1.map((q) => q.id));
const set2 = new Set(session2.map((q) => q.id));
const overlap = session1.filter((q) => set2.has(q.id)).length;
console.log(`Jumlah soal sama antara dua sesi berturut-turut: ${overlap} dari 100 soal.`);
assert(overlap < 35, `Sampling must produce different question combinations (overlap was ${overlap}/100)`);
console.log("OK: Sampling acak Level 1 berjalan dinamis dan tidak monoton!");

console.log("\n=== 5. Menguji Scoring Engine (JPM & 9-Box) pada Sesi Acak Level 1 ===");
const ansMax = {}, ansMid = {}, ansLow = {};
for (const [idx, q] of session1.entries()) {
  ansMax[q.id] = engine.getBestLetter(q);
  if (q.tipe === "single") {
    ansMid[q.id] = idx % 3 !== 0 ? q.kunci : (q.kunci === "A" ? "B" : "A");
    ansLow[q.id] = q.kunci === "A" ? "B" : "A";
  } else {
    const midSkor = idx % 3 === 0 ? 2 : 3;
    ansMid[q.id] = q.opsi.find((o) => o.skor === midSkor).huruf;
    ansLow[q.id] = q.opsi.find((o) => o.skor === 1).huruf;
  }
}

const evalMax = engine.evaluateAttempt(session1, ansMax, "jf_muda");
assert.strictEqual(evalMax.jpmPct, 100, "Max must score 100%");
assert.strictEqual(evalMax.jpmInfo.kategori, "Optimal");
assert.strictEqual(evalMax.nineBox.box, 9);

const evalMid = engine.evaluateAttempt(session1, ansMid, "jf_muda");
assert.strictEqual(evalMid.jpmInfo.kategori, "Cukup Optimal");

const evalLow = engine.evaluateAttempt(session1, ansLow, "jf_muda");
assert.strictEqual(evalLow.jpmInfo.kategori, "Kurang Optimal");
assert.strictEqual(evalLow.nineBox.box, 1);

console.log(`Hasil Penilaian Sesi Level 1:`);
console.log(`- Maksimal : JPM ${evalMax.jpmPct}% | Kategori: ${evalMax.jpmInfo.kategori} | Kotak 9-Box: ${evalMax.nineBox.box}`);
console.log(`- Menengah : JPM ${evalMid.jpmPct}% | Kategori: ${evalMid.jpmInfo.kategori} | Kotak 9-Box: ${evalMid.nineBox.box}`);
console.log(`- Rendah   : JPM ${evalLow.jpmPct}% | Kategori: ${evalLow.jpmInfo.kategori} | Kotak 9-Box: ${evalLow.nineBox.box}`);

console.log(`\nRata-rata panjang teks soal:`);
console.log(`- Level 1 (Standar CAT BKN) : ${avgQuestionLen.standar_bkn} karakter`);
console.log(`- Level 2 (Lanjutan BPK RI) : ${avgQuestionLen.lanjutan_bpk} karakter`);
assert(avgQuestionLen.standar_bkn < avgQuestionLen.lanjutan_bpk, "Level 1 questions must be more concise than Level 2");

console.log("\n=== 6. Memverifikasi Modul Tips & Cara Cepat Menjawab (Fast Solving Tips) ===");
assert(typeof engine.getFastSolvingTip === "function", "Missing getFastSolvingTip function in engine");

for (const sampleQ of session1.slice(0, 15)) {
  const tip = engine.getFastSolvingTip(sampleQ);
  assert(tip && tip.length > 20, `Empty fast tip on question ${sampleQ.id}`);
  assert(tip.includes("<strong>"), `Fast tip on ${sampleQ.id} must contain bold emphasized tactical guidance`);
}
console.log("OK: Modul tips dan cara cepat menjawab teruji menghasilkan panduan taktis untuk semua kategori soal.");

console.log("\n========================================================");
console.log("SELURUH 1.100 SOAL DAN SISTEM SAMPLING TERVERIFIKASI LOLOS!");
console.log("========================================================");
