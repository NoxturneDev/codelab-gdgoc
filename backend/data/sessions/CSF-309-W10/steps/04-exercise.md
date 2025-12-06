# 4\. Final Challenge: The Data Analyst Report

Ini adalah "Ujian Akhir" untuk modul SQL Query Operations. Kita akan menggabungkan kemampuan **Select**, **Filter**, **Sort**, dan **Aggregate** untuk memecahkan masalah bisnis nyata.

Selamat\! Anda telah dipromosikan menjadi **Junior Data Analyst**.

Manajer Anda baru saja datang ke meja Anda. Dia membutuhkan beberapa laporan penting dari database aplikasi yang sedang kita bangun. Dia tidak peduli bagaimana caranya, dia hanya ingin datanya.

Tugas Anda adalah menulis **Query SQL** untuk menjawab permintaan manajer tersebut.

-----

### 📂 Pilih Misi Anda

Silakan kerjakan tantangan di bawah ini sesuai dengan **Studi Kasus** yang Anda pilih sejak awal.

#### 🟠 Opsi A: Aplikasi Catatan (Notes App)

Manajer Produk ingin tahu perilaku pengguna aplikasi.

1. **Misi 1 (Filtering):** Tampilkan semua catatan yang dibuat oleh `user_id = 1` (Budi).
2. **Misi 2 (Sorting):** Tampilkan daftar semua `users`, tapi urutkan username-nya secara terbalik (Z ke A) untuk mengecek duplikasi nama.
3. **Misi 3 (Aggregation):** Kita perlu tahu seberapa aktif aplikasi ini. Hitung total jumlah catatan (`COUNT`) yang ada di tabel `notes`.
4. **Misi 4 (Complex):** Cari catatan yang judulnya mengandung kata "Belajar" **DAN** dibuat oleh `user_id = 1`.

#### 🔵 Opsi B: E-Commerce / Toko

Manajer Gudang sedang panik mengecek inventaris.

1. **Misi 1 (Filtering):** Tampilkan produk yang stoknya menipis (misal: `stok < 10` atau `stok <= 5`).
2. **Misi 2 (Sorting):** Tampilkan semua produk, urutkan dari yang **termahal** ke termurah.
3. **Misi 3 (Aggregation):** Manajer Keuangan bertanya, "Berapa rata-rata harga produk (`AVG`) di toko kita saat ini?".
4. **Misi 4 (Complex):** Cari produk yang harganya di atas 1.000.000 **DAN** stoknya masih tersedia (`> 0`).

#### 🟢 Opsi C: Rumah Sakit / Kursus

Kepala Administrasi membutuhkan data harian.

1. **Misi 1 (Filtering):** (RS) Tampilkan dokter spesialis "Umum". / (Kursus) Tampilkan murid bernama "Dedi".
2. **Misi 2 (Sorting):** Tampilkan daftar pasien/murid diurutkan berdasarkan nama (A-Z).
3. **Misi 3 (Aggregation):** Hitung berapa total dokter/mentor (`COUNT`) yang kita miliki saat ini.
4. **Misi 4 (Complex):** Cari data dengan ID spesifik (misal `id > 1`) **DAN** nama/keluhannya bukan "Sakit Kepala".

-----

### 📝 Area Kerja (Terminal SQL)

Salin template di bawah ini ke editor teks Anda, lalu isi bagian `...` dengan query SQL jawaban Anda.

```sql
-- JAWABAN FINAL EXERCISE
-- Studi Kasus: [Tulis Pilihan Anda: A/B/C]

-- 1. Misi Filtering
... ;

-- 2. Misi Sorting
... ;

-- 3. Misi Aggregation
... ;

-- 4. Misi Complex (AND/OR)
... ;
```

-----

**Selamat\!** 🎉
Anda telah menyelesaikan modul **SQL Query Operations**.
Sekarang Anda sudah bisa:

1. Membuat database dari nol (Modul sebelumnya).
2. Mengisi data dummy (`INSERT`).
3. Mengambil data (`SELECT`), menyaring (`WHERE`), dan mengurutkannya (`ORDER BY`).

Skill ini adalah fondasi 80% pekerjaan Backend Engineer sehari-hari. Selanjutnya, kita akan belajar tentang **SQL Joins** (Menghubungkan antar tabel).
