# Kaitan Antara Inheritance dan Polymorphism dalam OOP

Dokumen ini menjelaskan hubungan antara dua konsep fundamental dalam pemrograman berorientasi objek (OOP): **inheritance (pewarisan)** dan **polymorphism (perilaku beragam)**. Keduanya saling melengkapi dan bekerja bersama untuk menghasilkan kode yang lebih terstruktur, fleksibel, dan mudah dikembangkan.

---

## Apa Itu Inheritance?

Inheritance adalah mekanisme di mana sebuah kelas dapat mewarisi atribut dan metode dari kelas lain.  
Tujuan utamanya adalah:

- menghindari duplikasi kode  
- menciptakan struktur hierarki  
- memudahkan pengembangan fitur baru  

Contoh sederhana:

```java
class Vehicle {
    public void start() {
        System.out.println("Vehicle is starting");
    }
}
```

Kelas turunan:

```java
class Car extends Vehicle {
}

class Motorcycle extends Vehicle {
}
```

Kedua kelas `Car` dan `Motorcycle` otomatis mewarisi metode `start()`.

---

## Hubungan Dasar: Mengapa Polymorphism Membutuhkan Inheritance?

Polymorphism *bergantung* pada inheritance.  
Polymorphism hanya bisa terjadi jika:

1. Ada **parent class**  
2. Ada **child class** yang mewarisi parent  
3. Child class **meng-override** metode parent  

Dengan kata lain:

Tanpa inheritance, polymorphism tidak dapat bekerja.

Contoh:

```java
class Vehicle {
    public void start() {
        System.out.println("Vehicle is starting");
    }
}
```

Child class mengoverride metode:

```java
class Car extends Vehicle {
    @Override
    public void start() {
        System.out.println("Car engine starts with key");
    }
}

class Motorcycle extends Vehicle {
    @Override
    public void start() {
        System.out.println("Motorcycle starts with button");
    }
}
```

Pemanggilan polymorphism:

```java
public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Car();
        Vehicle v2 = new Motorcycle();

        v1.start();   // Car engine starts with key
        v2.start();   // Motorcycle starts with button
    }
}
```

Meskipun kedua variabel bertipe `Vehicle`, hasilnya berbeda berdasarkan objek aktual.  
Polymorphism terjadi karena inheritance menyediakan hubungan kelas yang memungkinkan override.

---

## Peran Inheritance dalam Mewujudkan Polymorphism

### 1. Menentukan struktur dasar

Inheritance memberikan “kerangka” berupa metode umum yang dapat dipakai oleh child class.

Tanpa parent class yang memiliki metode, child class tidak punya metode untuk di-override.

### 2. Memungkinkan metode overriding

Inheritance membuat child class dapat mengganti implementasi metode dari parent.

Overriding adalah inti dari polymorphism.

### 3. Memungkinkan penggunaan referensi bertipe parent

Salah satu manfaat terbesar polymorphism adalah:

```java
Vehicle x = new Car();
```

Hal ini hanya mungkin karena `Car` merupakan turunan dari `Vehicle`.

Jika tidak ada inheritance, hal ini tidak dapat dilakukan.

### 4. Menyederhanakan interaksi antar objek

Dengan inheritance, objek yang berbeda jenis dapat diperlakukan sebagai satu tipe umum.

Contoh:

```java
List<Vehicle> list = new ArrayList<>();
list.add(new Car());
list.add(new Motorcycle());
```

Kode seperti ini hanya mungkin karena inheritance memungkinkan polymorphism digunakan dalam struktur data.

---

## Contoh Praktis yang Mudah Dipahami

Bayangkan sebuah sistem untuk menyalakan berbagai jenis perangkat elektronik.

Parent class:

```java
class Device {
    public void turnOn() {
        System.out.println("Device is turning on");
    }
}
```

Child class:

```java
class TV extends Device {
    @Override
    public void turnOn() {
        System.out.println("TV is turning on with remote");
    }
}

class Radio extends Device {
    @Override
    public void turnOn() {
        System.out.println("Radio is turning on with button");
    }
}
```

Pemanggilan polymorphism:

```java
public void turnOnAll(Device device) {
    device.turnOn();
}
```

Kini semua objek dapat digunakan dengan satu metode yang sama berkat inheritance + polymorphism.

---

## Summary

- Inheritance memungkinkan sebuah kelas menurunkan atribut dan metode ke kelas turunan.
- Polymorphism memungkinkan kelas turunan mengubah perilaku metode yang diwariskan.
- Polymorphism **hanya dapat terjadi** jika ada hubungan inheritance.
- Inheritance memberikan struktur, sedangkan polymorphism memberikan variasi perilaku.
- Kombinasi keduanya menghasilkan kode yang fleksibel, mudah dikembangkan, dan dapat diperluas tanpa merusak struktur utama.

---
