# 1\. Review & Masalah Dunia Nyata (The Real World Problem)

Selamat datang di materi SQL Lanjutan\!

Di modul sebelumnya, Anda sudah jago melakukan **CRUD** (Create, Read, Update, Delete). Anda bisa memasukkan data (`INSERT`), mengubah harga barang (`UPDATE`), atau menghapus user (`DELETE`).

Tapi, di dunia nyata (Enterprise App), perintah SQL jarang berjalan sendirian. Mereka biasanya berjalan **berkelompok**. Dan di sinilah masalah dimulai.

### A. Skenario: Transfer Uang

Mari kita gunakan contoh paling klasik: **Transfer Bank**.

Bayangkan **Budi** ingin mentransfer **Rp 500.000** kepada **Ani**.
Secara logika SQL, ini membutuhkan **DUA** langkah terpisah:

1. **Potong saldo Budi:**

    ```sql
    UPDATE accounts SET balance = balance - 500000 WHERE name = 'Budi';
    ```

2. **Tambah saldo Ani:**

    ```sql
    UPDATE accounts SET balance = balance + 500000 WHERE name = 'Ani';
    ```

### B. "The Disaster" (Bencana)

Komputer itu benda fisik. Listrik bisa mati, server bisa *crash*, atau koneksi internet bisa putus tiba-tiba.

**Apa yang terjadi jika Server Mati TEPAT SETELAH Langkah 1 selesai, tapi SEBELUM Langkah 2 dijalankan?**

Mari kita lihat dampaknya:

1. Saldo Budi sudah berkurang Rp 500.000. (Sukses ✅)
2. **DUARR\! Server Crash\!** ⚡
3. Perintah tambah saldo Ani **GAGAL** dijalankan. ❌
4. **Hasil Akhir:** Uang Budi hilang, Ani tidak terima apa-apa. Uangnya menguap ke udara.

Dalam istilah database, ini disebut **Data Inconsistency** (Ketidakkonsistenan Data). Database Anda sekarang "rusak" atau tidak valid secara logika bisnis.

### C. Masalah Kedua: Rebutan Tiket (Concurrency) 🎫

Contoh lain adalah saat *War Tiket Konser*.

1. Stok tiket tinggal **1**.
2. **User A** melihat stok masih 1.
3. **User B** juga melihat stok masih 1 (di detik yang sama).
4. User A klik "Beli" $\rightarrow$ Database kurangi stok jadi 0.
5. User B klik "Beli" $\rightarrow$ Database kurangi stok jadi -1.

Stok tiket menjadi **-1**? Ini tidak masuk akal. Ini terjadi karena database melayani banyak orang sekaligus tanpa antrean yang rapi.

### D. Solusinya?

Kita membutuhkan sebuah mekanisme "Pengaman". Kita butuh aturan yang berkata:

> *"Lakukan **SEMUA** perintah ini sampai selesai. Tapi jika ada **SATU SAJA** yang gagal di tengah jalan, batalkan semuanya\! Balikkan kondisi seolah-olah tidak pernah terjadi apa-apa."*

Konsep ini disebut **TRANSACTION** (Transaksi).
Dan itulah yang akan kita pelajari hari ini: Bagaimana membuat database kita aman, konsisten, dan anti-korupsi data menggunakan prinsip **ACID**.

-----

**Next Step:**
Kita akan masuk ke teori utama: **Step 2: Understanding Transactions & ACID**. Apa itu ACID dan mengapa itu adalah "mantra suci" bagi Backend Engineer?
