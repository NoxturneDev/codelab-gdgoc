# Step 1: JS Fundamentals (Variabel & Tipe Data)

Sebelum kita menyuruh JavaScript mengubah warna tombol atau memunculkan *popup*, kita harus kenalan dulu dengan sintaks dasarnya. JS punya tempat bermain favorit bernama **Console**.

### 1. `console.log()`: Sahabat Terbaik Developer
Saat belajar JS, kita tidak langsung melihat hasilnya di layar halaman web. Kita akan melihatnya di *Console* browser (klik kanan di browser -> *Inspect* -> tab *Console*).

Untuk mencetak sesuatu ke console, kita menggunakan perintah sakti ini:

```javascript
console.log("Halo, Dunia JavaScript!");
```

### 2. Menyimpan Data: `let` dan `const`
Dalam pemrograman, kita butuh "kotak" untuk menyimpan data. Kotak ini disebut **Variabel**. Di JavaScript modern, kita menggunakan `let` dan `const` (hindari penggunaan `var` untuk saat ini).

* **`let`**: Gunakan jika isi kotaknya **bisa berubah** di masa depan.
* **`const`** (Constant): Gunakan jika isi kotaknya **tetap/tidak boleh diubah**.

```javascript
// Menggunakan let (isinya bisa diganti)
let umur = 20;
console.log(umur); // Output: 20

umur = 21; // Tahun depan umurnya berubah
console.log(umur); // Output: 21

// Menggunakan const (isinya mutlak)
const namaHari = "Senin";
// namaHari = "Selasa"; // INI AKAN ERROR! Karena const tidak bisa diubah.
```

### 3. Tipe Data Dasar
JavaScript punya beberapa jenis data yang paling sering dipakai:

* **String (Teks):** Selalu dibungkus dengan tanda kutip tunggal `''`, ganda `""`, atau *backtick* ` `` `.
* **Number (Angka):** Angka biasa, bisa bulat atau desimal. Tidak pakai tanda kutip.
* **Boolean:** Hanya punya dua nilai: `true` (benar) atau `false` (salah). Biasanya dipakai untuk logika penentu keputusan.

```javascript
let namaLengkap = "Budi Santoso"; // String
let nilaiUjian = 85.5;          // Number
let apakahLulus = true;         // Boolean

// Menggabungkan variabel (Concatenation)
console.log("Nama saya " + namaLengkap + " dan nilai saya " + nilaiUjian);

// Cara lebih modern & rapi (Template Literal menggunakan backtick ` )
console.log(`Halo, nama saya ${namaLengkap}, lulus: ${apakahLulus}`);
```

---

### 🎯 Mini Challenge Step 1
Coba tulis di kodemu (bisa di *console browser* atau editor kode):
1. Buat variabel `const` untuk nama kamu.
2. Buat variabel `let` untuk hobi kamu.
3. Cetak ke console sebuah kalimat menggunakan *Template Literal* (backtick) seperti: `"Halo, nama saya [Nama], saya suka [Hobi]."`.
