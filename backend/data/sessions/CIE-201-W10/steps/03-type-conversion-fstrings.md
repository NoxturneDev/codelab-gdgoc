# 3\. Konversi Tipe Data & f-Strings

Di langkah sebelumnya, kita menemukan masalah: `input()` selalu menghasilkan **String (Teks)**. Jika kita mencoba menjumlahkan "10" + "10", hasilnya "1010", bukan 20.

Di langkah ini, kita akan belajar cara mengubah tipe data dan cara modern menampilkan teks.

### A. Type Conversion (Casting)

Untuk melakukan perhitungan matematika dari input pengguna, kita harus mengubah (mengonversi) teks menjadi angka. Proses ini disebut **Casting**.

Fungsi utama yang digunakan:

1. `int()`: Mengubah teks menjadi **Integer** (Bilangan bulat).
2. `float()`: Mengubah teks menjadi **Float** (Bilangan desimal).
3. `str()`: Mengubah angka kembali menjadi **String**.

**Contoh Masalah & Solusi:**

```python
# Masalah (String)
angka1 = input("Masukkan angka 1: ") # Misal input 5
angka2 = input("Masukkan angka 2: ") # Misal input 5
print(angka1 + angka2) 
# Output: 55 (Salah!)

# Solusi (Casting)
angka1 = int(input("Masukkan angka 1: ")) # "5" jadi 5
angka2 = int(input("Masukkan angka 2: ")) # "5" jadi 5
print(angka1 + angka2) 
# Output: 10 (Benar!)
```

> **Tips:** Gunakan `float()` jika input pengguna mungkin mengandung koma/desimal (contoh: berat badan, harga barang).

-----

### B. f-Strings (Formatted Strings)

Sampai saat ini, kita menggunakan koma `,` di dalam `print()` untuk menggabungkan teks dan variabel. Itu cara lama.

Sejak Python 3.6, ada cara yang jauh lebih mudah dan rapi bernama **f-Strings**.

**Caranya:**

1. Tambahkan huruf `f` kecil tepat sebelum tanda kutip pembuka.
2. Masukkan nama variabel langsung di dalam kurung kurawal `{}` di dalam teks.

**Perbandingan:**

```python
nama = "Siti"
skor = 98

# Cara Lama (Ribet dengan koma dan kutip)
print("Siswa bernama", nama, "mendapat nilai", skor)

# Cara f-String (Lebih bersih!)
print(f"Siswa bernama {nama} mendapat nilai {skor}")
```

Kelebihan f-Strings adalah Anda tidak perlu memikirkan spasi tambahan atau tipe data. Python mengurusnya untuk Anda.

-----

### C. Menggabungkan Semuanya

Mari kita buat program penghitung umur sederhana.

```python
nama = input("Siapa nama Anda? ")
tahun_lahir = int(input("Tahun berapa Anda lahir? ")) # Convert ke int

tahun_sekarang = 2024
umur = tahun_sekarang - tahun_lahir # Bisa dihitung karena sudah int

# Tampilkan dengan f-string
print(f"Halo {nama}, tahun ini umur Anda kira-kira {umur} tahun.")
```

-----

## 📝 Latihan (Exercise)

Salin kode di bawah dan lengkapi bagian yang kosong `...`.

**Tugas 1: Kalkulator Luas Persegi**
Buat program untuk menghitung luas. Ingat untuk mengubah input menjadi angka\!

```python
panjang = input("Masukkan panjang: ")
lebar = input("Masukkan lebar: ")

# Ubah ke integer lalu kalikan
luas = int(panjang) * int(...)

print(f"Luas persegi adalah {luas}")
```

**Tugas 2: Konversi Mata Uang**
Anggap 1 USD = 15000 IDR. Gunakan `float` karena uang bisa pecahan.

```python
usd = float(input("Masukkan jumlah USD: "))
rate = 15000

rupiah = usd * rate

# Gunakan f-string
print(f"{usd} USD setara dengan {rupiah} IDR")
```

**Tugas 3: f-String Drill**
Perbaiki kode di bawah ini agar berjalan (jangan lupa huruf 'f').

```python
item = "Kopi"
harga = 25000

# Kode ini akan print {item} secara literal jika 'f' nya lupa
pesan = "Saya membeli {item} seharga Rp{harga}" 

print(pesan)
# Target Output: Saya membeli Kopi seharga Rp25000
```

-----

*Setelah Anda menguasai konversi angka dan formatting string, kita akan lanjut ke **Step 4: Final Exercise** untuk menguji semua ilmu dari Step 1-3\!*
