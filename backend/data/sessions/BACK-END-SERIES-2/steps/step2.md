# Step 2: Buat Gemini Controller

## 1. Buat Folder & File Controller

Buat struktur folder:
```
src/
  controllers/
    gemini.js
```

## 2. Buat Controller Gemini

Buka file `src/controllers/gemini.js`, lalu isi dengan kode berikut:

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

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

        res.json({ response: text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate content' });
    }
};
```

## 3. Update index.js

Buka file `index.js`, lalu lakukan perubahan berikut:

### Import controller
Tambahkan import di bagian atas:
```javascript
import { generateContent } from './src/controllers/gemini.js';
```

### Tambahkan route
Setelah `app.use(express.json());`, tambahkan route baru:
```javascript
app.post('/api/gemini', generateContent);
```

### Hasil akhir index.js:
```javascript
import express from "express";
import { generateContent } from './src/controllers/gemini.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/gemini', generateContent);

app.listen(PORT, () => {
  console.log("Hai");
});
```

## 4. Testing

Restart server dengan `npm run dev`

Gunakan Postman untuk testing endpoint, ikuti arahan fasilitator untuk:
- Setup request method dan URL
- Menambahkan headers
- Mengirim body JSON
- Melihat response dari API
