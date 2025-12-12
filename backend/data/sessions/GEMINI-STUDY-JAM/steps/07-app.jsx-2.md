# Step 7: Bedah Logika App.jsx (Part 2: Rendering & Customization)

Di bagian bawah file `App.jsx` (di dalam `return (...)`), kita melihat bagaimana komponen disusun seperti lego.

### 1\. Struktur Layout (JSX)

Aplikasi ini menggunakan layout **Flexbox** sederhana:

```jsx
return (
  <div className="flex h-screen ...">
    {/* 1. Sidebar (Menu Kiri) */}
    <Sidebar ... />

    <div className="flex flex-col ...">
      {/* 2. Header (Judul Atas) */}
      <Header ... />

      <div className="flex-1 ...">
        {/* 3. ChatCanvas (Area Pesan) */}
        {/* Kita melempar data 'messages' agar bisa ditampilkan */}
        <ChatCanvas messages={messages} />

        {/* 4. InputBar (Area Ketik) */}
        {/* Kita melempar fungsi 'handleSendMessage' agar InputBar bisa mengirim data ke atas */}
        <InputBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  </div>
);
```

**Konsep Penting (Props):**
Perhatikan bahwa `App.jsx` bertindak sebagai **Parent (Orang Tua)**. Dia memegang data (`messages`) dan fungsi (`handleSendMessage`), lalu meminjamkannya ke anak-anaknya (`ChatCanvas` dan `InputBar`) melalui atribut yang disebut **Props**.

-----

### 2\. Apa yang Harus Anda Ganti? (Customization)

Ini adalah bagian paling seru\! Agar aplikasi ini menjadi milik Anda, Anda perlu mengubah logika bisnisnya. Berikut adalah baris-baris kode di `handleSendMessage` yang bisa Anda modifikasi:

#### A. Ubah Kepribadian AI (`basePrompt`)

Cari baris ini di dalam fungsi `handleSendMessage`:

```javascript
const basePrompt = "you are the most professional engineering in physical quantum.";
```

Ini disebut **System Instruction** atau Persona. Saat ini, AI Anda mengira dia adalah ahli Fisika Kuantum.

  * **Tugas Anda:** Ganti teks di dalam tanda kutip menjadi apa saja\!
  * **Contoh:**
      * `"Kamu adalah koki profesional yang galak ala Gordon Ramsay."`
      * `"Kamu adalah asisten belajar sejarah yang ramah untuk anak SD."`
      * `"Kamu adalah bajak laut yang selalu menjawab dengan 'Ahoy!'."`

#### B. Ubah Model Gemini (`model`)

Cari baris ini:

```javascript
model: "gemini-2.5-flash",
```

  * **Penting:** Saat tutorial ini dibuat, `gemini-1.5-flash` adalah standar yang paling stabil dan gratis. Jika `gemini-2.5` error, ganti menjadi **`"gemini-1.5-flash"`**.

#### C. Ubah Sapaan Awal (`useState`)

Cari bagian `useState` di paling atas:

```javascript
const [messages, setMessages] = useState([
  {
    id: 1,
    type: "bot",
    content: "Hello! How can I assist you today?", // <--- GANTI INI
    // ...
  },
]);
```

Ganti pesan sapaan (`content`) agar sesuai dengan persona baru Anda. Misal: *"Ahoy matey\! Mau cari harta karun apa hari ini?"*

-----

### 📝 Rangkuman Latihan (Exercise)

Untuk menyelesaikan tahap ini, silakan lakukan perubahan berikut di kode `App.jsx` Anda:

1.  Temukan variabel `basePrompt`.
2.  Ubah menjadi persona yang Anda inginkan (misal: Konsultan Keuangan, Guru Bahasa Inggris, atau Karakter Anime).
3.  Simpan file (`Ctrl + S`).
4.  Coba chat dengan bot Anda di browser. Apakah gaya bicaranya sudah berubah?

**Next Step:**
Selamat\! Anda sudah memiliki aplikasi Chatbot AI yang berfungsi penuh dengan kepribadian unik.

Langkah terakhir (Step 8) adalah **Final Review & Next Steps**, di mana kita membahas cara mengembangkan aplikasi ini lebih lanjut (misalnya deploy ke internet).
