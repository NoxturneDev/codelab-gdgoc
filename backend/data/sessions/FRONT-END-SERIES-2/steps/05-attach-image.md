# Langkah 5: Fitur Attach Gambar

Sekarang kita menambahkan fitur **lampir gambar** pada form chat: user bisa memilih gambar, melihat preview, lalu mengirim pesan bersama gambar. Preview gambar juga akan tampil di dalam bubble chat.

## 5.1 Tambah Input File dan Tombol Attach di Form

Di dalam **`<form>`**, tambahkan input file yang disembunyikan dan label berbentuk tombol (icon) di sebelah kiri input teks. Urutan bisa: **input file + label** → **input text** → **tombol Kirim**.

```jsx
<input
  id="image-input"
  type="file"
  accept="image/*"
  className="hidden"
  onChange={handleImageChange}
/>
<label
  htmlFor="image-input"
  className="flex items-center justify-center size-10 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors"
>
  🖼️
</label>
```

User mengklik label (emoji gambar) untuk membuka dialog pilih file. Pastikan **`htmlFor="image-input"`** sama dengan **`id="image-input"`**.

## 5.2 Tambah State dan Handler untuk Gambar

Buka file **`src/App.jsx`**. Di dalam `function App()`, tambahkan state dan handler berikut (setelah state yang sudah ada, misalnya setelah `isTyping`):

```jsx
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

### Penjelasan

- **`imageFile`**: Menyimpan file gambar asli (untuk nanti dikirim ke API).
- **`imagePreview`**: URL preview (dari `URL.createObjectURL`) untuk ditampilkan di UI.
- **`handleImageChange`**: Cek bahwa yang dipilih adalah file gambar, buat preview URL, simpan file, lalu reset value input agar file yang sama bisa dipilih lagi.
- **`e.target.value = ""`**: Berguna supaya memilih file yang sama dua kali tetap memicu `onChange`.

## 5.3 Tampilkan Preview Sebelum Kirim

Agar user bisa melihat gambar yang dipilih dan membatalkannya sebelum kirim, tambahkan blok preview di atas form (misalnya di dalam div yang sama dengan form, atau tepat di atas `<form>`):

```jsx
{
  imagePreview && (
    <div className="px-4 pt-2 flex items-center gap-2">
      <img src={imagePreview} alt="Preview" className="max-w-32 rounded-lg" />
      <button
        type="button"
        onClick={() => {
          setImagePreview(null)
          setImageFile(null)
        }}
        className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-red-600 active:scale-95 transition-all shadow-md disabled:bg-red-300"
      >
        Hapus
      </button>
    </div>
  )
}
```

Gunakan **`type="button"`** agar tombol "Hapus" tidak memicu submit form.

## 5.4 Simpan Preview di Pesan User dan Reset Setelah Kirim

Di dalam **`handleSend`**, saat membuat pesan user, sertakan **`imageUrl`** dari preview. Setelah pesan ditambahkan ke `messages`, reset state gambar.

**Contoh penyesuaian object pesan user:**

```jsx
const userMsg = {
  text: inputValue,
  sender: "You",
  isAi: false,
  imageUrl: imagePreview,
}
setMessages((prev) => [...prev, userMsg])
```

**Setelah itu (setelah reset `inputValue`), reset state gambar:**

```jsx
setImageFile(null)
setImagePreview(null)
```

Dengan begitu, setelah kirim, preview hilang dan user bisa memilih gambar baru untuk pesan berikutnya.

## 5.5 Tampilkan Gambar di BubbleChat

Agar gambar yang dikirim tampil di dalam bubble, komponen **BubbleChat** harus menerima prop **`imageUrl`** dan merender gambar jika ada.

Buka **`src/components/BubbleChat.jsx`**. Ubah destructuring props dan tambahkan blok gambar di bawah teks:

```jsx
const BubbleChat = ({ text, sender, isAi, imageUrl }) => {
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
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Image"
            className="max-w-32 rounded-lg mt-2"
          />
        )}
      </div>
    </div>
  )
}
```

Karena kita memakai **`{...msg}`** di `App.jsx` saat render `<BubbleChat key={index} {...msg} />`, property **`imageUrl`** dari object pesan akan otomatis diteruskan ke BubbleChat.

---

✅ **Fitur attach gambar selesai!** User bisa memilih gambar, melihat preview, menghapus preview, dan mengirim pesan yang menampilkan gambar di bubble. Di langkah berikutnya kita akan menghubungkan aplikasi ke **Gemini AI API** agar chatbot bisa benar-benar menjawab dan menganalisis gambar.
