# Step 1: C++ Syntax Fundamentals

Pada tahap ini, Anda tidak perlu memikirkan algoritma yang rumit. Fokuslah pada penulisan sintaks yang benar (titik koma, kurung kurawal, dan deklarasi tipe data).

### Topik 1: Variables & Input/OutputFokus: Penggunaan `cin`, `cout`, dan tipe data dasar (`int`, `string`, `float`/`double`)

**Soal 1.1 (Level: Mudah)**
Buatlah program "Biodata Sederhana".

* Program meminta user menginput: **Nama** (teks) dan **Tahun Lahir** (angka).
* Program menghitung umur user (Asumsikan tahun saat ini adalah 2025).
* Output: Tampilkan kalimat "Halo [Nama], umur anda sekarang adalah [Umur] tahun."

**Soal 1.2 (Level: Menengah)**
Buatlah program "Konversi Suhu".

* Program meminta input suhu dalam satuan **Celcius**.
* Program mengonversi suhu tersebut ke **Fahrenheit** dan **Kelvin**.
* Rumus Fahrenheit: `(Celcius * 9/5) + 32`
* Rumus Kelvin: `Celcius + 273.15`
* Output: Tampilkan hasil konversi dengan jelas.

---

### Topik 2: Conditional Statement (If/Else)Fokus: Logika `if`, `else if`, `else`, dan operator perbandingan (`>`, `<`, `==`, `&&`)

**Soal 2.1 (Level: Mudah)**
Buatlah program "Ganjil Genap".

* Program meminta input satu angka bulat (`int`).
* Jika angka habis dibagi 2, tampilkan "Angka Genap".
* Jika tidak, tampilkan "Angka Ganjil".

**Soal 2.2 (Level: Menengah)**
Buatlah program "Sistem Grade Nilai".

* Program meminta input nilai ujian (0-100).
* Program menentukan Grade berdasarkan aturan berikut:
* Nilai 85 - 100: Grade A
* Nilai 70 - 84: Grade B
* Nilai 55 - 69: Grade C
* Nilai 40 - 54: Grade D
* Nilai < 40: Grade E

* Validasi: Jika user memasukkan angka di bawah 0 atau di atas 100, tampilkan "Input Tidak Valid".

---

### Topik 3: Looping (For/While)Fokus: Iterasi dan akumulasi nilai

**Soal 3.1 (Level: Mudah)**
Buatlah program "Countdown".

* Program meminta input satu angka positif `N`.
* Tampilkan hitungan mundur dari `N` sampai `1` menggunakan looping.
* Setelah angka 1, cetak teks "Selesai!".

**Soal 3.2 (Level: Menengah)**
Buatlah program "Tabel Perkalian".

* Program meminta input satu angka bulat positif `N`.
* Tampilkan tabel perkalian 1 sampai 10 untuk angka tersebut.
* Contoh jika input `5`:

```text
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

```

---

**Instruksi Pengerjaan:**

1. Buatlah satu file `.cpp` untuk setiap soal (Total 6 file).
2. Pastikan program dapat di-compile dan dijalankan tanpa error.
3. Gunakan komentar `//` untuk menjelaskan bagian kode yang menurut Anda penting.
