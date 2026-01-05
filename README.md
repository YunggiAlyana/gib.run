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

### 1. Menjalankan Script

Otomatis mendeteksi package manager (npm, bun, yarn, pnpm) yang Anda gunakan.
```bash
# Mode Development
gib run dev

# Mode Production
gib run start

# Script Custom
gib run build
gib run test
```

**Fitur Auto-Detect:**
- ✅ Deteksi `bun.lockb` → gunakan Bun
- ✅ Deteksi `pnpm-lock.yaml` → gunakan PNPM
- ✅ Deteksi `yarn.lock` → gunakan Yarn
- ✅ Default → gunakan NPM

### 2. Install Dependency

Membagikan "bansos" (paket) ke dalam folder `node_modules`.
```bash
# Install semua dependencies
gib install

# Install package spesifik
gib install axios
gib install react react-dom

# Shorthand
gib i express
```

**Compatibility:**
- Bun: otomatis menggunakan `bun add`
- NPM/PNPM/Yarn: menggunakan `install`

### 3. Jalankan Command Langsung

Bisa juga langsung passing command ke package manager.
```bash
# Langsung ke package manager
gib --version
gib init
gib audit
```

### 4. [DANGER] Protokol Fufufafa 🕵️‍♂️

Fitur pembersihan jejak digital untuk situasi darurat.

**PERINGATAN:** Perintah ini akan **MENGHAPUS PERMANEN** semua file dan folder di direktori saat ini (kecuali `node_modules` & `index.js`). Gunakan dengan sangat hati-hati!
```bash
gib fufufafa
```

**Konfirmasi diperlukan:** Anda harus mengetik `FUFUFAFA` (huruf besar semua) untuk eksekusi.

**Yang akan dihapus:**
- ❌ Semua file (.js, .json, .md, dll)
- ❌ Semua folder (src, dist, public, dll)
- ✅ Dikecualikan: `node_modules` dan `index.js`

**Proses:**
1. Sistem akan meminta konfirmasi
2. Ketik `FUFUFAFA` untuk melanjutkan
3. Penghapusan dilakukan bertahap dengan delay
4. Log setiap file yang dihapus
5. Selesai dengan konfirmasi keamanan

## 🆚 Kenapa Gib Run?

| Fitur | Gib Run (Official) | Gib.Run (Sebelah) |
|-------|-------------------|-------------------|
| Fungsi Utama | Task Runner (Sesuai Namanya) | Database/Redis (Gak Nyambung) |
| Install | `npm i -g gib-run` | Gak ada di NPM |
| Logika | Tegak Lurus | Bengkok |
| Auto-Detect PM | ✅ | ❌ |
| Cross-Platform | ✅ | ❓ |

## 📋 Daftar Lengkap Command

| Command | Fungsi | Contoh |
|---------|--------|--------|
| `gib run <script>` | Menjalankan npm script | `gib run dev` |
| `gib install [pkg]` | Install dependencies | `gib install axios` |
| `gib i [pkg]` | Shorthand untuk install | `gib i react` |
| `gib fufufafa` | ⚠️ Hapus semua file | `gib fufufafa` |
| `gib <command>` | Pass-through ke PM | `gib --version` |

## 🔧 Fitur Teknis

- **Auto Package Manager Detection** - Deteksi otomatis lockfile
- **Cross-Platform Support** - Windows, macOS, Linux
- **Stdio Inheritance** - Output langsung ke terminal
- **Error Handling** - Exit code yang proper
- **Interactive Prompt** - Konfirmasi untuk operasi berbahaya
- **Delayed Execution** - Animasi penghapusan bertahap

## 🎯 Use Case

**Development Workflow:**
```bash
cd my-project
gib install          # Install dependencies
gib run dev          # Start development server
```

**Production Build:**
```bash
gib run build        # Build untuk production
gib run start        # Jalankan production server
```

**Emergency Cleanup (HATI-HATI!):**
```bash
gib fufufafa         # Bersihkan semua file
```

## ⚠️ Disclaimer

Tools ini dibuat untuk tujuan edukasi dan sedikit satire terhadap penamaan library di komunitas. Penulis tidak bertanggung jawab atas kehilangan data akibat penyalahgunaan fitur `fufufafa`.

**PENTING:** 
- Selalu backup data penting sebelum menggunakan `fufufafa`
- Fitur ini adalah satire dan tidak direkomendasikan untuk production
- Gunakan dengan bijak dan tanggung jawab sendiri

## 📜 License

MIT License - Silakan digunakan, dimodifikasi, dan disebarkan dengan bebas.

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

---

**Ingat:** Run itu untuk **EKSEKUSI**, bukan untuk **STORAGE**. 🏃‍♂️💨