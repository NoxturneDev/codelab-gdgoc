---

# Step 4: Google AI Studio Setup

Ikuti langkah-langkah di bawah ini untuk mendapatkan API Key gratis Anda.

### 1. Login ke Google AI Studio

Buka browser dan kunjungi alamat berikut: **[aistudio.google.com](https://aistudio.google.com/)**

Pastikan Anda login menggunakan akun Google (Gmail) Anda. Jika ini pertama kali Anda masuk, Anda mungkin diminta menyetujui *Terms of Service*.

### 2. Masuk ke Menu "Get API Key"

Setelah masuk ke halaman utama (tampilan *prompt*), perhatikan menu di sebelah kiri atas.
Klik tombol atau ikon berlabel **Get API key**.

### 3. Klik "Create API Key"

Di halaman manajemen kunci, cari tombol biru bertuliskan **Create API key**.

### 4. Pilih "Create API key in new project"

Akan muncul *pop-up* (jendela kecil). Google membutuhkan "wadah" (Project) untuk kunci ini.

* Pilih opsi **Create API key in new project**.
* Ini akan membuatkan proyek Google Cloud baru secara otomatis untuk Anda.

### 5. Salin API Key (Copy)

Tunggu beberapa detik hingga proses selesai. Setelah berhasil, Anda akan melihat deretan kode acak yang panjang (dimulai dengan `AIza...`).

* Klik tombol **Copy** di sebelah kode tersebut.
* **PENTING:** Simpan kode ini di Notepad atau catatan sementara di laptop Anda. Jangan sampai hilang, karena kita akan langsung memakainya di langkah berikutnya.

> **⚠️ Peringatan Keamanan:**
> Jangan pernah membagikan screenshot API Key Anda ke media sosial atau grup chat umum. Kunci ini terhubung dengan kuota akun Google Anda.

**Next Step:**
Sekarang kunci sudah di tangan. Di **Step 5**, kita akan memasukkan kunci ini ke dalam variabel lingkungan (*Environment Variable*) di project React agar aplikasi bisa menggunakannya dengan aman.
