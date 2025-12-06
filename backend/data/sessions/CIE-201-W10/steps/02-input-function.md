# 2\. Mendapatkan Input Pengguna dengan `input()`

Di langkah sebelumnya, kita belajar cara *berbicara* (output). Sekarang, kita akan belajar cara *mendengar* (input).

Fungsi `input()` memungkinkan program Anda berhenti sejenak dan menunggu pengguna mengetik sesuatu di keyboard, lalu menekan tombol **Enter**.

### A. Sintaks Dasar

Cara kerjanya mirip dengan variabel, tapi nilainya datang dari pengguna, bukan dari kode Anda.

```python
nama = input()
print("Halo", nama)
```

Saat kode di atas dijalankan:

1. Program akan diam (menunggu).
2. Anda mengetik nama (misal: "Budi") dan tekan Enter.
3. Kata "Budi" disimpan ke dalam variabel `nama`.
4. Print akan mencetak: `Halo Budi`.

### B. Memberikan "Prompt" (Pertanyaan)

Agar pengguna tahu apa yang harus diketik, kita biasanya menyisipkan pesan teks di dalam tanda kurung `input()`. Pesan ini disebut **Prompt**.

```python
# Cara yang kurang efisien (menggunakan print terpisah)
print("Siapa nama Anda?")
nama = input()

# Cara yang BENAR dan efisien
nama = input("Siapa nama Anda? ")
```

> **Tips:** Tambahkan spasi di akhir teks prompt (sebelum tanda kutip penutup) agar kursor tidak menempel langsung dengan pertanyaan. Contoh: `"Nama: "` lebih baik daripada `"Nama:"`.

### C. Aturan Penting: Semuanya Adalah Teks (String)

Ini adalah konsep paling penting di fungsi `input()`.

Apapun yang diketik oleh pengguna, Python akan menganggapnya sebagai **String (Teks)**, meskipun pengguna mengetik angka.

```python
umur = input("Berapa umur Anda? ")
print(type(umur))

# Jika user mengetik angka 20
# Output: <class 'str'> (String)
```

**Kenapa ini masalah?**
Karena teks tidak bisa dijumlahkan secara matematika.

* `"10" + "10"` hasilnya adalah `"1010"` (penggabungan teks).
* Kita akan memecahkan masalah ini di **Step 3**.

-----

### D. Contoh Program Interaktif Sederhana

Mari kita buat program pendaftaran sederhana.

```python
print("=== Form Pendaftaran ===")

nama_depan = input("Nama Depan: ")
nama_belakang = input("Nama Belakang: ")
domisili = input("Kota tinggal: ")

print("--- Data Tersimpan ---")
print("Nama Lengkap:", nama_depan, nama_belakang)
print("Lokasi:", domisili)
```

-----

## 📝 Latihan (Exercise)

Salin kode di bawah ini dan lengkapi instruksinya.

**Tugas 1: Program Sapaan**
Buatlah program yang meminta warna kesukaan pengguna, lalu meresponsnya.

```python
warna = input("Apa warna kesukaanmu? ")

# Cetak: Wah, aku juga suka warna ...
print("Wah, aku juga suka warna", ...)
```

**Tugas 2: Investigasi Tipe Data**
Jalankan kode di bawah ini. Masukkan angka `10` ketika diminta. Perhatikan outputnya. Mengapa hasilnya bukan `20`?

```python
angka = input("Masukkan angka: ")

hasil = angka + angka
print("Hasil penjumlahan:", hasil)

# Jawab dalam komentar:
# Kenapa hasilnya 1010?
# Jawab: Karena input() menganggap angka 10 sebagai ...
```

**Tugas 3: Cerita Pendek (Mad Libs)**
Lengkapi program ini untuk membuat cerita lucu.

```python
benda = input("Sebutkan nama benda: ")
tempat = input("Sebutkan nama tempat: ")

# Cetak: Saya membawa [benda] ke [tempat]
print("Saya membawa", ..., "ke", ...)
```

-----

*Siap untuk belajar cara mengubah teks menjadi angka agar bisa dihitung? Lanjut ke Step 3\!*
