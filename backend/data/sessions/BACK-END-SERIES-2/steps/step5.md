# Step 5: Get Chat History

## 1. Tambah Function di Controller

Buka file `src/controllers/gemini.js`, lalu tambahkan function baru di bawah function `generateContent`:

```javascript
export const getChatHistory = async (req, res) => {
    try {
        const chats = await prisma.chat.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.json({ data: chats });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to get chat history' });
    }
};
```

## 2. Update index.js

Buka file `index.js`, lalu lakukan perubahan berikut:

### a. Update Import
Ubah import dari:
```javascript
import { generateContent } from './src/controllers/gemini.js';
```

Menjadi:
```javascript
import { generateContent, getChatHistory } from './src/controllers/gemini.js';
```

### b. Tambah Route
Setelah route `/api/gemini`, tambahkan route baru:
```javascript
app.get('/api/history', getChatHistory);
```

### c. Hasil Akhir index.js
```javascript
import express from 'express';
import { generateContent, getChatHistory } from './src/controllers/gemini.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/gemini', generateContent);
app.get('/api/history', getChatHistory);

app.listen(PORT, () => {
  console.log("Hai");
});
```

## Tips
- Endpoint ini akan mengembalikan semua chat history
- Data diurutkan dari yang terbaru (descending berdasarkan createdAt)
- Gunakan Postman untuk testing dengan method GET
