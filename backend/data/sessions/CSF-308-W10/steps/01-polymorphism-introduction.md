# Pengenalan Polymorphism dalam Pemrograman Berorientasi Objek

Dokumen ini menjelaskan konsep polymorphism secara sederhana, menggunakan contoh yang relevan untuk pemula. Polymorphism adalah salah satu pilar utama dalam pemrograman berorientasi objek (OOP) yang memungkinkan sebuah metode memiliki perilaku berbeda tergantung pada objek yang menggunakannya.

---

## Apa Itu Polymorphism?

Polymorphism berasal dari kata "poly" (banyak) dan "morph" (bentuk). Dalam OOP, polymorphism berarti satu metode dapat memiliki banyak bentuk atau perilaku. Dengan kata lain:

Satu nama metode, namun implementasinya dapat berbeda-beda tergantung jenis objek yang memanggilnya.

Polymorphism sangat berguna untuk menyederhanakan kode, menghindari penggunaan banyak kondisi (seperti if-else), dan membuat program lebih mudah dikembangkan.

---

## Contoh Sederhana: Metode `speak()`

Bayangkan kita memiliki kelas dasar bernama `Animal` yang memiliki metode `speak()`. Lalu, beberapa kelas turunan seperti `Dog` dan `Cat` akan mengimplementasikan ulang metode tersebut sesuai karakteristik masing-masing.

### Kelas Dasar (Parent)

```java
class Animal {
    public void speak() {
        System.out.println("Animal makes a sound");
    }
}
```

### Kelas Turunan (Child) yang Mengoverride Metode

```java
class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("Woof woof");
    }
}

class Cat extends Animal {
    @Override
    public void speak() {
        System.out.println("Meow");
    }
}
```

### Penggunaan Polymorphism

```java
public class Main {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();

        a1.speak();  // Output: Woof woof
        a2.speak();  // Output: Meow
    }
}
```

Pada contoh di atas, walaupun kedua variabel (`a1` dan `a2`) sama-sama bertipe `Animal`, hasil pemanggilan `speak()` berbeda sesuai objek aktual yang digunakan (`Dog` atau `Cat`). Inilah polymorphism.

---

## Kapan Polymorphism Digunakan?

Polymorphism sangat bermanfaat ketika:

* Kita ingin menyederhanakan pemanggilan metode yang sifatnya sama, tetapi implementasinya berbeda.
* Kita ingin membuat kode yang fleksibel dan mudah dikembangkan.
* Kita ingin mengelompokkan objek yang berbeda namun memiliki perilaku yang serupa.

Contoh penggunaan umum di dunia nyata:

* Tombol interface yang semuanya memiliki metode `onClick()`, tetapi aksi yang dilakukan berbeda.
* Sistem pembayaran yang memiliki metode `pay()`, namun tiap metode pembayaran memiliki prosesnya masing-masing.
* Kendaraan yang memiliki metode `start()`, namun implementasinya berbeda antara mobil, motor, dan kapal.

---

## Summary

* Polymorphism memungkinkan satu metode memiliki banyak bentuk.
* Dengan polymorphism, sebuah metode pada parent class dapat diimplementasikan ulang oleh child class.
* Tujuan utama polymorphism adalah menyederhanakan kode, membuatnya lebih fleksibel, dan mengurangi logika pengkondisian yang berlebihan.

---

## Next Step

Langkah selanjutnya adalah mempelajari hubungan antara **inheritance** dan **polymorphism**, khususnya bagaimana pewarisan berperan penting dalam menyediakan struktur yang memungkinkan polymorphism bekerja secara efektif.

---
