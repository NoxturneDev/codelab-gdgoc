-----

# Step 9: Advanced Prompt Engineering

Jika di tahap sebelumnya kita hanya memberi **Identitas** ("Kamu adalah koki"), sekarang kita akan menggunakan **Teknik Terstruktur** agar jawaban AI tidak halusinasi dan konsisten.

### 1\. Teori: Struktur Prompt yang Sempurna

Prompt yang baik biasanya mengikuti rumus **R-C-T-C** (Role, Context, Task, Constraint).

  * **Role (Peran):** Siapa AI ini? (Contoh: Ahli Gizi).
  * **Context (Konteks):** Siapa penggunanya? (Contoh: Pengguna adalah orang yang ingin diet tapi malas olahraga).
  * **Task (Tugas):** Apa gol utamanya? (Contoh: Buat rencana makan murah).
  * **Constraint (Batasan/Format):** Apa yang dilarang? (Contoh: Jangan sarankan suplemen mahal, jawaban maksimal 50 kata).

### 2\. Teori: Few-Shot Prompting (Memberi Contoh)

Ini adalah teknik paling ampuh. Daripada hanya menyuruh AI ("Jadilah lucu"), berikan dia **contoh** ("Contoh jawaban lucu: ...").

  * **Zero-Shot (Tanpa Contoh):** "Terjemahkan ke bahasa Jawa." (Hasil sering kaku).
  * **Few-Shot (Dengan Contoh):** Memberikan 1-3 contoh dialog ideal di dalam prompt. AI akan meniru pola tersebut ("Monkey see, monkey do").

-----

### 3\. Praktik: Penerapan di `App.jsx`

Mari kita ubah `basePrompt` di kode Anda menjadi **Super Prompt** menggunakan fitur *Backticks* (tanda petik miring `` ` ``) di JavaScript untuk membuat string multi-baris.

Silakan ganti variabel `basePrompt` di `App.jsx` dengan kode di bawah ini. Kita akan membuat **"Bot Customer Service Toko Sepatu"** yang menggunakan teknik *Few-Shot*.

```javascript
// Di dalam handleSendMessage...

// Menggunakan Backticks (`) agar bisa enter ke bawah
const basePrompt = `
  system_instruction:
  
  ROLE:
  Kamu adalah "SapaTuku Bot", asisten customer service toko sepatu yang ramah, gaul, dan sangat membantu.

  CONTEXT:
  Pengguna adalah anak muda yang mencari sepatu kets/sneakers lokal. Mereka suka bahasa yang santai tapi sopan.

  TASK:
  Jawab pertanyaan seputar stok, ukuran, dan rekomendasi sepatu.

  CONSTRAINTS (BATASAN):
  1. Jangan pernah menjawab pertanyaan di luar topik sepatu.
  2. Gunakan emoji di setiap akhir kalimat 👟.
  3. Jawaban harus singkat (maksimal 3 kalimat).
  4. Jika user marah, tetap tenang dan minta maaf.

  FEW-SHOT EXAMPLES (CONTOH GAYA BICARA):
  
  User: "Ada sepatu warna merah ga?"
  Bot: "Ada dong kak! Kita punya seri 'Red Lightning' yang kece abis. Mau ukuran berapa? 👟"

  User: "Harganya berapaan?"
  Bot: "Mulai dari 300ribuan aja kak, ramah di kantong pelajar. Mau liat katalognya? 👟"

  User: "Resep nasi goreng apa?"
  Bot: "Waduh, aku cuma ngerti sepatu kak, bukan bumbu dapur. Tanya soal sneakers aja yuk! 👟"

  SEKARANG JAWAB PESAN INI:
`;
```

### 4\. Mengapa Teknik Ini Berhasil?

1.  **Konsistensi:** Karena ada bagian `CONSTRAINTS`, bot tidak akan melantur menjawab resep masakan.
2.  **Gaya Bicara:** Karena ada `FEW-SHOT EXAMPLES`, bot langsung paham *tone* "gaul" yang Anda inginkan tanpa perlu dijelaskan panjang lebar.
3.  **Kejelasan:** Struktur `ROLE-CONTEXT-TASK` membuat AI paham prioritasnya.

-----

### 🎯 Tantangan (Mini Exercise)

Cobalah ubah **Few-Shot Examples** di atas menjadi skenario lain.
Misalnya, buatlah **Bot Dokter Galak**:

  * **User:** "Dok, saya sakit perut."
  * **Bot:** "Makan seblak terus sih\! Sudah dibilang kurangi pedas. Minum obat maag sana\!"

Ubah kodenya, simpan, dan lihat perbedaannya di browser Anda.

**Next Step:**
Bot Anda sekarang sudah pintar dan terstruktur. Langkah terakhir (Step 10) adalah **Refleksi & Next Level**, di mana saya akan memberikan peta jalan jika Anda ingin menseriusi proyek ini (seperti menyimpan chat ke database atau deploy ke internet).
