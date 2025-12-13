# 4\. Blok `else`: Hadiah Keberhasilan

Dalam struktur `try-except`, blok `else` bersifat **opsional**.
Blok ini hanya akan dijalankan jika **TIDAK ADA error** yang terjadi di dalam blok `try`.

### A. Posisi dan Aturan

Blok `else` harus diletakkan **setelah** semua blok `except`, tapi sebelum blok `finally` (jika ada).

```python
try:
    # Kode berisiko
    ...
except:
    # Jalan jika ERROR
    ...
else:
    # Jalan jika SUKSES (Tidak ada error)
    ...
```

### B. Mengapa Tidak Menaruh Semuanya di `try` Saja?

Anda mungkin bertanya: *"Kenapa harus pakai `else`? Kan saya bisa taruh kode lanjutan di bawah `try` langsung?"*

**Perbedaan Penting:**
Blok `try` sebaiknya **hanya** berisi baris kode yang benar-benar kita khawatirkan akan error. Kode lain yang bergantung pada keberhasilan `try` tapi **tidak** kita harapkan error, sebaiknya ditaruh di `else`.

Ini mencegah kita menangkap error yang tidak disengaja (Accidental Catching).

**Contoh Kasus:**
Kita ingin membagi angka, lalu mencetak hasilnya dengan format khusus.

**❌ Cara Kurang Tepat (Semua di Try):**

```python
try:
    a = int(input("A: "))
    b = int(input("B: "))
    hasil = a / b
    
    # Jika fungsi formatting ini error, akan ketangkap 'except' di bawah
    # Padahal kita cuma mau nangkep error pembagian!
    print(f"Hore! Hasilnya adalah {hasil}") 
except Exception as e:
    print("Terjadi kesalahan hitung:", e)
```

**✅ Cara Benar (Menggunakan Else):**

```python
try:
    a = int(input("A: "))
    b = int(input("B: "))
    hasil = a / b # Hanya fokus menjaga baris ini
except ZeroDivisionError:
    print("Tidak bisa dibagi nol!")
else:
    # Kode ini aman dijalankan karena pembagian sudah pasti sukses
    # Dan jika print ini error, tidak akan ditutupi oleh except di atas
    print(f"Hore! Hasilnya adalah {hasil}")
```

### C. Alur Logika Visual

Bayangkan Anda mau masuk bioskop:

1. **Try:** Cek tiket ke petugas.
2. **Except:** Tiket tidak valid? Diusir/Disuruh beli lagi.
3. **Else:** Tiket valid? Silakan masuk studio dan nikmati filmnya.

<!-- end list -->

```python
def proses_login(username):
    try:
        # Coba cari user di database (Mungkin user tidak ditemukan)
        user = database.find(username)
    except UserNotFoundError:
        print("User tidak terdaftar!")
    else:
        # User ketemu! Sekarang login (Mungkin password salah, tapi itu urusan lain)
        print(f"Selamat datang kembali, {user.name}!")
        user.login()
```

### D. Rangkuman Alur `try-except-else`

* **Skenario 1 (Ada Error):**
    `try` (Error) $\rightarrow$ `except` (Jalan) $\rightarrow$ `else` (Dilewati).
* **Skenario 2 (Sukses):**
    `try` (Sukses) $\rightarrow$ `except` (Dilewati) $\rightarrow$ `else` (Jalan).

-----

**Selanjutnya:**
Terkadang kita butuh kode yang **WAJIB** jalan, tidak peduli error atau tidak, tidak peduli sukses atau gagal (seperti menutup file atau memutus koneksi database). Itulah tugas **Step 5: Finally**.
