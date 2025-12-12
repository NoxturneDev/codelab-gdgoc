# Step 6: Bedah Logika App.jsx (Part 1: Logic & State)

Dalam file ini, kita tidak hanya menampilkan kotak chat, tapi kita juga mengatur bagaimana data mengalir. Mari kita lihat 3 komponen logika utamanya:

### 1\. Manajemen Memori (State)

Di baris awal fungsi `App`, kita melihat `useState`. Ini adalah memori jangka pendek aplikasi Anda.

```javascript
const [messages, setMessages] = useState([...]);
const [isTyping, setIsTyping] = useState(false);
```

  * **`messages`**: Ini adalah "buku catatan" percakapan. Ia menyimpan array objek yang berisi teks pesan, siapa pengirimnya (`user` atau `bot`), dan waktunya.
  * **`isTyping`**: Ini adalah "lampu indikator". Saat bernilai `true`, aplikasi akan menampilkan animasi "Sedang mengetik..." atau mematikan tombol kirim agar user tidak spamming.

### 2\. Fungsi Penghubung AI (`handleSendMessage`)

Ini adalah jantung dari aplikasi ini. Fungsi ini berjalan ketika user menekan tombol "Send". Mari kita bedah alurnya:

**A. Validasi & Update UI Instan**

```javascript
if (!content.trim()) return; // Cek agar tidak mengirim pesan kosong

// ... membuat objek userMessage ...
setMessages((prev) => [...prev, userMessage]); // Tampilkan pesan user DULUAN
setIsTyping(true); // Nyalakan status loading
```

Aplikasi langsung menampilkan pesan user di layar *sebelum* mendapat balasan dari AI. Ini membuat aplikasi terasa responsif (Cepat).

**B. Memanggil Gemini (API Call)**

```javascript
const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
```

Di sini kita menginisialisasi SDK menggunakan API Key yang sudah kita simpan di `.env`.

**C. Rekayasa Prompt (Prompt Engineering)**
Perhatikan baris ini:

```javascript
const basePrompt = "you are the most professional engineering in physical quantum.";
```

Anda sedang menyisipkan "Persona". Apapun yang user tanya, Gemini akan menjawab dengan gaya seorang insinyur fisika kuantum profesional.

**D. Menerima & Menampilkan Jawaban**

```javascript
const response = await genAI.models.generateContent({ ... });
const text = response.text; // Ambil teks jawaban

// ... buat objek botMessage ...
setMessages((prev) => [...prev, botMessage]); // Tampilkan jawaban AI
```

Setelah menunggu beberapa detik (`await`), teks dari Gemini diambil dan dimasukkan ke dalam daftar pesan.

### 3\. Efek Auto-Scroll (`useEffect`)

```javascript
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, isTyping]);
```

**Masalah:** Saat chat bertambah panjang, pesan baru akan tertutup di bawah layar.
**Solusi:** Kode ini berkata: *"Setiap kali ada pesan baru (`messages`) atau status mengetik berubah (`isTyping`), tolong gulung layar otomatis ke paling bawah."*

-----

**Ringkasan Logika:**

1.  User ketik -\> Tampil di layar.
2.  Loading nyala.
3.  Kirim ke Google (dengan persona Fisika Kuantum).
4.  Tunggu...
5.  Terima jawaban -\> Tampil di layar.
6.  Loading mati.
7.  Layar scroll ke bawah otomatis.

**Next Step:**
Sekarang Anda sudah paham logikanya. Di **Part 2**, kita akan fokus pada bagaimana logika ini **ditempelkan ke Tampilan (JSX/Rendering)** agar menjadi antarmuka yang utuh.

Lanjut ke Part 2?
