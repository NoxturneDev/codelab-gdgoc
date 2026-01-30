## Langkah 2: Konfigurasi Tailwind CSS

Agar tampilan chatbot kita cantik dan modern tanpa perlu menulis file CSS manual yang panjang, kita akan menggunakan Tailwind CSS.

### 1. Install Tailwind CSS

Jalankan perintah berikut di terminal (pastikan kamu masih berada di dalam folder `frontend-series`):

```bash
# Install Tailwind CSS dan tools pendukungnya
npm install tailwindcss @tailwindcss/vite

```

### 2. Tambahkan plugin @tailwindcss/vite ke konfigurasi Vite (vite.config.js)

```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
        react(),
        tailwindcss(),
    ],
})
```

### 3. Tambahkan @import ke file index.css yang mengimpor Tailwind CSS

```bash
@import "tailwindcss";

## Kamu bisa hapus semua styling bawaan di index.css agar kita bisa custom sendiri
```
