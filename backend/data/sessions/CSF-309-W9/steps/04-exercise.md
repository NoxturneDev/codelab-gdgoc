# Exercise (Latihan)

Ini adalah **Tahap Latihan (Exercise)**.

Di bagian ini, kita tidak akan membahas teori baru. Kita akan mensimulasikan pekerjaan nyata seorang Database Designer. Kita akan mulai dari mengubah skema logis di atas kertas menjadi kode SQL yang bisa dieksekusi.

Berikut adalah **Contoh Pengerjaan Lengkap** agar Anda memahami ekspektasi tugasnya, diikuti dengan **Pilihan Studi Kasus** untuk Anda kerjakan.

-----

# 🎓 Contoh Demo: Sistem Tiket Konser

Mari kita bedah alur pengerjaan untuk sebuah sistem penjualan tiket konser sederhana.

**Skenario:**
Kita memiliki data **Pengunjung** (Attendees) dan **Konser** (Concerts). Satu pengunjung bisa membeli tiket untuk banyak konser, dan satu konser dihadiri banyak pengunjung.

### Langkah 1: Desain Logis (Skema Relasional)

*Disini kita mendefinisikan struktur tabel dan letak Foreign Key.*

1. **ATTENDEES** (id, nama, email, no\_hp)
2. **CONCERTS** (id, nama\_konser, tanggal, lokasi, harga\_tiket)
3. **TICKETS** (id, attendee\_id (FK), concert\_id (FK), tanggal\_beli, status\_bayar)
      * *Catatan: Tabel TICKETS adalah tabel perantara (Junction) untuk menangani relasi Many-to-Many.*

### Langkah 2: Desain Fisik (Raw SQL Query)

*Disini kita menulis kode untuk menciptakan database.*

```sql
-- 1. Buat Tabel Master (Pengunjung)
CREATE TABLE attendees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE, -- Email tidak boleh sama
    no_hp VARCHAR(20)
);

-- 2. Buat Tabel Master (Konser)
CREATE TABLE concerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_konser VARCHAR(150) NOT NULL,
    tanggal DATETIME NOT NULL,
    lokasi VARCHAR(100) NOT NULL,
    harga_tiket DECIMAL(10, 2) NOT NULL -- Pakai DECIMAL untuk uang
);

-- 3. Buat Tabel Transaksi (Tiket)
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Kolom Penampung FK
    attendee_id INT NOT NULL,
    concert_id INT NOT NULL,
    
    -- Kolom Data Tambahan
    tanggal_beli TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status_bayar VARCHAR(20) DEFAULT 'Lunas',
    
    -- Definisi Relasi
    CONSTRAINT fk_ticket_attendee 
        FOREIGN KEY (attendee_id) REFERENCES attendees(id) 
        ON DELETE CASCADE, -- Hapus user = tiket hangus
        
    CONSTRAINT fk_ticket_concert 
        FOREIGN KEY (concert_id) REFERENCES concerts(id) 
        ON DELETE RESTRICT -- Jangan hapus konser jika tiket sudah terjual
);
```

-----

# 🚀 Giliran Anda: Pilih Misi\

Sekarang, silakan pilih **SATU** studi kasus di bawah ini untuk Anda kerjakan. Ikuti format "Langkah 1" dan "Langkah 2" seperti contoh di atas.

### Opsi A: Aplikasi Catatan (Notes App) - *Level: Mudah*

*Fokus: Relasi One-to-Many (1:N).*

* **Skenario:** Sebuah aplikasi di mana **User** bisa membuat banyak **Note** (Catatan). Setiap catatan memiliki judul dan isi.
* **Petunjuk:** Anda hanya butuh 2 tabel. Foreign Key diletakkan di sisi "Banyak" (Note).

### Opsi B: E-Commerce Sederhana - *Level: Menengah*

*Fokus: Relasi Many-to-Many (M:N).*

* **Skenario:** Sistem toko online. Ada **Customer** dan ada **Product**. Customer melakukan **Order**. Satu Order bisa berisi 1 jenis Product saja (untuk penyederhanaan kasus ini, anggap 1 transaksi = beli 1 barang).
* **Petunjuk:** Anda butuh 3 tabel: Customer, Product, dan Order. Tabel Order akan punya **dua** Foreign Key.

### Opsi C: Sistem Rumah Sakit - *Level: Menantang*

*Fokus: Struktur data majemuk.*

* **Skenario:** Ada **Pasien** dan **Dokter**. Mereka bertemu dalam sebuah **Janji Temu (Appointment)**. Dalam janji temu, perlu dicatat tanggal, jam, dan diagnosa dokter.
* **Petunjuk:** Tabel Appointment berfungsi sebagai penghubung antara Pasien dan Dokter.

-----

### Format Jawaban Anda

Silakan balas pesan ini dengan format berikut agar saya bisa mengoreksi query SQL Anda:

1. **Studi Kasus:** (Misal: Opsi C - Rumah Sakit)
2. **Langkah 1 (Logis):**
      * Tabel A (...)
      * Tabel B (...)
3. **Langkah 2 (Fisik / SQL):**
      * *(Paste kode SQL CREATE TABLE Anda di sini)*

Gunakan platform apapun sesuai dengan kenyaman anda.
Atau bisa juga gunakan sqliteonline.com lalu jangan lupa dokumentasikan pekerjaan anda untuk nantinya dikumpulkan.

**Silakan pilih kasus Anda\!**
