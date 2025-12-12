# Step 8: Modifikasi AI & Prompt Engineering 101

Saat ini, bot Anda mungkin berpikir dia adalah ahli Fisika Kuantum (karena kode bawaan tadi). Mari kita ubah otaknya.

### 1\. Apa itu Prompt Engineering?

Prompt Engineering adalah seni menyusun kata-kata untuk memandu AI menghasilkan output yang kita inginkan.

Bayangkan AI adalah **aktor yang sangat hebat tapi buta arah**. Dia bisa menjadi siapa saja, tapi Anda (Sutradara) harus memberinya naskah yang jelas.

**Rumus Dasar Prompting:**

> **Role (Peran)** + **Task (Tugas)** + **Context (Konteks)** + **Constraint (Batasan)**

### 2\. Implementasi di Kode (`App.jsx`)

Di dalam file `App.jsx`, cari variabel `basePrompt`. Inilah tempat Anda menanamkan "Instruksi Rahasia" (System Instruction) yang tidak dilihat oleh user, tapi dipatuhi oleh AI.

```javascript
// App.jsx (Di dalam handleSendMessage)

// CONTOH LAMA:
const basePrompt = "you are the most professional engineering in physical quantum.";

// CONTOH BARU (Penerapan Rumus):
const basePrompt = `
  Role: Kamu adalah konsultan karir profesional.
  Task: Bantu pengguna membuat CV dan persiapan interview.
  Tone: Ramah, memotivasi, tapi tetap formal.
  Constraint: Jawaban harus ringkas, maksimal 3 kalimat per balasan.
  Context: Pengguna adalah fresh graduate di Indonesia.
`;
```

-----

### 3\. Pilihan Skenario (Copy-Paste Ideas)

Silakan pilih satu dari skenario di bawah ini untuk dicoba di aplikasi Anda. Salin teksnya ke dalam variabel `basePrompt` Anda.

#### 🅰️ Skenario: Si Penerjemah Gaul

Bot ini tidak menjawab pertanyaan, tapi menerjemahkan bahasa Indonesia baku menjadi bahasa gaul Jaksel.

```javascript
const basePrompt = "Kamu adalah anak Jaksel yang gaul banget. Tugasmu adalah mengubah kalimat apapun yang user berikan menjadi gaya bahasa anak Jaksel (campur English-Indo). Jangan menjawab pertanyaan user, cukup translate saja gayanya. Literally make it cool.";
```

#### 🅱️ Skenario: Koki Galak (Gordon Ramsay Mode)

Bot ini akan mengkritik ide masakan user dengan pedas.

```javascript
const basePrompt = "You are a harsh, angry, professional chef like Gordon Ramsay. If the user asks about a recipe, criticize their choice of ingredients first before helping. Use caps lock for emphasis on angry words. Be sarcastic.";
```

#### 🆎 Skenario: Guru Coding Ramah (Untuk Pemula)

Bot ini menjelaskan konsep rumit dengan analogi sederhana.

```javascript
const basePrompt = "Kamu adalah guru coding untuk anak SD. Jelaskan setiap konsep pemrograman menggunakan analogi kehidupan sehari-hari (seperti memasak, main lego, atau lalu lintas). Hindari istilah teknis yang rumit. Bersikaplah sangat sabar dan suportif.";
```

-----

### 4\. Jangan Lupa: Sesuaikan Sapaan Awal\

Jika Anda mengubah AI menjadi **Bajak Laut**, tapi sapaan awalnya masih *"Hello, how can I assist you?"*, rasanya akan aneh.

Ubah juga `useState` di bagian atas `App.jsx`:

```javascript
const [messages, setMessages] = useState([
  {
    id: 1,
    type: "bot",
    // Sesuaikan dengan persona yang Anda pilih di atas!
    content: "Woi! Mau masak apa lo hari ini? Jangan masak yang sampah ya!", 
    timestamp: new Date(),
  },
]);
```

-----

### 🎯 Tantangan Akhir (Mission)

1. **Pilih Persona:** Tentukan satu peran unik yang belum pernah ada sebelumnya (misal: *Dukun Digital*, *Kucing yang bisa bicara*, atau *Alien yang baru mendarat di Bumi*).
2. **Tulis Prompt:** Masukkan ke `basePrompt`.
3. **Ubah Intro:** Ganti pesan awal di `useState`.
4. **Test:** Chat dengan bot Anda dan lihat seberapa konsisten dia memegang perannya.

**Selamat\!** 🚀
Anda telah berhasil membangun aplikasi Chatbot AI dari nol, menghubungkannya ke Google Gemini, dan memprogram otaknya dengan Prompt Engineering.

Aplikasi ini sekarang berjalan sepenuhnya di browser (Client-Side) dan siap untuk Anda pamerkan secara lokal\!
