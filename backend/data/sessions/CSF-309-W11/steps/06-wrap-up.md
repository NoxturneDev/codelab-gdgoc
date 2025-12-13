Latihan ini dirancang untuk menyambung langsung dengan data dan tabel yang sudah Anda gunakan di modul sebelumnya. Kita akan mensimulasikan skenario "kritis" di mana data tidak boleh salah (ACID) dan akses data harus cepat (Indexing).

-----

# 4\. Final Mission: The ACID Test

Anda baru saja belajar bagaimana cara mengamankan data dengan **Transactions** dan mempercepatnya dengan **Indexing**.

Manajer IT Anda kembali lagi. Kali ini wajahnya serius.
*"Sistem kita mulai lambat, dan kemarin ada data yang selisih karena server sempat mati lampu saat proses simpan. Saya butuh kamu perbaiki backend-nya sekarang\!"*

Tugas Anda adalah menulis query untuk menangani **Integritas Data** (Transaksi) dan **Performa** (Index).

-----

### 📂 Pilih Misi Anda (Sesuaikan dengan Studi Kasus)

Silakan lanjutkan opsi (A, B, atau C) yang Anda pilih di minggu lalu.

#### 🟠 Opsi A: Aplikasi Catatan (Notes App)

**Skenario:** Fitur "Hapus Akun Permanen".
Jika user ingin menghapus akun, kita harus menghapus **SEMUA catatan** miliknya terlebih dahulu, baru menghapus **data user** tersebut. Jangan sampai catatannya hilang tapi usernya masih ada, atau sebaliknya.

1. **Misi 1 (Transaction):** Bungkus dua perintah ini dalam satu transaksi:
      * Hapus semua notes milik `user_id = 1`.
      * Hapus user dengan `id = 1`.
      * Lakukan `COMMIT` di akhir.
2. **Misi 2 (Indexing):** User sering mengeluh pencarian judul catatan sangat lambat. Buatlah **Index** pada kolom `title` di tabel `notes`.

#### 🔵 Opsi B: E-Commerce / Toko

**Skenario:** Fitur "Checkout Barang".
User membeli barang. Kita harus mengurangi stok barang DAN mencatat riwayat pesanan (Orders).

1. **Misi 1 (Transaction):** Bungkus dua perintah ini dalam satu transaksi:
      * Kurangi stok produk ID 1 sebesar 1 unit (`UPDATE`).
      * Buat data pesanan baru di tabel `orders` (Anggap `user_id = 1` membeli produk ID 1).
      * Lakukan `COMMIT` di akhir.
2. **Misi 2 (Indexing):** Tim marketing sering mencari produk berdasarkan kategori. Buatlah **Index** pada kolom `category` (atau kolom yang relevan) di tabel `products`.

#### 🟢 Opsi C: Rumah Sakit / Kursus

**Skenario:** Fitur "Pendaftaran Baru".
(RS): Pasien mendaftar rawat jalan. (Kursus): Siswa mendaftar kelas.

1. **Misi 1 (Transaction):** Bungkus dua perintah ini dalam satu transaksi:
      * (RS) Masukkan data pasien baru ke tabel `patients`. **ATAU** (Kursus) Masukkan siswa baru ke tabel `students`.
      * (RS) Masukkan data kunjungan ke tabel `appointments` (hubungkan dengan dokter ID 1). **ATAU** (Kursus) Masukkan data pendaftaran ke tabel `enrollments`.
      * Lakukan `COMMIT` di akhir.
2. **Misi 2 (Indexing):** (RS) Dokter sering dicari berdasarkan spesialisasi. (Kursus) Siswa sering dicari berdasarkan nama. Buatlah **Index** pada kolom tersebut (`spesialisasi` atau `nama`).

-----

### 📝 Area Kerja (Terminal SQL)

Salin template di bawah ini ke editor Anda dan lengkapi bagian `...`.

```sql
-- JAWABAN FINAL MISSION (TRANSACTION & INDEXING)
-- Studi Kasus: [Tulis Pilihan Anda: A/B/C]

-- ==========================================
-- 1. MISI TRANSAKSI (Data Integrity)
-- ==========================================

-- Mulai Transaksi
START TRANSACTION;

-- Langkah 1: [Tulis Query Pertama sesuai kasus]
... ;

-- Langkah 2: [Tulis Query Kedua sesuai kasus]
... ;

-- Simpan Permanen
COMMIT;


-- ==========================================
-- 2. MISI INDEXING (Performance)
-- ==========================================

-- Buat Index untuk mempercepat pencarian
CREATE INDEX ... ;
```

-----

### 💡 Bonus Challenge (Simulasi Bencana)

Setelah Anda menulis kode di atas, coba **ganti** baris `COMMIT;` menjadi `ROLLBACK;`.
Jalankan query-nya.

* Apakah datanya berubah?
* Seharusnya **TIDAK**. Itulah bukti bahwa transaksi Anda berhasil mengamankan data dari pembatalan\!

**Selamat\!** 🎓
Anda telah menyelesaikan modul **Advanced SQL**.
Anda kini memahami fondasi backend yang kuat: Struktur Data (Design), Manipulasi Data (Query), Keamanan Data (ACID), dan Kecepatan (Indexing).
