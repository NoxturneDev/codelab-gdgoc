# 3\. SQL Transaction Demo

Untuk mendemonstrasikan ini, kita membutuhkan tabel sederhana. Mari kita buat tabel `rekening` (accounts) mini.

### A. Persiapan Data (Setup)

Silakan jalankan perintah ini di terminal SQL Anda untuk menyiapkan skenario:

```sql
-- 1. Buat Tabel
CREATE TABLE accounts (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    balance DECIMAL(10, 2)
);

-- 2. Isi Saldo Awal
INSERT INTO accounts VALUES 
(1, 'Budi', 1000000),  -- Budi punya 1 Juta
(2, 'Ani', 0);         -- Ani saldo 0

-- Cek Data
SELECT * FROM accounts;
```

-----

### B. Perintah 1: ROLLBACK (Tombol Undo) ↩️

`ROLLBACK` adalah perintah penyelamat. Ia berfungsi untuk membatalkan semua perubahan yang terjadi sejak transaksi dimulai.

Bayangkan Anda (Admin) tidak sengaja menghapus uang Budi.

**Skenario Simulasi:**

1.  **Mulai Transaksi:** Beri tahu database kita mau mulai mode aman.
    ```sql
    START TRANSACTION; 
    -- Atau di beberapa database: BEGIN;
    ```
2.  **Lakukan Kesalahan:** Anda tidak sengaja membuat saldo Budi jadi Nol\!
    ```sql
    UPDATE accounts SET balance = 0 WHERE name = 'Budi';
    ```
3.  **Cek Data:** Kalau Anda `SELECT *`, saldo Budi terlihat 0. *Panik\!*
    ```sql
    SELECT * FROM accounts;
    ```
4.  **Batalkan (Undo):** Tenang, belum permanen.
    ```sql
    ROLLBACK;
    ```
5.  **Cek Lagi:**
    ```sql
    SELECT * FROM accounts;
    ```
    *Voila\!* Saldo Budi kembali menjadi 1.000.000. Seolah-olah update tadi tidak pernah terjadi.

-----

### C. Perintah 2: COMMIT (Tombol Save) 💾

`COMMIT` adalah kebalikan dari Rollback. Ia berfungsi untuk **menyimpan permanen** semua perubahan. Setelah di-commit, Anda tidak bisa lagi melakukan rollback.

**Skenario: Transfer Sukses (Budi ke Ani Rp 200rb)**

1.  **Mulai Transaksi:**
    ```sql
    START TRANSACTION;
    ```
2.  **Langkah 1: Potong Budi**
    ```sql
    UPDATE accounts SET balance = balance - 200000 WHERE name = 'Budi';
    ```
3.  **Langkah 2: Tambah Ani**
    ```sql
    UPDATE accounts SET balance = balance + 200000 WHERE name = 'Ani';
    ```
4.  **Cek Preview:**
    ```sql
    SELECT * FROM accounts;
    -- Budi: 800rb, Ani: 200rb. (Tapi ini belum permanen!)
    ```
5.  **Simpan Permanen:**
    ```sql
    COMMIT;
    ```
    *Sekarang, meskipun server meledak detik ini juga, data transfer sudah aman tersimpan di hard disk.*

-----

### D. Rangkuman Siklus Hidup Transaksi

| Perintah | Fungsi | Analogi Game |
| :--- | :--- | :--- |
| `START TRANSACTION` | Memulai sesi isolasi. | Masuk ke *Dungeon*. |
| *(SQL Queries)* | Melakukan perubahan data sementara. | Mengalahkan monster (dapat loot sementara). |
| `ROLLBACK` | Membatalkan semua perubahan. | Mati di dungeon, semua item hilang, respawn di awal. |
| `COMMIT` | Menyimpan perubahan secara permanen. | Menyelesaikan dungeon & *Auto Save*. |

-----

**Next Step:**
Setelah data kita aman (Integritas terjaga), masalah selanjutnya biasanya adalah **Kecepatan**. Bagaimana jika tabel `accounts` punya 100 juta nasabah? Mencari nama 'Budi' akan sangat lambat.

Kita akan masuk ke **Step 4: Indexing & Performance** untuk mempelajari cara membuat query `SELECT` ngebut seperti kilat.
