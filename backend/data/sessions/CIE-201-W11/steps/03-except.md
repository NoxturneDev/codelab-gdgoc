# 3\. Blok `except`: Penanganan Error

Setelah program "melompat" keluar dari blok `try` karena error, ia akan mencari blok `except` yang sesuai untuk mendarat. Di sinilah kita menentukan apa yang harus dilakukan: apakah menampilkan pesan error, mencatat log, atau memberikan nilai default.

### A. The "Catch-All" Except (Menangkap Semua)

Bentuk paling sederhana adalah `except` tanpa nama error spesifik. Ini akan menangkap **jenis error apa saja**.

```python
try:
    angka = int(input("Masukkan angka: "))
    print(100 / angka)
except:
    print("Terjadi kesalahan! Entah input huruf atau dibagi nol.")
```

  * **Kelebihan:** Kode pasti aman dari crash.
  * **Kekurangan:** Kita tidak tahu apa error sebenarnya. Apakah user memasukkan huruf? Atau membagi dengan nol? Atau memori penuh? Semuanya dianggap sama.

### B. Specific Except (Menangkap Error Spesifik)

Ini adalah **Best Practice** (Cara Terbaik). Kita menyiapkan penanganan khusus untuk jenis error yang berbeda. Python akan mengecek dari atas ke bawah.

```python
try:
    angka = int(input("Masukkan angka pembagi: "))
    hasil = 10 / angka
    print(f"Hasil: {hasil}")

except ZeroDivisionError:
    # Hanya jalan jika user input 0
    print("Error: Tidak bisa membagi angka dengan nol!")

except ValueError:
    # Hanya jalan jika user input huruf/simbol
    print("Error: Harap masukkan angka saja, bukan teks!")
```

**Logika Alur:**

1.  Jika user input `0` $\rightarrow$ Masuk ke blok `ZeroDivisionError`.
2.  Jika user input `"Budi"` $\rightarrow$ Masuk ke blok `ValueError`.
3.  Jika user input `2` $\rightarrow$ Semua blok `except` diabaikan.

### C. Menangkap Pesan Error Asli (`as`)

Terkadang kita ingin menangkap pesan error teknis dari Python untuk keperluan debugging, tapi tanpa membuat program crash. Kita bisa menggunakan kata kunci `as`.

```python
try:
    file = open("data_rahasia.txt")
except FileNotFoundError as e:
    # 'e' berisi pesan error asli dari sistem
    print(f"Gagal membuka file. Detail error: {e}")
```

*Output jika file tidak ada:*
`Gagal membuka file. Detail error: [Errno 2] No such file or directory: 'data_rahasia.txt'`

### D. Multiple Exceptions (Satu Solusi untuk Banyak Masalah)

Jika Anda ingin melakukan hal yang sama untuk beberapa jenis error yang berbeda, Anda bisa mengelompokkannya dalam tanda kurung (tuple).

```python
try:
    # Kode berisiko
    ...
except (ValueError, TypeError):
    print("Input atau Tipe data Anda salah!")
```

-----

### 📝 Rangkuman Latihan

Cobalah tebak output dari kode berikut dalam pikiran Anda:

```python
daftar_buah = ["Apel", "Jeruk"]

try:
    pilihan = int(input("Pilih indeks buah (0-1): "))
    print(daftar_buah[pilihan])
    print(10 / pilihan)

except IndexError:
    print("Buah tidak ada!")
except ZeroDivisionError:
    print("Jangan pilih 0 untuk pembagian!")
except ValueError:
    print("Masukkan angka woy!")
```

1.  Jika user input `5` $\rightarrow$ Masuk ke `IndexError`.
2.  Jika user input `0` $\rightarrow$ Print "Apel", lalu crash? **TIDAK**, masuk ke `ZeroDivisionError` (karena `10/0`).
3.  Jika user input `"A"` $\rightarrow$ Masuk ke `ValueError`.

-----

**Selanjutnya:**
Terkadang kita ingin menjalankan kode hanya jika **TIDAK ADA** error sama sekali (sukses total). Untuk itu, kita membutuhkan blok **Step 4: Else**.
