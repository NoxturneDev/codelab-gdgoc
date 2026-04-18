# Step 1: Installasi Express.js + Prisma v6

Project ini adalah setup sederhana backend menggunakan Express.js dan Prisma ORM v6.

## 1. Prerequisites

Pastikan sudah install:
- Node.js (>= 20)
- npm
- Database (MySQL) => XAMPP/Laragon/MySQL Server

## 2. Init Project

```bash
npm init -y
```

## 3. Update Package.json

Agar bisa menggunakan syntax import, ubah konfigurasi berikut:

```json
"type": "module",
```

Ubah bagian scripts, untuk menyalakan hot reload:

```json
"scripts": {
  "dev": "nodemon index.js"
},
```

## 4. Install Dependencies

```bash
npm install express @prisma/client@6 @google/generative-ai dotenv
```

Lalu install dev dependencies:

```bash
npm install -D nodemon prisma@6
```

## 5. Setup Express Server

Buat file `index.js` lalu isi dengan kode berikut:

```javascript
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log("Hai");
});
```

## 6. Jalankan Server

```bash
npm run dev
```

Lalu buka browser ke halaman http://localhost:3000
