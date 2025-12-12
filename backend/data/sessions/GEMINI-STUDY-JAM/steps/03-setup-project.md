# Step 3: Inisialisasi Project

Di langkah ini, kita akan mengunduh kerangka proyek ke komputer Anda dan menyalakan mesinnya.

### 1\. Clone Repository (Unduh Template)

Buka terminal (Command Prompt/Terminal) di folder di mana Anda ingin menyimpan proyek ini. Lalu jalankan perintah berikut:

```bash
git clone https://github.com/NoxturneDev/chatbot-ui.git
```

  * **Apa yang terjadi?** Git akan mengunduh seluruh folder proyek dari GitHub ke komputer Anda.

### 2\. Masuk ke Folder Project

Sekarang, masuklah ke dalam folder yang baru saja diunduh:

```bash
cd chatbot-ui
```

> **Penting:** Jangan lewatkan langkah ini\! Jika Anda tidak masuk ke folder (`cd`), perintah selanjutnya akan error karena terminal tidak menemukan file proyeknya.

### 3\. Install Dependencies (Pasang Komponen)

Ibarat merakit mainan, kita butuh baut dan murnya. Di dunia Node.js, ini disebut *dependencies* (paket pendukung seperti React dan Vite). Jalankan perintah:

```bash
npm install
```

  * **Apa yang terjadi?** NPM akan membaca file `package.json` dan mengunduh semua library yang dibutuhkan ke dalam folder `node_modules`. Proses ini mungkin memakan waktu 1-3 menit tergantung internet Anda.

### 4\. Jalankan Aplikasi (Run\!)

Setelah instalasi selesai, mari kita nyalakan server lokal kita:

```bash
npm run dev
```

Jika berhasil, terminal Anda akan menampilkan teks seperti:
`  ➜  Local:   http://localhost:5173/ `

### ✅ Cek Hasilnya

1.  Tahan tombol `Ctrl` (atau `Cmd` di Mac) lalu klik link `http://localhost:5173/` yang ada di terminal, atau buka browser dan ketik alamat tersebut manual.
2.  Anda seharusnya melihat tampilan aplikasi Chatbot sederhana (masih kosong/statis).

**Next Step:**
Aplikasi sudah jalan, tapi belum pintar. Di **Step 4**, kita akan memasukkan **API Key** yang sudah Anda siapkan agar aplikasi ini bisa terhubung ke otak Google Gemini.
