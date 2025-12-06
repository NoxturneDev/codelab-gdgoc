# 3\. Filtering, Sorting, and Aggregation

Di tahap ini, kita akan belajar cara "mengatur" data yang kita ambil. Jika `SELECT *` adalah seperti menumpahkan seluruh isi gudang ke lantai, maka materi kali ini adalah tentang cara **menyaring** (hanya barang tertentu), **mengurutkan** (dari yang termahal), dan **menghitung** (berapa total barangnya).

Tetap gunakan **database studi kasus** Anda (Notes, E-Commerce, atau Hospital) yang sudah diisi data dummy sebelumnya.

### A. Filtering dengan `WHERE`

Klausa `WHERE` digunakan untuk menyaring data. Hanya baris yang memenuhi syarat yang akan ditampilkan.

**Sintaks Dasar:**

```sql
SELECT * FROM [nama_tabel] WHERE [kondisi];
```

**Operator Penting:**

* `=` : Sama persis (Exact match).
* `>` atau `<` : Lebih besar atau lebih kecil (untuk Angka/Tanggal).
* `LIKE` : Mencari pola teks (biasanya digabung dengan `%`).

#### 👉 Contoh Penerapan (Sesuaikan dengan Kasus Anda)

**Kasus A (Notes App): Mencari catatan milik User ID 1**

```sql
SELECT * FROM notes WHERE user_id = 1;
```

**Kasus B (E-Commerce): Mencari barang yang harganya di atas 1 Juta**

```sql
SELECT * FROM products WHERE harga > 1000000;
```

**Kasus C (Hospital): Mencari Dokter Spesialis 'Umum'**

```sql
SELECT * FROM doctors WHERE spesialisasi = 'Umum';
```

-----

### B. Sorting dengan `ORDER BY`

Database tidak menjamin data akan keluar berurutan. Gunakan `ORDER BY` untuk mengurutkannya.

* `ASC` (Ascending): Kecil ke Besar / A ke Z (Default).
* `DESC` (Descending): Besar ke Kecil / Z ke A / Terbaru ke Terlama.

#### 👉 Contoh Penerapan

**Kasus A (Notes App): Urutkan user berdasarkan nama (A-Z)**

```sql
SELECT * FROM users ORDER BY username ASC;
```

**Kasus B (E-Commerce): Tampilkan produk dari yang Termahal**

```sql
SELECT * FROM products ORDER BY harga DESC;
```

**Kasus C (Hospital): Urutkan pasien dari yang paling baru mendaftar**
*(Asumsi ada kolom ID atau created\_at)*

```sql
SELECT * FROM patients ORDER BY id DESC;
```

-----

### C. Aggregation (Fungsi Matematika)

SQL bisa melakukan perhitungan matematika dasar langsung pada data.

* `COUNT(...)`: Menghitung jumlah baris data.
* `SUM(...)`: Menjumlahkan total nilai angka.
* `AVG(...)`: Menghitung rata-rata.
* `MIN(...)` / `MAX(...)`: Mencari nilai terendah/tertinggi.

#### 👉 Contoh Penerapan

**Kasus A (Notes App): Berapa total user yang terdaftar?**

```sql
SELECT COUNT(*) AS total_user FROM users;
```

**Kasus B (E-Commerce): Berapa rata-rata harga barang di toko?**

```sql
SELECT AVG(harga) AS rata_rata_harga FROM products;
```

*Atau: Berapa total stok semua barang?*

```sql
SELECT SUM(stok) AS total_aset_stok FROM products;
```

**Kasus C (Hospital): Siapa pasien dengan ID paling akhir (terbaru)?**

```sql
SELECT MAX(id) FROM patients;
```

-----

### D. Kombinasi Logika (`AND` / `OR`)

Anda bisa menggabungkan beberapa filter sekaligus.

**Contoh (Kasus B):**
"Cari barang yang harganya di atas 1 juta **DAN** stoknya kurang dari 10."

```sql
SELECT * FROM products 
WHERE harga > 1000000 AND stok < 10;
```

-----

### 📝 Latihan Mandiri (Hands-On)

Sekarang, buka terminal/database client Anda. Jalankan query berikut sesuai studi kasus Anda:

#### Jika Anda Opsi A (Notes/To-Do)

1. **Filter:** Tampilkan catatan yang judulnya mengandung kata "Belajar" (Gunakan `LIKE '%Belajar%'`).
2. **Sort:** Tampilkan semua user diurutkan dari Z ke A.
3. **Aggregate:** Hitung ada berapa total catatan (`COUNT`) di dalam tabel `notes`.

#### Jika Anda Opsi B (E-Commerce)

1. **Filter:** Tampilkan produk yang stoknya habis atau nol (`stok = 0`). *Jika tidak ada, coba stok \< 10*.
2. **Sort:** Tampilkan produk termurah (`harga ASC`).
3. **Aggregate:** Hitung berapa total uang jika semua barang laku terjual (`SUM(harga * stok)`). *Ini query agak advanced, coba saja\!*

#### Jika Anda Opsi C (Hospital/Course)

1. **Filter:** Tampilkan dokter yang namanya bukan 'Dr. Tirta' (`nama != 'Dr. Tirta'`).
2. **Sort:** Urutkan pasien berdasarkan nama.
3. **Aggregate:** Cari tahu berapa ID dokter yang paling kecil (`MIN`).

Jika semua query berhasil dijalankan tanpa error, selamat\! Anda sudah menguasai dasar manipulasi data. Kita akan masuk ke **Final Exercise (Step 4)** di pesan berikutnya.
