# GIB RUN (Official CLI)

> "Kembalikan fungsi 'Run' kepada yang berhak mengeksekusi, bukan yang menyimpan data."

[![npm version](https://img.shields.io/npm/v/gib-run.svg?style=flat-square)](https://www.npmjs.com/package/gib-run)
[![Downloads](https://img.shields.io/npm/dm/gib-run.svg?style=flat-square)](https://www.npmjs.com/package/gib-run)
[![License](https://img.shields.io/npm/l/gib-run.svg?style=flat-square)](./LICENSE)

**Gib Run** adalah CLI Task Runner untuk ekosistem JavaScript (Node.js, Bun, PNPM, Yarn).

Project ini dirilis untuk meluruskan kerancuan penamaan framework sebelah. Di sini, kami menegaskan bahwa **Run** adalah kata kerja untuk menjalankan script, bukan untuk menyimpan cache (Redis).

## 📦 Instalasi

Sudah tersedia secara global di NPM Registry. Jangan tertukar dengan barang tiruan.
```bash
npm install -g gib-run
```

## 🚀 Cara Pakai

Ganti kebiasaan lama npm Anda dengan perintah yang lebih berwibawa.

### 1. Menjalankan Project

Otomatis mendeteksi package manager (npm, bun, yarn, pnpm) yang Anda gunakan.
```bash
# Mode Development
gib run dev

# Mode Production
gib run start
```

### 2. Install Dependency

Membagikan "bansos" (paket) ke dalam folder `node_modules`.
```bash
gib install axios
# atau
gib i react
```

### 3. [DANGER] Protokol Fufufafa 🕵️‍♂️

Fitur pembersihan jejak digital.

**PERINGATAN:** Perintah ini akan **MENGHAPUS PERMANEN** file di dalam folder (kecuali `node_modules` & `index.js`). Gunakan hanya saat keadaan darurat atau untuk konten demo.
```bash
gib fufufafa
```

## 🆚 Kenapa Gib Run?

| Fitur | Gib Run (Official) | Gib.Run (Sebelah) |
|-------|-------------------|-------------------|
| Fungsi Utama | Task Runner (Sesuai Namanya) | Database/Redis (Gak Nyambung) |
| Install | `npm i -g gib-run` | Gak ada di NPM |
| Logika | Tegak Lurus | Bengkok |

## ⚠️ Disclaimer

Tools ini dibuat untuk tujuan edukasi dan sedikit satire terhadap penamaan library di komunitas. Penulis tidak bertanggung jawab atas kehilangan data akibat penyalahgunaan fitur `fufufafa`.