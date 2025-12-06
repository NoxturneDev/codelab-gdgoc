# 1\. Memahami Fungsi `print()`

Selamat datang di langkah pertama\! Dalam pemrograman, cara paling dasar bagi komputer untuk berkomunikasi dengan manusia adalah melalui teks di layar. Di Python, kita menggunakan fungsi bernama `print()`.

Fungsi ini bertugas untuk **menampilkan output** ke terminal atau konsol.

### A. Sintaks Dasar

Cara penggunaannya sangat sederhana: tulis `print`, buka kurung `(`, masukkan apa yang ingin ditampilkan, lalu tutup kurung `)`.

```python
# Menampilkan teks (String)
print("Halo, dunia!")

# Menampilkan angka (Integer/Float)
print(100)
print(3.14)
```

> **Penting:** Jika Anda ingin mencetak teks (huruf/kata), Anda **harus** mengapitnya dengan tanda kutip (`"` atau `'`). Jika Anda mencetak angka atau variabel, tanda kutip tidak diperlukan.

### B. Mencetak Variabel

Anda bisa menyimpan data dalam variabel dan meminta `print()` untuk menampilkannya.

```python
nama = "Andi"
skor = 95

print(nama)  # Output: Andi
print(skor)  # Output: 95
```

### C. Mencetak Banyak Item Sekaligus

Kekuatan `print()` adalah kemampuannya menerima banyak item sekaligus. Cukup pisahkan item-item tersebut dengan **tanda koma (`,`)**.

Secara otomatis, Python akan menyisipkan **spasi** di antara item-item tersebut.

```python
nama = "Budi"
umur = 20

# Menggabungkan teks dan variabel
print("Nama saya adalah", nama, "dan umur saya", umur)

# Output: Nama saya adalah Budi dan umur saya 20
```

### D. Parameter Khusus: `sep` dan `end`

Fungsi `print()` memiliki parameter rahasia yang berguna untuk mengatur format output.

#### 1\. `sep` (Separator)

Secara default, tanda koma memberikan spasi. Anda bisa mengubahnya dengan `sep`.

```python
# Menggunakan pemisah strip (-)
print("0812", "3456", "7890", sep="-")
# Output: 0812-3456-7890

# Tanpa pemisah sama sekali
print("Python", "Itu", "Mudah", sep="")
# Output: PythonItuMudah
```

#### 2\. `end` (End Character)

Secara default, setelah `print()` selesai, ia akan membuat baris baru (Enter). Anda bisa mengubahnya agar print berikutnya tetap di baris yang sama.

```python
print("Halo", end=" ")
print("Dunia")

# Output: Halo Dunia
# (Keduanya muncul dalam satu baris karena end=" " mengganti Enter dengan spasi)
```

-----

### E. Kesalahan Umum (Error)

Hati-hati dengan hal berikut:

1. **Case Sensitive:** Python membedakan huruf besar/kecil. `Print()` akan error, harus `print()`.
2. **Tanda Kutip:** `print(Halo)` akan error karena Python mengira *Halo* adalah nama variabel. Gunakan `print("Halo")`.

-----

## 📝 Latihan (Exercise)

Salin kode di bawah ini ke editor Python Anda, dan lengkapi bagian yang kosong atau kerjakan tantangannya.

**Tugas 1: Perkenalan Diri**
Buatlah variabel `hobi` dan isi dengan hobi Anda. Lalu cetak kalimat lengkap.

```python
nama = "Alex"
hobi = "..." # Isi dengan hobi Anda

# Gunakan koma untuk mencetak: Halo nama saya Alex dan hobi saya ...
print(...)
```

**Tugas 2: Format Tanggal**
Gunakan parameter `sep` untuk mencetak tanggal dengan format `Hari/Bulan/Tahun`.

```python
hari = 17
bulan = 8
tahun = 1945

# Ubah code di bawah agar outputnya: 17/8/1945
print(hari, bulan, tahun, sep="...")
```

**Tugas 3: Baris yang Sama**
Buatlah dua perintah print yang berbeda, tapi hasilnya muncul di satu baris yang sama.

```python
print("Loading", end="...")
print("Selesai!")

# Output yang diharapkan: Loading...Selesai!
```

-----

*Lanjut ke Step 2 untuk belajar cara menerima input dari pengguna\!*
