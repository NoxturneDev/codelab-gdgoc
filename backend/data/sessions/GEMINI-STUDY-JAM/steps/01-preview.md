# Project Preview & Architecture

Selamat datang di langkah pertama! Sebelum kita mulai menulis kode, sangat penting untuk memahami **apa** yang akan kita bangun dan **bagaimana** alur datanya bekerja.

### 1. Apa yang akan kita bangun?

Kita akan membuat **Gemini React Chat**. Ini adalah aplikasi *Single Page Application* (SPA) sederhana yang mirip dengan ChatGPT atau WhatsApp.

**Fitur Utama:**

* **Chat Interface:** Tampilan percakapan yang bersih dengan gelembung pesan (Kanan untuk User, Kiri untuk AI).
* **Real-time AI:** Terhubung langsung ke Google Gemini untuk menjawab pertanyaan Anda.
* **Responsive:** Input area yang nyaman dan indikator "Thinking..." saat AI sedang berpikir.

### 2. Arsitektur: Client-Side Only (Serverless)

Biasanya, aplikasi yang aman akan memiliki server di tengah (Backend) untuk menyimpan rahasia. Namun, untuk *prototyping* cepat di workshop ini, kita menggunakan pendekatan **Pure Frontend**.

Artinya: **Browser Anda akan berbicara langsung dengan Google Server.**

**Alur Kerja Aplikasi (The Flow):**

1. User mengetik pesan di Browser (React App).
2. Aplikasi mengirim pesan tersebut langsung ke **Google Gemini API**.
3. Google memproses dan mengembalikan jawaban.
4. React menampilkan jawaban tersebut di layar.

Kita tidak perlu menginstall database, tidak perlu menyewa server, dan tidak perlu coding backend (Node.js/Python). Cukup React dan Vite!

### 3. Tech Stack (Alat Perang Kita)

Kita memilih alat-alat ini agar pengembangan menjadi sangat cepat dan ringan:

* **⚡ Vite:** *Build tool* pengganti Create-React-App. Jauh lebih cepat dan ringan. Kita menggunakan Vite untuk menjalankan server lokal.
* **⚛️ React:** *Library* JavaScript untuk membangun antarmuka pengguna (UI). Kita akan menggunakan *Hooks* (`useState`) untuk mengelola pesan.
* **🧠 Google Generative AI SDK:** Paket resmi dari Google (`@google/generative-ai`) yang memungkinkan website kita "berbicara" dengan model Gemini.
* **🎨 Standard CSS:** Kita tidak menggunakan *framework* berat seperti Tailwind atau Bootstrap agar kita bisa fokus pada logika React, bukan menghafal nama kelas CSS.

### 4. ⚠️ Disclaimer Keamanan Penting

Karena arsitektur kita adalah *Client-Side Only*, ada satu hal penting yang harus dipahami:

> **Peringatan:** Dalam arsitektur ini, **API Key** Anda akan terekspos di tab "Network" pada browser pengguna.
>
> * **Gunakan hanya untuk:** Belajar (Localhost), Hackathon, atau Demo pribadi.
> * **JANGAN PERNAH:** Menggunakan arsitektur ini untuk aplikasi *production* (publik) karena orang lain bisa mencuri kuota API Key Anda.

### 5. Prasyarat (Checklist)

Pastikan Anda sudah memiliki hal berikut sebelum lanjut ke Step 2:

1. **Node.js (LTS Version):** Sudah terinstall di laptop.
2. **Code Editor:** VS Code (Disarankan).
3. **Google AI Studio API Key:** Anda sudah harus memiliki API Key dari [aistudio.google.com](https://aistudio.google.com/).

---

**Apa langkah selanjutnya?**
Setelah ini kita akan mencoba installasi NodeJS dan Git (Jika anda sudah install keduanya, silahkan lanjut ke Step 3)
