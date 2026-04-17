# Step 2 Membuat endpoint sederhana tanpa DB

## 1. Membuat Get Request

Get Request digunakan untuk mengambil data dari server

```js
app.get("/", (req, res) => {
  res.send("Hello GDGoC Esa Unggul");
});
```

## 2. Membuat Post Request

Post Request digunakan untuk mengirim data ke server

```js
app.post("/post", (req, res) => {
  const { data } = req.body;
  res.send({message: data});
});
```
