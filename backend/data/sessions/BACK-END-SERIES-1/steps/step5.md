# Step 5 Middleware

## 1. Membuat middleware

```js
const validateTodo = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Title tidak boleh kosong",
    });
  }

  next();
};
```

## 2. Pakai middleware

```js
app.post("/todos", validateTodo, async (req, res) => {
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
