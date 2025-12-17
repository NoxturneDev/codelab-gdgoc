# Step 3: Algorithms & Problem Solving

### Topik 1: Sorting (Pengurutan)Fokus: Mengimplementasikan algoritma pengurutan data dari angka acak menjadi terurut

**Soal 1.1 (Level: Menengah)**
Buatlah program "Leaderboard Game" menggunakan **Bubble Sort**.

* Program meminta user menginput jumlah pemain `N`.
* User menginput skor sebanyak `N` kali ke dalam Array.
* Tugas Anda: Urutkan skor tersebut dari yang **Terbesar ke Terkecil** (Descending).
* Logika Bubble Sort: Bandingkan dua angka bersebelahan. Jika angka kiri lebih kecil dari angka kanan, tukar posisinya. Ulangi terus sampai tidak ada yang perlu ditukar.
* Output: Tampilkan daftar skor yang sudah urut.

**Soal 1.2 (Level: Sulit)**
Buatlah program "Pencari Nilai Median".

* Program meminta input sekumpulan angka ganjil (misal 5 angka atau 9 angka).
* Simpan angka-angka tersebut ke Array.
* Untuk mencari Median (nilai tengah), data **wajib** diurutkan terlebih dahulu. Gunakan algoritma sorting apa saja (Bubble Sort atau Selection Sort).
* Setelah urut, ambil nilai yang berada tepat di tengah Array.
* *Contoh:* Input `[9, 2, 5, 1, 7]`. Setelah sort `[1, 2, 5, 7, 9]`. Median adalah `5`.

---

### Topik 2: Searching (Pencarian)Fokus: Menemukan data tertentu di dalam tumpukan data

**Soal 2.1 (Level: Menengah)**
Buatlah program "Inventory Check" menggunakan **Linear Search**.

* Siapkan sebuah Array berisi 10 kode barang (hardcode saja, misal: `101`, `202`, `305`, dst) dalam posisi acak.
* Minta user menginput satu kode barang yang ingin dicari.
* Lakukan looping dari index ke-0 sampai terakhir. Cek satu per satu.
* Jika ketemu, cetak: "Barang ditemukan pada index ke-[X]".
* Jika sampai akhir looping tidak ketemu, cetak: "Barang tidak ditemukan".

**Soal 2.2 (Level: Sulit)**
Buatlah program "Perpustakaan Digital" menggunakan **Binary Search**.

* Siapkan sebuah Array berisi ID Buku yang **sudah terurut** dari kecil ke besar (misal: `10, 20, 30, 40, 50, 60, 70, 80, 90, 100`).
* Minta user input ID buku yang dicari.
* Gunakan metode Binary Search (Bagi Dua):

1. Cek nilai tengah array.
2. Jika nilai cari < nilai tengah, buang setengah kanan. Fokus ke setengah kiri.
3. Jika nilai cari > nilai tengah, buang setengah kiri. Fokus ke setengah kanan.
4. Ulangi sampai ketemu.

* Bandingkan performanya: Cetak berapa kali looping (iterasi) yang dibutuhkan untuk menemukan angka tersebut.

---

### Topik 3: Logic Challenge (Gabungan)Fokus: Menggabungkan konsep array, string, dan sorting untuk memecahkan masalah klasik

**Soal 3.1 (Level: Menengah)**
Buatlah program "Operasi Matriks".

* Buatlah dua buah Array 2 Dimensi (Matrix A dan Matrix B) berukuran 2x2.
* Minta user mengisi angka untuk Matrix A dan Matrix B.
* Lakukan **Penjumlahan Matriks** (Posisi [0][0] A ditambah [0][0] B, dst).
* Tampilkan hasil Matrix C (hasil penjumlahan).

**Soal 3.2 (Level: Sulit)**
Buatlah program "Detektif Anagram".

* Anagram adalah dua kata yang memiliki huruf penyusun yang sama persis tapi urutannya beda (Contoh: "KASUR" dan "RUSAK").
* Program meminta input **Kata 1** dan **Kata 2**.
* Tugas Anda: Tentukan apakah mereka Anagram atau bukan.
* *Algoritma:*

1. Pastikan panjang string sama.
2. Urutkan huruf pada Kata 1 (A-Z).
3. Urutkan huruf pada Kata 2 (A-Z).
4. Jika hasil sorting keduanya identik, maka mereka Anagram.
5. *Hint:* String sebenarnya adalah Array of Char. Anda bisa melakukan sorting pada string.

---

**Instruksi Tambahan:**

1. Untuk Binary Search, pastikan Anda memahami syarat utamanya: **Data harus terurut**. Jika data acak, Binary Search tidak bisa dipakai.
2. Pelajari konsep "Swapping" (tukar isi variabel) menggunakan variabel `temp` (temporary), karena ini inti dari algoritma Sorting.
