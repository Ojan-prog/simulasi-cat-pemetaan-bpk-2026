/* ==========================================================================
   Bank Soal Subtes 1 (Potensi Kognitif: 30 Soal) & Subtes 2 (Potensi Perilaku: 20 Soal)
   Total: 50 Soal Orisinal — Seimbang Distribusi Kunci & Panjang Opsi
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

  window.BANK_POTENSI = [
    /* ===================== SUBTES 1: POTENSI KOGNITIF (30 SOAL) ===================== */
    /* --- Verbal & Pemahaman Bacaan (8 soal: PK-01 s.d. PK-08) --- */
    {
      id: "PK-01",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "KERTAS KERJA PEMERIKSAAN : BUKTI AUDIT = AKTA NOTARIS : ...",
      opsi: [
        { huruf: "A", teks: "Putusan pengadilan negeri" },
        { huruf: "B", teks: "Kewenangan pejabat lelang" },
        { huruf: "C", teks: "Kesepakatan resmi para pihak" },
        { huruf: "D", teks: "Keterangan saksi di persidangan" }
      ],
      kunci: "C",
      pembahasan:
        "Kertas Kerja Pemeriksaan (KKP) disusun berdasarkan bukti audit sebagai dokumen pembuktian utama. Akta notaris disusun berdasarkan kesepakatan resmi para pihak (C)."
    },
    {
      id: "PK-02",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "OPINI WAJAR TANPA PENGECUALIAN : KEWAJARAN LAPORAN = SERTIFIKAT LAIK FUNGSI : ...",
      opsi: [
        { huruf: "A", teks: "Keandalan bangunan gedung" },
        { huruf: "B", teks: "Nilai kontrak proyek konstruksi" },
        { huruf: "C", teks: "Rencana anggaran biaya awal bangunan" },
        { huruf: "D", teks: "Izin usaha jasa pelaksana konstruksi" }
      ],
      kunci: "A",
      pembahasan:
        "Opini Wajar Tanpa Pengecualian menyatakan terpenuhinya kewajaran laporan keuangan. Sertifikat Laik Fungsi (SLF) menyatakan terpenuhinya keandalan bangunan gedung sebelum dipakai (A)."
    },
    {
      id: "PK-03",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus: null,
      pertanyaan: "SPIP : PENCEGAHAN PENYIMPANGAN = PENGAWASAN REPRESIF : ...",
      opsi: [
        { huruf: "A", teks: "Penyusunan anggaran tahunan daerah" },
        { huruf: "B", teks: "Pelatihan pegawai baru di unit kerja" },
        { huruf: "C", teks: "Pemetaan kompetensi jabatan struktural" },
        { huruf: "D", teks: "Penindakan setelah pelanggaran terjadi" }
      ],
      kunci: "D",
      pembahasan:
        "Sistem Pengendalian Intern Pemerintah (SPIP) bersifat preventif untuk mencegah penyimpangan sejak awal. Padanannya untuk pengawasan represif adalah penindakan setelah pelanggaran terjadi (D)."
    },
    {
      id: "PK-04",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus:
        "<p><strong>Kutipan Laporan:</strong> Dalam pemeriksaan kinerja pengelolaan dana otonomi khusus di dua kabupaten pemekaran baru, tim menemukan bahwa keterlambatan penyaluran bantuan bukan terutama disebabkan oleh kurangnya pagu anggaran. Penyebab dominannya adalah ketiadaan basis data penerima yang terverifikasi lintas distrik serta lambatnya penetapan pejabat pengelola keuangan pada awal tahun anggaran. Akibatnya, 42% penyaluran baru berlangsung pada triwulan keempat.</p>",
      pertanyaan: "Simpulan paling tepat yang secara langsung didukung oleh kutipan laporan tersebut adalah ...",
      opsi: [
        { huruf: "A", teks: "Pagu anggaran dana otonomi khusus harus ditambah secara signifikan pada tahun anggaran berikutnya." },
        { huruf: "B", teks: "Penyaluran menumpuk pada akhir tahun akibat kendala basis data dan keterlambatan penetapan pengelola." },
        { huruf: "C", teks: "Seluruh pejabat keuangan di kabupaten pemekaran belum pernah mengikuti bimbingan teknis penyaluran." },
        { huruf: "D", teks: "Kualitas layanan dasar di distrik terpencil dipastikan mengalami penurunan hingga 42% pada triwulan keempat." }
      ],
      kunci: "B",
      pembahasan:
        "Opsi B merangkum fakta eksplisit dalam teks: penumpukan 42% penyaluran pada triwulan keempat dipicu oleh ketiadaan basis data terverifikasi dan lambatnya penetapan pejabat pengelola keuangan."
    },
    {
      id: "PK-05",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus:
        "<p><strong>Kutipan Kebijakan:</strong> Penerapan sistem aplikasi keuangan daerah terintegrasi mewajibkan setiap pencairan belanja barang dicatat berpasangan dengan kode rekening aset atau persediaan. Namun, evaluasi awal menunjukkan bahwa 18% transaksi belanja pemeliharaan masih dicatat tanpa lampiran berita acara serah terima hasil pekerjaan di modul pengadaan, meski nilai kas telah terdebet di rekening kas umum daerah.</p>",
      pertanyaan: "Risiko langsung yang paling relevan terhadap keandalan pelaporan berdasarkan paragraf di atas adalah ...",
      opsi: [
        { huruf: "A", teks: "Anggaran kas daerah dipastikan mengalami defisit likuiditas sebelum penutupan semester pertama." },
        { huruf: "B", teks: "Seluruh aplikasi keuangan daerah perlu diganti kembali menjadi pembukuan manual berbasis kertas." },
        { huruf: "C", teks: "Pengeluaran kas daerah belum otomatis terverifikasi dengan bukti serah terima barang atau jasa." },
        { huruf: "D", teks: "Kode rekening persediaan daerah tidak lagi dapat dipakai untuk mencatat transaksi belanja pemeliharaan." }
      ],
      kunci: "C",
      pembahasan:
        "Kas telah terdebet, sementara 18% transaksi belanja pemeliharaan tidak memiliki lampiran berita acara serah terima pada modul pengadaan. Kondisi ini langsung memicu risiko pengeluaran kas belum terverifikasi bukti penerimaannya (C)."
    },
    {
      id: "PK-06",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus:
        "<p><strong>Kutipan Evaluasi SDM:</strong> Pemetaan kompetensi melalui Computer Assisted Test (CAT) tidak menggantikan rekam jejak kinerja harian pegawai. CAT mengukur kapasitas kognitif dan kecenderungan perilaku situasional secara terstandar pada saat pengujian, sedangkan catatan kinerja merekam konsistensi capaian target dalam konteks beban kerja nyata sepanjang tahun.</p>",
      pertanyaan: "Pernyataan yang paling sesuai dengan isi kutipan di atas adalah ...",
      opsi: [
        { huruf: "A", teks: "Hasil CAT dan catatan kinerja saling melengkapi karena memotret dimensi penilaian yang berbeda." },
        { huruf: "B", teks: "Rekam jejak kinerja tahunan sebaiknya dihapus karena instrumen CAT dinilai lebih terstandar dan cepat." },
        { huruf: "C", teks: "Pegawai peraih nilai CAT tertinggi dipastikan selalu memiliki capaian kinerja harian terbaik di unit kerjanya." },
        { huruf: "D", teks: "Beban kerja nyata pegawai sepanjang tahun hanya dapat diukur secara sah melalui tes perilaku situasional." }
      ],
      kunci: "A",
      pembahasan:
        "Teks menegaskan bahwa CAT tidak menggantikan rekam jejak kinerja karena keduanya memotret aspek yang berbeda (kapasitas saat tes vs konsistensi capaian tahunan), sehingga keduanya saling melengkapi (A)."
    },
    {
      id: "PK-07",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus:
        "<p><strong>Argumen:</strong> Seorang Kepala Subbagian berpendapat bahwa pengurangan frekuensi rapat tatap muka mingguan dari empat kali menjadi satu kali sebulan akan menurunkan kualitas koordinasi proyek antarunit secara drastis.</p>",
      pertanyaan: "Manakah temuan berikut yang paling <strong>melemahkan</strong> argumen Kepala Subbagian tersebut?",
      opsi: [
        { huruf: "A", teks: "Sebagian pegawai mengaku lebih nyaman menyampaikan kendala kerja secara tertulis lewat dasbor tugas bersama." },
        { huruf: "B", teks: "Biaya konsumsi rapat bulanan dapat dialihkan untuk pemeliharaan jaringan internet dan perangkat lunak kerja kantor." },
        { huruf: "C", teks: "Rapat tatap muka yang berlangsung lebih dari dua jam berturut-turut sering menurunkan fokus peserta di ruang rapat." },
        { huruf: "D", teks: "Unit lain yang memangkas rapat tatap muka lewat papan tugas digital justru mencatat ketepatan tenggat naik 19%." }
      ],
      kunci: "D",
      pembahasan:
        "Klaim bahwa pengurangan rapat tatap muka menurunkan kualitas koordinasi paling kuat dilemahkan oleh bukti empiris pembanding pada unit lain yang ketepatan tenggatnya justru meningkat 19% (D)."
    },
    {
      id: "PK-08",
      subtes: "potensi_kognitif",
      aspek: "Verbal & Pemahaman Bacaan",
      tipe: "single",
      stimulus:
        "<p><strong>Argumen:</strong> Tim pemeriksa menyimpulkan bahwa peningkatan nilai temuan kelebihan pembayaran pada Dinas Pekerjaan Umum berasal dari melemahnya fungsi pengawasan pejabat pembuat komitmen (PPK) saat pemeriksaan kemajuan fisik lapangan.</p>",
      pertanyaan: "Manakah bukti tambahan berikut yang paling <strong>memperkuat</strong> simpulan tim pemeriksa?",
      opsi: [
        { huruf: "A", teks: "Jumlah paket kontrak konstruksi jalan dan jembatan pada dinas tersebut naik 10% dibandingkan tahun anggaran sebelumnya." },
        { huruf: "B", teks: "Sebagian besar penyedia jasa berasal dari luar kabupaten sehingga proses mobilisasi alat berat memakan waktu tambahan." },
        { huruf: "C", teks: "Mayoritas paket kelebihan bayar memiliki berita acara kemajuan 100% yang diteken PPK tanpa foto atau hasil ukur volume." },
        { huruf: "D", teks: "Harga satuan aspal curah di tingkat distributor utama mengalami kenaikan musiman menjelang akhir triwulan keempat." }
      ],
      kunci: "C",
      pembahasan:
        "Bukti bahwa mayoritas paket bermasalah tetap disahkan PPK 100% tanpa dokumentasi foto dan hasil ukur volume langsung menguatkan simpulan lemahnya pengawasan PPK di lapangan (C)."
    },

    /* --- Numerik & Interpretasi Data (8 soal: PK-09 s.d. PK-16) --- */
    {
      id: "PK-09",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Perhatikan deret bilangan berikut: 7, 10, 16, 25, 37, 52, ... Bilangan yang tepat untuk melengkapi titik-titik tersebut adalah ...",
      opsi: [
        { huruf: "A", teks: "68" },
        { huruf: "B", teks: "70" },
        { huruf: "C", teks: "72" },
        { huruf: "D", teks: "75" }
      ],
      kunci: "B",
      pembahasan:
        "Selisih antar suku berturut-turut adalah +3, +6, +9, +12, +15. Selisih berikutnya adalah +18, sehingga 52 + 18 = 70 (B)."
    },
    {
      id: "PK-10",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Perhatikan deret bilangan berikut: 3, 6, 5, 10, 9, 18, 17, 34, ... Bilangan berikutnya adalah ...",
      opsi: [
        { huruf: "A", teks: "33" },
        { huruf: "B", teks: "35" },
        { huruf: "C", teks: "51" },
        { huruf: "D", teks: "68" }
      ],
      kunci: "A",
      pembahasan:
        "Pola berselang-seling: ×2, -1, ×2, -1, ×2, -1, ×2. Setelah 17 × 2 = 34, operasi berikutnya adalah 34 - 1 = 33 (A)."
    },
    {
      id: "PK-11",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan: "Perhatikan deret bilangan berikut: 4, 5, 9, 14, 23, 37, 60, ... Bilangan berikutnya adalah ...",
      opsi: [
        { huruf: "A", teks: "83" },
        { huruf: "B", teks: "92" },
        { huruf: "C", teks: "97" },
        { huruf: "D", teks: "101" }
      ],
      kunci: "C",
      pembahasan:
        "Setiap suku adalah penjumlahan dua suku sebelumnya: 4+5=9, 5+9=14, ..., 23+37=60, lalu 37 + 60 = 97 (C)."
    },
    {
      id: "PK-12",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan:
        "Sebuah instansi menganggarkan belanja perjalanan dinas sebesar Rp240.000.000 pada semester I. Hingga akhir Mei terealisasi 62,5%. Jika pada bulan Juni dikeluarkan tambahan Rp42.000.000, berapa persen sisa anggaran yang belum terealisasi pada akhir semester I?",
      opsi: [
        { huruf: "A", teks: "17,5%" },
        { huruf: "B", teks: "22,5%" },
        { huruf: "C", teks: "25,0%" },
        { huruf: "D", teks: "20,0%" }
      ],
      kunci: "D",
      pembahasan:
        "Realisasi hingga Mei = 62,5% × Rp240 juta = Rp150 juta. Tambahan Juni = Rp42 juta → total Rp192 juta. Sisa = Rp48 juta / Rp240 juta = 20,0% (D)."
    },
    {
      id: "PK-13",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan:
        "Dalam uji petik 80 paket pengadaan barang bernilai total Rp6,4 miliar, ditemukan kekurangan volume pada 12 paket dengan nilai temuan rata-rata Rp15 juta per paket bermasalah. Jika tingkat kesalahan ini diproyeksikan proporsional terhadap populasi 240 paket bernilai Rp19,2 miliar, berapa estimasi total nilai temuannya?",
      opsi: [
        { huruf: "A", teks: "Rp360 juta" },
        { huruf: "B", teks: "Rp480 juta" },
        { huruf: "C", teks: "Rp540 juta" },
        { huruf: "D", teks: "Rp720 juta" }
      ],
      kunci: "C",
      pembahasan:
        "Temuan pada 80 paket = 12 × Rp15 juta = Rp180 juta. Karena populasi (240 paket / Rp19,2 miliar) tepat 3 kali sampel, estimasinya = 3 × Rp180 juta = Rp540 juta (C)."
    },
    {
      id: "PK-14",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus: null,
      pertanyaan:
        "Dua tim pemeriksa menelaah tumpukan berkas SP2D. Tim A mampu memeriksa seluruh berkas dalam 12 hari, sedangkan Tim B mampu menyelesaikannya dalam 15 hari. Jika keduanya bekerja bersama selama 4 hari lalu Tim A ditugaskan ke lokasi lain, berapa hari lagi Tim B harus bekerja sendirian untuk menuntaskan sisa berkas?",
      opsi: [
        { huruf: "A", teks: "5 hari" },
        { huruf: "B", teks: "6 hari" },
        { huruf: "C", teks: "7 hari" },
        { huruf: "D", teks: "8 hari" }
      ],
      kunci: "B",
      pembahasan:
        "Laju gabungan = 1/12 + 1/15 = 9/60 = 3/20 per hari. Dalam 4 hari selesai 12/20 = 3/5 bagian; sisa 2/5 = 6/15 bagian. Waktu Tim B = (6/15) ÷ (1/15) = 6 hari (B)."
    },
    {
      id: "PK-15",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus:
        '<table><caption>Data Serapan Belanja Modal dan Jumlah Kontrak Bermasalah 4 OPD</caption><thead><tr><th scope="col">OPD</th><th scope="col">Pagu (Miliar Rp)</th><th scope="col">Realisasi (Miliar Rp)</th><th scope="col">Paket Kontrak</th><th scope="col">Paket Terlambat</th></tr></thead><tbody><tr><th scope="row">Dinas Pendidikan</th><td>40,0</td><td>34,0</td><td>25</td><td>3</td></tr><tr><th scope="row">Dinas Kesehatan</th><td>50,0</td><td>40,0</td><td>20</td><td>4</td></tr><tr><th scope="row">Dinas PUPR</th><td>80,0</td><td>60,0</td><td>30</td><td>9</td></tr><tr><th scope="row">Dinas Pertanian</th><td>25,0</td><td>22,5</td><td>10</td><td>1</td></tr></tbody></table>',
      pertanyaan: "Berdasarkan tabel di atas, OPD manakah yang memiliki rasio persentase paket terlambat paling kecil sekaligus tingkat serapan anggaran tertinggi?",
      opsi: [
        { huruf: "A", teks: "Dinas Pendidikan" },
        { huruf: "B", teks: "Dinas Kesehatan" },
        { huruf: "C", teks: "Dinas PUPR" },
        { huruf: "D", teks: "Dinas Pertanian" }
      ],
      kunci: "D",
      pembahasan:
        "Serapan: Pendidikan 85%, Kesehatan 80%, PUPR 75%, Pertanian 90%. Keterlambatan: Pendidikan 12%, Kesehatan 20%, PUPR 30%, Pertanian 10%. Dinas Pertanian terbaik pada kedua indikator (D)."
    },
    {
      id: "PK-16",
      subtes: "potensi_kognitif",
      aspek: "Numerik & Interpretasi Data",
      tipe: "single",
      stimulus:
        '<table><caption>Data Serapan Belanja Modal dan Jumlah Kontrak Bermasalah 4 OPD</caption><thead><tr><th scope="col">OPD</th><th scope="col">Pagu (Miliar Rp)</th><th scope="col">Realisasi (Miliar Rp)</th><th scope="col">Paket Kontrak</th><th scope="col">Paket Terlambat</th></tr></thead><tbody><tr><th scope="row">Dinas Pendidikan</th><td>40,0</td><td>34,0</td><td>25</td><td>3</td></tr><tr><th scope="row">Dinas Kesehatan</th><td>50,0</td><td>40,0</td><td>20</td><td>4</td></tr><tr><th scope="row">Dinas PUPR</th><td>80,0</td><td>60,0</td><td>30</td><td>9</td></tr><tr><th scope="row">Dinas Pertanian</th><td>25,0</td><td>22,5</td><td>10</td><td>1</td></tr></tbody></table>',
      pertanyaan: "Berapakah persentase gabungan rata-rata serapan belanja modal keempat OPD tersebut (total realisasi dibagi total pagu)?",
      opsi: [
        { huruf: "A", teks: "78,5%" },
        { huruf: "B", teks: "82,5%" },
        { huruf: "C", teks: "80,3%" },
        { huruf: "D", teks: "85,0%" }
      ],
      kunci: "C",
      pembahasan:
        "Total Pagu = 195 miliar; Total Realisasi = 156,5 miliar. Persentase gabungan = 156,5 / 195 × 100% = 80,256% ≈ 80,3% (C)."
    },

    /* --- Logis & Analitis (7 soal: PK-17 s.d. PK-23) --- */
    {
      id: "PK-17",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus: null,
      pertanyaan:
        "Semua peserta pemetaan pegawai diwajibkan membawa laptop pribadi dan mengikuti verifikasi asesor. Sebagian peserta yang mengikuti verifikasi asesor merupakan pejabat pengawas. Simpulan yang pasti sahih adalah ...",
      opsi: [
        { huruf: "A", teks: "Semua pejabat pengawas adalah peserta pemetaan pegawai." },
        { huruf: "B", teks: "Peserta yang bukan pejabat pengawas tidak wajib membawa laptop." },
        { huruf: "C", teks: "Semua peserta pemetaan pegawai berstatus sebagai pejabat pengawas." },
        { huruf: "D", teks: "Sebagian pejabat pengawas diwajibkan membawa laptop pribadi." }
      ],
      kunci: "D",
      pembahasan:
        "Sebagian pejabat pengawas termasuk peserta pemetaan yang diverifikasi asesor; karena seluruh peserta pemetaan wajib membawa laptop pribadi, sebagian pejabat pengawas tersebut pasti wajib membawa laptop pribadi (D)."
    },
    {
      id: "PK-18",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus: null,
      pertanyaan:
        "Jika sebuah dokumen kontrak mengalami adendum nilai di atas 10%, maka wajib dilakukan reviu teknis dan persetujuan Kepala Dinas. Pada proyek jalan ruas timur, persetujuan Kepala Dinas tidak ditemukan. Simpulan yang sahih adalah ...",
      opsi: [
        { huruf: "A", teks: "Proyek jalan ruas timur tidak mengalami adendum nilai di atas 10%." },
        { huruf: "B", teks: "Proyek jalan ruas timur dipastikan tidak mengalami adendum jenis apa pun." },
        { huruf: "C", teks: "Reviu teknis pada proyek ruas timur pasti sudah dilaksanakan secara lengkap." },
        { huruf: "D", teks: "Nilai kontrak proyek jalan ruas timur mengalami penurunan di bawah 10%." }
      ],
      kunci: "A",
      pembahasan:
        "Berdasarkan modus tollens (jika P maka Q dan R; tidak R maka tidak P), tidak adanya persetujuan Kepala Dinas menyimpulkan anteseden adendum di atas 10% tidak terpenuhi secara sah (A)."
    },
    {
      id: "PK-19",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus: null,
      pertanyaan:
        "Tidak ada kertas kerja pemeriksaan yang boleh diunggah ke sistem sebelum direviu oleh Ketua Tim. Sebagian kertas kerja di Subauditorat X sudah diunggah ke sistem. Simpulan yang benar adalah ...",
      opsi: [
        { huruf: "A", teks: "Semua kertas kerja di Subauditorat X sudah direviu oleh Ketua Tim." },
        { huruf: "B", teks: "Sebagian kertas kerja yang belum direviu Ketua Tim pasti sudah diunggah." },
        { huruf: "C", teks: "Ketua Tim hanya bertugas mereviu kertas kerja dari Subauditorat X saja." },
        { huruf: "D", teks: "Sebagian kertas kerja di Subauditorat X sudah direviu Ketua Tim." }
      ],
      kunci: "D",
      pembahasan:
        "Syarat pengunggahan adalah telah direviu Ketua Tim. Karena sebagian kertas kerja Subauditorat X sudah diunggah, bagian tersebut pasti telah direviu Ketua Tim (D)."
    },
    {
      id: "PK-20",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus: null,
      pertanyaan:
        "Setiap kali akses transportasi darat menuju distrik terputus akibat longsor, jadwal pemeriksaan fisik diundur atau diganti dengan pemantauan citra satelit. Pekan ini jadwal pemeriksaan fisik di Distrik Mulia tidak diundur, padahal akses darat terputus akibat longsor. Simpulan yang tepat adalah ...",
      opsi: [
        { huruf: "A", teks: "Akses darat menuju Distrik Mulia sebenarnya sudah pulih sebelum tim berangkat." },
        { huruf: "B", teks: "Pemeriksaan fisik di Distrik Mulia diganti dengan pemantauan citra satelit." },
        { huruf: "C", teks: "Seluruh tim tetap berangkat menembus jalur darat yang terputus oleh longsor." },
        { huruf: "D", teks: "Seluruh kegiatan pemeriksaan di Distrik Mulia dibatalkan pada tahun anggaran ini." }
      ],
      kunci: "B",
      pembahasan:
        "Karena akses terputus dan jadwal tidak diundur, maka opsi kedua dalam disjungsi (diganti pemantauan citra satelit) pasti berlaku (B)."
    },
    {
      id: "PK-21",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus:
        "<p><strong>Kasus Penjadwalan:</strong> Lima auditor — Ardi, Bella, Candra, Dina, dan Eka — dijadwalkan mengikuti wawancara asesmen secara berurutan pada slot 1 hingga slot 5. Diketahui aturan berikut: (1) Ardi harus tampil lebih awal daripada Candra, tetapi tidak di slot 1; (2) Bella harus tampil tepat sebelum Dina; (3) Eka tampil pada slot 5; (4) Dina tidak boleh berada di slot 3.</p>",
      pertanyaan: "Berdasarkan keempat aturan tersebut, urutan slot 1 sampai dengan 5 yang memenuhi seluruh syarat adalah ...",
      opsi: [
        { huruf: "A", teks: "Bella, Dina, Ardi, Candra, Eka" },
        { huruf: "B", teks: "Ardi, Bella, Dina, Candra, Eka" },
        { huruf: "C", teks: "Bella, Ardi, Dina, Candra, Eka" },
        { huruf: "D", teks: "Candra, Ardi, Bella, Dina, Eka" }
      ],
      kunci: "A",
      pembahasan:
        "Eka di slot 5; Dina ≠ 3 dan Bella tepat sebelum Dina menutup slot (2,3). Jika Bella-Dina di (3,4), maka Ardi-Candra di (1,2) melanggar Ardi ≠ 1. Jadi Bella-Dina wajib di (1,2), Ardi di 3, Candra di 4, Eka di 5 (A)."
    },
    {
      id: "PK-22",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus:
        "<p><strong>Kasus Penugasan:</strong> Empat perwakilan (Papua, Papua Tengah, Papua Pegunungan, Papua Selatan) masing-masing menempati 1 meja berderet dari kiri (Meja 1) ke kanan (Meja 4) saat orientasi. Syaratnya: (1) Papua Tengah tidak bersebelahan dengan Papua dan tidak menempati Meja 1; (2) Papua Selatan berada tepat di sebelah kanan Papua; (3) Papua Pegunungan tidak berada di Meja 4.</p>",
      pertanyaan: "Perwakilan manakah yang pasti menempati Meja 4?",
      opsi: [
        { huruf: "A", teks: "Papua" },
        { huruf: "B", teks: "Papua Tengah" },
        { huruf: "C", teks: "Papua Pegunungan" },
        { huruf: "D", teks: "Papua Selatan" }
      ],
      kunci: "B",
      pembahasan:
        "Pasangan [Papua, Papua Selatan] harus berurutan di (1,2), (2,3), atau (3,4). Di (3,4), Papua Tengah ≠ 1 memaksanya ke Meja 2 bersebelahan dengan Papua (salah). Di (2,3), Papua Tengah ≠ 1 dan ≠ 2/3, sehingga wajib di Meja 4. Di (1,2), Papua Pegunungan ≠ 4 memaksanya ke Meja 3 dan Papua Tengah ke Meja 4. Pada seluruh skenario sah, Meja 4 selalu Papua Tengah (B)."
    },
    {
      id: "PK-23",
      subtes: "potensi_kognitif",
      aspek: "Logis & Analitis",
      tipe: "single",
      stimulus:
        "<p><strong>Kasus Penempatan Ruang:</strong> Lima pegawai (Fajar, Gita, Hadi, Irma, Joko) ditempatkan pada Ruang 101 hingga 105 sesuai keahlian. Diketahui: (1) Fajar bukan di 101 atau 102; (2) Gita menempati nomor ruang tepat lebih kecil 1 angka dari Hadi; (3) Irma menempati Ruang 101; (4) Joko tidak mau bersebelahan dengan Irma.</p>",
      pertanyaan: "Jika Fajar menempati Ruang 104, siapakah yang pasti menempati Ruang 105?",
      opsi: [
        { huruf: "A", teks: "Gita" },
        { huruf: "B", teks: "Hadi" },
        { huruf: "C", teks: "Joko" },
        { huruf: "D", teks: "Fajar" }
      ],
      kunci: "C",
      pembahasan:
        "Irma = 101 dan Fajar = 104. Pasangan berurutan (Gita, Hadi) harus mengisi dua ruang bersebelahan tersisa, yakni 102 dan 103. Ruang tersisa 105 otomatis diisi Joko (C)."
    },

    /* --- Spasial / Pola Abstrak (7 soal: PK-24 s.d. PK-30) --- */
    {
      id: "PK-24",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Deret empat kotak berisi panah yang berotasi 90 derajat searah jarum jam",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M45 68V32M45 32L35 42M45 32L55 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><text x="45" y="106" text-anchor="middle" font-size="12" fill="currentColor">1 (Atas)</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M112 50H148M148 50L138 40M148 50L138 60" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><text x="130" y="106" text-anchor="middle" font-size="12" fill="currentColor">2 (Kanan)</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M215 32V68M215 68L205 58M215 68L225 58" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><text x="215" y="106" text-anchor="middle" font-size="12" fill="currentColor">3 (Bawah)</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="300" y="106" text-anchor="middle" font-size="12" fill="currentColor">4</text>'
      ),
      pertanyaan: "Manakah gambar yang tepat untuk menggantikan tanda tanya pada urutan keempat?",
      opsi: [
        {
          huruf: "A",
          teks: "Panah mengarah ke atas",
          svg: miniSvg("Panah ke atas", '<path d="M32 48V16M32 16L22 26M32 16L42 26" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>')
        },
        {
          huruf: "B",
          teks: "Panah mengarah serong kanan atas",
          svg: miniSvg("Panah serong kanan atas", '<path d="M20 44L44 20M44 20H30M44 20V34" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>')
        },
        {
          huruf: "C",
          teks: "Panah mengarah ke kanan",
          svg: miniSvg("Panah ke kanan", '<path d="M16 32H48M48 32L38 22M48 32L38 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>')
        },
        {
          huruf: "D",
          teks: "Panah mengarah ke kiri",
          svg: miniSvg("Panah ke kiri", '<path d="M48 32H16M16 32L26 22M16 32L26 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>')
        }
      ],
      kunci: "D",
      pembahasan:
        "Panah berputar 90° searah jarum jam pada setiap langkah: Atas (1) → Kanan (2) → Bawah (3) → Kiri (4) (D)."
    },
    {
      id: "PK-25",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Deret penambahan jumlah titik dan perubahan isi lingkaran",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="45" cy="50" r="8" fill="currentColor"/><text x="45" y="106" text-anchor="middle" font-size="12" fill="currentColor">1 (1 hitam)</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="118" cy="50" r="7" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="142" cy="50" r="7" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="106" text-anchor="middle" font-size="12" fill="currentColor">2 (2 putih)</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="215" cy="36" r="6" fill="currentColor"/><circle cx="201" cy="60" r="6" fill="currentColor"/><circle cx="229" cy="60" r="6" fill="currentColor"/><text x="215" y="106" text-anchor="middle" font-size="12" fill="currentColor">3 (3 hitam)</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="300" y="106" text-anchor="middle" font-size="12" fill="currentColor">4</text>'
      ),
      pertanyaan: "Pola keempat yang paling tepat melanjutkan deret gambar di atas adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "4 lingkaran hitam penuh",
          svg: miniSvg("4 lingkaran hitam", '<circle cx="22" cy="22" r="6" fill="currentColor"/><circle cx="42" cy="22" r="6" fill="currentColor"/><circle cx="22" cy="42" r="6" fill="currentColor"/><circle cx="42" cy="42" r="6" fill="currentColor"/>')
        },
        {
          huruf: "B",
          teks: "3 lingkaran putih kosong",
          svg: miniSvg("3 lingkaran putih", '<circle cx="32" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="42" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="44" cy="42" r="6" fill="none" stroke="currentColor" stroke-width="2"/>')
        },
        {
          huruf: "C",
          teks: "4 lingkaran putih kosong",
          svg: miniSvg("4 lingkaran putih", '<circle cx="22" cy="22" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="42" cy="22" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="22" cy="42" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="42" cy="42" r="6" fill="none" stroke="currentColor" stroke-width="2"/>')
        },
        {
          huruf: "D",
          teks: "5 lingkaran putih kosong",
          svg: miniSvg("5 lingkaran putih", '<circle cx="18" cy="18" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="46" cy="18" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="46" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="46" cy="46" r="5" fill="none" stroke="currentColor" stroke-width="2"/>')
        }
      ],
      kunci: "C",
      pembahasan:
        "Jumlah lingkaran bertambah 1 tiap langkah (1 → 2 → 3 → 4) dan warna isian bergantian (hitam → putih → hitam → putih). Maka posisi ke-4 adalah 4 lingkaran putih kosong (C)."
    },
    {
      id: "PK-26",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Deret pergeseran titik hitam mengelilingi sudut persegi searah jarum jam dan garis diagonal bergantian",
        '<rect x="10" y="15" width="70" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><line x1="10" y1="85" x2="80" y2="15" stroke="currentColor" stroke-width="1.5"/><circle cx="22" cy="27" r="6" fill="currentColor"/><text x="45" y="106" text-anchor="middle" font-size="11" fill="currentColor">1 (Kiri Atas, /)</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><line x1="95" y1="15" x2="165" y2="85" stroke="currentColor" stroke-width="1.5"/><circle cx="153" cy="27" r="6" fill="currentColor"/><text x="130" y="106" text-anchor="middle" font-size="11" fill="currentColor">2 (Kanan Atas, \\)</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><line x1="180" y1="85" x2="250" y2="15" stroke="currentColor" stroke-width="1.5"/><circle cx="238" cy="73" r="6" fill="currentColor"/><text x="215" y="106" text-anchor="middle" font-size="11" fill="currentColor">3 (Kanan Bawah, /)</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="4" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="300" y="58" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="300" y="106" text-anchor="middle" font-size="11" fill="currentColor">4</text>'
      ),
      pertanyaan: "Gambar yang tepat melengkapi posisi keempat adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Titik di sudut kiri bawah dengan diagonal \\",
          svg: miniSvg("Titik kiri bawah diagonal turun", '<line x1="2" y1="2" x2="62" y2="62" stroke="currentColor" stroke-width="1.5"/><circle cx="14" cy="50" r="6" fill="currentColor"/>')
        },
        {
          huruf: "B",
          teks: "Titik di sudut kiri bawah dengan diagonal /",
          svg: miniSvg("Titik kiri bawah diagonal naik", '<line x1="2" y1="62" x2="62" y2="2" stroke="currentColor" stroke-width="1.5"/><circle cx="14" cy="50" r="6" fill="currentColor"/>')
        },
        {
          huruf: "C",
          teks: "Titik di sudut kiri atas dengan diagonal \\",
          svg: miniSvg("Titik kiri atas diagonal turun", '<line x1="2" y1="2" x2="62" y2="62" stroke="currentColor" stroke-width="1.5"/><circle cx="14" cy="14" r="6" fill="currentColor"/>')
        },
        {
          huruf: "D",
          teks: "Titik di sudut kanan atas dengan diagonal \\",
          svg: miniSvg("Titik kanan atas diagonal turun", '<line x1="2" y1="2" x2="62" y2="62" stroke="currentColor" stroke-width="1.5"/><circle cx="50" cy="14" r="6" fill="currentColor"/>')
        }
      ],
      kunci: "A",
      pembahasan:
        "Titik berpindah satu sudut searah jarum jam (Kiri Atas → Kanan Atas → Kanan Bawah → Kiri Bawah), sedangkan garis diagonal bergantian (/ lalu \\). Langkah ke-4: kiri bawah dengan diagonal \\ (A)."
    },
    {
      id: "PK-27",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Matriks 3x3 pertambahan jumlah sisi poligon dan pergantian isi",
        '<text x="45" y="18" text-anchor="middle" font-size="11" fill="currentColor">Kol 1</text><text x="130" y="18" text-anchor="middle" font-size="11" fill="currentColor">Kol 2</text><text x="215" y="18" text-anchor="middle" font-size="11" fill="currentColor">Kol 3</text>' +
          '<rect x="20" y="25" width="50" height="42" fill="none" stroke="currentColor"/><polygon points="45,31 32,59 58,59" fill="none" stroke="currentColor" stroke-width="2"/>' +
          '<rect x="105" y="25" width="50" height="42" fill="none" stroke="currentColor"/><rect x="118" y="34" width="24" height="24" fill="currentColor"/>' +
          '<rect x="190" y="25" width="50" height="42" fill="none" stroke="currentColor"/><polygon points="215,31 228,41 223,58 207,58 202,41" fill="none" stroke="currentColor" stroke-width="2"/>' +
          '<rect x="20" y="75" width="50" height="42" fill="none" stroke="currentColor"/><rect x="33" y="84" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"/>' +
          '<rect x="105" y="75" width="50" height="42" fill="none" stroke="currentColor"/><polygon points="130,81 143,91 138,108 122,108 117,91" fill="currentColor"/>' +
          '<rect x="190" y="75" width="50" height="42" fill="none" stroke="currentColor"/><polygon points="215,81 228,89 228,104 215,112 202,104 202,89" fill="none" stroke="currentColor" stroke-width="2"/>' +
          '<rect x="20" y="125" width="50" height="42" fill="none" stroke="currentColor"/><polygon points="45,131 58,141 53,158 37,158 32,141" fill="none" stroke="currentColor" stroke-width="2"/>' +
          '<rect x="105" y="125" width="50" height="42" fill="none" stroke="currentColor"/><polygon points="130,131 143,139 143,154 130,162 117,154 117,139" fill="currentColor"/>' +
          '<rect x="190" y="125" width="50" height="42" fill="none" stroke="currentColor" stroke-dasharray="4 3"/><text x="215" y="153" text-anchor="middle" font-size="20" font-weight="bold" fill="currentColor">?</text>',
        "0 0 260 175"
      ),
      pertanyaan: "Bangun datar yang tepat mengisi kotak tanda tanya pada baris 3 kolom 3 adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Segi enam (6 sisi) terisi hitam penuh",
          svg: miniSvg("Segi enam hitam", '<polygon points="32,14 48,23 48,41 32,50 16,41 16,23" fill="currentColor"/>')
        },
        {
          huruf: "B",
          teks: "Segi tujuh (7 sisi) garis luar kosong",
          svg: miniSvg("Segi tujuh kosong", '<polygon points="32,12 46,19 50,35 40,49 24,49 14,35 18,19" fill="none" stroke="currentColor" stroke-width="2"/>')
        },
        {
          huruf: "C",
          teks: "Segi tujuh (7 sisi) terisi hitam penuh",
          svg: miniSvg("Segi tujuh hitam", '<polygon points="32,12 46,19 50,35 40,49 24,49 14,35 18,19" fill="currentColor"/>')
        },
        {
          huruf: "D",
          teks: "Segi lima (5 sisi) garis luar kosong",
          svg: miniSvg("Segi lima kosong", '<polygon points="32,14 48,26 42,46 22,46 16,26" fill="none" stroke="currentColor" stroke-width="2"/>')
        }
      ],
      kunci: "B",
      pembahasan:
        "Jumlah sisi per baris bertambah 1 tiap kolom (baris 3: 5-6-7 sisi) dan kolom 3 selalu garis luar kosong. Jadi jawabannya segi tujuh (7 sisi) kosong (B)."
    },
    {
      id: "PK-28",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Pencerminan vertikal figur asimetris huruf L dengan lingkaran di ujung atas",
        '<rect x="15" y="15" width="90" height="80" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M40 30V75H78" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="40" cy="30" r="6" fill="currentColor"/><text x="60" y="110" text-anchor="middle" font-size="12" fill="currentColor">Asal</text>' +
          '<line x1="135" y1="15" x2="135" y2="95" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="135" y="110" text-anchor="middle" font-size="11" fill="currentColor">Cermin</text>' +
          '<rect x="165" y="15" width="90" height="80" rx="6" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="210" y="62" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="210" y="110" text-anchor="middle" font-size="12" fill="currentColor">Bayangan</text>',
        "0 0 270 120"
      ),
      pertanyaan: "Hasil pencerminan penuh gambar di sebelah kiri terhadap garis cermin vertikal adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Tiang vertikal di kanan, kaki ke kiri, titik di kanan atas",
          svg: miniSvg("Bayangan L ke kiri titik kanan atas", '<path d="M44 16V48H18" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="44" cy="16" r="5" fill="currentColor"/>')
        },
        {
          huruf: "B",
          teks: "Tiang vertikal di kiri, kaki ke kanan, titik di kiri bawah",
          svg: miniSvg("L terbalik titik kiri bawah", '<path d="M20 48V16H46" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="20" cy="48" r="5" fill="currentColor"/>')
        },
        {
          huruf: "C",
          teks: "Tiang vertikal di kanan, kaki ke atas kiri, titik di kanan bawah",
          svg: miniSvg("L terbalik atas kanan", '<path d="M44 48V16H18" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="44" cy="48" r="5" fill="currentColor"/>')
        },
        {
          huruf: "D",
          teks: "Tiang vertikal di kanan, kaki ke kiri atas, titik di kiri atas",
          svg: miniSvg("L terbalik atas titik kiri", '<path d="M44 48V16H18" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="18" cy="16" r="5" fill="currentColor"/>')
        }
      ],
      kunci: "A",
      pembahasan:
        "Cermin vertikal membalik kiri-kanan tetapi mempertahankan posisi atas-bawah. Tiang dan titik atas berpindah ke kanan, sementara kaki horizontal menunjuk ke kiri (A)."
    },
    {
      id: "PK-29",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Empat figur bangun datar dengan satu titik hitam",
        '<rect x="10" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="45,25 65,45 45,65 25,45" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="45" cy="45" r="5" fill="currentColor"/><text x="45" y="105" text-anchor="middle" font-size="12" fill="currentColor">(1)</text>' +
          '<rect x="95" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="112" y="32" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="50" r="5" fill="currentColor"/><text x="130" y="105" text-anchor="middle" font-size="12" fill="currentColor">(2)</text>' +
          '<rect x="180" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="215,28 235,68 195,68" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="215" cy="54" r="5" fill="currentColor"/><text x="215" y="105" text-anchor="middle" font-size="12" fill="currentColor">(3)</text>' +
          '<rect x="265" y="15" width="70" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="282" y="32" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="290" cy="40" r="5" fill="currentColor"/><text x="300" y="105" text-anchor="middle" font-size="12" fill="currentColor">(4)</text>'
      ),
      pertanyaan: "Manakah di antara empat gambar di atas yang memiliki posisi titik berbeda dari tiga gambar lainnya?",
      opsi: [
        { huruf: "A", teks: "Gambar (1) dengan titik tepat di pusat belah ketupat" },
        { huruf: "B", teks: "Gambar (2) dengan titik tepat di pusat persegi datar" },
        { huruf: "C", teks: "Gambar (3) dengan titik tepat di pusat bangun segitiga" },
        { huruf: "D", teks: "Gambar (4) dengan titik bergeser dari pusat bangun" }
      ],
      kunci: "D",
      pembahasan:
        "Pada gambar (1), (2), dan (3), titik berada di titik pusat bangun; pada gambar (4), titik bergeser ke pojok kiri atas persegi (D)."
    },
    {
      id: "PK-30",
      subtes: "potensi_kognitif",
      aspek: "Spasial & Pola Abstrak",
      tipe: "single",
      stimulus: svgBox(
        "Kombinasi dua bentuk: gambar 1 (+) digabung dengan gambar 2 (×)",
        '<rect x="10" y="15" width="65" height="65" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><line x1="42" y1="22" x2="42" y2="72" stroke="currentColor" stroke-width="3"/><line x1="20" y1="47" x2="65" y2="47" stroke="currentColor" stroke-width="3"/><text x="42" y="100" text-anchor="middle" font-size="12" fill="currentColor">Gambar 1 (+)</text>' +
          '<text x="90" y="54" text-anchor="middle" font-size="20" font-weight="bold" fill="currentColor">+</text>' +
          '<rect x="105" y="15" width="65" height="65" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><line x1="117" y1="25" x2="158" y2="68" stroke="currentColor" stroke-width="3"/><line x1="117" y1="68" x2="158" y2="25" stroke="currentColor" stroke-width="3"/><text x="137" y="100" text-anchor="middle" font-size="12" fill="currentColor">Gambar 2 (×)</text>' +
          '<text x="185" y="54" text-anchor="middle" font-size="20" font-weight="bold" fill="currentColor">=</text>' +
          '<rect x="200" y="15" width="65" height="65" rx="4" fill="none" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><text x="232" y="56" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">?</text><text x="232" y="100" text-anchor="middle" font-size="12" fill="currentColor">Hasil Gabungan</text>',
        "0 0 280 112"
      ),
      pertanyaan: "Apabila Gambar 1 dan Gambar 2 digabungkan tanpa menghapus komponen yang berbeda, hasil yang terbentuk adalah ...",
      opsi: [
        {
          huruf: "A",
          teks: "Garis horizontal serta diagonal kanan",
          svg: miniSvg("Horizontal dan diagonal naik", '<line x1="12" y1="32" x2="52" y2="32" stroke="currentColor" stroke-width="2.5"/><line x1="14" y1="50" x2="50" y2="14" stroke="currentColor" stroke-width="2.5"/>')
        },
        {
          huruf: "B",
          teks: "Bingkai persegi tanpa garis tengah",
          svg: miniSvg("Persegi kosong", '<rect x="16" y="16" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5"/>')
        },
        {
          huruf: "C",
          teks: "Bintang 8 arah berpusat di tengah",
          svg: miniSvg("Bintang 8 arah", '<line x1="32" y1="12" x2="32" y2="52" stroke="currentColor" stroke-width="2.5"/><line x1="12" y1="32" x2="52" y2="32" stroke="currentColor" stroke-width="2.5"/><line x1="16" y1="16" x2="48" y2="48" stroke="currentColor" stroke-width="2.5"/><line x1="16" y1="48" x2="48" y2="16" stroke="currentColor" stroke-width="2.5"/>')
        },
        {
          huruf: "D",
          teks: "Tanda silang tanpa sumbu tengah",
          svg: miniSvg("Tanda silang", '<line x1="16" y1="16" x2="48" y2="48" stroke="currentColor" stroke-width="2.5"/><line x1="16" y1="48" x2="48" y2="16" stroke="currentColor" stroke-width="2.5"/>')
        }
      ],
      kunci: "C",
      pembahasan:
        "Penggabungan garis vertikal-horizontal (+) dan dua diagonal (×) membentuk simbol bintang delapan arah berpusat di tengah (C)."
    },

    /* ===================== SUBTES 2: POTENSI PERILAKU (20 SOAL) ===================== */
    /* --- Berpikir Kritis & Strategis (4 soal: PP-01 s.d. PP-04) --- */
    {
      id: "PP-01",
      subtes: "potensi_perilaku",
      aspek: "Berpikir Kritis & Strategis",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Menjelang penyusunan rencana pemeriksaan tahun depan di empat provinsi wilayah Papua, data realisasi belanja menunjukkan kenaikan 35% pada program bantuan langsung namun laporan capaian output belum terbarui. Langkah awal yang paling mencerminkan cara berpikir strategis Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Memetakan risiko tiap sektor agar pengujian fokus pada area lonjakan dana tanpa bukti keluaran.", skor: 4 },
        { huruf: "B", teks: "Menetapkan alokasi hari pemeriksaan sama rata bagi seluruh dinas agar penyusunan jadwal tim mudah dikendalikan.", skor: 2 },
        { huruf: "C", teks: "Menunda penyusunan rencana kerja hingga seluruh dinas menyerahkan laporan capaian akhir tahun secara lengkap.", skor: 1 },
        { huruf: "D", teks: "Mengirimkan permintaan konfirmasi tertulis kepada kepala dinas terkait alasan keterlambatan pembaruan data sebelum memilih sampel.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) langsung menerjemahkan anomali data (lonjakan anggaran vs nihil output) menjadi pemetaan risiko untuk strategi sampling. Skor 3 (D) proaktif mengonfirmasi tetapi belum memetakan risiko. Skor 2 (B) mengabaikan prioritas risiko, dan Skor 1 (C) menunda jadwal perencanaan."
    },
    {
      id: "PP-02",
      subtes: "potensi_perilaku",
      aspek: "Berpikir Kritis & Strategis",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Dalam rapat evaluasi internal, seorang anggota tim menyampaikan kesimpulan bahwa seluruh keterlambatan proyek jalan disebabkan oleh faktor cuaca ekstrem berdasarkan keterangan kontraktor. Sikap kritis Anda terhadap paparan tersebut adalah ...",
      opsi: [
        { huruf: "A", teks: "Menerima kesimpulan itu sementara karena curah hujan di wilayah pegunungan memang tergolong tinggi sepanjang tahun.", skor: 2 },
        { huruf: "B", teks: "Meminta penyandingan data curah hujan resmi BMKG, log harian progres, dan daftar mobilisasi alat.", skor: 4 },
        { huruf: "C", teks: "Menolak seluruh penjelasan kontraktor dan langsung menetapkan bahwa keterlambatan sepenuhnya kelalaian penyedia jasa.", skor: 1 },
        { huruf: "D", teks: "Menyarankan pernyataan kontraktor dicatat sebagai catatan kaki sambil menunggu pengumpulan dokumen pendukung dari PPK.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) menerapkan verifikasi silang berbasis bukti independen (BMKG, log harian, mobilisasi alat) secara objektif. Skor 3 (D) berhati-hati namun belum merumuskan uji silang spesifik. Skor 2 (A) menerima klaim sepihak, dan Skor 1 (C) berprasangka tanpa bukti."
    },
    {
      id: "PP-03",
      subtes: "potensi_perilaku",
      aspek: "Berpikir Kritis & Strategis",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Satuan kerja tempat Anda bertugas sering menghadapi perputaran pegawai terampil ke unit kerja lain setiap dua tahun, sehingga pengetahuan teknis analisis data kerap terputus. Solusi jangka panjang yang Anda usulkan adalah ...",
      opsi: [
        { huruf: "A", teks: "Meminta pimpinan menahan mutasi seluruh pegawai yang sudah mahir analisis data minimal selama lima tahun penuh.", skor: 1 },
        { huruf: "B", teks: "Mengadakan sesi tanya jawab informal setiap kali terdapat pegawai baru yang mulai bertugas di satuan kerja.", skor: 3 },
        { huruf: "C", teks: "Membangun panduan kerja standar, repositori skrip bersama, dan sesi transfer pengetahuan sebelum mutasi.", skor: 4 },
        { huruf: "D", teks: "Menyerahkan seluruh pekerjaan analisis data kompleks kepada satu atau dua pegawai senior yang jarang dimutasi.", skor: 2 }
      ],
      pembahasan:
        "Skor 4 (C) menciptakan sistem ketahanan pengetahuan institusional sehingga kualitas tidak bergantung pada satu individu. Skor 3 (B) membantu secara reaktif, Skor 2 (D) memunculkan titik ketergantungan tunggal, dan Skor 1 (A) menghambat mobilitas SDM."
    },
    {
      id: "PP-04",
      subtes: "potensi_perilaku",
      aspek: "Berpikir Kritis & Strategis",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Saat menelaah usulan inovasi pelaporan elektronik di unit kerja, sebagian rekan mendukung penuh karena menghemat kertas, sedangkan sebagian lain khawatir soal keamanan akses. Bagaimana Anda menimbang dua pandangan tersebut?",
      opsi: [
        { huruf: "A", teks: "Mengikuti keputusan suara terbanyak di dalam rapat agar inovasi cepat diputuskan dan segera berjalan.", skor: 2 },
        { huruf: "B", teks: "Mengusulkan penundaan inovasi sepenuhnya sampai terbit pedoman baru dari kantor pusat mengenai pelaporan digital.", skor: 1 },
        { huruf: "C", teks: "Meminta tim pengembang aplikasi mempresentasikan ulang fitur keamanannya di hadapan seluruh pegawai unit kerja.", skor: 3 },
        { huruf: "D", teks: "Menimbang efisiensi biaya terhadap kontrol akses, enkripsi, dan kepatuhan standar keamanan data.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menimbang manfaat dan risiko keamanan dalam kerangka evaluasi objektif yang terukur. Skor 3 (C) mencari klarifikasi teknis tetapi belum menetapkan parameter keputusan. Skor 2 (A) mengabaikan analisis risiko, dan Skor 1 (B) menghindari keputusan."
    },

    /* --- Pemecahan Masalah (4 soal: PP-05 s.d. PP-08) --- */
    {
      id: "PP-05",
      subtes: "potensi_perilaku",
      aspek: "Pemecahan Masalah",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Dua hari sebelum tenggat penyusunan bahan pemetaan data, perangkat lunak pengolah angka di laptop Anda mengalami galat saat membuka berkas transaksi berkapasitas 120.000 baris. Tindakan paling efektif yang Anda lakukan adalah ...",
      opsi: [
        { huruf: "A", teks: "Memecah berkas lewat skrip lokal, memverifikasi kelengkapan baris, lalu menyelesaikan agregasi sesuai jadwal.", skor: 4 },
        { huruf: "B", teks: "Melaporkan kepada atasan bahwa berkas mengalami kerusakan teknis dan mengusulkan perpanjangan tenggat selama satu minggu.", skor: 1 },
        { huruf: "C", teks: "Mencoba terus membuka ulang berkas yang sama berkali-kali di perangkat lunak tersebut hingga akhirnya dapat dimuat.", skor: 2 },
        { huruf: "D", teks: "Meminta bantuan teknisi bagian TI untuk memindahkan berkas tersebut ke komputer lain dengan kapasitas memori lebih besar.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menyelesaikan hambatan secara mandiri melalui alat alternatif lokal sekaligus memvalidasi keutuhan data tepat waktu. Skor 3 (D) bergantung pada antrean pihak lain, Skor 2 (C) tidak efektif, dan Skor 1 (B) menyerah sebelum mencari solusi."
    },
    {
      id: "PP-06",
      subtes: "potensi_perilaku",
      aspek: "Pemecahan Masalah",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Koneksi internet di kantor perwakilan terputus selama empat jam tepat pada hari pengunggahan dokumen tindak lanjut yang jadwalnya berakhir pukul 17.00 WIT. Apa langkah Anda?",
      opsi: [
        { huruf: "A", teks: "Menunggu jaringan kantor pulih kembali sambil mengerjakan tugas administrasi lain yang tidak memakai akses internet.", skor: 2 },
        { huruf: "B", teks: "Mengirimkan dokumen lewat pesan pribadi ke rekan di Jakarta agar langsung diunggah menggunakan akun login mereka.", skor: 1 },
        { huruf: "C", teks: "Memakai tethering aman yang diizinkan, memprioritaskan berkas utama, dan melapor ke koordinator.", skor: 4 },
        { huruf: "D", teks: "Mencatat gangguan jaringan kepada tim TI serta memberitahukan potensi keterlambatan unggah dokumen kepada atasan langsung.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menggunakan jalur alternatif yang aman untuk memenuhi tenggat sambil menjaga koordinasi. Skor 3 (D) proaktif melapor namun belum mengupayakan penyelesaian tenggat. Skor 2 (A) pasif, dan Skor 1 (B) melanggar keamanan akun."
    },
    {
      id: "PP-07",
      subtes: "potensi_perilaku",
      aspek: "Pemecahan Masalah",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Anda mendapati bahwa angka rekapitulasi realisasi pada dua lampiran berbeda tidak sama sebesar Rp185 juta, padahal keduanya bersumber dari buku kas yang sama. Apa langkah pemecahan masalah Anda?",
      opsi: [
        { huruf: "A", teks: "Menggunakan nilai paling besar sebagai patokan aman untuk laporan sementara agar penyajian tidak terlihat kurang catat.", skor: 1 },
        { huruf: "B", teks: "Merekonsiliasi kedua lampiran per tanggal dan kode akun guna melacak transaksi penyebab selisih.", skor: 4 },
        { huruf: "C", teks: "Mengembalikan kedua berkas rekapitulasi kepada staf penyusun awal dan meminta mereka menghitung ulang seluruh baris.", skor: 3 },
        { huruf: "D", teks: "Mencantumkan catatan kaki di bawah tabel bahwa masih ada perbedaan Rp185 juta tanpa menelusuri penyebab selisihnya.", skor: 2 }
      ],
      pembahasan:
        "Skor 4 (B) langsung melakukan rekonsiliasi sistematis per tanggal dan akun untuk menemukan akar selisih. Skor 3 (C) mengembalikan tanpa penelusuran awal, Skor 2 (D) membiarkan ketidaksinkronan terbuka, dan Skor 1 (A) memanipulasi angka."
    },
    {
      id: "PP-08",
      subtes: "potensi_perilaku",
      aspek: "Pemecahan Masalah",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Dalam rapat persiapan tugas lintas tim, terjadi kebuntuan karena jadwal perjalanan dinas dua subtim bentrok pada penggunaan satu kendaraan operasional yang tersedia. Bagaimana Anda memecahkan situasi tersebut?",
      opsi: [
        { huruf: "A", teks: "Menyerahkan keputusan penentuan pemakai kendaraan sepenuhnya kepada kepala subbagian umum agar tidak dianggap memihak.", skor: 3 },
        { huruf: "B", teks: "Meminta subtim yang beranggotakan pegawai lebih muda mengalah dan menunda jadwal keberangkatannya ke pekan depan.", skor: 1 },
        { huruf: "C", teks: "Mengundi penggunaan kendaraan di hadapan kedua ketua subtim supaya proses pemilihan terkesan adil bagi kedua belah pihak.", skor: 2 },
        { huruf: "D", teks: "Memetakan rute dan urgensi tenggat untuk menyusun antar-jemput bergiliran atau sewa sesuai aturan.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) memecahkan masalah secara rasional berbasis urgensi jadwal dan efisiensi rute tanpa mengorbankan tugas tim mana pun. Skor 3 (A) melempar keputusan tanpa opsi solusi, Skor 2 (C) mengabaikan prioritas kinerja, dan Skor 1 (B) sewenang-wenang."
    },

    /* --- Kemampuan Interpersonal (4 soal: PP-09 s.d. PP-12) --- */
    {
      id: "PP-09",
      subtes: "potensi_perilaku",
      aspek: "Kemampuan Interpersonal",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Seorang rekan kerja tampak murung dan produktivitasnya menurun drastis selama satu pekan terakhir sehingga beberapa dokumen dukungannya terlambat diserahkan ke Anda. Sikap yang paling konstruktif adalah ...",
      opsi: [
        { huruf: "A", teks: "Menghampirinya secara pribadi dengan empati, menanyakan kendala, dan menyepakati jadwal serah realistis.", skor: 4 },
        { huruf: "B", teks: "Langsung melaporkan keterlambatan serah dokumen rekan tersebut kepada pimpinan tanpa berbicara lebih dulu dengannya.", skor: 1 },
        { huruf: "C", teks: "Mengirimkan email pengingat formal agar terdapat jejak tertulis bahwa Anda telah menagih dokumen dukungan tepat waktu.", skor: 3 },
        { huruf: "D", teks: "Membiarkannya dulu hingga suasana hatinya membaik sambil mengerjakan bagian tugas Anda sendiri tanpa menyinggung dokumennya.", skor: 2 }
      ],
      pembahasan:
        "Skor 4 (A) menggabungkan empati interpersonal dengan kesepakatan tenggat yang konkret. Skor 3 (C) tertib administrasi namun kurang membangun dukungan relasional. Skor 2 (D) membiarkan hambatan kerja berlanjut, dan Skor 1 (B) merusak kepercayaan tim."
    },
    {
      id: "PP-10",
      subtes: "potensi_perilaku",
      aspek: "Kemampuan Interpersonal",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Saat Anda menyampaikan masukan perbaikan atas konsep memo dinas rekan satu tim, ia bereaksi defensif dan merasa pekerjaannya selalu disalahkan. Respons terbaik Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menghentikan pembahasan lalu memperbaiki sendiri seluruh draf memo tersebut diam-diam agar tidak memicu perdebatan lagi.", skor: 2 },
        { huruf: "B", teks: "Menegaskan dengan nada keras bahwa koreksi Anda sudah pasti benar sesuai tata naskah dinas yang berlaku di kantor.", skor: 1 },
        { huruf: "C", teks: "Tetap tenang, menghargai bagian draf yang kuat, dan menunjukkan poin data yang perlu diselaraskan.", skor: 4 },
        { huruf: "D", teks: "Menunda diskusi tatap muka sebentar hingga suasana mereda lalu mengirimkan daftar catatan perbaikan melalui pesan chat.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) mengelola respons defensif dengan tenang, mengakui sisi positif karya rekan, dan mengarahkan dialog ke substansi data. Skor 3 (D) meredakan ketegangan namun komunikasi tertulis berisiko salah tangkap. Skor 2 (A) dan Skor 1 (B) tidak konstruktif."
    },
    {
      id: "PP-11",
      subtes: "potensi_perilaku",
      aspek: "Kemampuan Interpersonal",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Anda baru dipindahkan ke kantor perwakilan baru dan belum mengenal mayoritas pegawai di unit baru tersebut, sementara tenggat kerja kelompok sudah berjalan. Bagaimana Anda membangun hubungan kerja?",
      opsi: [
        { huruf: "A", teks: "Menunggu atasan memperkenalkan Anda secara resmi di rapat bulanan sebelum mulai berinteraksi aktif dengan pegawai lain.", skor: 2 },
        { huruf: "B", teks: "Mengenalkan diri secara proaktif, menyimak alur kerja unit, dan menawarkan bantuan pada tugas mendesak.", skor: 4 },
        { huruf: "C", teks: "Hanya berkomunikasi seperlunya sesuai pembagian tugas tertulis agar terkesan menjaga batas profesionalisme sejak hari awal.", skor: 3 },
        { huruf: "D", teks: "Lebih sering berkumpul bersama sesama pegawai yang berasal dari daerah atau angkatan masuk yang sama dengan Anda.", skor: 1 }
      ],
      pembahasan:
        "Skor 4 (B) menunjukkan inisiatif sosial yang adaptif, kesediaan belajar dari pola unit baru, dan kontribusi kerja nyata. Skor 3 (C) kaku membangun kohesi, Skor 2 (A) pasif, dan Skor 1 (D) membentuk pengkotakan sosial."
    },
    {
      id: "PP-12",
      subtes: "potensi_perilaku",
      aspek: "Kemampuan Interpersonal",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Dalam diskusi lintas bagian, dua rekan terus berdebat sengit mengenai format tabel lampiran laporan sehingga rapat tidak kunjung membahas substansi utama. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Tetap diam menyimak seluruh perdebatan karena perselisihan terjadi antara pegawai yang lebih senior dari posisi Anda.", skor: 2 },
        { huruf: "B", teks: "Menyela pembicaraan mereka dengan menyatakan bahwa perdebatan soal format tabel hanya membuang waktu berharga rapat.", skor: 1 },
        { huruf: "C", teks: "Mengusulkan penundaan pembahasan format agar dibicarakan berdua saja oleh mereka setelah agenda rapat inti berakhir.", skor: 3 },
        { huruf: "D", teks: "Meminta izin menengahi, merangkum titik temu usulan, dan mengusulkan format sementara agar substansi lanjut.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menjadi mediator yang menghargai kedua pandangan sekaligus mengembalikan efektivitas rapat ke agenda substansi. Skor 3 (C) menunda tanpa menjembatani kesepakatan, Skor 2 (A) pasif, dan Skor 1 (B) memperuncing ketegangan."
    },

    /* --- Kesadaran Diri & Pengelolaan Emosi (4 soal: PP-13 s.d. PP-16) --- */
    {
      id: "PP-13",
      subtes: "potensi_perilaku",
      aspek: "Kesadaran Diri & Pengelolaan Emosi",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Setelah menyelesaikan paparan hasil kerja, pengendali teknis memberi umpan balik tajam bahwa analisis Anda masih dangkal dan melewatkan pengujian penting. Reaksi yang mencerminkan kesadaran diri matang adalah ...",
      opsi: [
        { huruf: "A", teks: "Menerima catatan, mengklarifikasi bagian pengujian yang terlewat, dan segera menyusun perbaikan.", skor: 4 },
        { huruf: "B", teks: "Merasa tersinggung berat dan langsung berargumen bahwa beban kerja Anda minggu ini memang jauh lebih padat dari tim lain.", skor: 1 },
        { huruf: "C", teks: "Mengiyakan seluruh kritik saat rapat tanpa menanyakan bagian yang kurang jelas agar sesi paparan cepat ditutup.", skor: 2 },
        { huruf: "D", teks: "Mencatat semua masukan secara lengkap dan meminta waktu mempelajari ulang berkas sebelum memberi tanggapan perbaikan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) terbuka terhadap umpan balik, aktif memastikan ketepatan koreksi teknis, dan langsung bertindak memperbaikinya. Skor 3 (D) tenang tetapi menunda klarifikasi selagi pengendali teknis hadir. Skor 2 (C) pasif, dan Skor 1 (B) defensif."
    },
    {
      id: "PP-14",
      subtes: "potensi_perilaku",
      aspek: "Kesadaran Diri & Pengelolaan Emosi",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Anda menyadari bahwa ketika menghadapi tekanan tenggat berdekatan, Anda cenderung tergesa-gesa meninjau angka kecil sehingga rawan salah ketik. Bagaimana Anda mengantisipasi kecenderungan diri tersebut?",
      opsi: [
        { huruf: "A", teks: "Menghindari penugasan yang memuat pengolahan angka rinci dan meminta pimpinan memindahkan Anda ke penyusunan narasi.", skor: 1 },
        { huruf: "B", teks: "Meminta rekan meja sebelah selalu memeriksa ulang seluruh angka hasil kerja Anda setiap kali jadwal tenggat mendekat.", skor: 3 },
        { huruf: "C", teks: "Menyiapkan daftar periksa verifikasi mandiri, jeda ulas 15 menit, serta rumus cek silang otomatis.", skor: 4 },
        { huruf: "D", teks: "Berusaha lebih hati-hati dalam hati sambil tetap mempertahankan kecepatan kerja serta pola pengetikan yang sama seperti biasa.", skor: 2 }
      ],
      pembahasan:
        "Skor 4 (C) mengubah kesadaran kelemahan diri menjadi sistem kendali mutu mandiri yang nyata. Skor 3 (B) menggantungkan pemeriksaan dasar ke orang lain, Skor 2 (D) hanya niat tanpa mekanisme, dan Skor 1 (A) menghindari tugas."
    },
    {
      id: "PP-15",
      subtes: "potensi_perilaku",
      aspek: "Kesadaran Diri & Pengelolaan Emosi",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Pada hari keempat kerja lembur beruntun, Anda mulai merasa kelelahan emosional dan mudah tersinggung oleh pertanyaan berulang dari rekan tim. Apa tindakan paling tepat?",
      opsi: [
        { huruf: "A", teks: "Menjawab pertanyaan rekan dengan nada tinggi serta kalimat singkat agar ia tidak berani bertanya hal serupa lagi.", skor: 1 },
        { huruf: "B", teks: "Mengambil jeda singkat 5–10 menit, menjawab dengan tenang, dan membuat ringkasan tanya-jawab tertulis.", skor: 4 },
        { huruf: "C", teks: "Memaksakan diri terus menatap layar tanpa jeda istirahat sambil menahan rasa kesal hingga pekerjaan malam selesai.", skor: 2 },
        { huruf: "D", teks: "Meminta rekan menuliskan seluruh pertanyaannya terlebih dahulu dan berjanji membalasnya esok pagi setelah cukup tidur.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) mengatur ulang kondisi emosional dengan jeda singkat sekaligus mencegah pengulangan pertanyaan secara konstruktif lewat ringkasan tertulis. Skor 3 (D) menjaga ketenangan tetapi menunda koordinasi, Skor 2 (C) berisiko kelelahan emosional, dan Skor 1 (A) merusak relasi tim."
    },
    {
      id: "PP-16",
      subtes: "potensi_perilaku",
      aspek: "Kesadaran Diri & Pengelolaan Emosi",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Dalam pengisian profil kompetensi pribadi sebelum pemetaan, Anda diminta mengevaluasi kekuatan dan area pengembangan diri Anda. Pendekatan yang paling objektif adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengisi seluruh aspek dengan skor maksimal agar terlihat paling siap menerima promosi ke jenjang jabatan lebih tinggi.", skor: 1 },
        { huruf: "B", teks: "Memilih skor tengah pada hampir semua butir supaya tampak rendah hati sekaligus aman dari penilaian berlebihan.", skor: 2 },
        { huruf: "C", teks: "Menilai jujur berdasarkan bukti capaian dan mencatat dua area pengembangan sesuai umpan balik atasan.", skor: 4 },
        { huruf: "D", teks: "Menyebutkan kekuatan berdasarkan hasil kerja terakhir lalu mengosongkan kolom kelemahan karena merasa belum ada keluhan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) objektif berbasis bukti dan reflektif terhadap umpan balik sebagai dasar pengembangan kompetensi. Skor 3 (D) kurang reflektif, Skor 2 (B) menghindar dari evaluasi nyata, dan Skor 1 (A) memanipulasi penilaian diri."
    },

    /* --- Motivasi Berprestasi & Adaptabilitas (4 soal: PP-17 s.d. PP-20) --- */
    {
      id: "PP-17",
      subtes: "potensi_perilaku",
      aspek: "Motivasi Berprestasi & Adaptabilitas",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Pimpinan memperkenalkan format pelaporan kinerja berbasis dasbor analitik baru, padahal selama ini Anda sudah sangat terbiasa dan cepat menyusun laporan dengan templat dokumen lama. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Tetap memakai templat dokumen lama untuk laporan berjalan dan baru mempelajari dasbor jika sistem lama ditutup total.", skor: 2 },
        { huruf: "B", teks: "Menolak penggunaan dasbor karena dianggap menambah beban kerja dan kurang cocok bagi penyusunan narasi pemeriksaan.", skor: 1 },
        { huruf: "C", teks: "Mengikuti pelatihan dasbor sesuai jadwal kantor tanpa mencoba menerapkannya hingga mayoritas rekan mulai berpindah.", skor: 3 },
        { huruf: "D", teks: "Mempelajari panduan sejak awal, menguji migrasi satu sampel laporan, dan memberi masukan perbaikan.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) aktif beradaptasi lewat pembelajaran dini dan uji coba langsung disertai masukan konstruktif. Skor 3 (C) pasif menunggu rekan lain, Skor 2 (A) menunda adaptasi, dan Skor 1 (B) menolak pembaruan."
    },
    {
      id: "PP-18",
      subtes: "potensi_perilaku",
      aspek: "Motivasi Berprestasi & Adaptabilitas",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Tugas rutin bulanan Anda selesai dua hari lebih cepat dari jadwal tanpa ada koreksi tambahan. Apa yang paling baik Anda lakukan pada sisa waktu tersebut?",
      opsi: [
        { huruf: "A", teks: "Memanfaatkan waktu luang tersebut untuk merapikan meja kerja pribadi dan beristirahat penuh hingga tugas bulan depan tiba.", skor: 2 },
        { huruf: "B", teks: "Menelaah pola kesalahan berulang untuk menyusun templat pencegahan serta menawarkan dukungan ke tim.", skor: 4 },
        { huruf: "C", teks: "Menyerahkan hasil kerja lebih awal lalu duduk menunggu instruksi langsung atasan sebelum mengerjakan aktivitas lain.", skor: 3 },
        { huruf: "D", teks: "Mengatur ulang ritme agar pelaporan bulan berikutnya selesai tepat di hari terakhir supaya beban kerja tampak penuh.", skor: 1 }
      ],
      pembahasan:
        "Skor 4 (B) mendorong perbaikan berkelanjutan (mencegah kesalahan berulang) dan membantu produktivitas tim. Skor 3 (C) patuh namun minim inisiatif, Skor 2 (A) tidak bernilai tambah, dan Skor 1 (D) merusak integritas produktivitas."
    },
    {
      id: "PP-19",
      subtes: "potensi_perilaku",
      aspek: "Motivasi Berprestasi & Adaptabilitas",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Anda mendapat penugasan mendadak menangani bidang pemeriksaan yang belum pernah Anda geluti sebelumnya, seperti audit sistem informasi penggajian daerah. Langkah Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mempelajari panduan terdahulu, berdiskusi dengan auditor berpengalaman, dan menyusun daftar uji prioritas.", skor: 4 },
        { huruf: "B", teks: "Meminta penugasan dipindahkan ke rekan lain yang memiliki latar belakang pendidikan teknik informatika dan komputer.", skor: 1 },
        { huruf: "C", teks: "Menerima tugas tersebut lalu mengandalkan templat daftar pertanyaan umum dari pemeriksaan laporan keuangan reguler.", skor: 2 },
        { huruf: "D", teks: "Menerima penugasan dengan baik dan mengikuti seluruh arahan teknis langkah demi langkah dari ketua tim di lapangan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menunjukkan kelincahan belajar (learning agility) melalui persiapan terarah dan konsultasi ahli sebelum turun ke lapangan. Skor 3 (D) kooperatif namun kurang persiapan mandiri, Skor 2 (C) salah konteks metode, dan Skor 1 (B) menghindari tantangan."
    },
    {
      id: "PP-20",
      subtes: "potensi_perilaku",
      aspek: "Motivasi Berprestasi & Adaptabilitas",
      tipe: "weighted",
      stimulus: null,
      pertanyaan:
        "Ketika standar kerja minimum hanya meminta evaluasi terhadap 20% sampel transaksi terbesar, bagaimana Anda menyikapi target tersebut saat menemukan indikasi penyimpangan pola pemecahan nilai di bawah batas sampel?",
      opsi: [
        { huruf: "A", teks: "Tetap memeriksa 20% sampel sesuai surat tugas awal agar pekerjaan cepat selesai dan tidak melebihi alokasi jam kerja.", skor: 2 },
        { huruf: "B", teks: "Mencatat kecurigaan tersebut secara lisan saat istirahat siang tanpa melakukan pengujian maupun dokumentasi tambahan.", skor: 1 },
        { huruf: "C", teks: "Memperluas pengujian pada kelompok transaksi terpecah tersebut dan mendokumentasikan dasarnya di KKP.", skor: 4 },
        { huruf: "D", teks: "Melaporkan kecurigaan tersebut kepada ketua tim lalu menunggu instruksi tertulis apakah uji tambahan perlu dilakukan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) melampaui pemenuhan formal demi kualitas hasil berbasis risiko dengan jejak dokumentasi KKP yang akuntabel. Skor 3 (D) menunggu arahan tanpa analisis awal, Skor 2 (A) menggugurkan kewajiban, dan Skor 1 (B) abai terhadap indikasi risiko."
    }
  ];
})();
