# Langkah 3: Mengintip Data dan Menjalankan Program (Main)

Di tahap ini, kita mempelajari cara melihat siapa yang ada di antrean tanpa mengusirnya, serta bagaimana kita menggunakan alat `Queue` yang sudah kita rakit.

#### 1\. Fungsi `front()` (Mengintip Data Terdepan)

Berbeda dengan `dequeue` yang memanggil orang dan menyuruhnya pergi, fungsi `front` hanya ingin tahu: "Siapa sih yang ada di urutan pertama sekarang?" tanpa mengubah antrean.

```cpp
int front() {
    if (!isEmpty()) {
        return arr[frontIndex];
    }
    cout << "Queue is empty\n";
    return -1;
}
```

  * **Cek Kosong:** Selalu pastikan antrean ada isinya dengan `!isEmpty()` (Tanda seru artinya "Tidak").
  * **Ambil Data:** Kode mengembalikan nilai `arr[frontIndex]`.
  * **Perbedaan Utama:** Perhatikan bahwa di sini **tidak ada** perintah `frontIndex++`. Penunjuk depan tidak bergerak. Kita hanya melihat datanya saja.

#### 2\. Fungsi `checkElement` (Melihat Isi Kotak Tertentu)

Ini adalah fungsi tambahan untuk memeriksa isi kotak nomor sekian secara manual.

```cpp
void checkElement(int i) {
    if (isEmpty()) {
        // ... pesan kosong ...
        return;
    }
    cout << arr[i] << endl;
}
```

  * Fungsi ini menerima angka `i` (nomor kotak).
  * Lalu ia mencetak isi dari `arr[i]`. Ini berguna untuk debugging (pengecekan) jika kita ingin melihat isi memori secara langsung.

-----

#### 3\. Fungsi `main()` (Pusat Kendali)

Ini adalah bagian di mana semua komponen disatukan dan dijalankan. Di sinilah program sesungguhnya bermula. Mari kita bedah skenario yang terjadi di dalam `main`.

**Adegan 1: Membangun Loket**

```cpp
Queue q(5);
```

  * Kita menciptakan antrean baru bernama `q` dengan kapasitas **5 kursi**.
  * Saat ini: `arr` kosong, `frontIndex` = -1, `rearIndex` = -1.

**Adegan 2: Pelanggan Datang (Enqueue)**

```cpp
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
```

  * **10 Masuk:** Antrean kosong. `front` jadi 0, `rear` jadi 0. Kotak[0] = 10.
  * **20 Masuk:** `rear` maju ke 1. Kotak[1] = 20.
  * **30 Masuk:** `rear` maju ke 2. Kotak[2] = 30.
  * **40 Masuk:** `rear` maju ke 3. Kotak[3] = 40.
  * *Posisi Saat Ini:* `front` di 0 (menunjuk 10), `rear` di 3 (menunjuk 40).

**Adegan 3: Mengintip dan Memeriksa**

```cpp
cout << "Front element: " << q.front() << endl;
```

  * Layar akan menampilkan **10**, karena 10 ada di posisi `front` (indeks 0). Penunjuk tidak berubah.

<!-- end list -->

```cpp
for (int i = 0; i <= 5; i++) {
    q.checkElement(i);
}
```

  * Kode ini melakukan perulangan (looping) untuk mengintip isi kotak nomor 0 sampai 5 secara paksa. Kita akan melihat angka 10, 20, 30, 40 berurutan.

**Adegan 4: Pelanggan Dilayani (Dequeue)**

```cpp
q.dequeue(); // Mengeluarkan 10
q.dequeue(); // Mengeluarkan 20
q.dequeue(); // Mengeluarkan 30
```

  * **Hapus 10:** `front` maju dari 0 ke 1. Sekarang orang terdepan adalah 20.
  * **Hapus 20:** `front` maju dari 1 ke 2. Sekarang orang terdepan adalah 30.
  * **Hapus 30:** `front` maju dari 2 ke 3. Sekarang orang terdepan adalah 40.
  * *Posisi Saat Ini:* `front` di 3 (menunjuk 40), `rear` di 3 (menunjuk 40).

**Adegan 5: Percobaan Terakhir**

```cpp
q.dequeue(); // Mengeluarkan 40 (Data terakhir)
```

  * Saat 40 dikeluarkan, komputer melihat `front` sudah sama dengan `rear` (sama-sama 3).
  * Maka, **Reset** terjadi. `front` dan `rear` dikembalikan ke **-1**. Antrean kosong total.

-----

### Kesimpulan Akhir

Algoritma Queue yang Anda pelajari ini adalah simulasi manajemen memori yang sangat efisien.

1.  **Start:** Kita siapkan Array dan set penunjuk ke -1.
2.  **Masuk:** Geser penunjuk Belakang (`rear`), isi datanya.
3.  **Keluar:** Geser penunjuk Depan (`front`), data dianggap hilang.
4.  **Reset:** Jika Depan mengejar Belakang, kembalikan semua ke -1.

Dengan memahami logika pergerakan dua penunjuk ini, Anda sudah memahami dasar dari struktur data antrean yang digunakan dalam sistem komputer (seperti antrean printer atau playlist lagu).
