# Langkah 2: Konfigurasi Tailwind CSS

Tailwind CSS adalah utility-first CSS framework yang memungkinkan kita membuat tampilan yang cantik tanpa menulis CSS manual yang panjang.

➡️ [Dokumentasi Tailwind CSS (Vite)](https://tailwindcss.com/docs/installation/using-vite)

## 2.1 Install Tailwind CSS

Jalankan command berikut untuk menginstall Tailwind CSS dan plugin Vite-nya:

```bash
npm install tailwindcss @tailwindcss/vite
```

## 2.2 Konfigurasi Vite

Buka file **`vite.config.js`** di root project kamu.

### Import plugin Tailwind

Tambahkan import di bagian atas file:

```javascript
import tailwindcss from '@tailwindcss/vite'
```

### Tambahkan plugin ke konfigurasi

Di dalam array `plugins`, tambahkan `tailwindcss()`:

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()], // Tambahkan tailwindcss() di sini
})
```

**File lengkapnya akan terlihat seperti ini:**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 2.3 Konfigurasi CSS

Buka file **`src/index.css`** dan **hapus semua isinya**, lalu ganti dengan:

```css
@import "tailwindcss";
```

Hanya satu baris! Ini adalah cara modern untuk mengimport Tailwind CSS di Vite.

## 2.4 Install Tailwind CSS IntelliSense (Extension)

Agar kamu mendapat autocomplete untuk class Tailwind di VS Code:

1. Buka tab **Extensions** (atau tekan **CTRL+SHIFT+X**)
2. Cari **"Tailwind CSS IntelliSense"**
3. Klik **Install**

Extension ini akan memberikan autocomplete, syntax highlighting, dan linting untuk class Tailwind CSS.

## 2.5 Test Tailwind CSS

Buka file **`src/App.jsx`** dan coba tambahkan beberapa class Tailwind untuk testing:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-indigo-600">
        Tailwind CSS Works! 🎉
      </h1>
    </div>
  )
}

export default App
```

Jalankan development server:

```bash
npm run dev
```

Buka browser dan cek apakah styling Tailwind sudah berjalan dengan baik.

---

✅ **Tailwind CSS berhasil dikonfigurasi!** Di langkah berikutnya, kita akan mulai membuat komponen chatbot yang sesungguhnya.
