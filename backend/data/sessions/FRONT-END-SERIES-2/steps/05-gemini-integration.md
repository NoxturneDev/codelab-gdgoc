# Langkah 5: Integrasi dengan Gemini AI API

Sekarang saatnya menghubungkan chatbot kita dengan Gemini AI yang sesungguhnya! Kita akan menggunakan API endpoint yang sudah disiapkan untuk berkomunikasi dengan Google Gemini.

## 5.1 Dapatkan API Key

Sebelum mulai, kamu perlu mendapatkan API Key dari Google AI Studio:

➡️ [Google AI Studio - API Keys](https://aistudio.google.com/api-keys)

1. Login dengan akun Google
2. Klik **"Create API Key"**
3. Simpan API Key yang diberikan (jangan bagikan ke siapapun!)

## 5.2 Informasi API Endpoint

Kita akan menggunakan endpoint berikut:

```
https://api.ym-api.cloud/api/ai/chat
```

**Method:** `POST`

**Headers:**
- `api-key`: API Key kamu dari Google AI Studio

**Body (FormData):**
- `prompt`: Teks pesan dari user
- `image`: File gambar (opsional)

## 5.3 Update Handler `handleSend`

Buka kembali **`src/App.jsx`** dan ganti fungsi `handleSend` dengan kode berikut:

```jsx
const handleSend = async (e) => {
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

  // Simpan inputValue sebelum di-reset
  const prompt = inputValue;

  // Reset input dan preview
  setInputValue("");
  const currentImageFile = imageFile;
  setImageFile(null);
  setImagePreview(null);

  // Tampilkan typing indicator
  setIsTyping(true);

  try {
    // Buat FormData untuk request body
    const formData = new FormData();
    formData.append("prompt", prompt);

    if (currentImageFile) {
      formData.append("image", currentImageFile);
    }

    // Kirim request ke API
    const res = await fetch("https://api.ym-api.cloud/api/ai/chat", {
      method: "POST",
      headers: {
        "api-key": "GANTI_DENGAN_API_KEY_KAMU", // ⚠️ Ganti dengan API Key kamu!
      },
      body: formData,
    });

    // Parse response
    const reply = await res.json();

    // Tambahkan response AI ke messages
    const aiResponse = {
      text: reply.data,
      sender: "Gemini AI",
      isAi: true,
    };
    setMessages((prev) => [...prev, aiResponse]);

  } catch (error) {
    // Handle error
    console.error("Error:", error);

    const errorResponse = {
      text: "Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi.",
      sender: "Gemini AI",
      isAi: true,
    };
    setMessages((prev) => [...prev, errorResponse]);
  } finally {
    // Sembunyikan typing indicator
    setIsTyping(false);
  }
};
```

## 5.4 Penjelasan Kode

### FormData untuk Multipart Request

```jsx
const formData = new FormData();
formData.append("prompt", prompt);
if (currentImageFile) {
  formData.append("image", currentImageFile);
}
```

FormData digunakan untuk mengirim data multipart (teks + file gambar).

### Fetch API dengan Headers

```jsx
const res = await fetch("https://api.ym-api.cloud/api/ai/chat", {
  method: "POST",
  headers: {
    "api-key": "GANTI_DENGAN_API_KEY_KAMU",
  },
  body: formData,
});
```

⚠️ **Penting:** Ganti `"GANTI_DENGAN_API_KEY_KAMU"` dengan API Key yang kamu dapatkan dari Google AI Studio.

### Error Handling

```jsx
try {
  // ... kirim request
} catch (error) {
  // Tampilkan pesan error ke user
} finally {
  // Selalu sembunyikan typing indicator
  setIsTyping(false);
}
```

Menggunakan try-catch-finally untuk menangani error dengan baik dan memastikan typing indicator selalu disembunyikan.

## 5.5 Test Integrasi

Jalankan development server:

```bash
npm run dev
```

Coba kirim pesan ke chatbot:

1. **Kirim pesan teks biasa** → "Halo, siapa namamu?"
2. **Kirim pesan dengan gambar** → Upload gambar dan tanyakan "Apa yang ada di gambar ini?"

Jika berhasil, kamu akan melihat response dari Gemini AI!

## 5.6 Tips Keamanan

⚠️ **Jangan hardcode API Key di production!**

Untuk project yang lebih besar, gunakan environment variables:

1. Buat file `.env` di root project:
   ```
   VITE_GEMINI_API_KEY=api_key_kamu_disini
   ```

2. Update kode:
   ```jsx
   headers: {
     "api-key": import.meta.env.VITE_GEMINI_API_KEY,
   }
   ```

3. Tambahkan `.env` ke `.gitignore` agar tidak ter-commit ke Git.

---

✅ **Chatbot berhasil terhubung ke Gemini AI!** Sekarang aplikasi kamu bisa menjawab pertanyaan dan menganalisis gambar secara real-time menggunakan kecerdasan buatan Google Gemini.
