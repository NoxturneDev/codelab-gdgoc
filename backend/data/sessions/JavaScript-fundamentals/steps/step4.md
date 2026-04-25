Selamat datang di **Step 4: Introduction to DOM (Document Object Model)**. 

Inilah jembatan yang menghubungkan logika JavaScript yang sudah kamu pelajari di Step 1-3 dengan tampilan visual HTML. Di tahap ini, kamu akan mulai membuat halaman web menjadi "hidup".

---

# Step 4: Menghubungkan JS dengan HTML (DOM)

### 1. Apa itu DOM?
**DOM** adalah representasi HTML sebagai sebuah **Object** (ingat Step 3?). JavaScript melihat setiap elemen di HTML (seperti `<h1>`, `<button>`, atau `<div>`) sebagai objek yang bisa dimanipulasi—diubah warnanya, diganti teksnya, atau dihapus.



### 2. Cara Menangkap Elemen (Selecting)
Sebelum mengubah sesuatu, kamu harus "menangkap" elemennya terlebih dahulu. Gunakan perintah paling populer: `document.querySelector()`.

```html
<h1 id="judul">Halo Dunia!</h1>
<button class="tombol-biru">Klik Saya</button>

<script>
  // Menangkap berdasarkan ID (pakai #)
  const judul = document.querySelector("#judul");
  
  // Menangkap berdasarkan Class (pakai titik .)
  const tombol = document.querySelector(".tombol-biru");
</script>
```

### 3. Cara Mengubah Elemen (Manipulating)
Setelah elemen ditangkap dan disimpan dalam variabel, kita bisa mengubah propertinya menggunakan **Dot Notation**.

```javascript
// Mengubah teks di dalam h1
judul.innerText = "Teks ini diubah oleh JS!";

// Mengubah gaya CSS langsung
judul.style.color = "red";
judul.style.backgroundColor = "yellow";
```

### 4. Mendengarkan Kejadian (Event Listener)
Inilah bagian yang paling seru. Kita bisa menyuruh JS menunggu sampai user melakukan sesuatu (seperti klik), lalu menjalankan sebuah **Function**.

```javascript
// Rumus: elemen.addEventListener("kejadian", fungsi);

tombol.addEventListener("click", function() {
  alert("Tombol berhasil diklik!");
  judul.style.color = "blue";
});
```


---

### 🎯 Mini Challenge Step 4
Coba buat file HTML sederhana dan lakukan ini:
1. Buatlah satu tag `<p>` dengan teks awal "Lampu Mati".
2. Buatlah satu `<button>` dengan teks "Nyalakan".
3. Gunakan JS untuk:
    * Tangkap elemen `<p>` dan `<button>`.
    * Tambahkan `addEventListener` klik pada tombol.
    * Saat diklik, ubah teks `<p>` menjadi **"Lampu Menyala"** dan ubah warna teksnya menjadi **Gold**.

**Siap untuk lanjut ke Step 5: Berinteraksi dengan Input & Form?** Ini akan sangat berguna untuk membuat fitur seperti *Login* atau *To-Do List*!
