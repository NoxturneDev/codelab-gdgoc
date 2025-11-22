
# List Methods & Operations

The real power of Python lists comes from their ability to change size dynamically. Unlike arrays in some low-level languages where you have to define a fixed size upfront, Python lists can grow or shrink as needed.

## 1. Adding Items

There are two main ways to add items to a list: adding to the end or squeezing into the middle.

### `.append(item)`

This adds an item to the very **end** of the list. This is the most efficient and common way to build a list.

```python
cart = ["Eggs", "Milk"]
cart.append("Bread")

print(cart)
# Output: ['Eggs', 'Milk', 'Bread']
````

### `.insert(index, item)`

This inserts an item at a specific position. Python shifts all subsequent items to the right to make room.

```python
cart = ["Eggs", "Milk"]
# Insert "Butter" at index 1 (between Eggs and Milk)
cart.insert(1, "Butter")

print(cart)
# Output: ['Eggs', 'Butter', 'Milk']
```

## 2\. Removing Items

Just like adding, you can remove items by their **position** or by their **value**.

### `.pop(index)`

Removes an item at a specific index and *returns* it (so you can use it). If you don't specify an index, it removes the **last** item.

```python
todos = ["Clean", "Cook", "Sleep"]

# Remove the last item
last_task = todos.pop()

print(todos)      # Output: ['Clean', 'Cook']
print(last_task)  # Output: Sleep
```

### `.remove(value)`

Finds the **first occurrence** of a specific value and deletes it. You don't need to know the index.

```python
users = ["Alice", "Bob", "Charlie", "Bob"]

# Removes the first "Bob" only
users.remove("Bob")

print(users)
# Output: ['Alice', 'Charlie', 'Bob']
```

> **Warning:** If you try to `.remove()` a value that doesn't exist, Python will throw an error (ValueError).

## 3\. Organizing Lists

### `.sort()` and `.reverse()`

These methods change the order of the list **in-place** (meaning the original list is permanently changed).

```python
numbers = [3, 1, 4, 2]

# Sort in ascending order
numbers.sort()
print(numbers) # Output: [1, 2, 3, 4]

# Reverse the current order
numbers.reverse()
print(numbers) # Output: [4, 3, 2, 1]
```

## 4\. Useful Utilities

### `len()`

Gets the length (number of items) of a list.

```python
print(len(numbers)) # Output: 4
```

### `in` Operator

Checks if an item exists inside a list. Returns `True` or `False`.

```python
menu = ["Pizza", "Burger", "Salad"]

print("Pizza" in menu) # Output: True
print("Taco" in menu)  # Output: False
```

-----

## 📝 Summary Table

| Method | Description |
| :--- | :--- |
| `list.append(x)` | Adds `x` to the end. |
| `list.insert(i, x)` | Puts `x` at index `i`. |
| `list.pop()` | Removes and returns the last item. |
| `list.remove(v)` | Removes the first item with value `v`. |
| `list.sort()` | Sorts the list (A-Z or 0-9). |
| `len(list)` | Returns the count of items. |
