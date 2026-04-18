# Step 4: Simpan Chat ke Database

## 1. Update Controller Gemini

Buka file `src/controllers/gemini.js`, lalu lakukan perubahan berikut:

### a. Import Prisma Client
Di bagian paling atas, tambahkan import Prisma Client di bawah import GoogleGenerativeAI:
```javascript
import { PrismaClient } from '@prisma/client';
```

Sekarang bagian import akan terlihat seperti ini:
```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PrismaClient } from '@prisma/client';
```

### b. Inisialisasi Prisma
Setelah bagian import, sebelum `export const generateContent`, tambahkan:
```javascript
const prisma = new PrismaClient();
```

### c. Simpan ke Database
Di dalam function `generateContent`, cari bagian setelah kode ini:
```javascript
const text = response.text();
```

Tepat setelah baris tersebut, sebelum `res.json({ response: text });`, tambahkan:
```javascript
// Save to database
await prisma.chat.create({
    data: {
        prompt: prompt,
        response: text
    }
});
```

Jadi urutannya akan seperti ini:
```javascript
const text = response.text();

// Save to database
await prisma.chat.create({
    data: {
        prompt: prompt,
        response: text
    }
});

res.json({ response: text });
```

### d. Hasil Akhir gemini.js
```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const generateContent = async (req, res) => {
    try {
        const { prompt } = req.body;
        const apikey = req.headers["x-api-key"];

        if (!apikey) {
            return res.status(401).json({ error: 'API key diperlukan' });
        }

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt diperlukan' });
        }

        const genAI = new GoogleGenerativeAI(apikey);
        const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Save to database
        await prisma.chat.create({
            data: {
                prompt: prompt,
                response: text
            }
        });

        res.json({ response: text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate content' });
    }
};
```

## Tips
- Setiap kali generate content, data akan otomatis tersimpan ke database
- Cek console jika ada error saat menyimpan
- Pastikan Prisma Client sudah di-generate dengan `npx prisma generate` jika ada error
