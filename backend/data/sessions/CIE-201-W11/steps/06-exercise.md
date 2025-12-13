# 🎯 Tantangan: Kalkulator Pembagian Anti-Crash

**Skenario:**
Anda diminta membuat program pembagian sederhana untuk anak SD.
Anak-anak sering iseng: kadang mereka memasukkan huruf, kadang mereka membagi dengan nol. Program Anda harus **kebal** terhadap gangguan ini dan tidak boleh *crash*.

**Tugas Anda:**
Lengkapi kode di bawah ini agar memenuhi aturan berikut:

1.  **TRY:** Minta user memasukkan `angka_1` dan `angka_2`.
2.  **EXCEPT (ValueError):** Jika user memasukkan huruf, cetak: *"Mohon masukkan angka saja\!"*
3.  **EXCEPT (ZeroDivisionError):** Jika user membagi dengan 0, cetak: *"Tidak bisa membagi dengan nol\!"*
4.  **ELSE:** Jika berhasil, hitung pembagiannya dan cetak: *"Hasil pembagian: [hasil]"*
5.  **FINALLY:** Apa pun yang terjadi, cetak: *"Terima kasih sudah menggunakan kalkulator ini."*

### 💻 Kerangka Kode (Salin & Lengkapi)

```python
print("--- APLIKASI PEMBAGIAN ---")

try:
    # 1. Minta input angka_1 dan angka_2 (Ingat convert ke int/float)
    ...
    
except ...:
    # 2. Tangani jika input bukan angka
    ...

except ...:
    # 3. Tangani jika dibagi nol
    ...

else:
    # 4. Jika sukses, hitung dan tampilkan hasil
    ...

finally:
    # 5. Pesan penutup wajib
    ...
```

-----

### 🧪 Tes Kasus (Output yang Diharapkan)

Coba jalankan program Anda dengan 3 skenario ini. Hasilnya harus persis seperti di bawah:

**Skenario 1 (Sukses):**

```text
Input: 10 dan 2
Output:
Hasil pembagian: 5.0
Terima kasih sudah menggunakan kalkulator ini.
```

**Skenario 2 (Error Huruf):**

```text
Input: 10 dan "Budi"
Output:
Mohon masukkan angka saja!
Terima kasih sudah menggunakan kalkulator ini.
```

**Skenario 3 (Error Nol):**

```text
Input: 10 dan 0
Output:
Tidak bisa membagi dengan nol!
Terima kasih sudah menggunakan kalkulator ini.
```

