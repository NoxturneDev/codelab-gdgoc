# 5\. Blok `finally`: (Cleanup)

Blok `finally` bersifat **opsional**, tetapi jika ditulis, ia memiliki aturan mutlak: **Kode di dalam `finally` AKAN SELALU DIJALANKAN**, tidak peduli apa pun yang terjadi sebelumnya.

* Apakah `try` sukses? `finally` jalan.
* Apakah `try` error? `finally` jalan.
* Apakah error-nya tertangkap `except`? `finally` jalan.
* Apakah error-nya **tidak** tertangkap dan program crash? `finally` **tetap jalan** tepat sebelum program mati.

### A. Mengapa Kita Butuh Ini?

Bayangkan Anda meminjam buku di perpustakaan (`try`).

* Jika Anda selesai membacanya dengan senang (`else`), Anda harus mengembalikannya.
* Jika Anda merobeknya dan didenda (`except`), Anda tetap harus mengembalikannya.

Dalam pemrograman, `finally` digunakan untuk **Clean Up Resources** (Membersihkan Sumber Daya) agar tidak membebani memori komputer, seperti:

1. Menutup file (`file.close()`).
2. Memutus koneksi database (`db.disconnect()`).
3. Menutup koneksi internet/socket.

### B. Alur Eksekusi Lengkap

Mari kita lihat peta perjalanan kode Python dengan struktur lengkap.

**Sintaks Lengkap:**

```python
try:
    # 1. Kode Berisiko
    print("Membuka file...")
    # ... proses ...
except ValueError:
    # 2. Jalan jika error tertentu
    print("Terjadi Error!")
else:
    # 3. Jalan jika TIDAK ada error
    print("Proses Sukses!")
finally:
    # 4. PASTI JALAN (Penutup)
    print("Menutup file...")
```

### C. Contoh Kasus Nyata: Menutup File

Ini adalah contoh paling klasik. Kita tidak ingin file tetap terbuka di memori jika terjadi error di tengah jalan.

```python
try:
    f = open("catatan.txt", "w")
    angka = int(input("Masukkan angka untuk ditulis: ")) # Rawan Error
    f.write(f"Angka: {angka}")
    print("Berhasil menulis.")

except ValueError:
    print("Error: Input bukan angka!")

finally:
    # Baris ini menyelamatkan memori komputer
    f.close()
    print("File telah ditutup dengan aman.")
```

**Skenario:**

1. **User input "10":** File dibuka $\rightarrow$ Tulis "10" $\rightarrow$ Print "Berhasil" $\rightarrow$ **Tutup File**.
2. **User input "Budi":** File dibuka $\rightarrow$ Error (Lompat ke except) $\rightarrow$ Print "Error" $\rightarrow$ **Tutup File**.

Tanpa `finally`, jika error terjadi, baris `f.close()` mungkin tidak akan pernah tersentuh, dan file itu akan "nyangkut" di memori (Memory Leak).

### D. Rangkuman Tabel "Siapa yang Jalan?"

| Blok | Kondisi Jalan |
| :--- | :--- |
| **Try** | Selalu dijalankan pertama kali (untuk cek error). |
| **Except** | Hanya jalan jika **ADA Error**. |
| **Else** | Hanya jalan jika **TIDAK ADA Error**. |
| **Finally** | **SELALU JALAN** (Hujan badai ataupun cerah). |

-----

**Selamat\!** 🎉
Anda telah menyelesaikan materi **Exception Handling**.

Anda sekarang menguasai 4 jurus pengendali error:

1. `try`: Mendeteksi bahaya.
2. `except`: Menangani bahaya.
3. `else`: Merayakan keberhasilan.
4. `finally`: Membersihkan sisa-sisa pekerjaan.

Dengan ini, program Python Anda akan jauh lebih tangguh (robust) dan profesional. Apakah Anda ingin mencoba satu **Latihan Tantangan (Challenge)** untuk menguji semua materi ini sekaligus?
