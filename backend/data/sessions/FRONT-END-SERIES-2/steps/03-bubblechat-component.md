# Langkah 3: Membuat Komponen BubbleChat

Dalam React, kita memecah UI menjadi komponen-komponen kecil yang reusable (dapat digunakan berulang kali). Kita akan membuat komponen `BubbleChat` untuk menampilkan pesan dalam bentuk bubble/balon chat.

## 3.1 Buat Folder Components

Buat folder baru bernama **`components`** di dalam folder **`src`**:

```
src/
  ├── components/
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

## 3.2 Buat File BubbleChat.jsx

Buat file baru **`src/components/BubbleChat.jsx`** dan masukkan kode berikut:

```jsx
import React from "react"

const BubbleChat = ({ text, sender, isAi }) => {
  return (
    <div
      className={`flex w-full mb-4 ${isAi ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
          isAi
            ? "bg-white text-gray-800 rounded-tl-none border border-gray-200"
            : "bg-indigo-600 text-white rounded-tr-none"
        }`}
      >
        <p className="text-[10px] font-bold uppercase mb-1 opacity-60">
          {sender}
        </p>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

export default BubbleChat
```

## 3.3 Penjelasan Komponen

### Props yang Diterima

Komponen ini menerima 4 props:

- **`text`**: Isi pesan yang akan ditampilkan
- **`sender`**: Nama pengirim pesan (misalnya: "You" atau "Gemini AI")
- **`isAi`**: Boolean untuk menentukan apakah pesan dari AI atau user

### Styling Dinamis

```jsx
className={`flex w-full mb-4 ${isAi ? 'justify-start' : 'justify-end'}`}
```

- Jika **`isAi = true`** → bubble muncul di sebelah kiri (`justify-start`)
- Jika **`isAi = false`** → bubble muncul di sebelah kanan (`justify-end`)

```jsx
className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
  isAi
  ? 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
  : 'bg-indigo-600 text-white rounded-tr-none'
}`}
```

- Pesan AI: **background putih**, teks hitam, tanpa rounded di kiri atas
- Pesan User: **background indigo**, teks putih, tanpa rounded di kanan atas

### Tampilan Gambar (Opsional)

```jsx
{
  imageUrl && (
    <img src={imageUrl} alt="Image" className="max-w-32 rounded-lg mt-2" />
  )
}
```

---

✅ **Komponen BubbleChat sudah siap!** Di langkah berikutnya, kita akan membuat logic utama aplikasi di `App.jsx` untuk menampilkan dan mengelola pesan.
