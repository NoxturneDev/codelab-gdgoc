Ini adalah **Step 3: Functions & Objects**, gerbang terakhir sebelum kamu masuk ke **DOM Manipulation**.

Di step ini, kita akan belajar cara membungkus kode agar bisa digunakan berkali-kali (**Functions**) dan cara mengelola data yang lebih kompleks (**Objects**). Kedua konsep ini adalah nyawa dari hampir semua framework JS modern.

---

# Step 3: Functions & Objects

### 1. Functions (Blok Kode Mandiri)
**Function** adalah sekumpulan kode yang kita beri nama, sehingga bisa kita panggil kapan saja. Bayangkan seperti tombol di mesin kopi; kamu tinggal tekan satu tombol (panggil nama fungsi), dan mesin akan melakukan serangkaian proses untuk membuat kopi.

```javascript
// Cara membuat fungsi (Deklarasi)
function sapaUser(nama) {
  console.log("Halo " + nama + ", selamat datang di aplikasi!");
}

// Cara menggunakan fungsi (Memanggil/Invoke)
sapaUser("Budi"); // Output: Halo Budi, selamat datang di aplikasi!
sapaUser("Santi"); // Output: Halo Santi, selamat datang di aplikasi!
```

**Kenapa penting?** Karena nanti di DOM, kamu akan sering membuat fungsi untuk menangani kejadian (seperti `fungsiKlikTombol`).

---

### 2. Objects (Data Terstruktur)
Jika **Array** adalah daftar linear (seperti daftar belanja), maka **Object** adalah kumpulan informasi detail tentang satu hal. Object menggunakan kurung kurawal `{ }`.



```javascript
// Membuat Object
let smartphone = {
  merk: "Samsung",
  warna: "Hitam",
  ram: 8,
  apakahAktif: true
};

// Mengambil data Object (menggunakan tanda titik atau dot notation)
console.log(smartphone.merk); // Output: Samsung
console.log(smartphone.ram);  // Output: 8
```

Objek sangat penting karena **DOM (Document Object Model)** menganggap semua elemen di HTML (seperti `<div>`, `<h1>`, atau `<button>`) sebagai **Object** yang punya properti (warna, teks, ukuran).

---

### 3. Menghubungkan JS ke HTML
Sebelum lanjut ke DOM sesungguhnya, kamu harus tahu cara memasukkan JS ke file HTML kamu. Gunakan tag `<script>`.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Belajar JS</title>
</head>
<body>
  <h1>Cek Console Bro!</h1>

  <script>
    // Kode JavaScript kamu ditaruh di sini
    const ucapkanSalam = () => {
      alert("JavaScript Berhasil Terhubung!");
    };
    
    ucapkanSalam();
  </script>
</body>
</html>
```

---

### 🎯 Final Challenge (Persiapan DOM)
Ini adalah latihan gabungan yang akan menguji apakah kamu siap masuk ke materi DOM & Framework:

1.  Buatlah sebuah **Object** bernama `produk` yang berisi properti: `nama` (string), `harga` (number), dan `stok` (number).
2.  Buatlah sebuah **Function** bernama `cekKetersediaan` yang menerima satu parameter (yaitu object produk tadi).
3.  Di dalam fungsi tersebut, gunakan `if/else`:
    * Jika `stok > 0`, cetak: `"Produk [nama] tersedia dengan harga [harga]"`.
    * Jika `stok == 0`, cetak: `"Produk [nama] sedang habis"`.
4.  Panggil fungsi tersebut dengan object yang sudah kamu buat.

---

### 🚀 Apa Selanjutnya? (Bridging to DOM)
Setelah kamu paham cara membuat fungsi dan mengakses properti objek, di materi berikutnya kita akan belajar cara:
* **Mencari elemen:** `document.querySelector()` (Mencari tombol atau teks di HTML).
* **Mengubah isi:** `element.innerText = "Selesai!"`.
* **Mendengarkan kejadian:** `button.addEventListener("click", ...)` (Menjalankan fungsi saat tombol diklik).

Gimana? Sudah siap melompat ke **DOM Manipulation**?
