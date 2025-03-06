# Q. Array
Array is a data type that allow you to store multiple values in single variable

# List of JavaScript Array Methods

JavaScript provides several built-in array methods to manipulate and process arrays.

---

## **1. Adding & Removing Elements**
| Method | Description | Example |
|--------|------------|---------|
| `push(item)` | Adds an item to the end of the array. | `[1, 2].push(3) // [1, 2, 3]` |
| `pop()` | Removes the last item and returns it. | `[1, 2, 3].pop() // 3` |
| `unshift(item)` | Adds an item at the beginning. | `[2, 3].unshift(1) // [1, 2, 3]` |
| `shift()` | Removes the first item and returns it. | `[1, 2, 3].shift() // 1` |
| `splice(index, count, newItem)` | Adds or removes elements. | `[1, 2, 3].splice(1, 1, "a") // [1, "a", 3]` |
| `slice(start, end)` | Extracts part of an array into a new array. | `[1, 2, 3, 4].slice(1, 3) // [2, 3]` |

---

## **2. Searching & Finding Elements**
| Method | Description | Example |
|--------|------------|---------|
| `indexOf(item)` | Returns the index of the first match. | `[1, 2, 3].indexOf(2) // 1` |
| `lastIndexOf(item)` | Returns the index of the last match. | `[1, 2, 3, 2].lastIndexOf(2) // 3` |
| `includes(item)` | Checks if an item exists in the array. | `[1, 2, 3].includes(2) // true` |
| `find(fn)` | Returns the first matching element. | `[1, 2, 3].find(x => x > 1) // 2` |
| `findIndex(fn)` | Returns the index of the first match. | `[1, 2, 3].findIndex(x => x > 1) // 1` |

---

## **3. Iteration & Transformation**
| Method | Description | Example |
|--------|------------|---------|
| `map(fn)` | Creates a new array by applying a function. | `[1, 2, 3].map(x => x * 2) // [2, 4, 6]` |
| `forEach(fn)` | Iterates over each element. | `[1, 2, 3].forEach(x => console.log(x))` |
| `filter(fn)` | Returns elements that match a condition. | `[1, 2, 3].filter(x => x > 1) // [2, 3]` |
| `reduce(fn, initial)` | Reduces the array to a single value. | `[1, 2, 3].reduce((a, b) => a + b, 0) // 6` |
| `some(fn)` | Checks if any elements match a condition. | `[1, 2, 3].some(x => x > 2) // true` |
| `every(fn)` | Checks if all elements match a condition. | `[1, 2, 3].every(x => x > 0) // true` |

---

## **4. Sorting & Reversing**
| Method | Description | Example |
|--------|------------|---------|
| `sort(fn)` | Sorts the array (default: converts to strings). | `[3, 1, 2].sort() // [1, 2, 3]` |
| `reverse()` | Reverses the array. | `[1, 2, 3].reverse() // [3, 2, 1]` |

---

## **5. Combining & Splitting**
| Method | Description | Example |
|--------|------------|---------|
| `concat(array)` | Merges two arrays. | `[1, 2].concat([3, 4]) // [1, 2, 3, 4]` |
| `join(separator)` | Joins array elements into a string. | `["a", "b"].join("-") // "a-b"` |
| `flat(depth)` | Flattens nested arrays. | `[1, [2, [3]]].flat(2) // [1, 2, 3]` |

---

## **6. Converting & Checking**
| Method | Description | Example |
|--------|------------|---------|
| `toString()` | Converts an array to a string. | `[1, 2, 3].toString() // "1,2,3"` |
| `isArray(value)` | Checks if a value is an array. | `Array.isArray([1, 2, 3]) // true` |

---

## **Key Takeaways**
- **push, pop, shift, unshift** modify the array.
- **map, filter, reduce** help process data.
- **sort, reverse** modify the order of elements.
- **find, some, every** help with condition-based searches.
