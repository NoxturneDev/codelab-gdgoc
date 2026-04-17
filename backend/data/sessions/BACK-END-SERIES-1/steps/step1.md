# Step 1 Installasi Express.js + Prisma v6 

Project ini adalah setup sederhana backend menggunakan **Express.js** dan **Prisma ORM v6**.

---

## 1. Prerequisites

Pastikan sudah install:

- Node.js (>= 20)
- npm
- Database (MySQL) => XAMPP/Laragon/Mysql Server

---

## 2. Init Project

```bash
npm init -y
```

## 3. Install Dependencies

```bash
npm install express dotenv @prisma/client@6
```

Lalu install prisma sebagai dev dependency

```bash
npm install --save-dev prisma@6 nodemon
```

## 4. Inisialisasi Prisma Client

```bash
npx prisma init --datasource-provider mysql
```

Setelah ini akan muncul folder prisma/ dan file .env

## 5. Konvigurasi Environment

Buka file .env, lalu sesuaikan koneksi database kamu

### Jika DB kamu pakai password

```bash
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/nama_database"
```

### Jika DB kamu tidak pakai password

```bash
DATABASE_URL="mysql://USER@localhost:3306/nama_database"
```

## 6. Update Package.json

Agar bisa menggunakan syntax import, ubah konfigurasi berikut:

```json
"type": "module",
```

Ubah bagian scripts, untuk menyalakan hot reload

```json
  "scripts": {
    "dev": "nodemon index.js"
  },
```

## 7. Setup Express Server

Buat file index.js lalu isi dengan kode berikut

```js
import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## 8. Jalankan server dengan perintah:

```bash
npm run dev
```

Lalu buka browser ke halaman http://localhost:3000
