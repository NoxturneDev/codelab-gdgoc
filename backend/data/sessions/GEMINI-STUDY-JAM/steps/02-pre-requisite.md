-----

# Step 2: Persiapan Lingkungan (Prerequisites)

Sebelum kita mulai coding, kita harus menyiapkan fondasinya. Kita membutuhkan dua software utama: **Node.js** (sebagai mesin) dan **Git** (sebagai pengelola versi kode).

### 1\. Install Node.js (Wajib)

React dan Vite berjalan di atas Node.js. Tanpa ini, kita tidak bisa melakukan instalasi *library* apapun.

**Cara Cek Apakah Sudah Terinstall:**
Buka terminal Anda (Command Prompt di Windows atau Terminal di Mac/Linux), lalu ketik:

```bash
node -v
```

  * **Jika muncul angka (misal: `v18.17.0` atau `v20.x.x`):** Bagus\! Anda sudah siap. Pastikan versinya minimal **v18** ke atas agar kompatibel dengan Vite terbaru.
  * **Jika muncul error (command not found):** Anda perlu menginstallnya.

**Cara Install:**

1.  Kunjungi situs resmi: [nodejs.org](https://nodejs.org/).
2.  Download versi **LTS (Long Term Support)**. Versi ini paling stabil dan disarankan untuk pemula.
3.  Install seperti biasa (Next \> Next \> Finish).
4.  Tutup terminal lama, buka terminal baru, dan cek lagi dengan `node -v`.

> **Catatan:** Node.js di sini hanya berfungsi sebagai *Build Tool* (alat tukang) untuk menyusun kode React kita. Aplikasi finalnya nanti tetap berjalan di Browser.

-----

### 2\. Install Git (Disarankan)

Git berguna jika Anda ingin menyimpan kode Anda ke GitHub atau jika kita perlu mengambil *template* awal.

**Cara Cek Apakah Sudah Terinstall:**
Ketik perintah ini di terminal:

```bash
git --version
```

  * **Jika muncul angka versi:** Aman, lanjut ke tahap berikutnya.
  * **Jika error:** Silakan install.

**Cara Install:**

1.  **Windows:** Download di [git-scm.com](https://git-scm.com/download/win). Gunakan setting default saat instalasi.
2.  **Mac:** Biasanya sudah terinstall. Jika belum, download di [git-scm.com/download/mac](https://git-scm.com/download/mac).
3.  **Linux:** Gunakan package manager (`sudo apt install git` atau sejenisnya).

-----

### ✅ Checklist Akhir

Sebelum lanjut ke Step 3, pastikan checklist ini sudah terpenuhi:

  * [ ] Terminal menampilkan versi Node.js (misal `v20.x.x`).
  * [ ] Terminal menampilkan versi npm (`npm -v` biasanya otomatis terinstall bersama Node).
  * [ ] Terminal menampilkan versi Git.

**Next Step:**
Kita akan masuk ke bagian seru: **Step 3: Inisialisasi Project dengan Vite**. Kita akan men-generate folder proyek React dalam hitungan detik\!
