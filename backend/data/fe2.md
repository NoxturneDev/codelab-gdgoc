Setup Project React + Vite

➡️[Node.JS (>= 20.x) (https://nodejs.org/en/download)](https://nodejs.org/en/download)

Buka VSCODE > tab [File] > Open Folder (shortcut win: CTRL+M+O) > Create new folder > contoh nama "frontend-series-2" > select folder tersebut

tab [Terminal] > New Terminal (shortcut win: CTRL+SHIFT+`) > copas

➡️[React (Vite) (https://vite.dev/guide)](https://vite.dev/guide)

```
npm create vite@latest .
```

kalo diminta install create-vite (y) enter aje
framework: react pastinya
variant: javascript biar ga teler
rolldown: skip (no)
install with npm and run: no

install package/resources yang dibutuhni

```
npm install
```

install tailwind

➡️[Tailwind CSS (https://tailwindcss.com/docs/installation/using-vite)](https://tailwindcss.com/docs/installation/using-vite)

```
npm install tailwindcss @tailwindcss/vite
```

Add the @tailwindcss/vite plugin to your Vite configuration.

`vite.config.js`

```
import tailwindcss from '@tailwindcss/vite'
```

```
tailwindcss()
```

Add an @import to your CSS file that imports Tailwind CSS.

`src/index.css`
apus aja semua ganti yang dibawah

```
@import "tailwindcss";
```

jalanin development server

```
npm run dev
```

install tailwind extension
tab [Extensions] (shortcut win: CTRL+SHIFT+X) > cari "Tailwind CSS IntelliSense" > install

lanjutin dari fe-1

`src/components/BubbleChat.jsx`

```
import React from 'react';

const BubbleChat = ({ text, sender, isAi }) => {
  return (
    <div className={`flex w-full mb-4 ${isAi ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
        isAi
        ? 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
        : 'bg-indigo-600 text-white rounded-tr-none'
      }`}>
        <p className="text-[10px] font-bold uppercase mb-1 opacity-60">
          {sender}
        </p>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default BubbleChat;
```

`src/App.jsx`

```
import { useState } from 'react';
import BubbleChat from './components/BubbleChat';

function App() {
 const [messages, setMessages] = useState([
    { text: "Halo! Saya Asisten AI. Ada yang bisa saya bantu?", sender: "Gemini AI", isAi: true }
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { text: inputValue, sender: "You", isAi: false };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        text: "Pesan kamu diterima! Di Workshop Series #2, kita akan hubungkan ini ke Gemini AI yang asli.",
        sender: "Gemini AI",
        isAi: true
      };
      setMessages((prev) => [...prev, aiResponse]);

      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen pb-3 mx-auto bg-white shadow-2xl border-x border-gray-200">   {/* Tambahkan max-w-lg jika diperlukan ya*/}

      <div className="p-4 border-b bg-indigo-600 text-white flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">G</div>
        <div>
          <h1 className="font-semibold text-lg leading-none">AI Assistant</h1>
          <span className="text-[10px] text-green-300 font-bold tracking-widest uppercase">Online</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-2">
        {messages.map((msg, index) => (
          <BubbleChat key={index} {...msg} />
        ))}

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

      <form onSubmit={handleSend} className="p-4 flex gap-2 bg-white">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tulis pesan..."
          disabled={isTyping}
          className="flex-1 border text-black border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all disabled:bg-gray-100"
        />
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
}

export default App;
```

nambahin input field buat gambar

```
<input
    id="image-input"
    type="file"
    accept="image/*"
    className="hidden"
    onChange={handleImageChange}
/>
<label
    htmlFor="image-input"
    className="flex items-center justify-center size-10 rounded-full border border-gray-300"
>
    🖼️
</label>
```

nambahin state dan handler

```
const [imageFile, setImageFile] = useState(null)
const [imagePreview, setImagePreview] = useState(null)

const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.startsWith("image/")) return

    const previewUrl = URL.createObjectURL(file)
    setImagePreview(previewUrl)
    setImageFile(file)
    e.target.value = ""
}
```

tampilin preview sebelum kirim

```
{imagePreview && (
    <div className="px-4 pt-2 flex items-center gap-2">
        <img
            src={imagePreview}
            alt="Preview"
            className="max-w-32 rounded-lg"
        />
        <button
            onClick={() => {
                setImagePreview(null)
                setImageFile(null)
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-red-600 active:scale-95 transition-all shadow-md disabled:bg-red-300"
        >
            Hapus
        </button>
    </div>
)}
```

simpan preview saat kirim gambar

```
const userMsg = {
    text: inputValue,
    sender: "You",
    isAi: false,
    imageUrl: imagePreview,
}
```

hapus preview gambar setelah kirim

```
setImageFile(null)
setImagePreview(null)
```

tampilkan preview di bubble chat

```
{imageUrl && (
    <img
        src={imageUrl}
        alt="Image"
        className="max-w-32 rounded-lg mt-2"
    />
)}
```

Endpoint

```
https://api.ym-api.cloud/api/ai/chat
```

➡️[Google AI Studio (https://aistudio.google.com/api-keys)](https://aistudio.google.com/api-keys)

buat FormData untuk request body

```
const formData = new FormData()
formData.append("prompt", inputValue)
if (imageFile) {
    formData.append("image", imageFile)
}
```

kirim request ke api, tampilkan response

```
const res = await fetch("XXX", {
    method: "POST",
    headers: {
        "api-key": "XXX",
    },
    body: formData,
})
const reply = await res.json()

const aiResponse = {
    text: reply.data,
    sender: "Gemini AI",
    isAi: true,
}
setMessages((prev) => [...prev, aiResponse])
setIsTyping(false)
```
