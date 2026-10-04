# Website LPK Diposa Abhyakta Mandiri

Versi ini memisahkan kode website menjadi file yang lebih rapi tanpa mengubah struktur visual utama dari HTML sumber.

## Struktur

```text
DAM_WEBSITE_SPLIT/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── (asset gambar/logo website)
```

## Yang dipisahkan

- `index.html` — struktur/markup halaman.
- `style.css` — CSS custom yang sebelumnya berada di `<style>` pada HTML.
- `script.js` — JavaScript untuk form pendaftaran WhatsApp dan accordion FAQ yang sebelumnya berada di `<script>` inline.
- `README.md` — dokumentasi project.
- `assets/` — tempat menyimpan logo DAM dan gambar lain yang dirujuk HTML.

## Catatan penting

Website ini masih menggunakan Tailwind CSS CDN dan Font Awesome CDN, seperti pada HTML sumber, agar tampilan yang sudah jadi tetap terjaga. Konfigurasi warna Tailwind sengaja tetap berada di `index.html` karena CDN Tailwind membacanya saat halaman dimuat. Ini bukan perubahan struktur visual.

## Asset yang dibutuhkan

Pastikan file yang dirujuk HTML tersedia di folder `assets/`, terutama:

- `logo-dam.png`

Hero saat ini menggunakan gambar dari Unsplash melalui URL eksternal. Jika ingin website benar-benar mandiri/offline atau lebih stabil untuk deployment, gambar hero sebaiknya nanti dipindahkan ke `assets/` dan URL CSS diganti ke file lokal.

## Menjalankan

1. Simpan `index.html`, `style.css`, dan `script.js` dalam satu folder.
2. Pastikan folder `assets/` berada di level yang sama.
3. Buka `index.html` di browser.
4. Setelah lolos pengecekan, folder ini bisa langsung di-upload ke GitHub Pages/hosting.

## Fitur yang dipertahankan

- Navigasi anchor.
- CTA daftar sekarang.
- Tombol konsultasi WhatsApp.
- Kartu program Diklat.
- Section sertifikasi.
- FAQ accordion.
- Form pendaftaran yang mengirim data ke WhatsApp.
- Floating WhatsApp button.
- Responsive layout berbasis Tailwind breakpoint.
