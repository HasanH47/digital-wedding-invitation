# Undangan Pernikahan Digital

Sebuah website undangan pernikahan digital yang elegan, responsif, dan interaktif. Dibuat menggunakan HTML, CSS, dan JavaScript murni dengan fokus pada pengalaman pengguna yang menarik dan performa yang optimal.

## Fitur

- 🎨 Desain elegan dan responsif
- 🌟 Animasi halus saat scroll
- 🎵 Pemutar musik otomatis
- 📍 Peta lokasi interaktif dengan Google Maps
- 📝 Sistem ucapan dan doa
- ⏱️ Hitung mundur menuju hari pernikahan
- 📱 Mobile-first design
- 🖼️ Galeri foto pre-wedding
- 💝 Informasi hadiah dan rekening

## Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)
- [AOS.js](https://michalsnik.github.io/aos/) - Animate On Scroll Library
- [Particles.js](https://vincentgarreau.com/particles.js/) - Background Particles
- [SweetAlert2](https://sweetalert2.github.io/) - Beautiful Alerts

## Struktur Proyek

```
undangan-pernikahan/
├── index.html
├── style.css
├── main.js
└── assets/
    ├── images/
    └── music/
```

## Cara Penggunaan

1. Clone repositori ini
2. Buka browser dan akses `index.html`

## Kustomisasi

### Mengubah Informasi Pasangan

Edit bagian berikut di `index.html`:
```html
<section id="couple">
  <!-- Ubah informasi pasangan di sini -->
</section>
```

### Mengubah Lokasi Acara

Edit maps di `index.html`:
```html
<!-- Ganti lokasi di sini dengan lokasi acara -->
<iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31647.43486982595!2d110.19692486534376!3d-7.473053372467283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f5d736ef381%3A0xa0645d8ec4966c24!2sMagelang%2C%20Magelang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1744980489835!5m2!1sen!2sid"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
```

### Mengubah Musik

1. Tambahkan file musik ke folder `assets/music/`
2. Update source musik di `index.html`:
```html
<audio id="background-music" loop>
  <source src="assets/music/nama-file-musik.mp3" type="audio/mpeg">
</audio>
```

## Optimasi

Website ini telah dioptimasi untuk:
- Performa loading yang cepat
- Responsivitas di berbagai ukuran layar
- Penggunaan bandwidth yang efisien
- Kompatibilitas browser

## Lisensi

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan

## Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau laporkan issues jika menemukan bug.

## Kredit

Dibuat dengan ❤️ oleh [HasanH47](https://github.com/HasanH47) untuk momen spesial pernikahan Anda