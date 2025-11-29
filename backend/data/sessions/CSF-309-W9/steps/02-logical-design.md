# Desain Logis: Menerjemahkan Konsep ke Struktur

**Desain Logis** adalah fase di mana kita mengubah ide abstrak (ERD) menjadi cetak biru struktur data yang konkret.

Fokus utama tahap ini bukan lagi pada "bagaimana dunia nyata bekerja", melainkan **"bagaimana data akan disimpan secara efisien"**. Hasil akhirnya adalah **Skema Relasional**.

### 1\. Karakteristik Utama Desain Logis

Desain Logis memiliki sifat unik yang membedakannya dari tahap lain:

* **Independen dari Platform (DBMS Agnostic):**
    Kita mendefinisikan struktur tanpa mempedulikan apakah nanti akan menggunakan MySQL, PostgreSQL, atau SQL Server. Kita menggunakan istilah umum seperti *Integer* atau *Text*, bukan tipe data spesifik vendor (seperti `VARCHAR2` milik Oracle).
* **Berbasis Tabel (Table-Driven):**
    Kita tidak lagi berbicara tentang "Entitas", tapi tentang **Tabel**. Atribut menjadi **Kolom**, dan instans menjadi **Baris (Rows)**.

### 2\. Elemen Inti Skema Relasional

Dalam Desain Logis, kita menuliskan struktur database menggunakan notasi teks standar. Ini adalah "bahasa pemrograman" sebelum Anda menyentuh SQL.

Format Standar:
`NAMATABEL(NamaKolom1, NamaKolom2, ...)`

Ada dua komponen vital yang harus didefinisikan secara eksplisit di tahap ini:

* **Primary Key (PK):**
    Di ERD, kita mungkin hanya memberi tanda bintang. Di Desain Logis, kita **mewajibkan** keberadaan satu kolom (atau kombinasi kolom) yang menjamin keunikan setiap baris.
* **Foreign Key (FK):**
    Ini adalah perekat antar tabel. Di ERD, hubungan digambarkan dengan garis. Di Desain Logis, hubungan **diwujudkan** dengan menyimpan nilai PK tabel lain ke dalam tabel ini.

### 3\. Batasan Integritas (Integrity Constraints)

Desain Logis harus menentukan aturan main agar data tetap valid. Ini hal yang sering terlewat di ERD:

* **Nullability:** Apakah kolom ini *boleh kosong* (NULL) atau *wajib isi* (NOT NULL)?
* **Uniqueness:** Selain PK, adakah kolom lain yang tidak boleh kembar? (Contoh: `Email` user harus unik).
* **Domain Constraints:** Aturan nilai. (Contoh: `Nilai_Ujian` harus antara 0-100).

### 4\. Normalisasi

Ini adalah jantung dari Desain Logis. Proses ini memastikan tabel Anda efisien dan bebas dari anomali (kesalahan saat update/hapus data).

* **Tujuan:** Memastikan setiap kolom bergantung sepenuhnya pada Primary Key.
* **Aktivitas:** Memecah satu tabel besar menjadi beberapa tabel kecil untuk menghilangkan duplikasi data.

-----

### Perbandingan Visual: Konseptual vs Logis

Untuk melihat perbedaannya dengan jelas:

**A. Desain Konseptual (ERD - Bisnis)**

> *"Satu Mahasiswa mengambil Mata Kuliah."*
> (Hanya kotak dan garis. Tidak peduli bagaimana cara simpannya.)

**B. Desain Logis (Skema - Teknis)**

> *"Kita butuh 3 tabel. Tabel ketiga adalah tabel penghubung untuk menampung nilai dari dua tabel lainnya."*

[Image of logical data model diagram vs conceptual]

**Contoh Penulisan Skema Logis:**

```text
MAHASISWA(NIM, Nama_Lengkap, Tanggal_Lahir)
MATAKULIAH(Kode_MK, Nama_MK, SKS)
KRS(ID_KRS, NIM (FK), Kode_MK (FK), Nilai_Huruf)
```

**Analisis Logis:**

1. Kita menciptakan tabel baru (`KRS`) yang tidak selalu terlihat eksplisit di konsep awal.
2. Kita menetapkan `NIM` dan `Kode_MK` sebagai *Foreign Key* di tabel `KRS`.
3. Kita menentukan bahwa `Nilai_Huruf` disimpan di tabel `KRS`, bukan di `MAHASISWA`.

-----

**Langkah Selanjutnya:**
Setelah Desain Logis ini matang dan tervalidasi (sudah dinormalisasi), barulah kita masuk ke **Desain Fisik**, di mana kita menulis `CREATE TABLE` dan memilih tipe data spesifik (misal: `TINYINT` vs `INT`).
