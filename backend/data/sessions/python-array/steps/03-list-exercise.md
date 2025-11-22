# Latihan: Sistem Inventory game

Untuk melatih kemampuan **List** Anda, kita akan membuat backend sederhana untuk sistem inventaris game RPG.

**Tugas Anda:** Mengelola tas punggung (*backpack*) pemain menggunakan List Python. Ikuti instruksi di bawah ini untuk memanipulasi data.

### Tantangan

Salin kode awal di bawah ini ke editor Anda (atau Python REPL) dan lengkapi tugas-tugas yang ada di dalam komentar.

```python
# 1. Buat list kosong bernama 'backpack'
backpack = []

# 2. Pemain memungut item-item berikut.
#    Tambahkan "Sword", "Potion", dan "Shield" ke dalam backpack menggunakan .append()
#    (Tulis kodemu di sini)


# 3. Pemain memutuskan bahwa "Potion" adalah yang paling penting.
#    Sisipkan (Insert) "Potion" di index 0 agar menjadi item pertama.
#    (Catatan: Sekarang kamu akan memiliki dua "Potion", itu tidak masalah!)
#    (Tulis kodemu di sini)


# 4. Pemain meminum Potion tersebut.
#    Hapus "Potion" menggunakan .remove().
#    (Ingat: .remove() hanya menghapus item pertama yang ditemukannya)
#    (Tulis kodemu di sini)


# 5. Pemain menjual item terakhir di tas kepada pedagang.
#    Hapus item terakhir menggunakan .pop() dan simpan ke dalam variabel 'sold_item'.
#    (Tulis kodemu di sini)


# 6. Urutkan sisa item di backpack secara alfabet (A-Z).
#    (Tulis kodemu di sini)


# --- VERIFIKASI ---
print(f"Item terjual: {sold_item}")
print(f"Isi Backpack: {backpack}")
