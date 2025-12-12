# Step 5: Konfigurasi Environment Variable (.env)

Vite memiliki cara khusus untuk menyimpan rahasia atau konfigurasi, yaitu menggunakan file **Environment Variable**.

### 1\. Buat File `.env`

Di dalam VS Code (atau file explorer), lihatlah struktur folder proyek Anda.

1. Cari file bernama `.env.example`.
2. **Salin (Copy)** file tersebut dan **Tempel (Paste)** di folder yang sama.
3. **Ubah nama (Rename)** file hasil salinan tersebut menjadi `.env` saja (tanpa embel-embel `.example`).

> **Cara Cepat (Terminal):**
> Jika Anda menggunakan terminal (Mac/Linux/Git Bash), cukup ketik:
> `cp .env.example .env`

### Jika Tidak ada .env.example

1. Buat file bernama `.env` di folder project.
2. tambahkan di dalam file .env VITE_GEMINI_API_KEY={isi dengan API key dari google ai studio}

### 2\. Masukkan API Key

Buka file `.env` yang baru saja Anda buat. Anda akan melihat baris kode seperti ini:

```properties
VITE_GEMINI_API_KEY=
```

Tempelkan (Paste) API Key yang Anda salin dari Google AI Studio tepat setelah tanda sama dengan (`=`).

**Contoh hasil akhir:**
*(Pastikan tidak ada spasi di sebelum atau sesudah tanda sama dengan)*

```properties
VITE_GEMINI_API_KEY=AIzaSyDxxxxxxxxx_xxxxxxxxxxxxxxxxx
```

### 3\. Restart Server (WAJIB\!)

Setiap kali kita mengubah atau membuat file `.env`, Vite **tidak akan sadar** secara otomatis. Kita harus mematikan dan menyalakan ulang servernya.

1. Buka Terminal tempat `npm run dev` sedang berjalan.
2. Tekan **Ctrl + C** di keyboard untuk mematikan server.
3. Ketik dan jalankan ulang:

    ```bash
    npm run dev
    ```

### 🔍 Penjelasan Singkat

Kenapa nama variabelnya diawali dengan `VITE_`?
Vite hanya akan mengizinkan aplikasi React (Browser) membaca variabel yang depannya `VITE_`. Jika Anda menamainya `GEMINI_API_KEY` saja, Vite akan menyembunyikannya demi keamanan. Karena kita membuat aplikasi Client-Side, kita wajib mengeksposnya dengan prefix `VITE_`.

**Next Step:**
Konfigurasi selesai\! Semua persiapan sudah matang. Di **Step 6**, kita akan mulai masuk ke file `App.jsx` untuk mulai merakit logika otak AI-nya.
