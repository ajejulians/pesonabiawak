# Product Requirements Document (PRD)

## PesonaBiawak — Website Resmi Minyak Biawak Indonesia

| Field | Detail |
|---|---|
| **Nama Proyek** | PesonaBiawak Web |
| **Versi** | 1.0 |
| **Tanggal** | 19 Juni 2026 |
| **Lokasi Bisnis** | Gunung Sindur, Kabupaten Bogor, Jawa Barat |
| **Kontak** | Telp: 0812-3456-7890 · Email: info@pesonabiawak.id |

---

## 1. Ringkasan

PesonaBiawak adalah website statis (landing page) yang berfungsi sebagai kehadiran online resmi untuk brand **Minyak Biawak** — produk alami tradisional Indonesia yang digunakan untuk kesehatan kulit, essen mancing, dan perawatan ternak. Website ini tidak memiliki backend atau database; seluruh data produk bersifat statis dan pembelian dialihkan ke **Shopee** (e-commerce) dan **WhatsApp** (pesanan grosir/reseller).

---

## 2. Tujuan

- Menjadi etalase digital utama untuk produk Minyak Biawak
- Membangun kredibilitas dan kepercayaan konsumen melalui testimoni dan jaminan kualitas
- Mengarahkan pengunjung ke saluran penjualan (Shopee & WhatsApp)
- Menyedikan informasi lengkap tentang manfaat, cara pakai, dan keunggulan produk

---

## 3. Target Pengguna

| Segmen | Kebutuhan |
|---|---|
| **Konsumen Akhir** | Mencari solusi alami untuk masalah kulit (eksim, gatal, luka bakar, koreng) |
| **Pemancing** | Mencari essen/umpan mancing alami yang efektif |
| **Peternak Ternak** | Mencari perawatan alami untuk tanduk domba/ternak |
| **Reseller/Grosir** | Ingin menjual kembali produk dengan harga grosir |

---

## 4. Fitur Utama

### 4.1 Halaman Beranda (`/`)

| Fitur | Deskripsi |
|---|---|
| Hero Section | Judul produk, gambar produk, deskripsi singkat, CTA "Beli Sekarang" dan "Pelajari Lebih Lanjut" |
| Trust Badges | 100% Murni, Promo Extra, COD Tersedia |
| Manfaat Produk | 3 kartu: Kesehatan Kulit, Pertumbuhan Tanduk Domba, 100% Alami |
| Tab Fitur | Tabbed interface untuk 3 kategori perawatan: Eksim, Gatal Menahun/Luka Bakar, Koreng/Radang Kulit |
| Kualitas Jaminan | Statistik: 100% Asli, 10K+ Pelanggan, 7+ Tahun, Rating 4.8 |
| Testimoni | 3 ulasan pelanggan dengan rating bintang |
| Banner CTA | Banner promosi diskon 20% dengan link ke Shopee |

### 4.2 Halaman Tentang (`/about`)

| Fitur | Deskripsi |
|---|---|
| Hero Section | Judul "Solusi Alami untuk Kulit Sehat Anda" dengan carousel gambar produk (autoplay 3 detik) |
| Manfaat | 4 kartu: Gatal/Eksim, Penyembuhan Luka, Essen Mancing, Pertumbuhan Tanduk |
| Cara Pakai | 4 langkah berurutan dengan panduan visual |
| Tips Penggunaan | Kartu tips untuk hasil optimal |
| Visi & Misi | Pernyataan visi dan 4 poin misi |
| Keunggulan Produk | 4 kartu: 100% Alami, Kualitas Premium, Anti-Bakteri/Anti-Jamur, Serbaguna |
| Komitmen | Statistik kepuasan pelanggan dengan tema hijau |

### 4.3 Halaman Produk (`/product`)

| Fitur | Deskripsi |
|---|---|
| Hero Section | Judul "Produk Kami" dengan badge premium |
| Fitur Strip | Gratis Ongkir, COD, 100% Original, Jaminan Uang Kembali |
| Grid Produk | 4 produk dengan harga, badge, dan CTA |
| Banner Grosir | Bagian reseller/grosir dengan link WhatsApp |

### 4.4 Komponen Bersama

| Komponen | Deskripsi |
|---|---|
| Navbar | Navigasi sticky, menu desktop inline, menu mobile dalam Sheet (drawer) |
| Footer | Brand info, link produk, informasi, kontak, dan placeholder sosial media |
| ScrollToTop | Reset scroll position setiap pergantian halaman |

---

## 5. Daftar Produk

| # | Nama Produk | Varian | Harga | Badge | Catatan |
|---|---|---|---|---|---|
| 1 | Produk Unggulan | 10ml / 20ml / 30ml | Rp 75.000 | Best Seller | |
| 2 | Minyak Biawak Unggulan | 30ml | Rp 95.000 | Premium | |
| 3 | Essen Mancing | 2 botol | Rp 140.000 (~~Rp 150.000~~) | Popular | Diskon |
| 4 | Obat Gatal | 4 botol | Rp 260.000 (~~Rp 300.000~~) | Best Value | Diskon |

---

## 6. Arsitektur Teknis

### 6.1 Tech Stack

| Layer | Teknologi | Versi |
|---|---|---|
| UI Library | React | ^19.2.0 |
| Bahasa | TypeScript | ~5.9.3 |
| Build Tool | Vite | ^7.2.4 |
| Routing | React Router DOM | ^7.13.0 |
| Styling | Tailwind CSS | ^4.1.18 |
| UI Components | shadcn/ui + Radix UI | ^1.4.3 |
| Icons | Lucide React | ^0.563.0 |
| Carousel | Embla Carousel React | ^8.6.0 |
| Toast | Sonner | ^2.0.7 |
| Theme | next-themes | ^0.4.6 |
| Linting | ESLint + typescript-eslint | ^9.39.1 |
| Compiler | babel-plugin-react-compiler | ^1.0.0 |

### 6.2 Arsitektur Aplikasi

```
PesonaBiawak Web (SPA)
├── Entry: main.tsx → BrowserRouter
├── Routes (Lazy-loaded)
│   ├── / → Landing Page
│   ├── /about → About Page
│   └── /product → Product Page
├── Layout: AppLayout (Navbar + Footer)
├── UI: shadcn/ui components (New York style)
└── Data: Hardcoded TypeScript constants (no backend)
```

### 6.3 Fitur Teknis

- **Lazy Loading** — Semua halaman dimuat secara on-demand via `React.lazy()`
- **React Compiler** — Auto-memoization dengan `babel-plugin-react-compiler`
- **Dark Mode** — CSS variables dark mode tersedia (belum ada toggle UI)
- **Responsive** — Mobile-first dengan Tailwind breakpoints
- **Path Alias** — `@/*` → `./src/*`
- **Scroll Snap** — Smooth scrolling dengan snap behaviour

---

## 7. Alur Pengguna

```
Pengunjung masuk → Lihat Homepage → Klik "Beli Sekarang" → Redirect ke Shopee
                                    Klik "Pelajari Lebih Lanjut" → Halaman Tentang
                                                                    ↓
                                              Lihat Cara Pakai / Manfaat
                                                                    ↓
                                              Klik "Pesan Sekarang" → Kembali ke Homepage → Shopee
                                    Klik Tab Produk → Lihat Detail Produk → Shopee
                                    
Grosir/Reseller → Klik banner WhatsApp → Chat langsung ke nomor bisnis
```

---

## 8. Integrasi Eksternal

| Integrasi | Mekanisme | Status |
|---|---|---|
| **Shopee** | `window.open(url)` — redirect ke halaman produk Shopee | Aktif |
| **WhatsApp** | `wa.me/6281234567890` — chat langsung untuk grosir | Nomor placeholder |

---

## 9. Masalah Diketahui & Area Perbaikan

| # | Masalah | Prioritas |
|---|---|---|
| 1 | Nomor WhatsApp masih placeholder (`6281234567890`) | Tinggi |
| 2 | Link sosial media (Instagram, Facebook, Twitter) masih `href="#"` | Sedang |
| 3 | Toggle dark mode belum tersedia (CSS sudah siap) | Sedang |
| 4 | Tidak ada form kontak / email | Rendah |
| 5 | Tidak ada SEO meta tags (title, description, Open Graph) | Tinggi |
| 6 | Tidak ada analytics / tracking | Sedang |
| 7 | Tidak ada halaman 404 | Rendah |
| 8 | Tidak ada sitemap.xml / robots.txt | Sedang |

---

## 10. Roadmap Fase Berikutnya

| Fase | Deskripsi | Prioritas |
|---|---|---|
| **Fase 2** | Ganti nomor WhatsApp asli, update link Shopee yang benar | Tinggi |
| **Fase 2** | Tambah meta tags SEO (title, description, OG image) | Tinggi |
| **Fase 2** | Hubungkan link sosial media yang valid | Sedang |
| **Fase 3** | Tambahkan halaman 404 | Rendah |
| **Fase 3** | Tambahkan sitemap.xml dan robots.txt | Sedang |
| **Fase 3** | Integrasi Google Analytics / Plausible | Sedang |
| **Fase 4** | Aktifkan dark mode toggle | Sedang |
| **Fase 4** | Tambahkan form kontak atau integrasi email | Rendah |
| **Fase 5** | Backend untuk manajemen produk dinamis (opsional) | Rendah |

---

## 11. Kriteria Keberhasilan

- Website dapat diakses dan responsif di semua ukuran layar
- Semua CTA mengarah ke saluran penjualan yang benar (Shopee & WhatsApp)
- Waktu loading halaman < 3 detik di jaringan normal
- Skor Lighthouse Performance ≥ 90
- Konten dapat dipahami oleh pengguna target (pasar Indonesia)

---

## 12. Lisensi

Hak cipta © 2026 PesonaBiawak. All rights reserved.

