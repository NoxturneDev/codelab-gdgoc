# Step 3 Membuat schema database melalui prisma

## 1. Mmebuat Schema/Tabel

Ubah bagian provider di generator client menjadi "prisma-client-js"

```js
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}
```

Buka file schema.prisma lalu paste kode ini

```js
model Todo {
  id        Int      @id @default(autoincrement())
  title     String
  isDone    Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

## 2. Membuat prisma migration

Buka terminal lalu jalankan perintah

```bash
npx prisma migrate dev
```

Lalu jalankan

```bash
npx prisma generate
```

## 3. Buat PrismaClient instance

Buat file PrismaClient.js di folder prisma/

```bash
prisma/
├── migrations/
├── PrismaClient.js
└── schema.prisma
```

Lalu isi dengan kode di bawah untuk membuat instance prisma client

```js
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export default prisma;
```
