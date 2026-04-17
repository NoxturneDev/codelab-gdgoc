# Challenge Solution

## 1. Membuat Endpoint Delete

```js
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await prisma.todo.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Todo berhasil dihapus",
    });
  } catch (error) {
    res.status(404).json({ message: "Todo tidak ditemukan" });
  }
});
```

## 2. Membuat Endpoint Get by id

```js
app.get("/todos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todos = await prisma.todo.findUnique({
      where: { id },
    });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
```
