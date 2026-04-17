# Step 4

## 1. Import instance prisma

Buka index.js dan tambahkan kode ini di paling atas

```js
import prisma from "./prisma/PrismaClient.js";
```

## 2. Membuat Get Request

```js
app.get("/todos", async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
```

## 3. Membuat Post Request

```js
app.post("/todos", async (req, res) => {
  try {
    const { title } = req.body;

    const todo = await prisma.todo.create({
      data: { title },
    });

    res.status(201).json({
      message: "Todo berhasil dibuat",
      data: todo,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});
```

## 4. Membuat Put Request

```js
app.put("/todos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, isDone } = req.body;

    const todo = await prisma.todo.update({
      where: { id },
      data: { title, isDone },
    });

    res.status(200).json({
      message: "Todo berhasil diupdate",
      data: todo,
    });
  } catch (error) {
    res.status(404).json({ message: "Todo tidak ditemukan" });
  }
});
```
