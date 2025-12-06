# 1\. Introduction to SQL Query Operations

Selamat datang di modul Operasi Query SQL\!

Minggu lalu, Anda berperan sebagai **Arsitek** yang merancang struktur tabel (Desain Fisik). Sekarang, Anda akan berganti peran menjadi **Pengguna** yang mengelola isi dari struktur tersebut.

Kita akan menggunakan **Database Studi Kasus** yang sudah Anda buat strukturnya di modul sebelumnya. Jangan buat database baru, kita akan pakai yang itu\!

### A. Konsep CRUD (Create, Read, Update, Delete)

Operasi database selalu berputar pada empat aktivitas utama ini:

  * **C**reate $\rightarrow$ `INSERT` (Memasukkan data baru)
  * **R**ead $\rightarrow$ `SELECT` (Mengambil data untuk dilihat)
  * **U**pdate $\rightarrow$ `UPDATE` (Mengubah data)
  * **D**elete $\rightarrow$ `DELETE` (Menghapus data)

Di modul ini, kita akan fokus mendalam pada **READ (SELECT)** karena ini adalah skill paling vital untuk analisis data.

### B. Persiapan Data (Data Seeding)

Agar perintah `SELECT` bisa bekerja, tabel Anda tidak boleh kosong. Karena tabel Anda saat ini masih kosong (baru dibuat strukturnya saja), mari kita isi dengan **Data Dummy**.

Silakan jalankan query `INSERT` di bawah ini sesuai dengan **Opsi Studi Kasus** yang Anda pilih minggu lalu:

#### 👉 Jika Anda Memilih Opsi A (Aplikasi Catatan / To-Do)

Kita perlu user dan catatannya.

```sql
-- 1. Masukkan User Dummy
INSERT INTO users (username, password) VALUES 
('budi_99', 'rahasia123'),
('siti_aminah', 'kucing123');

-- 2. Masukkan Task/Note Dummy
-- Pastikan user_id sesuai dengan id yang ada di tabel users
INSERT INTO notes (title, content, user_id) VALUES 
('Belajar SQL', 'Fokus materi SELECT hari ini', 1),
('Beli Telur', 'Jangan lupa beli 1kg telur', 1),
('Meeting Tim', 'Siapkan materi presentasi', 2);
```

#### 👉 Jika Anda Memilih Opsi B (E-Commerce / Toko)

Kita perlu produk dan pelanggan.

```sql
-- 1. Masukkan Produk Dummy
INSERT INTO products (nama_produk, harga, stok) VALUES 
('Laptop Gaming', 15000000, 5),
('Mouse Wireless', 150000, 50),
('Keyboard RGB', 500000, 20),
('Monitor 24 inch', 2000000, 10);

-- 2. Masukkan Customer Dummy
INSERT INTO customers (nama, email) VALUES 
('Andi Saputra', 'andi@mail.com'),
('Budi Santoso', 'budi@mail.com');
```

#### 👉 Jika Anda Memilih Opsi C (Rumah Sakit / Kursus)

Kita perlu entitas utama (Dokter/Guru) dan peserta (Pasien/Murid).

```sql
-- 1. Masukkan Dokter/Mentor Dummy
INSERT INTO doctors (nama, spesialisasi) VALUES 
('Dr. Boyke', 'Kandungan'),
('Dr. Tirta', 'Umum');

-- 2. Masukkan Pasien/Murid Dummy
INSERT INTO patients (nama, keluhan) VALUES 
('Rara', 'Sakit Kepala'),
('Dedi', 'Demam Tinggi');
```

*Setelah menjalankan query di atas, database Anda kini sudah memiliki "nyawa" dan siap untuk di-query\!*

