# 1\. Pengenalan Exception Handling

Selamat datang di modul Exception Handling\! Sebelum kita belajar cara memperbaiki error, kita harus memahami dulu apa itu error dalam Python.

Dalam pemrograman, tidak semua berjalan mulus. Kadang file yang ingin dibuka hilang, internet putus, atau pengguna memasukkan huruf padahal program meminta angka. Inilah yang disebut **Exception**.

### A. Apa itu Exception?

Exception adalah peristiwa yang terjadi selama eksekusi program (saat program berjalan/runtime) yang mengganggu aliran normal instruksi program.

Jika exception tidak ditangani (unhandled), program akan **crash** (berhenti tiba-tiba) dan menampilkan pesan error berwarna merah yang menakutkan bagi pengguna.

### B. Syntax Error vs. Exception

Sangat penting untuk membedakan antara *kesalahan penulisan* dan *kesalahan logika*.

**1. Syntax Error (Kesalahan Tata Bahasa)**
Ini terjadi saat Anda salah ketik kode. Python bahkan tidak akan mau menjalankan program ini.

```python
# Contoh Syntax Error (Kurang tanda kurung)
print "Halo Dunia"
# Output: SyntaxError: Missing parentheses in call to 'print'.
```

**2. Exception (Kesalahan Runtime)**
Kodenya benar secara tata bahasa, Python mau menjalankannya, tapi terjadi masalah saat proses eksekusi.

```python
# Contoh Exception (Membagi dengan nol)
a = 10
b = 0
print(a / b)
# Output: ZeroDivisionError: division by zero
```

*Program di atas crash bukan karena salah ketik, tapi karena secara matematika kita tidak bisa membagi angka dengan nol.*

### C. Contoh Exception Umum di Python

Berikut adalah beberapa "tersangka" utama yang sering membuat program crash:

1.  **ZeroDivisionError:** Mencoba membagi angka dengan nol.
2.  **NameError:** Mencoba memanggil variabel yang belum dibuat/didefinisikan.
    ```python
    print(nama_saya) # Error jika variabel 'nama_saya' belum ada
    ```
3.  **TypeError:** Operasi pada tipe data yang salah.
    ```python
    print("Umur saya " + 25) # Error: Tidak bisa menjumlahkan Teks dengan Angka
    ```
4.  **IndexError:** Mencoba mengambil data dari list di urutan yang tidak ada.
    ```python
    data = [1, 2]
    print(data[5]) # Error: List cuma punya 2 item, minta item ke-6
    ```

### D. Mengapa Exception Handling Penting?

Bayangkan Anda menggunakan aplikasi Mobile Banking. Saat Anda menekan "Transfer" tapi internet mati, mana yang lebih baik?

1.  Aplikasi langsung tertutup sendiri (Force Close/Crash).
2.  Aplikasi memunculkan pesan santun: *"Koneksi terputus, silakan coba lagi nanti."*

Exception Handling adalah seni mengubah skenario nomor 1 menjadi nomor 2. Tujuannya agar program menjadi **Robust** (tangguh) dan tidak mudah crash.

-----

**Selanjutnya:**
Sekarang kita tahu apa itu Exception (masalahnya). Di langkah berikutnya (**Step 2**), kita akan belajar blok **`try`** untuk mulai mendeteksi masalah tersebut.
