# 2\. Basic Data Retrieval with SELECT

Sekarang kita masuk ke inti materi. Perintah `SELECT` digunakan untuk **mengambil data** dari tabel yang sudah Anda isi tadi.

Bayangkan tabel Anda seperti file Excel. `SELECT` adalah cara kita menunjuk kolom mana dan baris mana yang mau ditampilkan.

### A. SELECT All (`*`)

Gunakan tanda bintang (`*`) jika Anda ingin melihat **seluruh isi tabel** (semua kolom, semua baris).

**Sintaks:**
`SELECT * FROM [nama_tabel_anda];`

**Latihan:**
Sesuaikan dengan studi kasus Anda:

* **Kasus A:** Coba lihat semua user. $\rightarrow$ `SELECT * FROM users;`
* **Kasus B:** Coba lihat semua produk. $\rightarrow$ `SELECT * FROM products;`
* **Kasus C:** Coba lihat semua dokter. $\rightarrow$ `SELECT * FROM doctors;`

### B. SELECT Specific Columns

Seringkali kita tidak butuh semua data (misal: kita butuh nama produknya saja, tidak butuh stok atau ID-nya). Mengambil kolom spesifik lebih hemat memori.

**Sintaks:**
`SELECT [kolom1], [kolom2] FROM [nama_tabel];`

**Latihan:**

* **Kasus A:** Tampilkan hanya judul catatan. $\rightarrow$ `SELECT title FROM notes;`
* **Kasus B:** Tampilkan nama produk dan harganya saja. $\rightarrow$ `SELECT nama_produk, harga FROM products;`
* **Kasus C:** Tampilkan nama pasien saja. $\rightarrow$ `SELECT nama FROM patients;`

### C. Menggunakan Alias (`AS`)

Kadang nama kolom di database Anda mungkin terdengar kaku (misal: `nama_produk` atau `created_at`). Anda bisa mengubah labelnya saat ditampilkan agar lebih mudah dibaca manusia.

**Contoh (Kasus B):**

```sql
SELECT 
    nama_produk AS Barang, 
    harga AS Harga_Jual 
FROM products;
```

*Output di layar akan tertulis "Barang" dan "Harga\_Jual", bukan nama kolom aslinya.*

### D. Membatasi Jumlah Baris (`LIMIT`)

Jika nanti data Anda sudah ada ribuan, menampilkan `SELECT *` bisa membuat komputer *hang*. Gunakan `LIMIT` untuk mengintip sebagian data saja.

**Contoh:**

```sql
-- Hanya tampilkan 2 data teratas
SELECT * FROM products LIMIT 2; 
-- (Ganti 'products' dengan nama tabel utama di studi kasus Anda)
```

-----

### 📝 Tantangan Mandiri (Hands-On)

Sekarang, buka terminal/database client Anda, dan lakukan hal berikut pada **database studi kasus Anda sendiri**:

1. Jalankan `SELECT *` pada tabel utama Anda untuk memastikan data dummy yang kita masukkan di Step 1 sudah masuk.
2. Lakukan `SELECT` spesifik:
      * Jika **Opsi A**: Tampilkan hanya kolom `username` dari tabel `users`.
      * Jika **Opsi B**: Tampilkan hanya kolom `nama_produk` dari tabel `products`.
      * Jika **Opsi C**: Tampilkan hanya kolom `spesialisasi` dari tabel `doctors`.
3. Gunakan `AS` untuk mengubah nama salah satu kolom menjadi bahasa yang lebih santai (misal: `username` menjadi `Nama_Pengguna`).

Jika sudah berhasil menampilkan data, berarti Anda siap lanjut ke **Step 3** (Filtering & Sorting)\!
