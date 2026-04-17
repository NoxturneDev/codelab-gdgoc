# Clue

## 1. Clue untuk challenge no 1

1. Pakai method delete tapi ini lanjutannya apa ya??

```js
app.delete("/todos/:id");
```

2. Sama kayak waktu update data, pas mau delete kita perlu ambil id dari params juga loh, kira kira buat apa ya??

```js
const id = parseInt(req.params.id);
```

3. Di challenge ini kamu perlu pakai where clause sama kayak endpoint update

```js
      where: { id },
```

## 2. Clue untuk challenge no 2

1. Tetap pakai method get tapi ada yang beda sama routes nya nih kok ada "/:id" buat apa ya kira kira??

```js
app.delete("/todos/:id");
```

2. Di challenge ini kita juga perlu ambil id dari params ternyata, kira kira buat apa ya??

```js
const id = parseInt(req.params.id);
```

3. Di challenge ini kamu perlu pakai where clause sama kayak endpoint update

```js
      where: { id },
```
