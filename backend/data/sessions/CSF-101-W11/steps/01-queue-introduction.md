**1. Apa itu Queue? (Konsep FIFO)**
Queue adalah istilah teknis untuk antrean. Logikanya sangat sederhana dan persis seperti antrean di kasir minimarket.
Aturan utamanya adalah **FIFO: First In, First Out**.

* Data yang **pertama kali masuk**, harus menjadi data yang **pertama kali keluar**.
* Data yang baru datang tidak boleh menyelobot, dia harus berdiri di posisi paling belakang.

**2. Bagaimana Komputer Menyimpan Antrean?**
Dalam kode di atas, komputer menyiapkan sebuah deretan kotak kosong yang memanjang (disebut Array/Larik).
Bayangkan kita memiliki selembar kertas dengan 5 kotak kosong yang diberi nomor urut:
[Kotak 0] [Kotak 1] [Kotak 2] [Kotak 3] [Kotak 4]

Kita hanya bisa menaruh angka di dalam kotak-kotak ini. Jika kapasitasnya 5, kita tidak bisa menaruh orang ke-6.

**3. Kunci Utama: Dua Buah Penunjuk (Front & Rear)**
Bagaimana cara komputer tahu siapa yang harus dilayani dan siapa yang baru datang? Komputer tidak punya mata. Oleh karena itu, kita membutuhkan dua buah variabel bantuan (kita sebut saja sebagai "Penunjuk" atau "Jari Telunjuk").

Dalam algoritma ini, ada dua penunjuk yang sangat vital:

* **Front Index (Penunjuk Depan):**
    Ini bertugas menunjuk posisi orang yang **sedang dilayani** atau yang paling depan. Jika Front menunjuk ke Kotak 0, berarti orang di Kotak 0 adalah giliran berikutnya untuk keluar.

* **Rear Index (Penunjuk Belakang):**
    Ini bertugas menunjuk posisi orang yang **terakhir kali masuk**. Jika ada orang baru datang, penunjuk Rear ini akan bergeser mundur ke kotak berikutnya untuk mempersiapkan tempat bagi orang baru tersebut.

**4. Kondisi Awal (Mengapa -1?)**
Ini adalah bagian yang paling penting untuk dipahami sebelum antrean dimulai.

Ketika antrean baru dibuka (belum ada satu pun angka yang masuk), di mana posisi **Front** dan **Rear**?

Ingat bahwa kotak dimulai dari nomor 0.

* Jika kita atur penunjuk ke 0, komputer akan mengira sudah ada orang di kotak nomor 0.
* Oleh karena itu, untuk menandakan **KOSONG**, kita atur posisi Front dan Rear di angka **-1**.

Angka -1 hanyalah sebuah kode atau simbol bagi komputer yang artinya "Penunjuk ini belum menunjuk ke kotak mana pun" atau "Antrean sedang kosong melompong".

**Rangkuman Langkah 1:**
Secara logika, kita telah menyiapkan:

1. Deretan 5 kotak kosong (Array) untuk menampung data.
2. Dua penunjuk (`Front` dan `Rear`) yang saat ini sama-sama bernilai **-1**.
3. Nilai -1 ini menandakan bahwa belum ada aktivitas apa pun, dan antrean siap menerima data pertama.

Jika konsep "Kotak" dan "Dua Penunjuk" ini sudah dipahami, kita bisa lanjut ke Langkah 2 untuk melihat bagaimana logika pergerakan penunjuk tersebut saat ada data masuk dan keluar.
