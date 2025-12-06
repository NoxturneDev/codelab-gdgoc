
# 4\. Final Exercise: Kalkulator Patungan (Split Bill)

Selamat\! Anda telah mempelajari dasar-dasar Input dan Output di Python. Sekarang saatnya menguji kemampuan Anda dengan membuat program yang berguna di kehidupan nyata.

**Misi Anda:**
Buatlah sebuah program **"Split Bill Calculator"**.
Bayangkan Anda dan teman-teman baru saja selesai makan malam di restoran. Struk tagihan datang, dan Anda perlu menghitung berapa rupiah yang harus dibayar oleh **setiap orang** (termasuk tip untuk pelayan).

[Image of program flow chart input process output]

### 📋 Spesifikasi Program

Program Anda harus meminta 3 input dari pengguna:

1. **Total Tagihan** (Hati-hati, ini bisa berupa desimal/pecahan).
2. **Persentase Tip** yang ingin diberikan (Misal: 10, 12, atau 15).
3. **Jumlah Orang** yang ikut makan.

Setelah data diterima, program harus menghitung dan menampilkan:

* Total tip dalam Rupiah.
* Total tagihan akhir (Tagihan + Tip).
* **Bayaran per orang** (Total Akhir dibagi Jumlah Orang).

-----

### 💡 Contoh Output yang Diharapkan

Tampilan terminal Anda harus terlihat persis (atau mirip) seperti ini saat dijalankan:

```text
=== Kalkulator Patungan ===
Berapa total tagihannya? Rp 100000
Berapa persen tip yang mau dikasih? 10
Berapa orang yang ikut makan? 2

--- Hasil Perhitungan ---
Total Tip: Rp 10000.0
Total Tagihan + Tip: Rp 110000.0
Setiap orang harus membayar: Rp 55000.0
```

-----

### 🛠️ Tips & Petunjuk

1. **Tipe Data:** Uang bisa berupa pecahan, gunakan `float()`. Jumlah orang dan persen tip biasanya bulat, gunakan `int()`.
2. **Rumus Matematika:**
      * `Nilai Tip = Tagihan * (Persen / 100)`
      * `Total Akhir = Tagihan + Nilai Tip`
      * `Per Orang = Total Akhir / Jumlah Orang`
3. **Formatting:** Gunakan **f-string** untuk menampilkan hasil perhitungan di dalam `print()`.

-----

### 💻 Area Kerja Anda

Salin kerangka di bawah ini ke editor Anda dan mulailah coding\!

```python
print("=== Kalkulator Patungan ===")

# 1. AMBIL INPUT
# Ingat: input() menghasilkan string, jadi harus di-convert!
tagihan = ...
persen_tip = ...
jumlah_orang = ...

# 2. PROSES LOGIKA (Matematika)
# Hitung nilai tip
nilai_tip = ...

# Hitung total yang harus dibayar
total_akhir = ...

# Hitung bayaran per orang
per_orang = ...

# 3. OUTPUT
print("\n--- Hasil Perhitungan ---")
# Gunakan f-string untuk mencetak hasil
print(f"Total Tip: Rp {nilai_tip}")
print(...) # Lanjutkan untuk Total Tagihan
print(...) # Lanjutkan untuk Bayaran Per Orang
```

-----

### 🔐 Kunci Jawaban (Solution)

Sudah dicoba? Jika Anda macet atau ingin mencocokkan jawaban, silakan buka solusi di bawah ini.

```python
print("=== Kalkulator Patungan ===")

# 1. INPUT (Menggunakan float untuk uang, int untuk persen/orang)
tagihan = float(input("Berapa total tagihannya? Rp "))
persen_tip = int(input("Berapa persen tip yang mau dikasih? "))
jumlah_orang = int(input("Berapa orang yang ikut makan? "))

# 2. PROSES
nilai_tip = tagihan * (persen_tip / 100)
total_akhir = tagihan + nilai_tip
per_orang = total_akhir / jumlah_orang

# 3. OUTPUT
print("\n--- Hasil Perhitungan ---")
print(f"Total Tip: Rp {nilai_tip}")
print(f"Total Tagihan + Tip: Rp {total_akhir}")
print(f"Setiap orang harus membayar: Rp {per_orang}")
```

-----

**Selamat\!** Anda telah menyelesaikan modul Python Input & Output. Anda sekarang bisa membuat program yang berinteraksi dengan pengguna dan melakukan perhitungan matematika dasar.
