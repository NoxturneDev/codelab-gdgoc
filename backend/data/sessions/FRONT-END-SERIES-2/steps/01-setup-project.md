# Front-End Series #2: Setup Project React + Vite

## Persiapan Awal

Sebelum memulai, pastikan kamu sudah menginstall Node.js versi 20 atau yang lebih baru.

➡️ [Download Node.JS (>= 20.x)](https://nodejs.org/en/download)

## Langkah 1: Buat Project Baru

### 1.1 Buka VS Code dan Buat Folder Project

1. Buka VS Code
2. Klik menu **File** > **Open Folder** (atau tekan **CTRL+M lalu CTRL+O**)
3. Buat folder baru dengan nama **"frontend-series-2"**
4. Pilih folder tersebut

### 1.2 Buka Terminal

Klik menu **Terminal** > **New Terminal** (atau tekan **CTRL+SHIFT+`**)

## Langkah 2: Inisialisasi Project dengan Vite

Vite adalah build tool modern yang sangat cepat untuk project frontend. Kita akan menggunakannya untuk setup React.

➡️ [Dokumentasi React (Vite)](https://vite.dev/guide)

Jalankan command berikut di terminal:

```bash
npm create vite@latest .
```

### Konfigurasi Setup

Saat menjalankan command di atas, kamu akan diminta untuk memilih beberapa opsi:

1. **Install create-vite?** → Ketik **y** dan tekan Enter
2. **Select a framework** → Pilih **react**
3. **Select a variant** → Pilih **JavaScript** (biar ga teler dengan TypeScript dulu 😄)
4. **Use Rolldown?** → Pilih **No** (skip aja)
5. **Install and run?** → Pilih **No** (kita akan install manual)

## Langkah 3: Install Dependencies

Setelah project dibuat, install semua package yang dibutuhkan:

```bash
npm install
```

Command ini akan menginstall semua dependencies yang tercantum di `package.json`.

## Langkah 4: Test Run Development Server

Coba jalankan development server untuk memastikan semuanya berjalan dengan baik:

```bash
npm run dev
```

Jika berhasil, buka browser dan akses `http://localhost:5173`. Kamu akan melihat halaman default Vite + React.

Tekan **CTRL+C** di terminal untuk menghentikan server.

---

✅ **Project React berhasil dibuat!** Di langkah berikutnya, kita akan mengintegrasikan Tailwind CSS untuk styling yang lebih modern dan praktis.
