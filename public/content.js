/**
 * =============================================================================
 * PORTFOLIO CONTENT & DATA SOURCE
 * =============================================================================
 * Semua teks, data proyek, riwayat, layanan, dan informasi kontak ada di file ini.
 * Anda TIDAK PERLU mengubah kode HTML. Cukup ubah nilai di bawah ini!
 * 
 * Tanda [ <<< EDIT DI SINI >>> ] menandai bagian yang bisa Anda ubah sesuka hati.
 * =============================================================================
 */

window.PORTFOLIO_DATA = {
  // ===========================================================================
  // 1. PROFIL PENGGUNA (INFORMASI UTAMA) <<< EDIT DI SINI >>>
  // ===========================================================================
  profile: {
    name: "Galang Arinal Haq",
    shortName: "Galang",
    role: "Product Designer & Creative Developer",
    location: "Jakarta, Indonesia",
    statusBadge: "AVAILABLE FOR SELECT PROJECTS",
    isAvailable: true,
    email: "galangarinalhaq23@gmail.com",
    phone: "+62 812-3456-7890",
    avatarImage: "director_polaroid.jpg", // Ada di folder assets/images/
    socials: [
      { name: "GitHub", url: "https://github.com", handle: "github.com/galangarinal" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/galangarinal" },
      { name: "Twitter / X", url: "https://x.com", handle: "@galangarinal" },
      { name: "Read.cv", url: "https://read.cv", handle: "read.cv/galang" },
      { name: "Dribbble", url: "https://dribbble.com", handle: "dribbble.com/galang" }
    ]
  },

  // ===========================================================================
  // 2. HERO SECTION (HALAMAN DEPAN) <<< EDIT DI SINI >>>
  // ===========================================================================
  hero: {
    sceneLabel: "SCENE 01 / PROLOGUE",
    timecode: "00:01:24:08",
    // Headline dengan kata yang disorot stabilo oranye
    headlinePart1: "Designer by trade,",
    headlineHighlight: "developer by habit.",
    headlinePart2: "",
    subheadline: "Memperlakukan setiap antarmuka digital selayaknya adegan film: komposisi presisi, pencahayaan dramatis, dan ritme interaksi yang mengikat pengguna dari frame pertama.",
    primaryCtaText: "View Selected Works",
    primaryCtaLink: "work.html",
    secondaryCtaText: "Have a project? Let's shoot",
    secondaryCtaLink: "contact.html",
    bannerImage: "hero_cinematography_reel.jpg",
    metrics: [
      { label: "PRODUCTION FRAMES", value: "48+" },
      { label: "YEARS BEHIND LENS", value: "7 YRS" },
      { label: "CLIENT WRAP RATE", value: "99.4%" },
      { label: "AUDIO / CODE SYNC", value: "100%" }
    ]
  },

  // ===========================================================================
  // 3. DAFTAR KARYA / PROYEK (SCENES) <<< EDIT DI SINI >>>
  // ===========================================================================
  projects: [
    {
      id: "lumina-os",
      number: "SCENE 01",
      title: "Lumina OS Design System",
      client: "Aura Technologies",
      year: "2026",
      category: "Digital Product",
      tag: "UI/UX & Design Systems",
      featured: true,
      image: "project_frame_lumina.jpg",
      summary: "Arsitektur antarmuka glassmorphic ultra-high-definition untuk platform komputasi spasial dan analitik real-time.",
      brief: "Aura membutuhkan fondasi antarmuka yang konsisten bagi tim multi-disiplin global untuk meluncurkan produk komputasi generasi baru dengan latency di bawah 16ms.",
      whatIDid: [
        "Merancang 140+ komponen atomic dengan standar token multi-theme.",
        "Mengembangkan prototipe interaksi micro-animation pada 120 FPS.",
        "Menulis dokumentasi teknis dan panduan integrasi React + Tailwind."
      ],
      techStack: ["Design Systems", "Figma", "React", "TypeScript", "Tailwind CSS"],
      results: [
        { metric: "+140%", label: "Efisiensi sprint tim frontend" },
        { metric: "12ms", label: "Rata-rata waktu render per komponen" },
        { metric: "99.8%", label: "Adopsi design token di 5 produk" }
      ],
      gallery: [
        { caption: "Dashboard frame overview", image: "project_frame_lumina.jpg" },
        { caption: "Spatial canvas typography", image: "project_frame_kinetic.jpg" }
      ],
      liveUrl: "https://lumina-demo.example.com",
      githubUrl: "https://github.com/example/lumina-os"
    },
    {
      id: "kinetic-type",
      number: "SCENE 02",
      title: "Kinetic Motion Poster & Editorial",
      client: "Metropolis Biennale",
      year: "2025",
      category: "Brand & Motion",
      tag: "Creative Direction & WebGL",
      featured: true,
      image: "project_frame_kinetic.jpg",
      summary: "Eksplorasi tipografi kinetik interaktif dengan respons mouse dan akselerometer untuk pameran seni kontemporer.",
      brief: "Biennale seni rupa membutuhkan situs pameran yang tidak hanya informatif, tetapi juga menjadi karya seni digital interaktif yang mencerminkan tema disrupsi visual.",
      whatIDid: [
        "Art direction visual tipografi berani dengan inspirasi Swiss Style & sinema noir.",
        "Implementasi custom canvas shader dan tipografi elastis berbasis motion.",
        "Optimasi performa di perangkat seluler berlayar 120Hz."
      ],
      techStack: ["Creative Direction", "Typography", "Canvas API", "WebGL", "GSAP"],
      results: [
        { metric: "350k+", label: "Pengunjung digital selama 14 hari" },
        { metric: "4m 12s", label: "Rata-rata dwell time per pengunjung" },
        { metric: "Awarded", label: "Site of the Day di Design Forum" }
      ],
      gallery: [
        { caption: "Poster wall installation", image: "project_frame_kinetic.jpg" },
        { caption: "Anamorphic camera angles", image: "hero_cinematography_reel.jpg" }
      ],
      liveUrl: "https://kinetic-exhibit.example.com"
    },
    {
      id: "solaris-atelier",
      number: "SCENE 03",
      title: "Solaris Architectural Monograph",
      client: "Aeterna Architects",
      year: "2025",
      category: "Digital Product",
      tag: "E-Commerce & Brand",
      featured: true,
      image: "project_frame_solaris.jpg",
      summary: "Platform e-commerce dan monograf fisik untuk studio arsitektur terkemuka dengan fokus tactile photography.",
      brief: "Membangun jembatan antara kemewahan buku fisik tebal berbahan kain linen dan katalog web responsif tanpa kehilangan aura eksklusivitasnya.",
      whatIDid: [
        "Editorial layouting berirama tenang dengan tipografi serif terkurasi.",
        "Arsitektur checkout tanpa gesekan dengan integrasi Stripe global.",
        "Sistem kurasi foto beresolusi tinggi dengan kompresi AVIF adaptif."
      ],
      techStack: ["Next.js", "Stripe Checkout", "Tailwind CSS", "Editorial Art Direction"],
      results: [
        { metric: "100%", label: "Koleksi edisi perdana terjual habis dalam 72 jam" },
        { metric: "+86%", label: "Peningkatan nilai transaksi rata-rata" },
        { metric: "Zero", label: "Masalah sinkronisasi inventaris fisik-digital" }
      ],
      gallery: [
        { caption: "Linen hardcover and stone backdrop", image: "project_frame_solaris.jpg" },
        { caption: "Studio workspace atmosphere", image: "director_polaroid.jpg" }
      ],
      liveUrl: "https://aeterna-monograph.example.com"
    },
    {
      id: "cine-archive",
      number: "SCENE 04",
      title: "The 35mm Frame Preservation Lab",
      client: "Cinema Archive Society",
      year: "2024",
      category: "Creative Code",
      tag: "Archive Platform",
      featured: false,
      image: "hero_cinematography_reel.jpg",
      summary: "Platform pengarsipan digital untuk restorasi negatif film 35mm dengan metadata pencahayaan, lensa, dan timecode asli.",
      brief: "Mendigitalkan 12.000+ frame film analog vintage agar dapat diteliti secara presisi oleh kurator dan sineas independen di seluruh dunia.",
      whatIDid: [
        "Perancangan antarmuka inspeksi frame beresolusi gigapixel dengan zoom lossless.",
        "Sistem penandaan timecode SMPTE standar siaran film.",
        "Optimasi caching lokal untuk navigasi arsip cepat tanpa buffering."
      ],
      techStack: ["TypeScript", "Canvas", "SMPTE Timecode Engine", "Web Workers"],
      results: [
        { metric: "12,000+", label: "Frame film tersimpan dan terindeks" },
        { metric: "0.2s", label: "Waktu muat frame gigapixel" },
        { metric: "Global", label: "Diakses 40+ institut arsip internasional" }
      ],
      gallery: [
        { caption: "35mm camera frame examination", image: "hero_cinematography_reel.jpg" }
      ]
    }
  ],

  // ===========================================================================
  // 4. TESTIMONI (CATATAN DITEMPEL LAKBAN) <<< EDIT DI SINI >>>
  // ===========================================================================
  testimonials: [
    {
      quote: "Galang tidak hanya mendesain tampilan; dia memikirkan ritme emosi saat orang menyentuh tombol pertama kali. Seperti sutradara yang tahu persis kapan harus cut.",
      author: "Reza Mahendra",
      title: "VP of Product, Aura Tech",
      project: "Lumina OS Release",
      rotation: "-1.8deg",
      tapeColor: "amber"
    },
    {
      quote: "Hasil akhirnya membuat pameran kami dibicarakan di mana-mana. Kode yang dia tulis sama bersihnya dengan rancangan visual di Figma. Jarang menemukan orang yang seimbang di dua dunia ini.",
      author: "Elena Rostova",
      title: "Curatorial Director, Metropolis Biennale",
      project: "Kinetic Exhibition",
      rotation: "2.2deg",
      tapeColor: "silver"
    },
    {
      quote: "Proses 4 hari bersamanya menyelamatkan jadwal peluncuran kami. Komunikasinya ringkas, keputusannya tegas, dan hasilnya melampaui ekspektasi dewan direksi.",
      author: "Adrian Wicaksono",
      title: "Principal Architect, Aeterna Group",
      project: "Solaris Monograph",
      rotation: "-1.2deg",
      tapeColor: "amber"
    }
  ],

  // ===========================================================================
  // 5. ABOUT: THE STORY & RULES <<< EDIT DI SINI >>>
  // ===========================================================================
  about: {
    title: "The story, frame by frame.",
    subtitle: "Tujuh tahun mengasah kepekaan antara estetika sinematik dan rekayasa kode presisi.",
    bioParagraphs: [
      "Saya percaya antarmuka digital terbaik memiliki banyak kesamaan dengan film yang bagus: tidak ada frame yang mubazir, setiap elemen pencahayaan memiliki tujuan, dan ritmenya membuat penonton tidak ingin beralih pandang.",
      "Memulai perjalanan dari seni grafis cetak dan fotografi 35mm sebelum beralih ke desain produk digital dan front-end engineering. Latar belakang analog ini membentuk cara saya membangun software: menghargai bobot ruang kosong, tekstur, dan kejujuran fungsi."
    ],
    timeline: [
      {
        year: "2018",
        scene: "SCENE 01: THE 35MM APPRENTICESHIP",
        title: "Kamera Analog & Eksplorasi Visual",
        description: "Menghabiskan ribuan jam di kamar gelap fotografi dan menyusun layout buku cetak independen. Belajar bahwa batas ruang fisik menuntut disiplin eliminasi."
      },
      {
        year: "2021",
        scene: "SCENE 02: THE PRODUCT TRANSITION",
        title: "Product Designer di Startup Skala Besar",
        description: "Memimpin perancangan design system untuk 2 juta pengguna aktif. Menjembatani jurang komunikasi antara tim desain visual dan engineer front-end."
      },
      {
        year: "2023",
        scene: "SCENE 03: CODE AS MEDIUM",
        title: "Creative Technologist & Front-end Director",
        description: "Mulai menulis kode produksi mandiri menggunakan React, TypeScript, shader WebGL, dan animasi mikro berkecepatan 120 FPS."
      },
      {
        year: "2026",
        scene: "SCENE 04: INDEPENDENT PRACTICE",
        title: "Studio Mandiri & Kemitraan Terpilih",
        description: "Membantu founder, agensi kurasi, dan brand global membangun produk digital yang memiliki karakter visual tak terlupakan."
      }
    ],
    rules: [
      {
        number: "01",
        rule: "Cut the fluff mercilessly.",
        explanation: "Jika sebuah elemen dekoratif tidak memperjelas maksud atau tidak memperkuat hierarki, potong di ruang editing. Kesederhanaan adalah hasil ketegasan."
      },
      {
        number: "02",
        rule: "Light reveals truth.",
        explanation: "Kontras dan bayangan bukan sekadar riasan CSS; keduanya adalah alat untuk memandu mata pengguna ke tindakan berikutnya tanpa ragu."
      },
      {
        number: "03",
        rule: "Wrap with pride.",
        explanation: "Sebuah proyek belum selesai sampai performanya ringan, kodenya bersih untuk dibaca manusia lain, dan aksesibilitasnya teruji nyata."
      }
    ],
    credits: [
      { role: "Brand & Architecture", name: "Aeterna Architects, Metropolis Biennale, Studio Forma" },
      { role: "Product & Tech", name: "Aura Technologies, Cinema Archive Society, Kinetix Core" },
      { role: "Recognitions", name: "Site of the Day, Awwwards Nominee, Type Directors Club Feature" },
      { role: "Camera & Gear", name: "Leica M6, Contax T2, 35mm Summicron, Apple Silicon M-Series" },
      { role: "Core Instruments", name: "Figma, TypeScript, React, Tailwind CSS, Canvas API, Git" }
    ]
  },

  // ===========================================================================
  // 6. LAYANAN / SERVICES <<< EDIT DI SINI >>>
  // ===========================================================================
  services: {
    title: "What I can do for you.",
    subtitle: "Paket kerja terarah dengan keluaran terukur, tanpa birokrasi berbelit.",
    cards: [
      {
        id: "product-direction",
        number: "01",
        title: "Product & Art Direction",
        description: "Membimbing visi estetika dan arsitektur UX produk digital dari nol hingga siap tayang di hadapan pasar global.",
        deliverables: [
          "Konsep visual & moodboard sinematik",
          "Peta perjalanan pengguna & wireframe presisi",
          "Prototipe interaktif clickable fidelitas tinggi",
          "Pengujian kegunaan & validasi navigasi"
        ],
        badge: "CONCEPT TO SCREEN"
      },
      {
        id: "design-systems",
        number: "02",
        title: "Design Systems & UI Engineering",
        description: "Membangun pustaka komponen modular berskala enterprise yang menghemat ratusan jam kerja engineer Anda.",
        deliverables: [
          "Token warna, tipografi, dan grid terstruktur",
          "Komponen Figma dengan auto-layout sempurna",
          "Implementasi kode React / Tailwind sepadan",
          "Dokumentasi penggunaan & kontribusi tim"
        ],
        badge: "SCALE & ACCELERATE"
      },
      {
        id: "creative-dev",
        number: "03",
        title: "Creative Front-End Development",
        description: "Mewujudkan ide desain menjadi website interaktif ultra-responsif dengan animasi halus dan skor performa 95+.",
        deliverables: [
          "Clean semantic HTML/CSS/TypeScript murni",
          "Micro-interactions & gesture-driven motion",
          "Optimalisasi SEO, OpenGraph & Core Web Vitals",
          "Aksesibilitas penuh (WCAG AA compliant)"
        ],
        badge: "PIXEL TO PRODUCTION"
      },
      {
        id: "sprint-audit",
        number: "04",
        title: "Intensive 4-Day Project Sprint",
        description: "Fokus penuh selama empat hari kerja untuk melahirkan halaman peluncuran atau fitur krusial yang menentukan masa depan produk.",
        deliverables: [
          "Hari 1: Script & Storyboard menyeluruh",
          "Hari 2: Art direction & eksplorasi visual kunci",
          "Hari 3: Produksi desain & pengkodean front-end",
          "Hari 4: Final wrap, pengujian kualitas, & serah terima"
        ],
        badge: "RAPID DEPLOYMENT"
      }
    ],
    process: {
      headline: "One project, four days that matter.",
      subheadline: "Metode sprint teruji untuk menghasilkan karya berdampak tinggi dalam waktu singkat.",
      days: [
        {
          day: "DAY 01",
          phase: "Script & Storyboard",
          description: "Mendalami tujuan bisnis, target pengguna, dan premis utama produk. Menentukan alur cerita antarmuka sebelum menyentuh pixel."
        },
        {
          day: "DAY 02",
          phase: "Art Direction & Composition",
          description: "Menentukan palet warna, tipografi, dan komposisi visual frame demi frame. Menghadirkan 2 varian arah estetika untuk disepakati."
        },
        {
          day: "DAY 03",
          phase: "Principle Photography & Code",
          description: "Mengembangkan antarmuka fungsional, menyusun sistem layout responsif, dan menyematkan interaksi motion yang natural."
        },
        {
          day: "DAY 04",
          phase: "Color Grading & Final Wrap",
          description: "Pemeriksaan aksesibilitas, pengujian lintas peramban, optimasi kecepatan, serta serah terima berkas bersih siap luncur."
        }
      ]
    },
    faq: [
      {
        question: "Bagaimana sistem kerja sama kami?",
        answer: "Saya menerima proyek berbasis sprint mingguan terfokus atau paket proyek per scene. Kita mendefinisikan ruang lingkup di muka, bekerja transparan melalui async updates harian, dan menyerahkan kode/desain lengkap tanpa biaya tersembunyi."
      },
      {
        question: "Apakah Anda juga menulis kode produksinya?",
        answer: "Ya. Saya mendesain sekaligus menulis front-end engineering. Tidak ada 'hilang dalam terjemahan' antara file desain dan hasil akhir di peramban pengguna."
      },
      {
        question: "Berapa lama rata-rata waktu pengerjaan?",
        answer: "Sprint terarah memakan waktu 4–10 hari kerja. Proyek desain produk skala penuh biasanya memakan waktu 3–6 minggu tergantung kompleksitas scene."
      }
    ]
  },

  // ===========================================================================
  // 7. JURNAL / CATATAN SUTRADARA (BLOG) <<< EDIT DI SINI >>>
  // ===========================================================================
  journal: {
    title: "Director's Notes & Field Logs",
    subtitle: "Catatan berkala tentang estetika antarmuka, rekayasa web, dan filosofi sinema digital.",
    featuredArticle: {
      id: "the-death-of-default-ui",
      scene: "NOTE 01 / EDITORIAL",
      title: "The Architecture of 24 FPS: Mengapa Website Masa Kini Terasa Dingin dan Mati",
      date: "14 April 2026",
      readTime: "6 min read",
      author: "Galang Arinal Haq",
      summary: "Mengapa ribuan website modern terlihat persis sama—dari bayangan abu-abu lembut hingga tombol pil ungu—dan bagaimana prinsip sinematografi analog dapat menyelamatkan antarmuka kita dari kebosanan.",
      tableOfContents: [
        { id: "sec-problem", label: "01. Sindrom Templat Pabrikan" },
        { id: "sec-cinema", label: "02. Menatap Lewat Jendela 35mm" },
        { id: "sec-rhythm", label: "03. Ritme Scroll adalah Montase" },
        { id: "sec-rules", label: "04. Tiga Cara Praktis Mengubah Arah" }
      ],
      quote: "Sinema adalah seni memutuskan apa yang masuk ke dalam frame, dan apa yang harus dibuang ke luar frame dengan kejam.",
      quoteAuthor: "Martin Scorsese, Filmmaker",
      codeSnippet: `// Ritme scroll dengan bezier sinematik
const cinematicCurve = 'cubic-bezier(0.16, 1, 0.3, 1)';
window.addEventListener('scroll', () => {
  const scrollOffset = window.scrollY;
  const timecode = formatSMPTE(scrollOffset);
  updateTimecodeHUD(timecode);
});`,
      contentSections: [
        {
          id: "sec-problem",
          heading: "01. Sindrom Templat Pabrikan",
          text: "Buka sepuluh website produk teknologi hari ini. Anda kemungkinan besar akan melihat hal yang identik: latar belakang putih steril, kartu persegi dengan rounded corner 16px, border tipis abu-abu transparan, dan tombol pil berwarna ungu atau biru elektrik. Antarmuka telah berubah menjadi formulir pendaftaran massal tanpa jiwa."
        },
        {
          id: "sec-cinema",
          heading: "02. Menatap Lewat Jendela 35mm",
          text: "Dalam film seluloid, setiap frame berharga mahal. Sutradara tidak mengisi sudut ruang dengan elemen yang tidak bernilai naratif. Begitu pula di web: warna krem hangat, kontras hitam pekat, dan garis tepi tegas menciptakan kehadiran fisik yang membuat pengguna merasa sedang memegang lembaran nyata, bukan sekadar kaca dingin."
        },
        {
          id: "sec-rhythm",
          heading: "03. Ritme Scroll adalah Montase",
          text: "Menggulir halaman bukanlah sekadar membaca daftar teks vertikal. Pergantian dari seksi gelap pekat ke seksi krem terang bertindak seperti pemotongan adegan (hard cut) antara ruang interior temaram dan ruang exterior bersimbah cahaya. Mata manusia secara alami terbangun saat ritme ini diterapkan."
        },
        {
          id: "sec-rules",
          heading: "04. Tiga Cara Praktis Mengubah Arah",
          text: "Pertama: Singkirkan tombol kapsul/pil untuk metadata statis. Biarkan teks bernapas dengan pemisah tipografis yang jujur. Kedua: Tentukan satu warna aksen berani (seperti oranye sinema) dan gunakan hanya pada 10% titik aksi vital. Ketiga: Tulis kode Anda sendiri tanpa bergantung pada tumpukan framework raksasa yang memperlambat laju frame per detik."
        }
      ]
    },
    moreNotes: [
      {
        id: "color-grading-tokens",
        date: "28 Maret 2026",
        readTime: "4 min read",
        category: "Color Theory",
        title: "Color Grading untuk CSS Tokens: Mengapa Warm Cream Selalu Mengalahkan Murni #FFFFFF",
        description: "Eksplorasi spektrum warna analog dan bagaimana kontras 12% pada latar belakang meningkatkan kenyamanan membaca layar hingga 40%."
      },
      {
        id: "vanilla-first-resilience",
        date: "10 Februari 2026",
        readTime: "5 min read",
        category: "Engineering",
        title: "Vanilla First: Mengapa Web Portofolio Terbaik Tidak Memerlukan Build Step Rumit",
        description: "Menghidupkan kembali kesenangan HTML murni yang bisa dibuka dengan klik dua kali di komputer tanpa perlu menunggu terminal npm install."
      },
      {
        id: "micro-cadence-motion",
        date: "19 Januari 2026",
        readTime: "3 min read",
        category: "Motion Design",
        title: "Mikro-Kadensi: Menghitung Durasi Transisi Antara 120ms Hingga 200ms",
        description: "Mengapa transisi lebih lambat dari 250ms membuat pengguna merasa aplikasi Anda lambat, dan bagaimana kurva settling menyelesaikan masalahnya."
      }
    ]
  },

  // ===========================================================================
  // 8. KONTAK (LET'S MAKE SOMETHING GOOD) <<< EDIT DI SINI >>>
  // ===========================================================================
  contact: {
    headline: "Have a project? Let's shoot.",
    subheadline: "Mari berkolaborasi membuat antarmuka digital yang berani, berkarakter, dan tak terlupakan.",
    statusTitle: "CURRENT AVAILABILITY",
    statusDetail: "Terbuka untuk 2 proyek terpilih di Q2/Q3 2026. Respon dalam waktu 24 jam.",
    coordinates: "Jakarta (GMT+7) · Remote worldwide",
    projectTypes: [
      "Digital Product / SaaS UI",
      "Design System Development",
      "Creative Front-End Web",
      "4-Day Project Sprint",
      "Art Direction & Rebrand"
    ],
    budgetRanges: [
      "$3,000 - $6,000",
      "$6,000 - $12,000",
      "$12,000+",
      "Flexible / Project Sprint"
    ]
  },

  // ===========================================================================
  // 9. CLAPPERBOARD FOOTER DATA <<< EDIT DI SINI >>>
  // ===========================================================================
  clapperboard: {
    production: "PORTFOLIO 2026",
    scene: "SCENE: 04",
    take: "TAKE: 02",
    roll: "ROLL: A1",
    director: "GALANG ARINAL HAQ",
    date: "OCTOBER 2026",
    sound: "SYNC SOUND / 48kHz",
    frameRate: "24.000 FPS",
    copyright: "© 2026 Galang Arinal Haq. All frames captured with intent."
  }
};
