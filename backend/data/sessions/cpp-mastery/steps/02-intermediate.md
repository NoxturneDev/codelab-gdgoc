# Step 2: Intermediate Logic & Data Structures

### Topik 1: Arrays (Larik)Fokus: Menyimpan banyak data dalam satu variabel dan mengaksesnya menggunakan index

**Soal 1.1 (Level: Menengah-Mudah)**
Buatlah program "Pencari Nilai Maksimum & Minimum".

* Program meminta user menginput jumlah data `N`.
* User memasukkan angka sebanyak `N` kali ke dalam sebuah Array.
* Program melakukan iterasi (looping) pada array tersebut untuk mencari:

1. Angka terbesar.
2. Angka terkecil.

* Output: Tampilkan angka terbesar dan terkecil yang ditemukan.

**Soal 1.2 (Level: Menengah-Sulit)**
Buatlah program "Pemisah Ganjil Genap".

* Program meminta user menginput 10 angka bulat ke dalam Array utama.
* Program memisahkan angka-angka tersebut ke dalam dua Array berbeda:

1. Array A: Menampung khusus angka Genap.
2. Array B: Menampung khusus angka Ganjil.

* Output: Tampilkan isi Array A dan Array B secara terpisah.
* *Tantangan:* Jangan hanya mencetak langsung, tapi simpan dulu ke array baru sebelum ditampilkan.

---

### Topik 2: String ManipulationFokus: Mengakses karakter dalam teks, ASCII, dan logika perbandingan karakter

**Soal 2.1 (Level: Menengah-Mudah)**
Buatlah program "Penghitung Vokal".

* Program meminta input satu kata atau kalimat (String).
* Program menghitung berapa jumlah huruf vokal (a, i, u, e, o) di dalamnya.
* Abaikan huruf besar/kecil (Case Insensitive), artinya 'A' dan 'a' dianggap sama.
* Output: Jumlah huruf vokal.

**Soal 2.2 (Level: Menengah-Sulit)**
Buatlah program "Pendeteksi Palindrom".

* Palindrom adalah kata yang jika dibaca dari depan maupun belakang bunyinya sama (Contoh: "KATAK", "LEVEL", "MALAM").
* Program meminta input satu kata.
* Program mengecek apakah kata tersebut Palindrom atau bukan.
* *Hint:* Bandingkan karakter pertama dengan terakhir, kedua dengan kedua terakhir, dst.

---

### Topik 3: Functions (Fungsi)Fokus: Memecah kode menjadi blok-blok kecil (modular), penggunaan parameter, dan return value

**Soal 3.1 (Level: Menengah-Mudah)**
Buatlah program "Kalkulator Bangun Datar".

* Buatlah 3 fungsi terpisah:

1. `hitungLuasPersegi(sisi)`
2. `hitungLuasPersegiPanjang(panjang, lebar)`
3. `hitungLuasSegitiga(alas, tinggi)`

* Di menu utama (`main`), user memilih mau menghitung apa.
* Panggil fungsi yang sesuai berdasarkan pilihan user dan tampilkan hasilnya.

**Soal 3.2 (Level: Menengah-Sulit)**
Buatlah program "Pengecekan Bilangan Prima".

* Buatlah sebuah fungsi bernama `apakahPrima(int n)` yang mengembalikan nilai `true` (jika prima) atau `false` (jika bukan).
* Bilangan prima adalah bilangan yang hanya habis dibagi 1 dan dirinya sendiri.
* Di menu utama (`main`), minta user memasukkan sebuah angka, lalu panggil fungsi tersebut untuk menentukan statusnya.
* *Contoh:* Input 7 -> Output "Prima". Input 10 -> Output "Bukan Prima".

---

**Instruksi Tambahan:**

1. Gunakan Array statis (misal `int data[100]`) jika belum menguasai `vector`.
2. Perhatikan batasan input (validasi sederhana).
3. Cobalah untuk tidak menggunakan library bantuan instan (seperti `reverse()` bawaan) agar logika Anda terlatih.
