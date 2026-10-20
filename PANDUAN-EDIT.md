# 🎬 PANDUAN LENGKAP & CARA DEPLOY KE VERCEL

Selamat datang di portofolio sinematik Anda! Seluruh website ini telah dikonfigurasi **100% Siap Deploy ke Vercel** (*Zero Configuration*) dengan berkas `vercel.json` dan performa teroptimasi.

---

## 🚀 PANDUAN CEPAT DEPLOY KE VERCEL (3 CARA)

Proyek ini sudah dilengkapi dengan berkas **`vercel.json`** yang secara otomatis mengatur build Vite, cache aset 1 tahun, dan URL bersih (contoh: `/work`, `/about`, `/contact`).

### CARA 1: Lewat Git & Dashboard Vercel (Paling Direkomendasikan & Otomatis Update)
1. Unggah (*push*) folder proyek ini ke repositori **GitHub**, **GitLab**, atau **Bitbucket** Anda.
2. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
3. Klik tombol **"Add New..."** lalu pilih **"Project"**.
4. Pilih repositori portofolio yang baru Anda buat, lalu klik **"Import"**.
5. Vercel akan otomatis membaca file `vercel.json` dan `package.json`.
   - **Framework Preset**: Vite (terdeteksi otomatis)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik tombol **"Deploy"**.
7. Dalam ~15-30 detik, website portofolio Anda langsung tayang dengan domain gratis (contoh: `portofolio-galang.vercel.app`) dan sertifikat SSL HTTPS otomatis! Setiap kali Anda mengubah teks di GitHub, Vercel akan otomatis melakukan update ke website Anda.

---

### CARA 2: Deploy Cepat Lewat Vercel CLI (Dari Terminal Komputer)
Jika Anda suka menggunakan terminal:
```bash
# 1. Pasang Vercel CLI (jika belum ada)
npm i -g vercel

# 2. Masuk ke direktori proyek dan jalankan:
vercel

# 3. Ikuti petunjuk singkat di layar (cukup tekan Enter untuk pilihan default)
# 4. Untuk deploy ke produksi langsung:
vercel --prod
```

---

### CARA 3: Deploy Tanpa Terminal (Netlify Drag & Drop)
Sebagai alternatif gratis instan:
1. Kunjungi [netlify.com](https://www.netlify.com).
2. Geser dan lepaskan (*drag and drop*) seluruh isi folder ini atau folder `dist/` ke area upload Netlify.
3. Website Anda langsung live dalam 5 detik.

---

## 📁 Struktur Berkas Proyek

```text
├── index.html          # Halaman Beranda (Hero sinema, Selected Works, Testimoni, CTA)
├── work.html           # Halaman Arsip Karya & Case Studies
├── about.html          # Halaman Tentang ("The story, frame by frame", 3 Rules, Credits)
├── services.html       # Halaman Layanan & Framework 4-Day Project Sprint
├── journal.html        # Halaman Catatan Sutradara / Blog & Kutipan Sinema
├── contact.html        # Halaman Kontak & Formulir Pemesanan Produksi
├── content.js          # <<< PUSAT KONTEN UTAMA: Ubah semua teks di sini >>>
├── theme.css           # <<< PUSAT TAMPILAN: Ubah warna & font di sini >>>
├── main.js             # Logika interaktif (navbar, timecode HUD, modal)
├── vercel.json         # Konfigurasi deploy Vercel (clean URLs, routing, caching)
├── .vercelignore       # Mengabaikan berkas berat saat upload ke Vercel
├── assets/
│   └── images/         # Folder tempat menyimpan seluruh foto & frame proyek
└── PANDUAN-EDIT.md     # Panduan lengkap yang sedang Anda baca
```

---

## ⚡ Cara Mengedit Konten Sendiri

### 1. Mengubah Profil, Nama & Headline
Buka **`content.js`** dengan text editor (VS Code, Notepad, dll). Semua teks ada di sini:
```javascript
profile: {
  name: "Galang Arinal Haq",
  shortName: "Galang",
  role: "Product Designer & Creative Developer",
  email: "galangarinalhaq23@gmail.com",
  ...
}
```

### 2. Mengganti atau Menambah Foto
1. Taruh foto baru di `assets/images/foto-anda.jpg`.
2. Di **`content.js`**, cukup tuliskan nama filenya:
   ```javascript
   image: "foto-anda.jpg"
   ```

### 3. Mengubah Warna Utama Sinema
Buka **`theme.css`** dan ubah variabel di baris paling atas:
```css
:root {
  --bg-dark: #121110;          /* Latar belakang seksi gelap */
  --bg-cream: #F1EBDD;         /* Latar belakang seksi krem */
  --accent: #FF4A1C;           /* Oranye stabilo sinema */
  ...
}
```

---

*Konfigurasi Vercel telah teruji dan siap tayang 24 FPS.*
