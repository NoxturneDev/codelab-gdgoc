# Introduction to Lists (Arrays)

In Python, the data structure used to store a collection of items is called a **List**.

If you are coming from languages like C, Java, or JavaScript, you might know these as "Arrays." In Python, Lists are more powerful because they are **dynamic** (they can grow and shrink) and **heterogeneous** (they can hold different data types at the same time).

## 1. Creating a List

You create a list by placing elements inside square brackets `[]`, separated by commas.

```python
# A list of integers
numbers = [1, 2, 3, 4, 5]

# A list of strings
fruits = ["Apple", "Banana", "Cherry"]

# A mixed list (Integer, String, Boolean, Float)
mixed_data = [42, "Hello", True, 3.14]
````

## 2\. Indexing: Accessing Elements

Python lists are **ordered**. Every item has a specific position, called an **index**.

* **Positive Indexing:** Starts at `0` (the first item).
* **Negative Indexing:** Starts at `-1` (the last item). This is a unique and powerful Python feature.

### Examples

```python
colors = ["Red", "Green", "Blue", "Yellow"]

# Accessing the first item
print(colors[0])   # Output: Red

# Accessing the third item
print(colors[2])   # Output: Blue

# Accessing the LAST item (Negative Indexing)
print(colors[-1])  # Output: Yellow

# Accessing the second to last item
print(colors[-2])  # Output: Blue
```

## 3\. Slicing: Accessing a Range

You can get a "sub-list" or a slice of the list using the colon syntax `[start:stop]`.

> **Note:** The `start` index is inclusive, but the `stop` index is **exclusive** (up to, but not including).

```python
numbers = [0, 10, 20, 30, 40, 50]

# Get items from index 1 up to (not including) 4
print(numbers[1:4]) 
# Output: [10, 20, 30]

# Get items from the beginning to index 3
print(numbers[:3])  
# Output: [0, 10, 20]

# Get items from index 2 to the end
print(numbers[2:])  
# Output: [20, 30, 40, 50]
```

## 4\. Modifying Lists (Mutability)

Unlike some data types (like Strings or Tuples), Lists are **Mutable**. This means you can change an item after the list works created.

```python
tasks = ["Wake up", "Code", "Sleep"]

# Change the second item (Index 1)
tasks[1] = "Eat Lunch"

print(tasks)
# Output: ['Wake up', 'Eat Lunch', 'Sleep']
```

-----

## 📝 Quick Check

Try running this code. What is the output?

```python
data = [100, 200, 300, 400]
data[0] = 99
print(data[-1])
print(data[0:2])

