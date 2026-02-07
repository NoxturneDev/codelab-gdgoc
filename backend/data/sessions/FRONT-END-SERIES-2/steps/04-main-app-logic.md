# Langkah 4: Logic & Main UI (App.jsx)

Sekarang kita akan merakit semuanya di file utama. Kita akan membuat UI chatbot lengkap dengan state management menggunakan `useState`.

## 4.1 Import Dependencies

Buka file **`src/App.jsx`** dan hapus semua isinya, lalu mulai dengan import yang diperlukan:

```jsx
import { useState } from 'react';
import BubbleChat from './components/BubbleChat';
```

## 4.2 Setup State Management

Kita akan menggunakan beberapa state untuk mengelola aplikasi:

```jsx
function App() {
  // State untuk menyimpan semua pesan
  const [messages, setMessages] = useState([
    { text: "Halo! Saya Asisten AI. Ada yang bisa saya bantu?", sender: "Gemini AI", isAi: true }
  ]);

  // State untuk input text user
  const [inputValue, setInputValue] = useState("");

  // State untuk menampilkan animasi "AI sedang mengetik..."
  const [isTyping, setIsTyping] = useState(false);

  // State untuk menyimpan file gambar yang dipilih
  const [imageFile, setImageFile] = useState(null);

  // State untuk preview gambar sebelum dikirim
  const [imagePreview, setImagePreview] = useState(null);

  // ... handler functions akan ditambahkan di sini
}
```

### Penjelasan State

- **`messages`**: Array yang berisi semua pesan dalam chat
- **`inputValue`**: Menyimpan teks yang diketik user di input field
- **`isTyping`**: Boolean untuk menampilkan indikator "sedang mengetik..."
- **`imageFile`**: Menyimpan file gambar asli yang akan dikirim ke API
- **`imagePreview`**: URL preview gambar untuk ditampilkan sebelum dikirim

## 4.3 Handler untuk Upload Gambar

Tambahkan fungsi untuk menangani upload gambar:

```jsx
const handleImageChange = (e) => {
  const file = e.target.files?.[0];
  if (!file || !file.type.startsWith("image/")) return;

  const previewUrl = URL.createObjectURL(file);
  setImagePreview(previewUrl);
  setImageFile(file);
  e.target.value = ""; // Reset input
};
```

**Penjelasan:**
- Mengambil file pertama dari input
- Validasi apakah file adalah gambar
- Membuat URL preview menggunakan `URL.createObjectURL()`
- Menyimpan file dan preview URL ke state

## 4.4 Handler untuk Kirim Pesan

Tambahkan fungsi untuk mengirim pesan:

```jsx
const handleSend = (e) => {
  e.preventDefault();
  if (!inputValue.trim()) return;

  // Tambahkan pesan user ke messages
  const userMsg = {
    text: inputValue,
    sender: "You",
    isAi: false,
    imageUrl: imagePreview,
  };
  setMessages((prev) => [...prev, userMsg]);

  // Reset input dan preview
  setInputValue("");
  setImageFile(null);
  setImagePreview(null);

  // Simulasi AI response (sementara)
  setIsTyping(true);

  setTimeout(() => {
    const aiResponse = {
      text: "Pesan kamu diterima! Di langkah selanjutnya, kita akan hubungkan ini ke Gemini AI yang asli.",
      sender: "Gemini AI",
      isAi: true
    };
    setMessages((prev) => [...prev, aiResponse]);
    setIsTyping(false);
  }, 1500);
};
```

**Penjelasan:**
- Mencegah form submit default
- Membuat object pesan user dengan data teks dan gambar
- Menambahkan pesan ke array `messages`
- Reset semua input
- Simulasi response AI dengan delay 1.5 detik

## 4.5 Buat UI Lengkap

Sekarang buat return statement dengan UI lengkap:

```jsx
return (
  <div className="flex flex-col h-screen pb-3 mx-auto bg-white shadow-2xl border-x border-gray-200">

    {/* Header */}
    <div className="p-4 border-b bg-indigo-600 text-white flex items-center gap-3">
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">G</div>
      <div>
        <h1 className="font-semibold text-lg leading-none">AI Assistant</h1>
        <span className="text-[10px] text-green-300 font-bold tracking-widest uppercase">Online</span>
      </div>
    </div>

    {/* Chat Messages */}
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-2">
      {messages.map((msg, index) => (
        <BubbleChat key={index} {...msg} />
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="flex flex-col items-start mb-4">
          <span className="text-xs text-gray-500 ml-2 mb-1">Gemini AI sedang mengetik...</span>
          <div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
          </div>
        </div>
      )}
    </div>

    {/* Image Preview */}
    {imagePreview && (
      <div className="px-4 pt-2 flex items-center gap-2">
        <img
          src={imagePreview}
          alt="Preview"
          className="max-w-32 rounded-lg"
        />
        <button
          onClick={() => {
            setImagePreview(null);
            setImageFile(null);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-red-600 active:scale-95 transition-all shadow-md"
        >
          Hapus
        </button>
      </div>
    )}

    {/* Input Form */}
    <form onSubmit={handleSend} className="p-4 flex gap-2 bg-white">
      {/* Hidden File Input */}
      <input
        id="image-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      {/* Image Upload Button */}
      <label
        htmlFor="image-input"
        className="flex items-center justify-center size-10 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        🖼️
      </label>

      {/* Text Input */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Tulis pesan..."
        disabled={isTyping}
        className="flex-1 border text-black border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all disabled:bg-gray-100"
      />

      {/* Send Button */}
      <button
        type="submit"
        disabled={isTyping}
        className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md disabled:bg-indigo-300"
      >
        Kirim
      </button>
    </form>
  </div>
);
```

## 4.6 Export Component

Jangan lupa tambahkan export di akhir file:

```jsx
export default App;
```

---

✅ **UI dan Logic utama sudah selesai!** Sekarang kamu punya chatbot yang bisa menerima teks dan gambar, dengan animasi typing indicator. Di langkah berikutnya, kita akan integrasikan dengan Gemini AI yang sesungguhnya.
