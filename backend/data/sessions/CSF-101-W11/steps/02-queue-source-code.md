# Langkah 2: Mekanisme Masuk (Enqueue) dan Keluar (Dequeue)

Pada tahap ini, kita melihat bagaimana kode menggerakkan penunjuk `frontIndex` dan `rearIndex`.

#### 1\. Fungsi Bantuan: Pengecekan Kondisi

Sebelum antrean berjalan, ada dua fungsi kecil yang bertugas sebagai "sensor".

**A. Sensor Kosong (`isEmpty`)**

```cpp
bool isEmpty() {
    return (frontIndex == -1 && rearIndex == -1);
}
```

  * **Penjelasan:** Kode ini hanya memeriksa satu hal: Apakah kedua penunjuk masih di angka -1?
  * Jika ya, fungsi mengembalikan `true` (Benar, antrean kosong).
  * Jika tidak (salah satu sudah berubah), mengembalikan `false` (Antrean ada isinya).

**B. Sensor Penuh (`isFull`)**

```cpp
bool isFull() {
    return (rearIndex == size - 1);
}
```

  * **Penjelasan:** Kode ini memeriksa apakah penunjuk belakang (`rearIndex`) sudah mencapai batas akhir kursi (`size - 1`).
  * Jika `size` adalah 5, maka `size - 1` adalah 4. Jika `rearIndex` ada di 4, berarti mentok.

-----

#### 2\. Fungsi `enqueue` (Menambahkan Data)

Logika memasukkan data terbagi menjadi tiga fase di dalam kodenya.

**Fase 1: Cek Apakah Penuh**

```cpp
if (isFull()) {
    cout << "Queue is full\n";
    return;
}
```

  * Sebelum melakukan apa pun, kode memastikan masih ada tempat.
  * Jika `isFull()` benar, program mencetak pesan error dan perintah `return` akan menghentikan fungsi saat itu juga (batal masuk).

**Fase 2: Mengatur Posisi Penunjuk**

```cpp
if (isEmpty()) {
    frontIndex = rearIndex = 0;
} else {
    rearIndex++;
}
```

  * **Jika Kosong (`isEmpty`):** Ini adalah penanganan khusus untuk "Orang Pertama". Baik penunjuk depan maupun belakang dipaksa pindah ke posisi 0. Ini menandakan antrean baru saja dimulai.
  * **Jika Tidak Kosong (`else`):** Ini kondisi normal. Penunjuk depan diam saja. Hanya penunjuk belakang (`rearIndex`) yang ditambah 1 (`++`) agar bergeser ke kotak kosong berikutnya.

**Fase 3: Memasukkan Data**

```cpp
arr[rearIndex] = value;
```

  * Setelah posisi `rearIndex` ditentukan (entah itu di 0 atau bergeser ke 1, 2, dst), barulah data (`value`) dimasukkan ke dalam wadah `arr` tepat di posisi yang ditunjuk tersebut.

-----

#### 3\. Fungsi `dequeue` (Mengeluarkan Data)

Logika mengeluarkan data berfokus pada pergerakan penunjuk depan (`frontIndex`).

**Fase 1: Cek Apakah Kosong**

```cpp
if (isEmpty()) {
    cout << "Queue is empty\n";
    return;
}
```

  * Kita tidak bisa mengeluarkan data dari wadah kosong.
  * Jika `isEmpty()` benar, cetak pesan dan batalkan proses dengan `return`.

**Fase 2: Ambil Data (Simulasi)**

```cpp
cout << arr[frontIndex] << " dequeued\n";
```

  * Di sini program menampilkan data yang sedang ditunjuk oleh `frontIndex` (orang paling depan).

**Fase 3: Geser Penunjuk atau Reset**
Ini adalah bagian paling kritis dalam algoritma Queue.

```cpp
if (frontIndex == rearIndex) {
    // Kondisi: Antrean menjadi kosong kembali
    frontIndex = rearIndex = -1;
} else {
    // Kondisi: Masih ada orang di belakangnya
    frontIndex++;
}
```

  * **Kondisi Reset (`if`):**
    Kode memeriksa: "Apakah posisi Depan sama dengan posisi Belakang?".
    Jika mereka menunjuk angka yang sama (misal sama-sama di 2), berarti hanya tinggal 1 orang itu di antrean. Jika dia keluar, antrean habis.
    Maka, kode **mereset** kedua penunjuk kembali ke -1. Kembali ke kondisi awal.

  * **Kondisi Lanjut (`else`):**
    Jika posisi mereka beda (misal Depan di 0, Belakang di 2), berarti masih ada orang lain yang antre.
    Maka, `frontIndex` ditambah 1 (`++`). Penunjuk depan maju satu langkah meninggalkan kursi lamanya untuk melayani orang berikutnya.

-----

**Rangkuman Alur Kode:**

1.  **Cek Kondisi:** Selalu gunakan `isEmpty` atau `isFull` di awal untuk mencegah error.
2.  **Enqueue:** Fokus memajukan `rearIndex`. Kecuali jika data pertama, tarik juga `frontIndex` ke 0.
3.  **Dequeue:** Fokus memajukan `frontIndex`. Kecuali jika data terakhir, lempar balik keduanya ke -1 (Reset).
