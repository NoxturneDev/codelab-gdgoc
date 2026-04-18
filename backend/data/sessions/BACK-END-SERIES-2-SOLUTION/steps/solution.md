# Solution - Challenge Get & Delete Chat by ID

## Challenge 1: Get Single Chat by ID

### File: src/controllers/gemini.js

Tambahkan function baru:

```javascript
export const getChatById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const chat = await prisma.chat.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!chat) {
            return res.status(404).json({ error: 'Chat not found' });
        }

        res.json({ data: chat });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to get chat' });
    }
};
```

### File: index.js

Update import:
```javascript
import { generateContent, getChatHistory, getChatById } from './src/controllers/gemini.js';
```

Tambahkan route:
```javascript
app.get('/api/chat/:id', getChatById);
```

---

## Challenge 2: Delete Chat by ID

### File: src/controllers/gemini.js

Tambahkan function baru:

```javascript
export const deleteChatById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const chat = await prisma.chat.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!chat) {
            return res.status(404).json({ error: 'Chat not found' });
        }

        await prisma.chat.delete({
            where: {
                id: parseInt(id)
            }
        });

        res.json({ message: 'Chat deleted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to delete chat' });
    }
};
```

### File: index.js

Update import:
```javascript
import { generateContent, getChatHistory, getChatById, deleteChatById } from './src/controllers/gemini.js';
```

Tambahkan route:
```javascript
app.delete('/api/chat/:id', deleteChatById);
```

---

## Hasil Akhir

### src/controllers/gemini.js
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

export const getChatById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const chat = await prisma.chat.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!chat) {
            return res.status(404).json({ error: 'Chat not found' });
        }

        res.json({ data: chat });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to get chat' });
    }
};

export const deleteChatById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const chat = await prisma.chat.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!chat) {
            return res.status(404).json({ error: 'Chat not found' });
        }

        await prisma.chat.delete({
            where: {
                id: parseInt(id)
            }
        });

        res.json({ message: 'Chat deleted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to delete chat' });
    }
};
```

### index.js
```javascript
import express from 'express';
import { generateContent, getChatHistory, getChatById, deleteChatById } from './src/controllers/gemini.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/gemini', generateContent);
app.get('/api/history', getChatHistory);
app.get('/api/chat/:id', getChatById);
app.delete('/api/chat/:id', deleteChatById);

app.listen(PORT, () => {
  console.log("Hai");
});
```

---

## Testing

### Get Chat by ID
```
GET http://localhost:3000/api/chat/1
```

### Delete Chat by ID
```
DELETE http://localhost:3000/api/chat/1
```
