/* ==========================================================================
   Level 1: Bank Soal Standar CAT / CACT BKN - Kompetensi (50 Soal)
   Subtes 3: Kompetensi Manajerial (36 Soal)
   & Subtes 4: Kompetensi Sosial Kultural - Perekat Bangsa (14 Soal)
   Mengacu pada PermenPANRB No. 38 Tahun 2017
   ========================================================================== */

(function () {
  window.BANK_BKN_KOMPETENSI = [
    /* ===================== SUBTES 3: MANAJERIAL (36 SOAL) ===================== */
    /* --- 1. Integritas (5 soal: BKN-KM-01 s.d. BKN-KM-05) --- */
    {
      id: "BKN-KM-01",
      subtes: "manajerial",
      aspek: "Integritas",
      tipe: "weighted",
      indikator: "Mematuhi aturan jam kerja dan disiplin ASN tanpa mencari celah pembenaran pribadi.",
      pertanyaan:
        "Anda tiba di kantor terlambat lima belas menit karena kemacetan, sementara sistem presensi elektronik mencatat kehadiran tepat waktu hanya sampai pukul 07.30. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Meminta rekan yang datang lebih awal membantu memindai kartu akses Anda agar catatan presensi terlihat tepat waktu.", skor: 1 },
        { huruf: "B", teks: "Tetap melakukan presensi apa adanya, melapor ke atasan, dan mengganti waktu kerja yang tertunda.", skor: 4 },
        { huruf: "C", teks: "Langsung duduk bekerja di meja tanpa melakukan presensi elektronik pagi agar keterlambatan tidak tercatat sistem.", skor: 2 },
        { huruf: "D", teks: "Melakukan presensi seperti biasa lalu menulis izin alasan kemacetan di aplikasi tanpa memberi tahu atasan langsung.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) menunjukkan kejujuran terhadap catatan disiplin, akuntabilitas kepada atasan, dan komitmen mengganti jam kerja. Skor 3 (D) jujur namun minim komunikasi langsung. Skor 2 (C) menghindari pencatatan, dan Skor 1 (A) memalsukan presensi."
    },
    {
      id: "BKN-KM-02",
      subtes: "manajerial",
      aspek: "Integritas",
      tipe: "weighted",
      indikator: "Menolak pemberian atau imbalan dalam bentuk apa pun yang terkait dengan pelaksanaan tugas pelayanan.",
      pertanyaan:
        "Seorang pemohon layanan perizinan merasa sangat terbantu karena berkasnya selesai tepat waktu, lalu meninggalkan amplop uang terima kasih di atas meja Anda. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menerima amplop tersebut lalu langsung memasukkannya ke kas sosial ruangan agar tidak digunakan untuk kepentingan pribadi.", skor: 2 },
        { huruf: "B", teks: "Menyimpan amplop tersebut sebagai uang lelah karena proses layanan sudah berjalan sesuai prosedur tanpa merugikan negara.", skor: 1 },
        { huruf: "C", teks: "Mengembalikan amplop tersebut secara langsung saat pemohon belum pergi tanpa menjelaskan ketentuan anti-gratifikasi kantor.", skor: 3 },
        { huruf: "D", teks: "Menolak halus serta mengembalikan amplop sambil menjelaskan bahwa layanan instansi gratis dan bebas gratifikasi.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menolak gratifikasi secara tegas namun santun sekaligus memberi edukasi tentang integritas layanan publik. Skor 3 (C) menolak tanpa mengedukasi, Skor 2 (A) tetap melanggar larangan menerima gratifikasi, dan Skor 1 (B) melanggar kode etik ASN."
    },
    {
      id: "BKN-KM-03",
      subtes: "manajerial",
      aspek: "Integritas",
      tipe: "weighted",
      indikator: "Menolak intervensi terhadap kelengkapan persyaratan administrasi meskipun diminta oleh atasan.",
      pertanyaan:
        "Atasan meminta Anda mempercepat pengesahan berkas permohonan milik kerabatnya, padahal terdapat dua dokumen syarat wajib yang belum dilampirkan. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menolak santun dengan menjelaskan seluruh berkas wajib memenuhi syarat lengkap sesuai prosedur sebelum diproses.", skor: 4 },
        { huruf: "B", teks: "Memproses berkas kerabat atasan tersebut diam-diam agar hubungan kerja di ruangan tetap harmonis tanpa hambatan.", skor: 1 },
        { huruf: "C", teks: "Meminta rekan sebelah meja menandatangani berkas tersebut supaya Anda tidak perlu menanggung risiko kesalahan prosedur.", skor: 2 },
        { huruf: "D", teks: "Menunda pemrosesan berkas tersebut di laci meja selama beberapa hari tanpa memberi penjelasan tegas kepada atasan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menjaga keteguhan prinsip dan prosedur secara terbuka namun tetap santun kepada pimpinan. Skor 3 (D) menunda tanpa keberanian menjelaskan aturan. Skor 2 (C) melempar risiko ke rekan, dan Skor 1 (B) melanggar integritas."
    },
    {
      id: "BKN-KM-04",
      subtes: "manajerial",
      aspek: "Integritas",
      tipe: "weighted",
      indikator: "Mempertanggungjawabkan penggunaan anggaran perjalanan dinas sesuai pengeluaran riil dan bukti sah.",
      pertanyaan:
        "Setelah menyelesaikan perjalanan dinas tiga hari, biaya penginapan riil yang Anda keluarkan ternyata lebih rendah daripada pagu maksimal standar biaya. Bagaimana Anda menyusun pertanggungjawabannya?",
      opsi: [
        { huruf: "A", teks: "Meminta hotel menerbitkan kuitansi sebesar pagu maksimal agar sisa uang harian dapat menambah biaya perjalanan pulang.", skor: 1 },
        { huruf: "B", teks: "Melaporkan sesuai nilai kuitansi riil dan mengembalikan sisa uang muka perjalanan ke bendahara pengeluaran.", skor: 4 },
        { huruf: "C", teks: "Menggunakan sisa pagu penginapan untuk membeli oleh-oleh khas daerah yang akan dibagikan ke rekan satu ruangan.", skor: 2 },
        { huruf: "D", teks: "Menyerahkan kuitansi riil kepada staf administrasi dan membiarkannya menghitung sendiri apakah ada sisa yang harus disetor.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) jujur berbasis bukti pengeluaran nyata serta proaktif mengembalikan sisa anggaran. Skor 3 (D) jujur namun pasif dalam memastikan penyetoran sisa. Skor 2 (C) menyalahgunakan peruntukan dana, dan Skor 1 (A) memalsukan kuitansi."
    },
    {
      id: "BKN-KM-05",
      subtes: "manajerial",
      aspek: "Integritas",
      tipe: "weighted",
      indikator: "Mengakui kekeliruan pribadi secara terbuka tanpa menyalahkan pihak lain dan segera memperbaikinya.",
      pertanyaan:
        "Anda tidak sengaja menghapus salah satu lembar data rekapitulasi yang seharusnya dikirim pagi ini, sehingga penyampaian laporan bagian sedikit tertunda. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengatakan kepada koordinator bahwa gangguan komputer otomatis menyebabkan file tersebut hilang sendiri sejak semalam.", skor: 1 },
        { huruf: "B", teks: "Meminta rekan satu tim menyusun ulang seluruh lembar data tersebut karena ia juga menyimpan salinan mentah minggu lalu.", skor: 2 },
        { huruf: "C", teks: "Mengakui kekeliruan secara jujur kepada atasan, memulihkan data dari cadangan atau menyusunnya ulang secepatnya.", skor: 4 },
        { huruf: "D", teks: "Mengirimkan berkas tanpa lembar yang terhapus terlebih dahulu lalu menyusulkannya esok hari bila tidak ada yang menanyakan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menunjukkan tanggung jawab penuh atas kesalahan sendiri disertai upaya perbaikan secepatnya. Skor 3 (D) tidak transparan soal kelengkapan dokumen, Skor 2 (B) melempar pekerjaan, dan Skor 1 (A) berbohong."
    },

    /* --- 2. Kerja Sama (5 soal: BKN-KM-06 s.d. BKN-KM-10) --- */
    {
      id: "BKN-KM-06",
      subtes: "manajerial",
      aspek: "Kerja Sama",
      tipe: "weighted",
      indikator: "Membantu anggota tim baru beradaptasi dengan ritme kerja agar target kelompok tercapai.",
      pertanyaan:
        "Dalam sebuah tim kerja, ada seorang pegawai baru yang tampak kesulitan mengikuti ritme kerja sehingga tugasnya sering terlambat. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Membiarkannya bekerja sendiri supaya ia cepat terbiasa menghadapi tekanan dan ritme kerja instansi pemerintah.", skor: 2 },
        { huruf: "B", teks: "Melaporkan kinerjanya kepada atasan langsung agar segera diberikan teguran resmi sebelum proyek terlambat.", skor: 1 },
        { huruf: "C", teks: "Mengambil alih seluruh tugas pegawai baru tersebut diam-diam supaya laporan tim dapat segera dikumpulkan tepat waktu.", skor: 3 },
        { huruf: "D", teks: "Mengajaknya berdiskusi personal, menanyakan kendala, dan membimbingnya menyesuaikan cara kerja tim.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) memberdayakan rekan baru melalui dialog suportif dan bimbingan agar tim kuat bersama. Skor 3 (C) menyelesaikan jangka pendek namun tidak mendidik, Skor 2 (A) pasif, dan Skor 1 (B) kurang membangun solidaritas tim."
    },
    {
      id: "BKN-KM-07",
      subtes: "manajerial",
      aspek: "Kerja Sama",
      tipe: "weighted",
      indikator: "Membagi peran dan tanggung jawab secara adil serta saling melengkapi dalam tim.",
      pertanyaan:
        "Tim Anda mendapat tugas menyusun laporan kegiatan tahunan dalam waktu empat hari. Cara pembagian kerja yang paling efektif adalah ...",
      opsi: [
        { huruf: "A", teks: "Membagi bab secara adil sesuai keahlian masing-masing, menyepakati tenggat antarbab, dan menggabungkan bersama.", skor: 4 },
        { huruf: "B", teks: "Menyerahkan mayoritas penulisan laporan kepada satu pegawai yang paling cepat mengetik agar gaya bahasanya seragam.", skor: 2 },
        { huruf: "C", teks: "Meminta setiap anggota memilih sendiri bab yang disukai lalu mengumpulkan file masing-masing di sore hari keempat.", skor: 1 },
        { huruf: "D", teks: "Menyusun seluruh kerangka dasar sendirian di hari pertama lalu membagi bagian tabel ke anggota lain di hari kedua.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) mengoptimalkan kekuatan tiap anggota dengan koordinasi jadwal yang jelas sejak awal. Skor 3 (D) kurang partisipatif di tahap perancangan, Skor 2 (B) timpang beban, dan Skor 1 (C) berisiko bentrok isi dan terlambat."
    },
    {
      id: "BKN-KM-08",
      subtes: "manajerial",
      aspek: "Kerja Sama",
      tipe: "weighted",
      indikator: "Membangun koordinasi lancar lintas bidang untuk mendukung penyelesaian target organisasi.",
      pertanyaan:
        "Penyusunan program kerja bagian Anda membutuhkan data rekapitulasi aset terbaru dari bagian perlengkapan yang sedang sibuk melakukan inventarisasi. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengirimkan permintaan data secara mendadak pada hari terakhir tenggat dan mendesak bagian perlengkapan segera menyerahkan.", skor: 1 },
        { huruf: "B", teks: "Menghubungi narahubung bagian perlengkapan sejak awal dengan daftar kolom yang jelas serta menyepakati jadwal kirim bertahap.", skor: 4 },
        { huruf: "C", teks: "Menggunakan data aset tahun lalu saja dalam program kerja agar tidak mengganggu kesibukan bagian perlengkapan minggu ini.", skor: 2 },
        { huruf: "D", teks: "Menitipkan permintaan lisan kepada salah satu staf perlengkapan saat berpapasan di lorong tanpa mengirimkan rincian kebutuhan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) menghormati kesibukan unit lain lewat perencanaan dini, kejelasan kebutuhan, dan jadwal bersama. Skor 3 (D) kurang formal dan rawan lupa, Skor 2 (C) menurunkan akurasi data, dan Skor 1 (A) memicu konflik lintas unit."
    },
    {
      id: "BKN-KM-09",
      subtes: "manajerial",
      aspek: "Kerja Sama",
      tipe: "weighted",
      indikator: "Terbuka menerima masukan rekan tim dan mengutamakan hasil terbaik bagi kelompok.",
      pertanyaan:
        "Saat membahas rancangan kegiatan tim, beberapa anggota memberi kritik bahwa jadwal usulan Anda terlalu padat dan berisiko menurunkan mutu pelaksanaan. Reaksi Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mempertahankan rancangan awal Anda sepenuhnya karena penyusunannya sudah membutuhkan waktu cukup lama sejak pekan lalu.", skor: 1 },
        { huruf: "B", teks: "Mencatat semua keluhan anggota tanpa mengubah draf jadwal tersebut dan melihat jalannya kegiatan pada hari pertama nanti.", skor: 3 },
        { huruf: "C", teks: "Mempersilakan anggota yang mengkritik membuat rancangan baru seluruhnya sementara Anda mundur dari peran koordinator.", skor: 2 },
        { huruf: "D", teks: "Menghargai masukan tim, mengulas titik padat, dan menyusun ulang jadwal lebih realistis.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menunjukkan keterbukaan kolaboratif dan komitmen terhadap mutu hasil tim. Skor 3 (B) mendengarkan tanpa menindaklanjuti masukan, Skor 2 (C) emosional, dan Skor 1 (A) kaku."
    },
    {
      id: "BKN-KM-10",
      subtes: "manajerial",
      aspek: "Kerja Sama",
      tipe: "weighted",
      indikator: "Menyatukan perbedaan pendapat di dalam tim menuju kesepakatan yang produktif.",
      pertanyaan:
        "Dua anggota tim berbeda pendapat mengenai urutan penyajian materi sosialisasi sehingga diskusi berjalan buntu. Langkah Anda untuk mengembalikan kerja sama tim adalah ...",
      opsi: [
        { huruf: "A", teks: "Memilih diam saja selama diskusi berlangsung agar tidak dianggap memihak salah satu rekan yang berselisih pendapat.", skor: 2 },
        { huruf: "B", teks: "Meminta pimpinan segera mengambil alih rapat karena anggota tim dianggap tidak mampu berdiskusi secara dewasa.", skor: 3 },
        { huruf: "C", teks: "Menghentikan rapat sosialisasi saat itu juga serta membatalkan agenda diskusi tim sampai mereka berdua berdamai sendiri.", skor: 1 },
        { huruf: "D", teks: "Menengahi dengan merangkum tujuan, menyatukan poin kuat kedua usulan, dan mengajak sepakat.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) berperan aktif sebagai pemersatu tim yang mengarahkan perbedaan kembali ke tujuan bersama. Skor 3 (B) kurang upaya penyelesaian di tingkat tim, Skor 2 (A) pasif, dan Skor 1 (C) mengorbankan jadwal kerja."
    },

    /* --- 3. Komunikasi (4 soal: BKN-KM-11 s.d. BKN-KM-14) --- */
    {
      id: "BKN-KM-11",
      subtes: "manajerial",
      aspek: "Komunikasi",
      tipe: "weighted",
      indikator: "Menyampaikan informasi teknis maupun aturan kerja secara jelas dan mudah dipahami audiens.",
      pertanyaan:
        "Anda diminta menjelaskan perubahan prosedur pengajuan cuti elektronik kepada pegawai dari berbagai latar belakang usia. Cara penyampaian terbaik Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menyajikan alur langkah demi langkah dengan bahasa sederhana, contoh layar, dan sesi tanya jawab.", skor: 4 },
        { huruf: "B", teks: "Membagikan salinan peraturan kepegawaian setebal tiga puluh halaman di grup pesan kantor untuk dibaca masing-masing.", skor: 2 },
        { huruf: "C", teks: "Menggunakan banyak istilah teknis teknologi informasi selama paparan agar sosialisasi terdengar modern dan profesional.", skor: 1 },
        { huruf: "D", teks: "Menjelaskan secara lisan cepat di sela-sela apel pagi selama lima menit tanpa menyediakan panduan tertulis pendukung.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menyesuaikan bahasa dan media visual dengan keberagaman audiens sekaligus membuka ruang klarifikasi. Skor 3 (D) terlalu singkat tanpa rujukan tertulis, Skor 2 (B) sulit dicerna cepat, dan Skor 1 (C) berjarak dengan peserta."
    },
    {
      id: "BKN-KM-12",
      subtes: "manajerial",
      aspek: "Komunikasi",
      tipe: "weighted",
      indikator: "Mendengarkan keluhan atau pandangan pihak lain secara aktif sebelum memberi tanggapan terstruktur.",
      pertanyaan:
        "Saat rapat evaluasi, seorang perwakilan unit lain menyampaikan keluhan panjang dengan nada kecewa terkait keterlambatan surat jawaban dari unit Anda. Sikap komunikasi yang tepat adalah ...",
      opsi: [
        { huruf: "A", teks: "Menyela pembicaraannya secepat mungkin agar ia tahu bahwa unit Anda juga sedang menangani ratusan surat masuk lainnya.", skor: 1 },
        { huruf: "B", teks: "Menyimak tuntas, mengakui ketidaknyamanan, lalu menjelaskan status surat serta target kirimnya.", skor: 4 },
        { huruf: "C", teks: "Menatap layar ponsel sambil menunggu keluhannya selesai lalu menjawab singkat bahwa suratnya sedang diproses bagian arsip.", skor: 2 },
        { huruf: "D", teks: "Memintanya langsung menemui atasan Anda setelah rapat selesai supaya penjelasan mengenai keterlambatan disampaikan pimpinan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) menerapkan komunikasi empatik melalui mendengar aktif, validasi masalah, dan kejelasan solusi. Skor 3 (D) mengalihkan komunikasi tanpa memberi kejelasan awal, Skor 2 (C) tidak menghargai lawan bicara, dan Skor 1 (A) memicu debat."
    },
    {
      id: "BKN-KM-13",
      subtes: "manajerial",
      aspek: "Komunikasi",
      tipe: "weighted",
      indikator: "Memastikan kejelasan pesan dan instruksi melalui konfirmasi ulang yang sopan.",
      pertanyaan:
        "Anda menerima memo disposisi dari pimpinan yang tulisannya kurang jelas mengenai apakah laporan harus disiapkan dalam bentuk ringkasan dua halaman atau laporan lengkap. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menebak maksud pimpinan berdasarkan kebiasaan rapat bulan lalu agar tidak mengganggu waktu pimpinan bertanya lagi.", skor: 2 },
        { huruf: "B", teks: "Menyusun kedua versi secara terburu-buru hingga lembur meski tidak yakin apakah keduanya diperlukan pimpinan.", skor: 3 },
        { huruf: "C", teks: "Membiarkan memo tersebut di meja hingga pimpinan menanyakan kembali hasil laporannya beberapa hari kemudian.", skor: 1 },
        { huruf: "D", teks: "Segera mengonfirmasi sopan ke pimpinan atau sekretaris soal format yang diminta sebelum menyusun.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) mencegah kesalahan kerja dan pemborosan waktu dengan klarifikasi cepat yang santun. Skor 3 (B) aman namun tidak efisien, Skor 2 (A) berisiko salah format, dan Skor 1 (C) pasif."
    },
    {
      id: "BKN-KM-14",
      subtes: "manajerial",
      aspek: "Komunikasi",
      tipe: "weighted",
      indikator: "Menjaga kesantunan, objektivitas, dan kejelasan dalam komunikasi tertulis kedinasan.",
      pertanyaan:
        "Anda perlu mengirim surat pengingat kepada unit kerja mitra yang belum melengkapi dokumen laporan triwulanan melewati batas waktu tiga hari. Bagaimana nada komunikasi tertulis yang tepat?",
      opsi: [
        { huruf: "A", teks: "Menulis kalimat tegas yang menuduh unit mitra sengaja menghambat kinerja instansi karena lalai terhadap aturan.", skor: 1 },
        { huruf: "B", teks: "Mengirimkan pesan sangat singkat bertuliskan 'mohon segera kirim dokumen' tanpa menyebutkan dokumen mana yang kurang.", skor: 2 },
        { huruf: "C", teks: "Menyampaikan pengingat sopan berisi daftar kekurangan berkas, batas tanggal baru, serta kontak bantu.", skor: 4 },
        { huruf: "D", teks: "Menulis pengingat resmi hanya dengan menyebut nama surat awal tanpa merinci batas waktu pengiriman ulangnya.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menjaga hubungan kerja yang baik sekaligus memberi kejelasan informasi yang memudahkan tindak lanjut. Skor 3 (D) kurang target waktu jelas, Skor 2 (B) terlalu kabur, dan Skor 1 (A) bernada konfrontatif."
    },

    /* --- 4. Orientasi pada Hasil (5 soal: BKN-KM-15 s.d. BKN-KM-19) --- */
    {
      id: "BKN-KM-15",
      subtes: "manajerial",
      aspek: "Orientasi pada Hasil",
      tipe: "weighted",
      indikator: "Berkomitmen menuntaskan target kinerja tepat waktu sesuai standar mutu yang ditetapkan.",
      pertanyaan:
        "Pimpinan menugaskan Anda merampungkan bahan paparan rapat evaluasi sebelum pukul 15.00 hari ini, padahal Anda masih memiliki dua surat rutin yang tenggatnya lusa. Pengaturan kerja Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Memprioritaskan bahan paparan hingga tuntas sebelum pukul 15.00, lalu melanjutkan surat rutin.", skor: 4 },
        { huruf: "B", teks: "Menyelesaikan dua surat rutin terlebih dahulu hingga siang agar meja bersih baru mulai menyusun bahan paparan di siang hari.", skor: 2 },
        { huruf: "C", teks: "Mengerjakan bahan paparan seadanya saja sekitar setengah jam sebelum rapat agar surat rutin tidak ikut tertunda.", skor: 1 },
        { huruf: "D", teks: "Meminta rekan lain menyusun bahan paparan rapat seluruhnya supaya Anda tetap dapat menyelesaikan dua surat rutin hari ini.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) mengatur prioritas berbasis tenggat dan urgensi tanpa mengabaikan kualitas. Skor 3 (D) melepas tanggung jawab utama, Skor 2 (B) keliru urutan prioritas, dan Skor 1 (C) menurunkan mutu hasil."
    },
    {
      id: "BKN-KM-16",
      subtes: "manajerial",
      aspek: "Orientasi pada Hasil",
      tipe: "weighted",
      indikator: "Melakukan pengecekan ulang secara cermat guna memastikan keakuratan hasil kerja sebelum diserahkan.",
      pertanyaan:
        "Setelah selesai mengetik surat keputusan penting yang akan segera ditandatangani pimpinan, jadwal penyerahan masih tersisa dua puluh menit. Apa yang sebaiknya Anda lakukan?",
      opsi: [
        { huruf: "A", teks: "Langsung mencetak dan memasukkan surat ke map pimpinan karena merasa sudah mengetik sesuai contoh surat sebelumnya.", skor: 2 },
        { huruf: "B", teks: "Memeriksa ulang ejaan nama, NIP, angka nominal, dasar hukum, serta kelengkapan lampiran surat.", skor: 4 },
        { huruf: "C", teks: "Meminta petugas pengantar surat memeriksa sekilas kelengkapan halaman sampul sebelum dinaikkan ke meja pimpinan.", skor: 3 },
        { huruf: "D", teks: "Menyerahkan berkas tanpa diperiksa lagi karena jika ada salah ketik dapat diperbaiki setelah ditandatangani nanti.", skor: 1 }
      ],
      pembahasan:
        "Skor 4 (B) menjamin kualitas dan ketelitian produk kerja sebagai bentuk tanggung jawab penuh sebelum pengiriman. Skor 3 (C) tidak memeriksa substansi penting, Skor 2 (A) rawan salah salin, dan Skor 1 (D) merugikan citra unit kerja."
    },
    {
      id: "BKN-KM-17",
      subtes: "manajerial",
      aspek: "Orientasi pada Hasil",
      tipe: "weighted",
      indikator: "Berupaya meningkatkan efisiensi dan mutu hasil kerja melampaui cara kerja lama.",
      pertanyaan:
        "Anda melihat proses rekapitulasi laporan bulanan tim masih diketik ulang manual dari lima berkas terpisah sehingga memakan waktu dua hari penuh dan kerap salah angka. Langkah perbaikan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Tetap mengetik ulang secara manual setiap bulan supaya tidak menyalahi kebiasaan yang sudah berjalan bertahun-tahun.", skor: 2 },
        { huruf: "B", teks: "Mengeluhkan lamanya pekerjaan tersebut kepada rekan ruangan setiap akhir bulan sambil meminta tambahan lembur.", skor: 1 },
        { huruf: "C", teks: "Membuat templat lembar kerja terhubung otomatis untuk menyatukan data lima berkas tersebut dan menguji akurasinya.", skor: 4 },
        { huruf: "D", teks: "Meminta lima pengirim laporan menyalin angka mereka sendiri ke satu email teks panjang agar lebih cepat dilihat.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menghadirkan solusi efisiensi yang konkret dan menjaga akurasi hasil kerja. Skor 3 (D) mengurangi beban pribadi tetapi belum menuntaskan risiko salah ketik, Skor 2 (A) pasif, dan Skor 1 (B) tidak produktif."
    },
    {
      id: "BKN-KM-18",
      subtes: "manajerial",
      aspek: "Orientasi pada Hasil",
      tipe: "weighted",
      indikator: "Tetap tekun dan fokus pada penyelesaian target meski muncul kendala teknis tak terduga.",
      pertanyaan:
        "Ketika listrik kantor padam selama satu jam di tengah penyusunan laporan akhir hari, komputer desktop tidak menyala sebelum genset aktif. Sikap paling berorientasi hasil adalah ...",
      opsi: [
        { huruf: "A", teks: "Memanfaatkan waktu padam menelaah dokumen cetak dan menyusun kerangka poin sebelum listrik pulih.", skor: 4 },
        { huruf: "B", teks: "Menutup buku catatan lalu pulang lebih awal karena pekerjaan komputer tidak dapat dilanjutkan saat itu juga.", skor: 1 },
        { huruf: "C", teks: "Mengobrol santai di koridor kantor sambil menunggu teknisi selesai menyalakan genset cadangan kantor.", skor: 2 },
        { huruf: "D", teks: "Menunggu di kursi meja kerja tanpa aktivitas sembari mengirim kabar ke atasan bahwa listrik sedang padam.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) tetap menjaga produktivitas dengan pekerjaan non-listrik yang mendukung target akhir. Skor 3 (D) memberi kabar namun membuang waktu efektif, Skor 2 (C) pasif, dan Skor 1 (B) melanggar disiplin kerja."
    },
    {
      id: "BKN-KM-19",
      subtes: "manajerial",
      aspek: "Orientasi pada Hasil",
      tipe: "weighted",
      indikator: "Mengevaluasi hasil kerja yang telah selesai guna memastikan perbaikan kualitas berkelanjutan.",
      pertanyaan:
        "Kegiatan pelatihan pegawai di kantor Anda baru saja selesai dengan tingkat kepuasan peserta cukup baik, namun sebagian peserta mengeluhkan materi praktik terlalu singkat. Tindak lanjut Anda sebagai panitia adalah ...",
      opsi: [
        { huruf: "A", teks: "Menganggap kegiatan sudah sukses sepenuhnya karena nilai rata-rata kepuasan peserta berada di atas angka minimal.", skor: 2 },
        { huruf: "B", teks: "Menyimpan lembar evaluasi peserta ke dalam map arsip kegiatan tanpa perlu membacanya lagi setelah acara ditutup.", skor: 1 },
        { huruf: "C", teks: "Membahas keluhan tersebut secara sepintas bersama sesama panitia saat merapikan ruangan tanpa membuat catatan perbaikan.", skor: 3 },
        { huruf: "D", teks: "Merekap umpan balik menjadi usulan tambah porsi praktik dan modul ringkas untuk kegiatan berikutnya.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) mengubah umpan balik menjadi perbaikan nyata dan terdokumentasi untuk peningkatan mutu ke depan. Skor 3 (C) tidak terdokumentasi, Skor 2 (A) cepat berpuas diri, dan Skor 1 (B) abai evaluasi."
    },

    /* --- 5. Pelayanan Publik (4 soal: BKN-KM-20 s.d. BKN-KM-23) --- */
    {
      id: "BKN-KM-20",
      subtes: "manajerial",
      aspek: "Pelayanan Publik",
      tipe: "weighted",
      indikator: "Menjalankan prinsip keadilan dan ketertiban antrean tanpa diskriminasi kepada penerima layanan.",
      pertanyaan:
        "Di loket pelayanan administrasi, seorang kenalan lama meminta berkasnya diproses lebih dahulu melewati lima orang warga lain yang sudah mengantre sejak pagi. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Melayaninya lebih dahulu secara cepat supaya kenalan Anda tidak merasa kecewa karena sudah mengenal dekat.", skor: 1 },
        { huruf: "B", teks: "Meminta warga yang berada di antrean paling depan mengizinkan kenalan Anda masuk lebih dahulu sebagai bentuk toleransi.", skor: 2 },
        { huruf: "C", teks: "Menitipkan berkasnya di bawah meja untuk diproses saat jam istirahat siang agar tidak dilihat oleh para pengantre.", skor: 3 },
        { huruf: "D", teks: "Menolak santun permintaan mendahului, menjelaskan antrean adil, dan memintanya mengambil nomor.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menegakkan pelayanan publik yang adil, transparan, dan bebas perlakuan khusus secara santun. Skor 3 (C) tetap melanggar keadilan antrean secara tersembunyi, Skor 2 (B) membebani warga lain, dan Skor 1 (A) diskriminatif."
    },
    {
      id: "BKN-KM-21",
      subtes: "manajerial",
      aspek: "Pelayanan Publik",
      tipe: "weighted",
      indikator: "Memberikan pelayanan yang ramah, sabar, dan membantu kelompok masyarakat rentan atau kesulitan teknis.",
      pertanyaan:
        "Seorang warga lanjut usia tampak kebingungan mengisi formulir layanan daring di anjungan kantor karena kurang terbiasa menggunakan layar sentuh. Sikap Anda sebagai petugas pelayanan adalah ...",
      opsi: [
        { huruf: "A", teks: "Menghampirinya ramah dan menuntun pengisian formulir tahap demi tahap dengan bahasa jelas hingga selesai.", skor: 4 },
        { huruf: "B", teks: "Memintanya kembali lagi besok sambil membawa anggota keluarga yang lebih muda untuk membantu mengisikan formulir daring.", skor: 2 },
        { huruf: "C", teks: "Menunjuk papan petunjuk penggunaan di dinding sebelah kanan dan memintanya membaca pelan-pelan sendiri terlebih dahulu.", skor: 3 },
        { huruf: "D", teks: "Menyuruhnya mengisi seadanya saja lalu mengembalikan berkasnya bila ternyata ada kolom wajib yang terlewat terisi.", skor: 1 }
      ],
      pembahasan:
        "Skor 4 (A) menghadirkan layanan publik yang inklusif, empatik, dan solutif bagi warga lanjut usia. Skor 3 (C) kurang membantu kondisi fisik/teknis pemohon, Skor 2 (B) menyulitkan warga, dan Skor 1 (D) buruk dalam pelayanan."
    },
    {
      id: "BKN-KM-22",
      subtes: "manajerial",
      aspek: "Pelayanan Publik",
      tipe: "weighted",
      indikator: "Memberikan informasi persyaratan, biaya, dan waktu penyelesaian layanan secara transparan.",
      pertanyaan:
        "Seorang pemohon menanyakan kepastian kapan surat keterangannya selesai serta apakah terdapat biaya tambahan di luar ketentuan resmi. Jawaban yang paling mencerminkan pelayanan prima adalah ...",
      opsi: [
        { huruf: "A", teks: "Menjawab singkat agar ia menunggu saja panggilan lewat telepon tanpa menyebutkan estimasi waktu dan kepastian biaya.", skor: 2 },
        { huruf: "B", teks: "Menjelaskan terbuka estimasi waktu standar layanan, menyatakan bebas biaya, dan memberi tanda terima.", skor: 4 },
        { huruf: "C", teks: "Menjanjikan surat pasti selesai dalam dua jam meski Anda belum memeriksa antrean tanda tangan pejabat berwenang.", skor: 1 },
        { huruf: "D", teks: "Memintanya membaca brosur di meja sudut karena seluruh informasi tarif dan standar waktu sudah tercetak di sana.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) menjamin transparansi standar waktu, bebas pungutan liar, dan bukti layanan tertulis. Skor 3 (D) kurang komunikatif, Skor 2 (A) tidak memberi kepastian, dan Skor 1 (C) memberi janji tidak realistis."
    },
    {
      id: "BKN-KM-23",
      subtes: "manajerial",
      aspek: "Pelayanan Publik",
      tipe: "weighted",
      indikator: "Merespons aduan atau ketidakpuasan masyarakat secara profesional dan berorientasi pada penyelesaian.",
      pertanyaan:
        "Masyarakat menyampaikan aduan melalui kanal resmi instansi bahwa tautan unduh formulir pada situs web kantor tidak dapat dibuka selama dua hari. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menghapus komentar aduan warga di media sosial instansi agar tidak menurunkan citra pelayanan publik kantor.", skor: 1 },
        { huruf: "B", teks: "Membalas aduan dengan ucapan terima kasih atas masukannya tanpa mengecek atau meneruskan perbaikan ke tim pengelola situs.", skor: 2 },
        { huruf: "C", teks: "Meneruskan laporan kerusakan situs web kepada tim TI lalu menunggu seminggu sebelum memberi kabar balik kepada pelapor.", skor: 3 },
        { huruf: "D", teks: "Mengecek tautan rusak, berkoordinasi cepat dengan pengelola web, lalu membalas aduan dengan tautan aktif.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) merespons cepat, menuntaskan akar masalah teknis, dan memberi kepastian solusi ke masyarakat. Skor 3 (C) kurang responsif mengabarkan solusi, Skor 2 (B) sekadar formalitas, dan Skor 1 (A) anti-kritik."
    },

    /* --- 6. Pengembangan Diri dan Orang Lain (4 soal: BKN-KM-24 s.d. BKN-KM-27) --- */
    {
      id: "BKN-KM-24",
      subtes: "manajerial",
      aspek: "Pengembangan Diri dan Orang Lain",
      tipe: "weighted",
      indikator: "Berinisiatif meningkatkan kompetensi diri untuk menghadapi tuntutan tugas kerja terbaru.",
      pertanyaan:
        "Pekerjaan Anda mulai banyak menuntut kemampuan menyusun infografis laporan tahunan, padahal keterampilan desain Anda masih sangat terbatas. Apa langkah Anda?",
      opsi: [
        { huruf: "A", teks: "Mempelajari panduan dasar tata letak dan aplikasi desain, berlatih contoh, lalu meminta umpan balik.", skor: 4 },
        { huruf: "B", teks: "Meminta atasan mengalihkan seluruh tugas infografis tersebut ke pegawai lain yang memang hobi mendesain sejak awal.", skor: 1 },
        { huruf: "C", teks: "Menggunakan satu templat lama dari tahun-tahun sebelumnya secara terus-menerus tanpa mencoba menyesuaikan isi laporan.", skor: 2 },
        { huruf: "D", teks: "Menunggu bagian kepegawaian membuka pelatihan desain tatap muka resmi tahun depan sebelum mulai belajar membuat infografis.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menunjukkan kemauan belajar mandiri, latihan aktif, dan keterbukaan terhadap masukan. Skor 3 (D) pasif menunggu diklat resmi, Skor 2 (C) tidak bertumbuh, dan Skor 1 (B) menghindar."
    },
    {
      id: "BKN-KM-25",
      subtes: "manajerial",
      aspek: "Pengembangan Diri dan Orang Lain",
      tipe: "weighted",
      indikator: "Membimbing pegawai baru atau peserta magang secara terarah agar mampu bekerja mandiri.",
      pertanyaan:
        "Unit kerja Anda kedatangan mahasiswa magang yang ditugaskan membantu pengarsipan surat masuk selama dua bulan. Bagaimana cara Anda membimbingnya pada minggu pertama?",
      opsi: [
        { huruf: "A", teks: "Memberikan tumpukan surat di kardus lalu memintanya menyusun sendiri sesuai perkiraan agar langsung terbiasa belajar mandiri.", skor: 2 },
        { huruf: "B", teks: "Hanya menyuruhnya membuat kopi dan mengantar surat antar-ruangan karena khawatir mahasiswa magang salah mengarsip.", skor: 1 },
        { huruf: "C", teks: "Menjelaskan alur klasifikasi, memberi contoh langsung, mendampingi awal, dan mengecek hasilnya berkala.", skor: 4 },
        { huruf: "D", teks: "Memberikan buku pedoman kearsipan untuk dibaca selama tiga hari penuh tanpa menunjukkan praktik langsung pada sistem.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) memberikan bimbingan terstruktur dari contoh hingga evaluasi berkala. Skor 3 (D) terlalu teoretis tanpa praktik terbimbing, Skor 2 (A) melepas tanpa arah, dan Skor 1 (B) meniadakan proses belajar."
    },
    {
      id: "BKN-KM-26",
      subtes: "manajerial",
      aspek: "Pengembangan Diri dan Orang Lain",
      tipe: "weighted",
      indikator: "Terbuka terhadap kritik konstruktif dan menggunakannya untuk memperbaiki kualitas diri.",
      pertanyaan:
        "Dalam evaluasi kinerja semester, pimpinan memberi catatan bahwa cara Anda mempresentasikan laporan masih terlalu terburu-buru sehingga poin inti sulit ditangkap peserta rapat. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menganggap peserta rapat saja yang kurang berkonsentrasi menyimak paparan yang sudah disiapkan dengan padat.", skor: 1 },
        { huruf: "B", teks: "Mengucapkan terima kasih, berlatih mengatur tempo bicara dan jeda, lalu meminta masukan rapat berikutnya.", skor: 4 },
        { huruf: "C", teks: "Memutuskan tidak lagi menjadi penyaji paparan di rapat bulanan dan menyerahkan tugas presentasi kepada rekan lain.", skor: 2 },
        { huruf: "D", teks: "Menerima catatan evaluasi tersebut di ruang pimpinan tanpa melakukan latihan perubahan gaya penyampaian menjelang rapat berikutnya.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) mengubah umpan balik menjadi latihan perbaikan nyata dan verifikasi kemajuan. Skor 3 (D) hanya mendengar tanpa rencana aksi, Skor 2 (C) menghindar, dan Skor 1 (A) menyalahkan audiens."
    },
    {
      id: "BKN-KM-27",
      subtes: "manajerial",
      aspek: "Pengembangan Diri dan Orang Lain",
      tipe: "weighted",
      indikator: "Membagikan pengetahuan atau keterampilan baru agar bermanfaat bagi peningkatan kemampuan rekan kerja.",
      pertanyaan:
        "Anda baru selesai mengikuti bimbingan teknis penggunaan fitur formula baru pada aplikasi pengolah data kantor. Apa kontribusi terbaik Anda untuk rekan satu ruangan?",
      opsi: [
        { huruf: "A", teks: "Menyimpan catatan rumus tersebut untuk mempercepat pekerjaan pribadi Anda sendiri agar kinerja tampak paling menonjol.", skor: 1 },
        { huruf: "B", teks: "Mengirimkan nama situs pelatihan saja bila kebetulan ada rekan kerja yang melihat layar Anda dan bertanya caranya.", skor: 2 },
        { huruf: "C", teks: "Menawarkan diri mengerjakan bagian rumus teman yang kesulitan tanpa mengajarkan langkah pembuatan rumusnya kepada mereka.", skor: 3 },
        { huruf: "D", teks: "Membagikan contoh file serta panduan singkat dan mengadakan sesi praktik 30 menit bersama rekan ruangan.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) mendiseminasikan ilmu secara aktif sehingga seluruh unit kerja meningkat kapasitasnya. Skor 3 (C) membantu sesaat tanpa transfer keahlian, Skor 2 (B) pasif, dan Skor 1 (A) egois."
    },

    /* --- 7. Mengelola Perubahan (5 soal: BKN-KM-28 s.d. BKN-KM-32) --- */
    {
      id: "BKN-KM-28",
      subtes: "manajerial",
      aspek: "Mengelola Perubahan",
      tipe: "weighted",
      indikator: "Mendorong dan mendampingi rekan kerja beradaptasi terhadap sistem kerja elektronik baru.",
      pertanyaan:
        "Instansi menerapkan sistem digitalisasi persuratan baru menggantikan arsip kertas. Sebagian pegawai senior mengeluh kesulitan dan enggan beralih. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Membiarkan pegawai senior terus memakai cara manual agar tidak menimbulkan keluhan di ruangan kerja.", skor: 2 },
        { huruf: "B", teks: "Melaporkan pegawai yang enggan memakai sistem baru kepada pimpinan agar diberikan teguran kedisiplinan.", skor: 1 },
        { huruf: "C", teks: "Mempelajari sistem baru lalu mengadakan pendampingan sabar secara bertahap bagi rekan senior yang kesulitan.", skor: 4 },
        { huruf: "D", teks: "Mengambil alih seluruh tugas penginputan surat pegawai senior tersebut setiap hari supaya antrean surat kantor tetap jalan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menjadi agen perubahan yang menguasai sistem baru dan membimbing rekan secara sabar hingga mandiri. Skor 3 (D) mencegah transisi kemandirian, Skor 2 (A) membiarkan kegagalan adopsi, dan Skor 1 (B) menghukum tanpa pendampingan."
    },
    {
      id: "BKN-KM-29",
      subtes: "manajerial",
      aspek: "Mengelola Perubahan",
      tipe: "weighted",
      indikator: "Menyesuaikan cara kerja secara positif terhadap pergantian pimpinan atau kebijakan kerja baru.",
      pertanyaan:
        "Kepala unit baru menerapkan pola pelaporan mingguan ringkas setiap Jumat pagi, berbeda dengan pimpinan sebelumnya yang hanya meminta laporan akhir bulan. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengeluhkan kebijakan baru itu kepada rekan kerja karena merasa pola pelaporan bulanan sebelumnya jauh lebih nyaman.", skor: 1 },
        { huruf: "B", teks: "Menyesuaikan jadwal pencatatan harian agar ringkasan Jumat pagi rapi serta memberi masukan bila ada kendala.", skor: 4 },
        { huruf: "C", teks: "Tetap membuat laporan hanya di akhir bulan sambil berharap pimpinan baru cepat melupakan aturan laporan mingguannya.", skor: 2 },
        { huruf: "D", teks: "Mengumpulkan laporan Jumat seadanya hanya berupa dua baris kalimat umum demi menggugurkan kewajiban mingguan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) adaptif menata ulang ritme kerja agar selaras dengan arah pimpinan baru sekaligus komunikatif. Skor 3 (D) asal menggugurkan kewajiban, Skor 2 (C) abai, dan Skor 1 (A) resisten."
    },
    {
      id: "BKN-KM-30",
      subtes: "manajerial",
      aspek: "Mengelola Perubahan",
      tipe: "weighted",
      indikator: "Merespons perubahan regulasi atau standar prosedur dengan penyesuaian kerja yang cepat dan tertib.",
      pertanyaan:
        "Di tengah minggu kerja, terbit perubahan format formulir layanan yang berlaku efektif mulai lusa, sedangkan puluhan formulir lama masih tersimpan di meja loket. Langkah Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menarik stok lama saat tenggat, menyiapkan versi terbaru, dan memasang pemberitahuan bagi petugas serta warga.", skor: 4 },
        { huruf: "B", teks: "Menghabiskan seluruh stok formulir cetakan lama selama sebulan ke depan terlebih dahulu agar kertas tidak terbuang sia-sia.", skor: 2 },
        { huruf: "C", teks: "Tetap membagikan formulir lama kepada warga karena merasa isi pertanyaan pada kedua versi formulir hampir sama saja.", skor: 1 },
        { huruf: "D", teks: "Mencetak beberapa lembar formulir baru untuk diri sendiri tanpa mengingatkan petugas loket lain yang masih memakai stok lama.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) memastikan transisi berjalan tertib, seragam di seluruh loket, dan jelas bagi pemohon layanan. Skor 3 (D) kurang koordinasi tim, Skor 2 (B) dan Skor 1 (C) melanggar keberlakuan standar baru."
    },
    {
      id: "BKN-KM-31",
      subtes: "manajerial",
      aspek: "Mengelola Perubahan",
      tipe: "weighted",
      indikator: "Menunjukkan keterbukaan terhadap gagasan pembaruan dari rekan yang lebih muda atau baru.",
      pertanyaan:
        "Seorang pegawai muda mengusulkan penggunaan formulir survei daring kode QR untuk menggantikan kotak saran kertas yang jarang dibaca. Tanggapan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menolaknya karena kotak saran kertas sudah menjadi tradisi kantor sejak lama dan dianggap lebih aman dari gangguan jaringan.", skor: 2 },
        { huruf: "B", teks: "Mengabaikan usulan pegawai baru tersebut karena dianggap belum cukup berpengalaman memahami karakter pengunjung kantor.", skor: 1 },
        { huruf: "C", teks: "Memujinya secara lisan di ruang rapat namun tidak pernah menindaklanjuti atau menjadwalkan uji coba kode QR tersebut.", skor: 3 },
        { huruf: "D", teks: "Mengapresiasi ide, mengujicobakannya paralel dua minggu, dan mengevaluasi jumlah masukan warga.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) terbuka terhadap inovasi, memfasilitasi uji coba terukur, serta tetap menjaga masa transisi paralel bagi pengunjung non-digital. Skor 3 (C) hanya retorika, Skor 2 (A) kaku, dan Skor 1 (B) meremehkan ide."
    },
    {
      id: "BKN-KM-32",
      subtes: "manajerial",
      aspek: "Mengelola Perubahan",
      tipe: "weighted",
      indikator: "Menjaga efektivitas kerja ketika terjadi rotasi tugas atau penempatan unit baru.",
      pertanyaan:
        "Anda dialihtugaskan dari bagian keuangan ke bagian kehumasan dan layanan publik yang membutuhkan banyak interaksi langsung dengan masyarakat. Bagaimana Anda menyesuaikan diri?",
      opsi: [
        { huruf: "A", teks: "Meminta pimpinan membatalkan rotasi dengan alasan kepribadian Anda hanya cocok bekerja mengolah angka di belakang meja.", skor: 1 },
        { huruf: "B", teks: "Menjalankan tugas kehumasan dengan enggan sambil terus menanyakan kapan Anda bisa dikembalikan ke bagian keuangan.", skor: 2 },
        { huruf: "C", teks: "Mempelajari standar layanan kehumasan, mengamati praktik rekan senior di unit baru, dan melatih komunikasi publik.", skor: 4 },
        { huruf: "D", teks: "Tetap meminta tugas pengolahan data anggaran di bagian kehumasan saja agar tidak perlu sering menemui tamu kantor.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menerima rotasi sebagai peluang tumbuh dengan pembelajaran aktif terhadap peran baru. Skor 3 (D) membatasi peran baru, Skor 2 (B) setengah hati, dan Skor 1 (A) menolak kebijakan organisasi."
    },

    /* --- 8. Pengambilan Keputusan (4 soal: BKN-KM-33 s.d. BKN-KM-36) --- */
    {
      id: "BKN-KM-33",
      subtes: "manajerial",
      aspek: "Pengambilan Keputusan",
      tipe: "weighted",
      indikator: "Mengambil keputusan objektif berdasarkan kelengkapan fakta, data, dan prosedur yang berlaku.",
      pertanyaan:
        "Anda diminta menilai usulan pengadaan barang dari dua vendor: Vendor A menawarkan harga sedikit lebih murah tetapi belum menyertakan dokumen garansi resmi, sedangkan Vendor B sedikit lebih mahal namun lengkap seluruh syarat teknisnya. Keputusan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Memilih Vendor A langsung karena selisih harga sedikit lebih murah pasti dianggap paling hemat bagi anggaran unit kerja.", skor: 1 },
        { huruf: "B", teks: "Menunda penilaian seluruh berkas pengadaan hingga bulan depan agar kedua vendor datang menjelaskan tawarannya sendiri.", skor: 2 },
        { huruf: "C", teks: "Memilih Vendor A dengan asumsi dokumen garansi resmi pabrik dapat disusulkan setelah barang diterima di gudang kantor.", skor: 3 },
        { huruf: "D", teks: "Merekomendasikan Vendor B yang memenuhi syarat atau memberi batas klarifikasi sesuai aturan pengadaan.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) mendasarkan keputusan pada kepatuhan syarat teknis dan aturan pengadaan yang melindungi kualitas barang serta keamanan hukum. Skor 3 (C) berisiko barang tanpa jaminan purnajual, Skor 2 (B) menghambat jadwal, dan Skor 1 (A) abai syarat."
    },
    {
      id: "BKN-KM-34",
      subtes: "manajerial",
      aspek: "Pengambilan Keputusan",
      tipe: "weighted",
      indikator: "Mempertimbangkan dampak dan risiko jangka panjang sebelum menentukan langkah solusi.",
      pertanyaan:
        "Menjelang libur panjang akhir tahun, server penyimpanan arsip kantor hampir penuh (tersisa 3%) dan berisiko gagal menyimpan berkas layanan warga. Tindakan keputusan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Menghapus langsung folder arsip lama tahun lalu tanpa membuat cadangan agar ruang penyimpanan kosong dengan cepat.", skor: 1 },
        { huruf: "B", teks: "Membiarkannya dulu hingga selesai libur panjang karena menganggap pengajuan dokumen warga selama masa libur pasti sepi.", skor: 2 },
        { huruf: "C", teks: "Berkoordinasi dengan tim TI memindahkan arsip inaktif ke penyimpanan cadangan terverifikasi lalu mengosongkan ruang.", skor: 4 },
        { huruf: "D", teks: "Mengirim pengumuman agar pegawai berhenti mengunggah berkas selama dua minggu sampai anggaran penambahan kapasitas disetujui.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) mengatasi risiko kegagalan sistem secara aman tanpa menghilangkan arsip maupun menghentikan layanan. Skor 3 (D) menghambat operasional, Skor 2 (B) berisiko sistem macet, dan Skor 1 (A) menghilangkan arsip penting."
    },
    {
      id: "BKN-KM-35",
      subtes: "manajerial",
      aspek: "Pengambilan Keputusan",
      tipe: "weighted",
      indikator: "Mengambil keputusan taktis yang tepat saat kondisi mendesak dan pimpinan belum dapat dihubungi.",
      pertanyaan:
        "Sebuah rapat koordinasi lintas instansi yang sudah dihadiri 15 tamu undangan terkendala karena pendingin udara di ruang rapat utama mendadak rusak dan atasan sedang berada di pesawat. Langkah cepat Anda sebagai penanggung jawab acara adalah ...",
      opsi: [
        { huruf: "A", teks: "Membatalkan rapat saat itu juga dan meminta seluruh tamu pulang sampai jadwal pengganti ditetapkan atasan.", skor: 1 },
        { huruf: "B", teks: "Membiarkan rapat tetap berlangsung di ruangan pengap selama dua jam sambil berharap pendingin udara tiba-tiba menyala.", skor: 2 },
        { huruf: "C", teks: "Memindahkan rapat ke ruang cadangan yang sejuk, mengarahkan tamu dengan tertib, dan melapor ke atasan.", skor: 4 },
        { huruf: "D", teks: "Menunda pembukaan rapat selama satu jam lebih hanya untuk menunggu atasan mendarat dan memberi izin pindah ruangan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menunjukkan ketangkasan mengambil keputusan operasional dalam batas wewenang demi kenyamanan tamu dan kelancaran agenda, disertai pelaporan ke atasan. Skor 3 (D) membuang waktu tamu, Skor 2 (B) tidak nyaman, dan Skor 1 (A) mengecewakan mitra."
    },
    {
      id: "BKN-KM-36",
      subtes: "manajerial",
      aspek: "Pengambilan Keputusan",
      tipe: "weighted",
      indikator: "Menentukan pilihan prioritas secara rasional ketika dihadapkan pada keterbatasan sumber daya.",
      pertanyaan:
        "Dengan sisa anggaran pemeliharaan terbatas di triwulan keempat, Anda harus memilih antara memperbaiki atap ruang arsip yang bocor saat hujan atau mengganti cat dinding koridor yang mulai pudar. Pilihan paling tepat adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengecat ulang dinding koridor depan lebih dulu supaya kantor terlihat rapi saat menerima kunjungan tamu daerah lain.", skor: 2 },
        { huruf: "B", teks: "Memperbaiki atap ruang arsip lebih dulu demi lindungi dokumen negara, lalu jadwalkan cat ulang berikutnya.", skor: 4 },
        { huruf: "C", teks: "Membagi dana sama rata untuk mengecat sebagian koridor dan menambal atap seadanya dengan terpal plastik tipis.", skor: 3 },
        { huruf: "D", teks: "Tidak memakai sisa anggaran sama sekali dan membiarkannya menjadi sisa anggaran tahun berjalan tanpa memperbaiki keduanya.", skor: 1 }
      ],
      pembahasan:
        "Skor 4 (B) menetapkan prioritas berdasarkan perlindungan aset kritis dan pencegahan kerusakan permanen dokumen negara. Skor 3 (C) tidak menyelesaikan kebocoran tuntas, Skor 2 (A) mengutamakan penampilan di atas keselamatan arsip, dan Skor 1 (D) lalai."
    },

    /* ===================== SUBTES 4: SOSIAL KULTURAL - PEREKAT BANGSA (14 SOAL) ===================== */
    /* --- Sub-dimensi A: Kepekaan Budaya & Adat (5 soal: BKN-KS-01 s.d. BKN-KS-05) --- */
    {
      id: "BKN-KS-01",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan Budaya & Adat",
      tipe: "weighted",
      indikator: "Menghormati adat istiadat daerah penugasan tanpa memaksakan kebiasaan budaya asal.",
      pertanyaan:
        "Anda ditempatkan di wilayah baru dengan tradisi dan tata krama masyarakat yang berbeda dengan daerah asal Anda. Sikap paling tepat dalam kehidupan kerja dan sosial sehari-hari adalah ...",
      opsi: [
        { huruf: "A", teks: "Membatasi pergaulan hanya dengan rekan kerja yang berasal dari daerah atau suku sama agar terasa lebih akrab dan nyaman.", skor: 2 },
        { huruf: "B", teks: "Menganggap kebiasaan daerah asal Anda lebih modern sehingga warga sekitar sebaiknya menyesuaikan gaya komunikasi Anda.", skor: 1 },
        { huruf: "C", teks: "Bersikap acuh tak acuh terhadap kegiatan adat masyarakat sekitar selama tugas rutin di kantor tetap berjalan.", skor: 3 },
        { huruf: "D", teks: "Mempelajari adat istiadat setempat dan menghormati norma yang berlaku tanpa memaksakan kebiasaan budaya asal.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menunjukkan keterbukaan budaya, rasa hormat terhadap norma setempat, dan kemampuan beradaptasi sebagai ASN perekat bangsa. Skor 3 (C) menjaga jarak sosial, Skor 2 (A) eksklusif, dan Skor 1 (B) etnosentris."
    },
    {
      id: "BKN-KS-02",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan Budaya & Adat",
      tipe: "weighted",
      indikator: "Menyelaraskan penghormatan terhadap tradisi lokal dengan kelancaran pelayanan publik.",
      pertanyaan:
        "Suatu hari jadwal tradisi adat masyarakat sekitar beririsan dengan jam operasional loket pelayanan kantor Anda. Sikap paling bijak sebagai aparatur negara adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengabaikan kegiatan adat setempat karena aturan jam kerja kantor tidak boleh terganggu tradisi apa pun di luar kantor.", skor: 2 },
        { huruf: "B", teks: "Langsung meliburkan seluruh layanan kantor satu hari penuh tanpa persetujuan pimpinan supaya warga dapat leluasa beracara.", skor: 1 },
        { huruf: "C", teks: "Meminta tokoh masyarakat menggeser seluruh jadwal upacara adat mereka ke hari libur akhir pekan agar kantor tetap tenang.", skor: 3 },
        { huruf: "D", teks: "Berkomunikasi baik dengan tokoh adat mencari titik temu agar layanan dan kearifan lokal berjalan harmonis.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) mengedepankan dialog inklusif yang menjaga keharmonisan antara pelayanan publik dan penghormatan tradisi lokal. Skor 3 (C) kurang kompromi budaya, Skor 2 (A) kaku, dan Skor 1 (B) melanggar wewenang penetapan hari libur."
    },
    {
      id: "BKN-KS-03",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan Budaya & Adat",
      tipe: "weighted",
      indikator: "Menghargai perbedaan praktik keagamaan dan hari besar seluruh rekan kerja.",
      pertanyaan:
        "Dalam rapat penyusunan jadwal piket akhir pekan unit pelayanan, terdapat pegawai dari beberapa agama yang memiliki waktu ibadah berbeda. Bagaimana cara Anda mengusulkan penjadwalan yang adil?",
      opsi: [
        { huruf: "A", teks: "Mengatur jadwal piket berdasarkan undian acak murni tanpa melihat jadwal ibadah agar semua dianggap mendapat peluang yang sama.", skor: 2 },
        { huruf: "B", teks: "Mempertimbangkan waktu ibadah pegawai dan membuka tukar jadwal sukarela yang disetujui koordinator.", skor: 4 },
        { huruf: "C", teks: "Menetapkan pegawai yang jumlah pemeluk agamanya lebih sedikit selalu bertugas pada hari libur mayoritas pegawai lain.", skor: 1 },
        { huruf: "D", teks: "Membiarkan setiap pegawai memilih hari sendiri tanpa pengaturan koordinator meski berisiko beberapa sesi piket kosong.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (B) menjunjung keadilan, penghormatan kebebasan beribadah, dan keteraturan jadwal operasional unit. Skor 3 (D) kurang terkoordinasi, Skor 2 (A) abai kebutuhan ibadah, dan Skor 1 (C) diskriminatif."
    },
    {
      id: "BKN-KS-04",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan Budaya & Adat",
      tipe: "weighted",
      indikator: "Menggunakan bahasa Indonesia yang baik dan santun dalam forum kerja multi-etnis agar semua pihak merasa setara.",
      pertanyaan:
        "Saat rapat tim yang diikuti pegawai dari berbagai suku, dua rekan terus menggunakan bahasa daerah mereka sendiri ketika berdiskusi sehingga peserta lain bingung mengikuti arah pembicaraan. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mengajak santun memakai bahasa Indonesia agar seluruh anggota rapat memahami dan dapat berpartisipasi.", skor: 4 },
        { huruf: "B", teks: "Menegur keduanya dengan nada kesal bahwa penggunaan bahasa daerah dalam rapat dinas dilarang keras oleh peraturan.", skor: 2 },
        { huruf: "C", teks: "Membalas berbicara menggunakan bahasa daerah Anda sendiri bersama rekan sedaerah supaya mereka merasakan hal yang sama.", skor: 1 },
        { huruf: "D", teks: "Tetap diam saja menebak-nebak isi pembicaraan mereka hingga rapat ditutup agar tidak menyinggung perasaan rekan tersebut.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) menjaga kesetaraan akses komunikasi lintas suku dengan mengingatkan pemakaian bahasa persatuan secara santun. Skor 3 (D) membiarkan miskomunikasi berlanjut, Skor 2 (B) terlalu keras, dan Skor 1 (C) memperburuk sekat kelompok."
    },
    {
      id: "BKN-KS-05",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan Budaya & Adat",
      tipe: "weighted",
      indikator: "Menolak prasangka atau stereotip berbasis suku maupun daerah dalam penilaian kinerja dan kerja sama.",
      pertanyaan:
        "Seorang rekan berujar bahwa calon anggota tim baru dari daerah tertentu pasti lamban beradaptasi karena stereotip budaya daerahnya. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Ikut mengangguk setuju saja supaya obrolan santai di ruang istirahat tidak berubah menjadi perdebatan panjang.", skor: 1 },
        { huruf: "B", teks: "Memastikan terlebih dahulu kepada rekan lain apakah stereotip tentang daerah asal pegawai tersebut memang sering terjadi.", skor: 2 },
        { huruf: "C", teks: "Diam meninggalkan percakapan tersebut tanpa meluruskan anggapan keliru tentang rekan yang belum dikenal tersebut.", skor: 3 },
        { huruf: "D", teks: "Menyatakan santun bahwa kemampuan pegawai dinilai dari kinerja nyata tiap individu, bukan asal daerahnya.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) meluruskan prasangka secara objektif dan beradab untuk membangun budaya kerja bebas diskriminasi. Skor 3 (C) tidak ikut menyebar tetapi pasif, Skor 2 (B) melanggengkan stereotip, dan Skor 1 (A) mendukung prasangka."
    },

    /* --- Sub-dimensi B: Hubungan Sosial & Inklusivitas (5 soal: BKN-KS-06 s.d. BKN-KS-10) --- */
    {
      id: "BKN-KS-06",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Hubungan Sosial & Inklusivitas",
      tipe: "weighted",
      indikator: "Merangkul rekan dari kelompok minoritas atau latar belakang berbeda agar terlibat setara dalam tim.",
      pertanyaan:
        "Dalam tim proyek lintas bidang, seorang anggota berasal dari kelompok etnis minoritas dan kerap terpinggirkan saat rekan lain mengobrol atau berdiskusi informal. Langkah Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Membiarkan kondisi tersebut karena menganggap interaksi informal di luar rapat merupakan urusan kecocokan pribadi.", skor: 2 },
        { huruf: "B", teks: "Ikut menjaga jarak supaya tidak dianggap berbeda pilihan pergaulan oleh mayoritas rekan satu ruangan.", skor: 1 },
        { huruf: "C", teks: "Menegur rekan-rekan lain dengan suara keras di tengah ruangan agar mereka merasa malu telah mengecualikan satu anggota.", skor: 3 },
        { huruf: "D", teks: "Mengajak rekan tersebut bergabung diskusi, menghargai pendapatnya, dan membangun suasana tim yang inklusif.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) aktif membangun inklusivitas dan rasa diterima tanpa memicu konflik terbuka. Skor 3 (C) berniat baik namun caranya mempermalukan pihak lain, Skor 2 (A) pasif, dan Skor 1 (B) ikut mengeksklusifkan."
    },
    {
      id: "BKN-KS-07",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Hubungan Sosial & Inklusivitas",
      tipe: "weighted",
      indikator: "Menunjukkan empati dan kepedulian sosial kepada rekan kerja yang mengalami musibah atau kesulitan.",
      pertanyaan:
        "Rumah seorang rekan kerja dari luar daerah terdampak banjir semalam sehingga ia terpaksa izin tidak masuk kerja sementara jadwal laporan tim berjalan. Sikap Anda bersama tim adalah ...",
      opsi: [
        { huruf: "A", teks: "Menghubunginya menanyakan kabar serta kebutuhan mendesak, lalu bersama tim membantu tugas prioritasnya.", skor: 4 },
        { huruf: "B", teks: "Mengirimkan pesan singkat menanyakan kapan tepatnya ia dapat masuk kerja lagi agar jadwal laporan tidak meleset.", skor: 2 },
        { huruf: "C", teks: "Menunggu pimpinan ruangan mengumumkan penggalangan bantuan resmi sebelum menghubungi rekan yang tertimpa musibah.", skor: 3 },
        { huruf: "D", teks: "Merasa kesal karena ketidakhadirannya menambah beban kerja tim pada minggu pengumpulan laporan bulanan.", skor: 1 }
      ],
      pembahasan:
        "Skor 4 (A) memadukan empati kemanusiaan yang tulus dan solidaritas kerja tim. Skor 3 (C) menunggu komando, Skor 2 (B) kurang kepekaan empatik, dan Skor 1 (D) tidak peduli kondisi sesama."
    },
    {
      id: "BKN-KS-08",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Hubungan Sosial & Inklusivitas",
      tipe: "weighted",
      indikator: "Memberikan perlakuan setara tanpa membeda-bedakan jabatan, usia, atau status kepegawaian.",
      pertanyaan:
        "Saat menyiapkan acara rapat kerja kantor, Anda melihat seorang rekan berbicara dengan nada merendahkan kepada petugas kebersihan dan pramusaji karena minuman rapat sedikit terlambat datang. Sikap Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Membiarkan saja karena menganggap penyampaian teguran keras bagian dari tuntutan kecepatan layanan rapat kantor.", skor: 1 },
        { huruf: "B", teks: "Ikut meminta pramusaji bekerja lebih cepat dengan raut wajah datar agar suasana rapat tidak terganggu lagi.", skor: 2 },
        { huruf: "C", teks: "Langsung menghampiri dan menyapa pramusaji di luar ruangan setelah acara selesai tanpa menegur sikap rekan Anda.", skor: 3 },
        { huruf: "D", teks: "Berterima kasih ramah ke pramusaji, membantu sajian, dan mengingatkan rekan secara halus soal etika.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menjaga martabat seluruh mitra kerja secara setara sambil membina etika pergaulan rekan kerja dengan santun. Skor 3 (C) menghibur tanpa mencegah pengulangan sikap, Skor 2 (B) dan Skor 1 (A) tidak menghargai sesama."
    },
    {
      id: "BKN-KS-09",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Hubungan Sosial & Inklusivitas",
      tipe: "weighted",
      indikator: "Menghargai perbedaan pendapat antarrekan dan membuka ruang partisipasi yang setara di rapat.",
      pertanyaan:
        "Dalam diskusi tim, seorang pegawai muda yang biasanya pendiam mencoba mengangkat tangan menyampaikan usulan, namun kerap terpotong oleh suara rekan-rekan yang lebih vokal. Apa yang Anda lakukan?",
      opsi: [
        { huruf: "A", teks: "Meneruskan diskusi cepat bersama pembicara yang lebih vokal agar pembahasan rapat selesai lebih awal sebelum makan siang.", skor: 1 },
        { huruf: "B", teks: "Mengatakan kepada pegawai muda tersebut setelah rapat selesai agar nanti menuliskan saja idenya lewat email pribadi.", skor: 2 },
        { huruf: "C", teks: "Meminta ruang sejenak secara sopan agar pegawai muda tersebut dapat menyampaikan gagasannya dengan utuh.", skor: 4 },
        { huruf: "D", teks: "Menoleh tersenyum kepada pegawai muda tersebut namun tidak memfasilitasi gilirannya berbicara di hadapan peserta rapat.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) menciptakan keadilan partisipasi sehingga setiap suara di tim dihargai setara. Skor 3 (D) simpatik namun tidak memberi ruang bicara nyata, Skor 2 (B) meminggirkan partisipasi rapat, dan Skor 1 (A) tidak inklusif."
    },
    {
      id: "BKN-KS-10",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Hubungan Sosial & Inklusivitas",
      tipe: "weighted",
      indikator: "Menciptakan komunikasi sosial yang ramah dan mendukung akses informasi merata bagi seluruh anggota tim.",
      pertanyaan:
        "Informasi perubahan jadwal rapat sering hanya tersampaikan dari mulut ke mulut saat makan siang bersama, sehingga rekan yang membawa bekal sendiri di ruangan kerap tertinggal kabar. Perbaikan sosial yang Anda lakukan adalah ...",
      opsi: [
        { huruf: "A", teks: "Meminta rekan yang membawa bekal untuk selalu ikut makan siang di kantin agar tidak ketinggalan informasi kantor.", skor: 2 },
        { huruf: "B", teks: "Membiasakan kirim pembaruan jadwal di grup resmi tim agar seluruh anggota mendapat info serempak.", skor: 4 },
        { huruf: "C", teks: "Mengingat-ingat secara lisan siapa saja yang belum tahu lalu menghampiri mejanya jika kebetulan sempat sebelum pulang.", skor: 3 },
        { huruf: "D", teks: "Menganggap itu tanggung jawab masing-masing pegawai untuk rajin bertanya kepada teman sebelum jam rapat dimulai.", skor: 1 }
      ],
      pembahasan:
        "Skor 4 (B) menjamin inklusivitas informasi kerja agar tidak ada pegawai yang tertinggal hanya karena perbedaan kebiasaan makan siang. Skor 3 (C) rawan terlewat, Skor 2 (A) memaksakan kebiasaan pribadi, dan Skor 1 (D) tidak kolaboratif."
    },

    /* --- Sub-dimensi C: Kepekaan & Mediasi Konflik (4 soal: BKN-KS-11 s.d. BKN-KS-14) --- */
    {
      id: "BKN-KS-11",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan & Mediasi Konflik",
      tipe: "weighted",
      indikator: "Meredam potensi konflik berlatar belakang isu SARA di lingkungan kerja secara konstruktif.",
      pertanyaan:
        "Di unit kerja Anda terjadi perdebatan sengit antarrekan yang mulai menyinggung isu suku dan agama akibat kesalahpahaman komunikasi, sehingga suasana kantor menjadi tegang. Langkah Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Ikut membela rekan kerja yang kebetulan berasal dari kelompok atau daerah yang sama dengan latar belakang Anda.", skor: 1 },
        { huruf: "B", teks: "Menjauhi lokasi ruangan dan berpura-pura tidak mendengar perdebatan tersebut karena khawatir ikut terseret masalah.", skor: 2 },
        { huruf: "C", teks: "Mengajak kedua pihak mendinginkan suasana, berdialog terbuka, dan mengingatkan pentingnya toleransi.", skor: 4 },
        { huruf: "D", teks: "Langsung melaporkan kedua pihak ke aparat penegak hukum tanpa mencoba mendamaikan kesalahpahaman di tempat kerja.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (C) berperan aktif sebagai perekat bangsa yang mendinginkan emosi, membuka dialog, dan meneguhkan toleransi. Skor 3 (D) langsung mengeskalasi ekstrem tanpa mediasi awal, Skor 2 (B) pasif, dan Skor 1 (A) memperdalam perpecahan."
    },
    {
      id: "BKN-KS-12",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan & Mediasi Konflik",
      tipe: "weighted",
      indikator: "Menjembatani kesalahpahaman antara warga dan petugas layanan agar tercapai solusi damai.",
      pertanyaan:
        "Seorang warga tampak salah paham dengan aturan baru hingga menuduh petugas loket mempersulit pengurusan karena alasan daerah asal. Sebagai koordinator layanan, sikap mediasi Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Meminta petugas keamanan segera mengeluarkan warga tersebut dari ruangan kantor karena dianggap melontarkan tuduhan.", skor: 1 },
        { huruf: "B", teks: "Membela petugas loket dengan suara keras di depan antrean agar warga menyadari kesalahan tudingannya di tempat umum.", skor: 2 },
        { huruf: "C", teks: "Meminta warga menuliskan pengaduannya ke kotak saran lalu melanjutkan antrean berikutnya tanpa menjelaskan aturan berlaku.", skor: 3 },
        { huruf: "D", teks: "Menenangkan kedua pihak, mendengar keluhan objektif, dan menjelaskan aturan yang berlaku sama bagi semua.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) meredakan kecurigaan diskriminasi melalui empati, keadilan prosedur, dan komunikasi tenang. Skor 3 (C) menghindari penjelasan langsung yang menenangkan, Skor 2 (B) dan Skor 1 (A) memicu eskalasi konflik."
    },
    {
      id: "BKN-KS-13",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan & Mediasi Konflik",
      tipe: "weighted",
      indikator: "Menjaga netralitas ASN serta ketenangan sosial di tengah perbedaan pilihan politik masyarakat.",
      pertanyaan:
        "Menjelang pemilihan kepala daerah, seorang teman mengirimkan tautan konten media sosial bernada provokatif untuk menjatuhkan salah satu pasangan calon dan mengajak Anda ikut menyebarkannya. Tindakan Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Ikut membagikan tautan tersebut hanya kepada lingkaran dekat yang sependapat dengan pilihan politik Anda secara pribadi.", skor: 1 },
        { huruf: "B", teks: "Membaca isi tautan tersebut lalu menanyakan kebenarannya ke grup kantor agar ramai dikomentari pegawai lain.", skor: 2 },
        { huruf: "C", teks: "Menghapus pesan tersebut diam-diam tanpa memberi respons atau mengingatkan teman mengenai etika ASN bermedia sosial.", skor: 3 },
        { huruf: "D", teks: "Menolak menyebarkan konten provokatif, mengingatkan netralitas ASN dan bahaya hoaks, lalu menyudahi debat.", skor: 4 }
      ],
      pembahasan:
        "Skor 4 (D) menjaga netralitas ASN sekaligus berkontribusi mencegah penyebaran provokasi dan perpecahan sosial. Skor 3 (C) aman pribadi namun kurang edukatif, Skor 2 (B) menyebarkan ke ruang kerja, dan Skor 1 (A) melanggar netralitas ASN."
    },
    {
      id: "BKN-KS-14",
      subtes: "sosiokultural",
      aspek: "Perekat Bangsa — Kepekaan & Mediasi Konflik",
      tipe: "weighted",
      indikator: "Memperbaiki hubungan kerja yang sempat renggang setelah perselisihan agar kolaborasi tim kembali solid.",
      pertanyaan:
        "Setelah perbedaan pendapat yang cukup panas pada rapat kemarin, dua rekan kerja tampak masih saling menghindar di kantor sehingga koordinasi proyek terhambat. Peran positif Anda adalah ...",
      opsi: [
        { huruf: "A", teks: "Mendekati keduanya secara santai di waktu istirahat dan mengajak membahas fokus kerja bersama guna mencairkan hubungan.", skor: 4 },
        { huruf: "B", teks: "Memilih menjadi perantara pesan bolak-balik di antara mereka berdua sepanjang proyek agar tidak perlu bertemu langsung.", skor: 2 },
        { huruf: "C", teks: "Membiarkan kondisi saling menghindar tersebut berjalan sendiri hingga proyek berakhir bulan depan agar mereka belajar dewasa.", skor: 1 },
        { huruf: "D", teks: "Meminta atasan memisahkan mereka berdua ke proyek berbeda supaya tidak pernah bekerja satu ruangan lagi di masa depan.", skor: 3 }
      ],
      pembahasan:
        "Skor 4 (A) membantu rekonsiliasi secara hangat dan mengembalikan sinergi tim. Skor 3 (D) menghindar dari pemulihan relasi, Skor 2 (B) membuat koordinasi tidak efisien, dan Skor 1 (C) membiarkan kinerja tim terganggu."
    }
  ];
})();
