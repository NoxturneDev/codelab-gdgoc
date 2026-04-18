# Step 6: Challenge - Get & Delete Chat by ID

## Challenge 1: Get Single Chat by ID

### Objective
Buat endpoint untuk mengambil detail 1 chat berdasarkan ID

### Requirements
- Method: GET
- Endpoint: `/api/chat/:id`
- Response success (200): Return detail chat
- Response error (404): Return error message jika chat tidak ditemukan

### Hints
- Buat function baru `getChatById` di `src/controllers/gemini.js`
- Perhatikan perbedaan `findMany()` vs `findUnique()` di Prisma
- ID dari URL bisa diambil dari `req.params`
- ID dari URL bertipe string, perlu dikonversi ke number
- Cek apakah data ditemukan sebelum return response
- Jangan lupa export function dan tambahkan route di `index.js`

### Example Response

Success (200):
```json
{
  "data": {
    "id": 1,
    "prompt": "Halo, siapa kamu?",
    "response": "Saya adalah AI assistant...",
    "createdAt": "2024-01-01T10:00:00.000Z"
  }
}
```

Not Found (404):
```json
{
  "error": "Chat not found"
}
```

---

## Challenge 2: Delete Chat by ID

### Objective
Buat endpoint untuk menghapus chat berdasarkan ID

### Requirements
- Method: DELETE
- Endpoint: `/api/chat/:id`
- Response success (200): Return success message
- Response error (404): Return error message jika chat tidak ditemukan

### Hints
- Buat function baru `deleteChatById` di `src/controllers/gemini.js`
- Cek dulu apakah chat dengan ID tersebut ada di database
- Jika ada, baru lakukan operasi delete
- Prisma punya method untuk delete data
- ID dari URL bertipe string, perlu dikonversi ke number
- Return message yang sesuai (success atau error)
- Jangan lupa export function dan tambahkan route di `index.js`

### Example Response

Success (200):
```json
{
  "message": "Chat deleted successfully"
}
```

Not Found (404):
```json
{
  "error": "Chat not found"
}
```

---

## Tips
- Test dengan Postman setelah selesai
- Cek database di phpMyAdmin untuk memastikan data terhapus
- Ikuti arahan fasilitator jika ada kesulitan
