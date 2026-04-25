Materi kita berlanjut ke **Step 2: Logika & Kendali (If/Else & Looping)**.

Di tahap ini, kita akan belajar bagaimana cara membuat kode kita "pintar" (bisa memilih tindakan berdasarkan kondisi) dan "rajin" (bisa melakukan hal yang sama berulang kali secara otomatis).

---

# Step 2: Logika & Kendali

### 1. Percabangan (If/Else)
Dalam aplikasi web, kita sering butuh logika: "Jika user sudah login, tampilkan profil. Jika belum, tampilkan tombol login."

Di JavaScript, kita menggunakan blok `if`, `else if`, dan `else`.

```javascript
let nilai = 80;

if (nilai >= 90) {
  console.log("Nilai Anda: A");
} else if (nilai >= 75) {
  console.log("Nilai Anda: B"); // Kode ini yang akan jalan
} else {
  console.log("Nilai Anda: C");
}
```


**Operator Perbandingan yang wajib kamu tahu:**
* `==` atau `===` : Apakah sama dengan? (Selalu gunakan `===` untuk keamanan lebih ketat).
* `!=` atau `!==` : Apakah tidak sama dengan?
* `>` : Lebih besar.
* `<` : Lebih kecil.
* `&&` : Dan (Dua kondisi harus benar).
* `||` : Atau (Salah satu kondisi benar sudah cukup).

---

### 2. Perulangan (Looping)
Bayangkan kamu harus mencetak angka 1 sampai 100 ke console. Capek kan kalau ngetik manual? Di sinilah `for loop` beraksi.

**Sintaks `for` loop:**
```javascript
// for (awal; kondisi; perubahan)
for (let i = 1; i <= 5; i++) {
  console.log("Ini adalah perulangan ke-" + i);
}
```


* `let i = 1`: Kita mulai dari angka 1.
* `i <= 5`: Selama `i` masih kurang dari atau sama dengan 5, jalankan terus kodenya.
* `i++`: Setiap kali satu putaran selesai, tambahkan `i` sebanyak 1.

---

### 3. Array: Daftar Informasi
Sebelum masuk ke framework, kamu harus paham cara menyimpan **kumpulan data**. Kita menggunakan **Array** (ditandai dengan kurung siku `[]`).

```javascript
let daftarBuah = ["Apel", "Jeruk", "Mangga"];

// Mengambil data (Index dimulai dari 0)
console.log(daftarBuah[0]); // Output: Apel

// Looping isi Array
for (let i = 0; i < daftarBuah.length; i++) {
  console.log("Saya mau makan buah " + daftarBuah[i]);
}
```

---

### 🎯 Mini Challenge Step 2
Coba buat logika sederhana:
1. Buat variabel `let umur = [isi dengan angka bebas]`.
2. Gunakan `if/else` untuk mengecek:
    * Jika umur 18 ke atas, cetak: `"Sudah bisa buat KTP"`.
    * Jika di bawah 18, cetak: `"Belum bisa buat KTP"`.
3. **Bonus:** Buat Array berisi 3 nama temanmu, lalu gunakan `for loop` untuk menyapa mereka satu-satu lewat console.

Siap untuk masuk ke **Step 3: Functions & Objects**? Ini adalah bagian paling penting sebelum kita menyentuh DOM!
