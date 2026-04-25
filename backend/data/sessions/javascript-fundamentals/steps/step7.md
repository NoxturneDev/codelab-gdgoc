Selamat datang di **Step 7: Final Boss Challenge!** 🚀

Ini adalah ujian akhir sebelum kamu benar-benar terjun ke dunia Framework (React/Vue). Waktu pengerjaan ideal adalah **15 - 20 menit**. Jangan terburu-buru, baca instruksinya pelan-pelan.

---

# Study Case: Aplikasi Kasir "Warung Mini"

**Skenario:**
Pemilik "Warung Mini" meminta bantuanmu untuk membuatkan aplikasi kasir digital sederhana. Dia ingin aplikasi di mana kasir bisa memasukkan **Nama Barang** dan **Harga**, lalu barang tersebut muncul di layar, dan **Total Harga** terhitung otomatis. Jika total belanjaan lebih dari Rp 100.000, pelanggan dapat **Diskon 10%**.

Ini adalah simulasi nyata yang mencakup **semua** materi yang sudah kita pelajari: *Variabel, Array, Object, If/Else, Looping, Function, dan DOM Manipulation.*

### Tahap 1: Persiapan HTML (Salin kode ini)

Buat satu file `index.html`, salin kode di bawah ini. Tugasmu HANYA menulis kode di dalam tag `<script>`.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <title>Kasir Warung Mini</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; max-width: 400px;}
    .card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; }
    input { width: 90%; padding: 8px; margin-bottom: 10px; }
    button { padding: 10px; width: 100%; background: blue; color: white; border: none; cursor: pointer; }
    .total-box { margin-top: 20px; padding: 10px; background: #eee; font-weight: bold; text-align: center; }
    .diskon { color: green; font-size: 12px; }
  </style>
</head>
<body>

  <div class="card">
    <h2>🛒 Kasir Warung Mini</h2>
    
    <form id="formKasir">
      <input type="text" id="namaBarang" placeholder="Nama Barang (Cth: Sabun)" required>
      <input type="number" id="hargaBarang" placeholder="Harga (Cth: 5000)" required>
      <button type="submit">Tambah ke Keranjang</button>
    </form>

    <hr>
    
    <h3>Daftar Belanja:</h3>
    <ul id="daftarBelanja">
      </ul>

    <div class="total-box">
      <p>Total: Rp <span id="totalHarga">0</span></p>
      <p id="pesanDiskon" class="diskon"></p>
    </div>
  </div>

  <script>
    // ==========================================
    // TULIS KODE JAVASCRIPT KAMU DI BAWAH INI
    // ==========================================
    
  </script>
</body>
</html>
```

---

### Tahap 2: Misi Javascript (Instruksi Detail)

Kerjakan langkah-langkah di bawah ini secara berurutan di dalam tag `<script>`:

**Misi 1: Siapkan "Gudang Data" (Variables & Array)**

1. Buat sebuah variabel bernama `keranjang` dan isi dengan **Array kosong** `[]`. Array ini nantinya akan menyimpan data barang dalam bentuk Object.

**Misi 2: Tangkap Elemen DOM (DOM Selection)**
Tangkap elemen-elemen HTML ini dan simpan ke dalam variabel `const`:

1. Form (`#formKasir`)
2. Input Nama Barang (`#namaBarang`)
3. Input Harga Barang (`#hargaBarang`)
4. Tempat list belanja (`#daftarBelanja`)
5. Tempat tulisan total (`#totalHarga`)
6. Tempat pesan diskon (`#pesanDiskon`)

**Misi 3: Bikin "Mesin" Kasir (Event Listener & Object)**

1. Tambahkan `addEventListener` dengan kejadian `"submit"` pada elemen Form.
2. Di dalam fungsinya, panggil perintah untuk **mencegah halaman refresh**.
3. Ambil teks/nilai dari input *Nama Barang* dan *Harga Barang*.
   *(Hati-hati: Harga barang dari input itu aslinya String, ubah jadi Number!)*
4. Buat sebuah **Object** bernama `itemBaru` yang memiliki dua properti: `nama` dan `harga`.
5. Masukkan object `itemBaru` tersebut ke dalam array `keranjang` (Gunakan perintah `.push()`).

**Misi 4: Render UI (Menampilkan Daftar ke Layar)**
*Masih di dalam fungsi submit yang sama:*

1. Kosongkan dulu isi HTML dari `#daftarBelanja` agar tidak menumpuk saat di-render ulang.
2. Buat `for loop` untuk mengelilingi array `keranjang`.
3. Di dalam loop, tambahkan HTML berupa tag `<li>` yang berisi nama dan harga barang ke dalam `#daftarBelanja`.

**Misi 5: Hitung Tagihan (Looping & Logika If/Else)**
*Masih di dalam fungsi submit yang sama:*

1. Buat variabel `total = 0`.
2. Buat `for loop` (atau gunakan loop dari Misi 4) untuk menjumlahkan semua harga barang di array `keranjang` ke dalam variabel `total`.
3. Buat logika **If/Else**:
   * Jika `total > 100000`, kurangi totalnya sebanyak 10% (Gunakan rumus: `total = total - (total * 0.1)`). Lalu munculkan teks `"Selamat! Dapat Diskon 10% 🎉"` di elemen `#pesanDiskon`.
   * Jika tidak (`else`), kosongkan teks di elemen `#pesanDiskon`.
4. Terakhir, tampilkan nilai variabel `total` ke dalam elemen `#totalHarga`.
5. Jangan lupa kosongkan form input agar siap dipakai untuk barang selanjutnya!

---

### HINT (Bantuan Darurat)

Jika kamu mentok, buka contekannya di bawah ini:

* **Hint Misi 3 (Cegah Refresh):** Gunakan `event.preventDefault();`
* **Hint Misi 3 (Ubah String ke Angka):** Input harga bentuknya string. Gunakan `Number(inputHarga.value)` atau `parseInt(inputHarga.value)`.
* **Hint Misi 4 (Render DOM Cepat):** Kamu bisa menggunakan `.innerHTML`. Contoh:
    `daftarBelanja.innerHTML += "<li>" + itemBaru.nama + " - Rp " + itemBaru.harga + "</li>";`
* **Hint Misi 5 (Kosongkan Form):** Panggil fungsi bawaan form yaitu `formKasir.reset();` di paling akhir.

---

**Selamat Mengerjakan! 🔥** Jika kamu berhasil menyelesaikan ini, logika *State Management* (seperti yang dipakai di React) dan *DOM Manipulation* sudah sepenuhnya ada di genggamanmu. Kamu siap masuk ke dunia Framework!
