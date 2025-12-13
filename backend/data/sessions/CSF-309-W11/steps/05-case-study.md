Di tahap ini, kita akan menggunakan semua ilmu yang sudah dipelajari (ACID, Transaksi, Indexing) untuk membedah arsitektur sistem yang sangat menantang: **Flash Sale E-Commerce**.

-----

# 5\. Case Study

Mari kita berdiskusi. Bayangkan Anda adalah Lead Backend Engineer di sebuah E-Commerce besar (seperti Tokopedia atau Shopee). Hari ini adalah tanggal cantik 12.12, dan perusahaan akan mengadakan **Flash Sale iPhone 15 seharga Rp 1.000**.

**Data Awal:**

* **Stok Barang:** Cuma 10 unit.
* **User yang antre:** 1.000.000 orang.
* **Waktu:** Semua orang klik tombol "Beli" di detik yang sama (pukul 12:00:00).

Mari kita lihat bagaimana SQL menyelamatkan hidup Anda.

### Kasus A: Mimpi Buruk "Overselling" (Stok Minus)

Tanpa penerapan **ACID (Isolation & Atomicity)** yang benar, inilah yang terjadi:

1. User A membaca stok: "Masih 10".
2. User B membaca stok: "Masih 10" (karena User A belum selesai bayar).
3. User C sampai User Z (100 orang) juga membaca "Masih 10".
4. Semua 100 orang berhasil checkout.
5. **Hasil:** Stok menjadi **-90**. Anda harus mengirim 100 iPhone padahal cuma punya 10. Perusahaan rugi bandar.

**Solusi SQL:**
Kita menggunakan **Transaction** dengan teknik penguncian baris (*Row Locking*).

```sql
START TRANSACTION;

-- 1. Kunci baris stok ini agar user lain harus ANTRI (WAIT)
SELECT stock FROM products WHERE id = 1 FOR UPDATE;

-- 2. Cek Logika Aplikasi
-- (Jika stock > 0, lanjut. Jika 0, ROLLBACK/Tolak).

-- 3. Kurangi Stok
UPDATE products SET stock = stock - 1 WHERE id = 1;

-- 4. Buat Order
INSERT INTO orders (user_id, product_id) VALUES (123, 1);

COMMIT;
```

* **Efeknya:** Database akan memaksa 1 juta user itu untuk antre satu per satu secara mikro-detik. User ke-11 otomatis akan ditolak karena stok sudah 0 saat giliran dia tiba.

-----

### Kasus B: Pencarian yang Lambat (Timeout)

Di halaman utama, User melakukan filter pencarian: *"Cari HP Samsung, RAM 8GB, Lokasi Jakarta, Harga \< 5 Juta"*.

Tanpa **Indexing**, database melakukan scan ke 50 juta produk.

* **Hasil:** Loading berputar 30 detik $\rightarrow$ User bosan $\rightarrow$ Tutup aplikasi.

**Solusi SQL:**
Kita menerapkan **Composite Index** (Index Majemuk). Kita tidak meng-index satu kolom saja, tapi kombinasi kolom yang sering dipakai filter bersamaan.

```sql
-- Membuat jalan tol khusus untuk pencarian HP
CREATE INDEX idx_search_hp ON products(brand, ram, city, price);
```

* **Efeknya:** Database tidak perlu mengecek semua barang. Dia langsung lompat ke folder "Samsung" $\rightarrow$ sub-folder "RAM 8GB" $\rightarrow$ sub-folder "Jakarta". Hasil keluar dalam 0.05 detik.

-----

### 💡 Diskusi: Kapan JANGAN pakai Index?

Dalam diskusi ini, penting untuk diingat bahwa Index bukan solusi segalanya.

**Pertanyaan:** "Kenapa kita tidak pasang Index di kolom `status_pembayaran` (Sudah Bayar / Belum Bayar)?"

**Jawaban:**
Karena variasi datanya sedikit (Low Cardinality). Isinya cuma 2 kemungkinan: 'Sudah' atau 'Belum'.

* Jika Index dipakai di sini, database tidak mendapat keuntungan banyak (sama saja seperti membagi buku telepon jadi 2 bab besar). Index justru membebani saat ada ribuan transaksi pembayaran masuk per detik.

-----

**Next Step:**
Kita sudah melihat bagaimana teori diterapkan di medan perang sesungguhnya. Sekarang mari kita tutup sesi ini dengan **Step 6: Wrap-up & Key Takeaways** untuk merangkum poin-poin penting agar tidak lupa.
