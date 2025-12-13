# 2\. Blok `try`:

Jika Exception Handling adalah sebuah sistem keamanan, maka blok `try` adalah **CCTV** atau **Zona Pengawasan**.

Di dalam blok `try`, kita menempatkan kode-kode yang "berbahaya" atau **berpotensi menyebabkan error** (seperti pembagian angka, input user, atau membuka file).

### A. Sintaks Dasar

Python tidak mengizinkan blok `try` berdiri sendiri. Ia harus selalu memiliki pasangan (minimal satu blok `except`).

```python
try:
    # Tulis kode yang mungkin error di sini
    # Python akan mencoba menjalankan ini baris per baris
except:
    # (Kita akan bahas ini di Step 3)
    pass 
```

### B. Cara Kerja Blok `try`

Bayangkan `try` sebagai sebuah **Misi Percobaan**.

1.  Python masuk ke dalam blok `try`.
2.  Python menjalankan baris pertama.
3.  **Skenario 1 (Sukses):** Jika tidak ada error, Python lanjut ke baris kedua, ketiga, dst, lalu melewati (skip) blok `except`.
4.  **Skenario 2 (Gagal/Error):** Jika terjadi error di baris tertentu (misal baris 1), Python **langsung berhenti** di situ. Baris ke-2 dan seterusnya di dalam `try` **TIDAK AKAN** dijalankan. Python langsung lompat keluar menuju `except`.

### C. Contoh Demonstrasi

Mari kita lihat bagaimana eksekusi berhenti saat error terjadi.

```python
print("--- Awal Program ---")

try:
    angka = int(input("Masukkan angka pembagi: "))
    
    # Baris ini BERBAHAYA (Bisa ZeroDivisionError)
    hasil = 10 / angka 
    
    # Baris ini hanya jalan jika pembagian SUKSES
    print(f"Hasilnya adalah: {hasil}")

except:
    print("Oops! Terjadi kesalahan.")

print("--- Akhir Program ---")
```

**Analisis Alur:**

  * **Jika user input `2`:**
    1.  `10 / 2` sukses.
    2.  `print` hasil dijalankan.
    3.  Blok `except` dilewati.
    4.  Lanjut ke "Akhir Program".
  * **Jika user input `0`:**
    1.  `10 / 0` **ERROR\!**
    2.  Program **langsung lompat** ke `except`.
    3.  Baris `print(f"Hasilnya...")` **TIDAK** pernah disentuh/dijalankan.
    4.  Cetak "Oops\!".
    5.  Lanjut ke "Akhir Program".

### D. Tips Penggunaan `try`

Jangan membungkus seluruh program Anda dalam satu blok `try` raksasa.

**❌ Cara Salah (Terlalu Luas):**

```python
try:
    # Seluruh kode program 100 baris ditaruh sini
    ...
except:
    print("Error")
```

*Kenapa salah? Jika error terjadi, Anda tidak tahu baris mana penyebabnya karena semua ditelan oleh satu blok try.*

**✅ Cara Benar (Spesifik):**
Hanya bungkus baris yang benar-benar rawan error.

```python
nama = "Budi" # Aman, tidak perlu try

try:
    umur = int(input("Umur: ")) # Rawan, user bisa input huruf
except:
    print("Input salah")
```

-----

**Selanjutnya:**
Kita sudah membuat "Jebakan" menggunakan `try`. Sekarang, bagaimana cara menangkap "Tikus" (Error) yang masuk ke jebakan itu secara spesifik? Kita akan bahas di **Step 3: Except Block**.
