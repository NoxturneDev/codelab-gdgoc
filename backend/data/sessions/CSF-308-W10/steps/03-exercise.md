# Latihan Polymorphism

Dokumen ini berisi latihan untuk membantu Anda memahami dan menerapkan konsep polymorphism dalam pemrograman berorientasi objek. Latihan-latihan ini dirancang untuk pemula, namun cukup kuat untuk mengukur penguasaan konsep dan kemampuan mengintegrasikannya ke dalam proyek akhir.

---

## Tujuan Pembelajaran

Setelah menyelesaikan sesi latihan ini, peserta diharapkan dapat:

- memahami konsep polymorphism dan bagaimana ia bekerja melalui inheritance  
- membuat hierarki class sederhana yang memanfaatkan method overriding  
- menerapkan polymorphism dalam situasi dunia nyata  
- menambahkan fitur polymorphism pada project akhir sebagai evaluasi kemampuan  

---

# Bagian 1: Latihan Dasar

Latihan-latihan ini bertujuan memastikan bahwa peserta memahami konsep fundamental polymorphism menggunakan contoh sederhana.

---

## Latihan 1: Membuat Hierarki Class dan Overriding

Buat struktur class berikut:

- Class `Printer` (parent)  
- Class `InkjetPrinter` (child)  
- Class `LaserPrinter` (child)  

Instruksi:

1. Di dalam class `Printer`, buat metode:

   ```java
   public void print() {
       System.out.println("Printing using a generic printer");
   }
   ```

2. Override metode `print()` di masing-masing class child:
   - InkjetPrinter → "Printing with inkjet technology"
   - LaserPrinter → "Printing with laser technology"
3. Buat class `Main` dan buat objek menggunakan referensi `Printer`:

   ```java
   Printer p1 = new InkjetPrinter();
   Printer p2 = new LaserPrinter();
   ```

4. Panggil metode `print()` untuk masing-masing objek dan lihat hasilnya.

Tujuan: memahami bagaimana overriding menghasilkan perilaku berbeda.

---

## Latihan 2: Menambah Class Baru Tanpa Mengubah Kode Lama

Tambahkan class `DotMatrixPrinter` yang juga extends `Printer`.

Override metode `print()` dengan output:

```
Printing using dot-matrix technology
```

Instruksi:

1. Tambahkan class baru.
2. Masukkan ke dalam list `printers` dari latihan sebelumnya.
3. Jalankan kembali loop.

Tujuan: memahami extensibility dalam polymorphism (kode lama tidak perlu diubah).

---

# Bagian 2: Latihan Menengah – Studi Kasus Sederhana

## Studi Kasus: Sistem Notifikasi

Buat sistem notifikasi dengan struktur berikut:

Parent:  

- `Notification` dengan metode:

  ```java
  public void send() {
      System.out.println("Sending a generic notification");
  }
  ```

Children:

- `EmailNotification`  
- `SMSNotification`  
- `PushNotification`  

Instruksi:

1. Override metode `send()` pada masing-masing class.
2. Buat metode:

   ```java
   public static void broadcast(Notification n) {
       n.send();
   }
   ```

3. Panggil metode broadcast dengan berbagai jenis notifikasi.

Tujuan: memahami bagaimana polymorphism menyederhanakan interaksi antar objek.

---

# Bagian 3: Tugas Evaluasi – Integrasi Polymorphism ke Project Akhir

Pada bagian ini, peserta diminta untuk menambahkan polymorphism ke dalam **project akhir** yang sudah dibuat sebelumnya. Tujuannya untuk mengukur kemampuan penerapan konsep, tidak hanya pembuatan contoh sederhana.

Isi bagian ini dengan rinci agar instruktur dapat mengukur kompetensi secara objektif.

---

## Instruksi Implementasi Polymorphism pada Project Akhir

Setiap peserta wajib:

### 1. Identifikasi minimal 1 fitur dalam project yang dapat dibuat polymorphic

Contoh area yang cocok:

- Sistem notifikasi  
- Sistem login atau user role  
- Sistem proses data  
- Sistem menu  
- Item/objek yang memiliki aksi serupa  
- Command atau perintah  
- Output ke berbagai tujuan (terminal, file, atau UI)  

Instruktur dapat meminta peserta menjelaskan alasannya.

---

### 2. Buat parent class atau interface sebagai dasar polymorphism

Contohnya:  

- `Exporter`  
- `Handler`  
- `Operation`  
- `Service`  
- `Renderer`  
- `Processor`  

Pastikan parent class memiliki minimal satu metode yang akan dioverride.

---

### 3. Tambahkan minimal dua class turunan

Contoh:

- `FileExporter` dan `PdfExporter`  
- `AdminUser` dan `GuestUser`  
- `LocalHandler` dan `RemoteHandler`  

Masing-masing harus memiliki implementasi yang berbeda.

---

### 4. Implementasikan overriding

Contoh:

```java
@Override
public void execute() {
    System.out.println("Executing for admin user");
}
```

---

### 5. Gunakan polymorphism dalam alur program utama

Instruksi:

- Instance harus dibuat menggunakan referensi parent (contoh: `Handler h = new RemoteHandler();`)
- Metode parent harus menghasilkan perilaku berbeda tergantung class turunan
- Polymorphism harus masuk dalam alur logika aplikasi, bukan sekadar contoh kecil di luar aplikasi

---

### 6. Buat minimal satu fitur di mana menambah class baru tidak perlu mengubah kode lama

Contoh:  
Menambah jenis exporter baru tanpa mengubah fungsi utama yang memanggilnya.

Tujuan: menguji pemahaman extensibility.

---

### 7. Buat dokumentasi singkat

Peserta harus menjelaskan:

- di mana polymorphism diterapkan  
- class mana yang menjadi parent  
- class mana yang menjadi child  
- bagaimana program memanfaatkan polymorphism  
- mengapa implementasi tersebut membuat kode lebih mudah dikembangkan  

---

# Summary

Latihan ini dirancang untuk memastikan peserta:

- memahami mekanisme overriding  
- mampu membuat struktur class polymorphic  
- mampu menerapkan polymorphism dalam project nyata  
- dapat membuat kode yang extensible dan mudah dikembangkan  
