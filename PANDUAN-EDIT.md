# 🎬 PANDUAN EDIT PORTOFOLIO SINEMA & FILM

Selamat datang di portofolio sinematik Anda! Seluruh website ini dibangun dengan prinsip **Zero Framework & Zero Build Step** (HTML, CSS, dan JavaScript murni). Anda bisa langsung membukanya di komputer cukup dengan **klik dua kali berkas `index.html`** tanpa perlu menginstal Node.js atau menjalankan perintah terminal apa pun.

---

## 📁 Struktur Berkas

```text
├── index.html          # Halaman Beranda (Hero, Selected Works, Testimoni, CTA)
├── work.html           # Halaman Arsip Karya (Filter Kategori & Case Studies)
├── about.html          # Halaman Tentang (Timeline, 3 Aturan, Production Credits)
├── services.html       # Halaman Layanan & Framework 4-Day Project Sprint
├── journal.html        # Halaman Catatan Sutradara / Blog & Kutipan
├── contact.html        # Halaman Kontak & Formulir Pemesanan Produksi
├── content.js          # <<< PUSAT KONTEN UTAMA: Ubah semua teks di sini >>>
├── theme.css           # <<< PUSAT TAMPILAN: Ubah warna & font di sini >>>
├── main.js             # Logika interaktif (navbar, timecode HUD, modal)
├── assets/
│   └── images/         # Folder tempat menyimpan seluruh foto & frame proyek
└── PANDUAN-EDIT.md     # Panduan lengkap yang sedang Anda baca
```

---

## ⚡ 1. Cara Mengubah Nama, Bio, dan Teks

Buka file **`content.js`** dengan text editor apa saja (VS Code, Notepad, Sublime Text).
Semua data teks terpusat di file ini dan sudah dilengkapi dengan penanda `<<< EDIT DI SINI >>>`.

### Mengubah Profil & Nama:
Cari bagian `profile`:
```javascript
profile: {
  name: "Nama Lengkap Anda",
  shortName: "NamaPanggilan",
  role: "Product Designer & Web Developer",
  location: "Jakarta, Indonesia",
  email: "emailanda@gmail.com",
  phone: "+62 812-xxxx-xxxx",
  ...
}
```

### Mengubah Headline Hero di Halaman Utama:
Cari bagian `hero`:
```javascript
hero: {
  headlinePart1: "Designer by trade,",
  headlineHighlight: "developer by habit.", // Kata yang disorot stabilo oranye
  subheadline: "Tuliskan deskripsi singkat atau moto Anda di sini...",
  primaryCtaText: "View Selected Works",
  secondaryCtaText: "Have a project? Let's shoot",
  ...
}
```

---

## 🖼️ 2. Cara Mengganti Foto & Menambah Gambar

1. Simpan foto baru Anda ke dalam folder:  
   `assets/images/nama-foto-anda.jpg`
2. Buka **`content.js`**. Cukup tuliskan nama file fotonya saja!
   - Untuk foto profil / polaroid:
     ```javascript
     avatarImage: "nama-foto-anda.jpg",
     ```
   - Untuk banner utama hero:
     ```javascript
     bannerImage: "nama-foto-banner.jpg",
     ```
   - Untuk thumbnail proyek:
     ```javascript
     image: "foto-proyek.jpg",
     ```

*Tips Ukuran Rasio Foto Sinema:*
- Banner Hero: Rasio **16:9** (lanskap lebar)
- Frame Proyek: Rasio **4:3** atau **16:9**
- Foto Polaroid Sutradara: Rasio **1:1** (kotak persegi)

---

## 🚀 3. Cara Menambah Proyek Baru

Buka **`content.js`**, cari daftar `projects: [ ... ]`. Salin salah satu blok proyek, tempelkan di bawahnya, lalu sesuaikan:

```javascript
{
  id: "proyek-baru-anda",
  number: "SCENE 05",
  title: "Judul Proyek Keren",
  client: "Nama Klien / Perusahaan",
  year: "2026",
  category: "Digital Product", // Pilihan: "Digital Product", "Brand & Motion", atau "Creative Code"
  featured: true, // true agar muncul di halaman depan, false untuk arsip saja
  image: "proyek_baru.jpg",
  summary: "Ringkasan 1-2 kalimat tentang proyek ini.",
  brief: "Tantangan atau masalah yang dihadapi klien...",
  whatIDid: [
    "Merancang sistem navigasi dan antarmuka mobile.",
    "Mengembangkan kode front-end interaktif.",
    "Mengoptimalkan kecepatan muat hingga skor 98."
  ],
  techStack: ["Figma", "TypeScript", "Tailwind CSS"],
  results: [
    { metric: "+120%", label: "Peningkatan konversi pengguna" },
    { metric: "14 Hari", label: "Waktu dari konsep ke peluncuran" }
  ],
  liveUrl: "https://tautan-proyek-anda.com"
},
```

Halaman `index.html` dan `work.html` akan langsung menampilkan proyek baru ini secara otomatis!

---

## 🎨 4. Cara Mengubah Warna & Nuansa Tampilan

Buka **`theme.css`**. Di baris paling atas terdapat konfigurasi variabel CSS:

```css
:root {
  /* Warna Gelap & Krem Sinema */
  --bg-dark: #121110;          /* Latar belakang seksi gelap */
  --bg-cream: #F1EBDD;         /* Latar belakang seksi krem */
  
  /* Warna Aksen Oranye Sinema */
  --accent: #FF4A1C;           /* Oranye stabilo sinema */
  --accent-hover: #E53E12;
  
  /* Warna Teks */
  --text-dark: #1A1816;
  --text-light: #F1EBDD;
}
```

Cukup ubah kode hex di atas (misalnya mengubah `--accent` menjadi `#00E5FF` untuk aksen Cyan atau `#FFB800` untuk Emas Bioskop), maka warna seluruh tombol, stabilo, border, dan timecode di seluruh halaman akan otomatis berganti serentak.

---

## 🔤 5. Cara Mengganti Font

Di dalam **`theme.css`**, cari baris `@import url(...)` dan variabel font:
```css
--font-display: 'Inter Tight', 'Space Grotesk', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```
Anda bisa menggantinya dengan font Google Fonts favorit Anda lainnya (misalnya `Outfit`, `Bricolage Grotesque`, atau `Syne`).

---

## 💻 6. Cara Membuka di Komputer (Offline / Lokal)

1. Buka folder proyek di File Explorer (Windows) atau Finder (macOS).
2. **Klik dua kali pada file `index.html`**.
3. Website langsung terbuka di browser Anda (Chrome, Safari, Firefox, Edge).
4. Tidak perlu internet (kecuali untuk font Google Fonts saat pertama kali muat) dan tidak perlu Node.js.

---

## 🌐 7. Cara Deploy Online Gratis

### Opsi A: GitHub Pages (Paling Direkomendasikan)
1. Buat repository baru di [github.com](https://github.com) dengan nama `username.github.io` atau `portfolio`.
2. Unggah seluruh file di folder ini ke repository tersebut.
3. Buka **Settings** repository → pilih menu **Pages** di sebelah kiri.
4. Pada **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1–2 menit, portofolio Anda langsung aktif di: `https://username.github.io`!

### Opsi B: Netlify (Tarik & Lepas / Drag & Drop)
1. Kunjungi [netlify.com](https://www.netlify.com/) dan masuk/daftar gratis.
2. Buka tab **Sites** → geser dan lepaskan (drag and drop) seluruh folder ini ke area upload Netlify.
3. Website Anda langsung live dalam 5 detik dan mendapatkan tautan gratis serta sertifikat SSL (HTTPS).

### Opsi C: Vercel
1. Kunjungi [vercel.com](https://vercel.com).
2. Hubungkan akun GitHub Anda, pilih repositori portofolio ini, lalu klik **Deploy**.
3. Tanpa build step (pilih Framework Preset: `Other`), website akan langsung tayang secara instan.

---

*Disusun dengan presisi sinema 24 FPS untuk Galang Arinal Haq.*
