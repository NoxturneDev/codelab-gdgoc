# Desain Fisik: Dari Skema ke SQL

Setelah Desain Logis selesai, kita memiliki **Skema Relasional** (daftar tabel, kolom, dan aturan Primary/Foreign Key). Tahap selanjutnya adalah **Desain Fisik**.

Jika Desain Logis adalah "Cetak Biru Arsitek", maka Desain Fisik adalah "Konstruksi Bangunan". Di tahap ini, kita menerjemahkan skema di atas kertas menjadi kode yang dimengerti oleh mesin database (DBMS), yaitu **SQL (Structured Query Language)**.

## 1\. Tiga Transformasi Utama

Dalam Desain Fisik, kita harus membuat keputusan spesifik yang tidak kita pikirkan saat di tahap Logis. Ada tiga area utama yang harus didefinisikan:

### A. Presisi Tipe Data (Data Types)

Di tahap Logis kita hanya menulis "Angka" atau "Teks". Di tahap Fisik, kita harus hemat memori dan presisi.

* **Teks:**
  * Gunakan `CHAR(n)` jika panjang teks selalu tetap (contoh: Kode Pos, Kode Negara).
  * Gunakan `VARCHAR(n)` jika panjang teks bervariasi (contoh: Nama, Email).
  * Gunakan `TEXT` jika teks sangat panjang (contoh: Deskripsi Produk, Isi Artikel).
* **Angka:**
  * Gunakan `INT` atau `BIGINT` untuk hitungan bulat (ID, Jumlah Barang).
  * Gunakan `DECIMAL(M,D)` untuk uang atau presisi tinggi. Hindari `FLOAT` untuk data keuangan karena masalah pembulatan.
* **Waktu:**
  * `DATE` (Hanya tanggal).
  * `DATETIME` atau `TIMESTAMP` (Tanggal dan Jam).

### B. Batasan Data (Constraints)

Kita harus menerjemahkan aturan bisnis menjadi kode pembatas untuk menjaga kebersihan data.

* **PRIMARY KEY:** Menandai kolom identitas. Biasanya dipadukan dengan `AUTO_INCREMENT`.
* **NOT NULL:** Kolom wajib diisi, tidak boleh kosong.
* **UNIQUE:** Data di kolom ini tidak boleh ada yang kembar (misal: Email atau Username).
* **DEFAULT:** Nilai otomatis jika user tidak mengisinya (misal: `stok` default 0).

### C. Hubungan Antar Tabel (Foreign Keys)

Ini adalah perekat antar tabel. Kita mendefinisikan aturan **Referential Integrity**: Apa yang terjadi pada data anak jika data induk dihapus?

* `ON DELETE CASCADE`: Induk dihapus, anak ikut terhapus otomatis.
* `ON DELETE RESTRICT`: Induk tidak boleh dihapus selama masih punya anak.
* `ON DELETE SET NULL`: Induk dihapus, kolom anak menjadi NULL.

-----

## 2\. Implementasi: Studi Kasus Perpustakaan

Mari kita terapkan teori di atas untuk mengubah Skema Logis Perpustakaan menjadi kode SQL siap pakai.

**Input (Skema Logis):**

1. `ANGGOTA(id, nama, email, tgl_daftar)`
2. `BUKU(id, judul, stok)`
3. `PEMINJAMAN(id, anggota_id, buku_id, tgl_pinjam)`

**Output (Desain Fisik - Raw SQL):**

### Langkah 1: Buat Tabel Master (Independen)

Selalu buat tabel yang tidak memiliki Foreign Key terlebih dahulu.

```sql
-- Tabel Anggota
CREATE TABLE anggota (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identitas unik otomatis
    nama VARCHAR(100) NOT NULL,        -- Nama wajib isi, max 100 huruf
    email VARCHAR(100) NOT NULL UNIQUE,-- Email wajib unik
    tgl_daftar TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Otomatis catat waktu
);

-- Tabel Buku
CREATE TABLE buku (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    stok INT DEFAULT 0 CHECK (stok >= 0) -- Stok default 0 & tidak boleh minus
);
```

### Langkah 2: Buat Tabel Transaksi (Dependen)

Setelah tabel induk (`anggota` dan `buku`) ada, barulah kita bisa membuat tabel yang mereferensikan mereka.

```sql
-- Tabel Peminjaman (Junction Table)
CREATE TABLE peminjaman (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- 1. Siapkan kolom penampung (Tipe data HARUS SAMA dengan induk)
    anggota_id INT NOT NULL,
    buku_id INT NOT NULL,
    
    -- 2. Data transaksi
    tgl_pinjam DATE NOT NULL,
    tgl_kembali DATE NULL, -- Boleh NULL (artinya belum dikembalikan)
    
    -- 3. Definisi Foreign Key
    CONSTRAINT fk_pinjam_anggota 
        FOREIGN KEY (anggota_id) REFERENCES anggota(id) 
        ON DELETE CASCADE, -- Jika member dihapus, riwayat pinjam hilang
        
    CONSTRAINT fk_pinjam_buku 
        FOREIGN KEY (buku_id) REFERENCES buku(id) 
        ON DELETE RESTRICT -- Buku tidak bisa dihapus jika sedang dipinjam
);
```

-----

## 3\. Ringkasan Alur Kerja

Dalam membangun database, urutan eksekusi Desain Fisik adalah:

1. **Analisis Tabel Master:** Identifikasi tabel yang berdiri sendiri (User, Produk, Kategori). Buat tabel ini duluan.
2. **Tentukan Tipe Data:** Pilih tipe data yang paling efisien untuk setiap kolom.
3. **Analisis Relasi:** Identifikasi tabel yang membutuhkan data dari tabel lain (Transaksi, Order).
4. **Pasang Foreign Key:** Buat tabel relasi dan ikat menggunakan sintaks `FOREIGN KEY`.
5. **Validasi:** Pastikan script SQL berjalan tanpa error dari atas ke bawah.
