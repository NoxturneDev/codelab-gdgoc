Bayangkan jika tabel `users` Anda memiliki **10 Juta baris data**. Saat Anda mencari satu user bernama "Budi", database tanpa Index akan bekerja sangat lambat. Di sinilah **Indexing** menjadi pahlawan.

-----

# 4\. Indexing & Query Performance

### A. Masalah: Full Table Scan (Lambat) 🐢

Tanpa Index, ketika Anda menjalankan query:

```sql
SELECT * FROM users WHERE phone_number = '08123456789';
```

Database akan melakukan **Full Table Scan**.
Artinya: Database akan membaca baris ke-1, ke-2, ke-3... sampai baris ke-10 juta, satu per satu, untuk mencocokkan nomor HP tersebut. Ini sangat tidak efisien.

### B. Solusi: Database Index (Cepat) ⚡

**Index** di database bekerja persis seperti **Indeks di halaman belakang buku**.

Jika Anda mencari kata "Kemerdekaan" di buku Sejarah:

1. **Tanpa Indeks:** Anda membalik halaman satu per satu dari awal sampai akhir. (Lama).
2. **Dengan Indeks:** Anda buka halaman belakang, cari huruf "K", temukan "Kemerdekaan: Halaman 45", lalu langsung lompat ke halaman 45. (Cepat).

### C. Cara Membuat Index

Sintaksnya sangat mudah. Kita beri tahu database kolom mana yang sering dicari.

**Skenario:** Kita sering mencari user berdasarkan `phone_number`.

```sql
-- Membuat Index pada kolom phone_number di tabel users
CREATE INDEX idx_phone ON users(phone_number);
```

Setelah perintah ini dijalankan, database akan membuat struktur data khusus (biasanya **B-Tree**) di latar belakang yang mengurutkan nomor HP agar mudah dicari.

### D. Pembuktian: Perintah `EXPLAIN`

Bagaimana kita tahu Index-nya bekerja? Kita gunakan perintah `EXPLAIN` sebelum query `SELECT`.

**Sebelum Index:**

```sql
EXPLAIN SELECT * FROM users WHERE phone_number = '0812345678';
-- Output kolom 'rows': 1000000 (Database memeriksa 1 juta baris)
```

**Sesudah Index:**

```sql
EXPLAIN SELECT * FROM users WHERE phone_number = '0812345678';
-- Output kolom 'rows': 1 (Database langsung lompat ke 1 baris tujuan)
```

Perbedaannya bisa mengubah durasi query dari **5 detik** menjadi **0.001 detik**.

### E. Harga yang Harus Dibayar (Trade-off) ⚖️

Jika Index membuat pencarian cepat, kenapa tidak kita Index semua kolom saja?

Jawabannya: **Tidak Boleh.** Index memiliki "biaya":

1. **Storage:** Index memakan ruang hard disk tambahan (bisa cukup besar).
2. **Write Penalty (Perlambatan Tulis):**
      * Setiap kali Anda melakukan `INSERT`, `UPDATE`, atau `DELETE`, database harus bekerja dua kali: (1) Mengubah data tabel asli, dan (2) Mengubah struktur Index-nya.

> **Aturan Emas:**
>
> * Gunakan Index pada kolom yang sering dibaca/dicari (`WHERE`, `JOIN`, `ORDER BY`).
> * Jangan gunakan Index pada kolom yang jarang dicari atau pada tabel yang sangat sering di-update.

-----

**Next Step:**
Kita sudah belajar teori keamanan (ACID) dan kecepatan (Indexing). Sekarang saatnya kita duduk melingkar dan membahas **Step 5: Case Study Discussion**. Kita akan membedah arsitektur database aplikasi populer (seperti Twitter/X atau Tokopedia) menggunakan ilmu yang sudah kita pelajari.
