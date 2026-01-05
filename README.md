# GIB RUN (The Real Task Runner)

> "Kembalikan fungsi 'Run' kepada yang berhak mengeksekusi, bukan yang menyimpan data."

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue)](https://www.npmjs.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![Status](https://img.shields.io/badge/status-Sangat_Valid-red)]()

**Gib Run** adalah CLI Wrapper untuk ekosistem JavaScript (Node.js, Bun, PNPM, Yarn) yang dirancang untuk menggantikan `npm`.

Project ini dibuat sebagai respons atas "kebingungan" di komunitas yang menamai framework Redis/Go dengan akhiran `.run`. Di sini, kami meluruskan bahwa **Run** adalah kata kerja untuk menjalankan task, bukan menyimpan cache.

## Kenapa Pakai Gib Run?

| Fitur | Gib Run (Ini) | Gib.Run (Sebelah) |
| :--- | :--- | :--- |
| **Fungsi Utama** | Menjalankan Script (Task Runner) | Database/Cache (Redis) |
| **Logika Bahasa** | Valid (`gib run dev`) | Tidak Valid (Redis kok Run?) |
| **Dukungan** | NPM, Bun, PNPM, Yarn | Golang only |
| **Fitur Spesial** | Protokol Fufufafa (Pembersih) | Tidak ada |

## Instalasi

Karena ini gerakan bawah tanah, silakan install langsung dari source atau tunggu rilis di NPM.

```bash
# Clone repository
git clone [https://github.com/username-anda/gib-run.git](https://github.com/username-anda/gib-run.git)

# Masuk folder
cd gib-run

# Install secara global (Link)
npm link
Cara Pakai (Usage)
Cukup ganti npm dengan gib dalam keseharian Anda.

1. Mode Development
Menjalankan server dev dengan asupan gizi yang cukup.

Bash

gib run dev
2. Mode Production
Menjalankan build production untuk menuju Indonesia Emas.

Bash

gib run start
3. Install Paket
Membagikan dependencies (bansos) ke dalam folder node_modules.

Bash

gib install axios
# atau
gib i react
4. [BAHAYA] Protokol Fufufafa
Fitur khusus untuk menghapus jejak digital project secara massal. PERINGATAN: Gunakan dengan bijak. Penulis tidak bertanggung jawab atas hilangnya skripsi atau codingan kantor.

Bash

gib fufufafa
Disclaimer
Project ini adalah satire dan bentuk kritik konstruktif terhadap penamaan framework. Tidak ada maksud menjatuhkan, hanya meluruskan syntax.

#IMPHNEN #Javascript #GibRun #TheRealOne