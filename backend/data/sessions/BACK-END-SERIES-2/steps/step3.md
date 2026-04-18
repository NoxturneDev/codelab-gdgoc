# Step 3: Setup Prisma & Database

## 1. Inisialisasi Prisma

```bash
npx prisma init --datasource-provider mysql
```

Setelah ini akan muncul folder `prisma/` dan file `.env`

Jika ada file `prisma.config.ts` di project kamu, hapus file tersebut (tidak diperlukan untuk Prisma v6).

## 2. Konfigurasi Database

Buka file `.env`, lalu sesuaikan URL database:

Jika DB pakai password:
```
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/nama_database"
```

Jika DB tidak pakai password (contoh XAMPP):
```
DATABASE_URL="mysql://root@localhost:3306/nama_database"
```

## 3. Buat Model Chat

Di file `prisma/schema.prisma`, lakukan perubahan berikut:

### a. Cek Generator
Pastikan bagian `generator client` seperti ini:
```prisma
generator client {
  provider = "prisma-client-js"
}
```

### b. Tambahkan Model
Di bawah bagian `datasource`, tambahkan model Chat:
```prisma
model Chat {
  id        Int      @id @default(autoincrement())
  prompt    String   @db.Text
  response  String   @db.Text
  createdAt DateTime @default(now())
}
```

## 4. Buat Database

Buka phpMyAdmin, lalu buat database baru sesuai nama yang kamu tulis di `schema.prisma`

Contoh: `nama_database`

## 5. Jalankan Migration

```bash
npx prisma migrate dev --name init
```

Perintah ini akan membuat table `Chat` di database.

## 6. Generate Prisma Client

```bash
npx prisma generate
```

Perintah ini akan generate Prisma Client yang dibutuhkan untuk akses database dari kode.

## 7. Cek Database

Buka phpMyAdmin, cek apakah table `Chat` sudah muncul dengan kolom:
- id
- prompt
- response
- createdAt

## Tips
- Pastikan MySQL server sudah running (XAMPP/Laragon)
- Nama database di `schema.prisma` harus sama dengan yang dibuat di phpMyAdmin
- Jika ada error, cek kembali username, password, dan nama database
