# 2. Understanding Transactions & ACID

Dalam dunia database, **Transaction** (Transaksi) bukan berarti jual-beli.
**Transaksi** adalah sekumpulan perintah SQL (1, 2, atau 100 perintah) yang diperlakukan sebagai **SATU KESATUAN KERJA TUNGGAL**.

Filosofinya sederhana: **"Semua sukses, atau tidak sama sekali."** (*All or Nothing*).

### A. Konsep "All or Nothing"
Kembali ke kasus Transfer Bank Budi ke Ani:
1.  Potong Saldo Budi.
2.  Tambah Saldo Ani.

Jika kita membungkus dua perintah ini dalam sebuah **Transaction**:
* Jika Langkah 1 sukses dan Langkah 2 sukses $\rightarrow$ Transaksi disimpan permanen (**COMMIT**).
* Jika Langkah 1 sukses tapi Langkah 2 gagal (server mati) $\rightarrow$ Transaksi dibatalkan total. Saldo Budi dikembalikan seperti semula otomatis (**ROLLBACK**).

### B. Mantra Suci: A.C.I.D.
Agar sebuah database bisa disebut aman (Enterprise Grade), transaksi di dalamnya harus memenuhi 4 standar emas yang disingkat **ACID**.



Mari kita bedah satu per satu:

#### 1. A - Atomicity (Atomisitas)
Berasal dari kata "Atom" (bagian terkecil yang tidak bisa dibagi lagi).
* **Aturan:** Transaksi tidak bisa dibagi. Anda tidak bisa hanya menjalankan "setengah" transaksi.
* **Contoh:** Kalau Beli Tiket terdiri dari (Bayar + Kurangi Stok), maka tidak boleh terjadi "Bayar sukses tapi Stok tidak berkurang".

#### 2. C - Consistency (Konsistensi)
Database harus bergerak dari satu status valid ke status valid lainnya.
* **Aturan:** Transaksi tidak boleh melanggar aturan/hukum yang ada di database (seperti Tipe Data, Constraints, Foreign Key).
* **Contoh:** Jika kolom `stok` diset `UNSIGNED` (tidak boleh minus), dan transaksi menyebabkan stok jadi `-1`, maka seluruh transaksi **dibatalkan**. Database menjaga dirinya agar tetap "masuk akal".

#### 3. I - Isolation (Isolasi)
Setiap transaksi harus "merasa" seolah-olah dia sendirian di database, meskipun sebenarnya ada ribuan user lain yang sedang akses bersamaan.
* **Aturan:** Transaksi yang belum selesai (belum Commit) tidak boleh diintip oleh transaksi lain.
* **Contoh:** Saat Budi sedang proses transfer (Langkah 1 selesai, Langkah 2 belum), jika Admin mengecek saldo Budi, Admin harus melihat saldo LAMA, bukan saldo yang sudah terpotong setengah jalan.



#### 4. D - Durability (Ketahanan)
Sekali transaksi dinyatakan "SUKSES" (Committed), maka perubahannya harus permanen.
* **Aturan:** Data tidak boleh hilang meskipun sedetik setelah sukses, gedung server terbakar atau listrik mati total.
* **Contoh:** Saat layar ATM bilang "Transfer Berhasil", itu artinya data sudah tertulis di Hard Disk/SSD server, bukan cuma di memori sementara (RAM).

---

### C. Analogi Kehidupan Nyata: Membeli Kopi
Bayangkan Anda membeli kopi di kafe:

1.  **Atomicity:** Anda bayar uang, Barista kasih kopi. Harus terjadi keduanya. Kalau kopi habis, uang Anda dikembalikan (Rollback). Tidak boleh uang diambil tapi kopi tidak ada.
2.  **Consistency:** Uang Anda tidak boleh uang mainan (harus valid). Kopi tidak boleh minus.
3.  **Isolation:** Saat Anda sedang membayar di kasir, pelanggan di belakang Anda tidak bisa menyerobot dan ikut membayar tagihan Anda. Kasir melayani satu sesi transaksi secara tertutup sampai selesai.
4.  **Durability:** Setelah struk keluar, transaksi itu tercatat dalam pembukuan kafe selamanya. Meski kasirnya lupa ingatan besoknya, catatan transaksinya tetap ada.

---

**Next Step:**
Teorinya sudah cukup. Sekarang saatnya kita mencoba jurus ini secara langsung di Terminal/Database Client. Kita akan masuk ke **Step 3: SQL Transaction Demo**, di mana kita akan belajar perintah sakti: `START TRANSACTION`, `COMMIT`, dan `ROLLBACK`.
