Materi kita berlanjut ke **Step 5: Berinteraksi dengan Input & Form**.

Ini adalah tahap yang sangat penting untuk aplikasi web masa kini. Hampir semua fitur seperti *Chat*, *Login*, hingga *Search Bar* bekerja dengan cara mengambil data yang diketik oleh user, lalu memprosesnya.

---

# Step 5: Berinteraksi dengan Input & Form

### 1. Mengambil Nilai dari Input (`.value`)
Jika pada elemen teks biasa kita menggunakan `.innerText`, untuk elemen form seperti `<input>`, kita menggunakan properti `.value`.

```html
<input type="text" id="inputNama" placeholder="Ketik nama kamu...">
<button id="tombolCetak">Cetak ke Console</button>

<script>
  const input = document.querySelector("#inputNama");
  const tombol = document.querySelector("#tombolCetak");

  tombol.addEventListener("click", function() {
    // Mengambil apa yang diketik user
    let namaUser = input.value;
    console.log("Nama yang diinput: " + namaUser);
  });
</script>
```

### 2. Menangani Form (Event `submit`)
Saat bekerja dengan tag `<form>`, perilaku bawaan browser adalah melakukan *refresh* halaman setiap kali tombol submit diklik. Kita harus menghentikan perilaku ini menggunakan `e.preventDefault()`.



```html
<form id="formPendaftaran">
  <input type="email" id="emailUser" placeholder="Email">
  <button type="submit">Daftar</button>
</form>

<script>
  const form = document.querySelector("#formPendaftaran");
  
  form.addEventListener("submit", function(event) {
    // Mencegah halaman refresh
    event.preventDefault();
    
    const email = document.querySelector("#emailUser").value;
    alert("Terima kasih, email " + email + " berhasil terdaftar!");
  });
</script>
```

### 3. Mengubah Class CSS (`classList`)
Daripada mengubah gaya satu per satu (seperti `.style.color = "red"`), cara yang lebih "pro" dan efisien adalah dengan mengganti **Class CSS**. Ini adalah teknik dasar yang sering dipakai di framework seperti React atau Vue untuk *styling*.

```javascript
const kotak = document.querySelector(".box");

// Menambah class
kotak.classList.add("warna-biru");

// Menghapus class
kotak.classList.remove("warna-merah");

// Toggle (Jika ada dihapus, jika tidak ada ditambah)
kotak.classList.toggle("aktif");
```

---

### 🎯 Mini Challenge Step 5 (Mini To-Do List)
Mari kita buat simulasi kecil:
1. Buat satu `<input>` teks dan satu `<button>` bertuliskan "Tambah Tugas".
2. Buat satu `<ul>` kosong di bawahnya.
3. Gunakan JS untuk:
    * Saat tombol diklik, ambil teks dari input.
    * Buat elemen baru (Tips: gunakan `document.createElement("li")`).
    * Masukkan teks dari input ke dalam `li` tersebut.
    * Masukkan `li` tersebut ke dalam `ul` (Tips: gunakan `.appendChild()`).

**Gimana? Sudah mulai terasa seperti membangun aplikasi beneran?** Setelah ini, kamu sudah punya bekal yang cukup untuk mulai melirik framework JS. Mau lanjut ke **Step 6: Ringkasan & Persiapan Framework**?
