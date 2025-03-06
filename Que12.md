# List of Common JavaScript Functions

JavaScript provides various built-in functions to manipulate data, interact with the DOM, and handle various operations.

---

## 1. **String Functions**
| Function | Description | Example |
|----------|------------|---------|
| `charAt(index)` | Returns the character at the specified index. | `"hello".charAt(1) // "e"` |
| `concat(str)` | Joins two or more strings. | `"hello".concat(" world") // "hello world"` |
| `includes(substring)` | Checks if a string contains another string. | `"hello".includes("ll") // true` |
| `indexOf(substring)` | Returns the position of a substring. | `"hello".indexOf("l") // 2` |
| `replace(old, new)` | Replaces a part of a string. | `"hello".replace("l", "x") // "hexlo"` |
| `split(delimiter)` | Splits a string into an array. | `"a,b,c".split(",") // ["a", "b", "c"]` |
| `toLowerCase()` | Converts string to lowercase. | `"HELLO".toLowerCase() // "hello"` |
| `toUpperCase()` | Converts string to uppercase. | `"hello".toUpperCase() // "HELLO"` |
| `trim()` | Removes whitespace from both ends. | `" hello ".trim() // "hello"` |

---

## 2. **Array Functions**
| Function | Description | Example |
|----------|------------|---------|
| `push(item)` | Adds an item to the end of an array. | `[1,2].push(3) // [1,2,3]` |
| `pop()` | Removes and returns the last item. | `[1,2,3].pop() // 3` |
| `shift()` | Removes the first element. | `[1,2,3].shift() // 1` |
| `unshift(item)` | Adds an element at the start. | `[2,3].unshift(1) // [1,2,3]` |
| `slice(start, end)` | Returns a portion of the array. | `[1,2,3,4].slice(1,3) // [2,3]` |
| `splice(index, count, item)` | Adds/removes items at a position. | `[1,2,3].splice(1, 1, "a") // [1, "a", 3]` |
| `map(fn)` | Applies a function to each item. | `[1,2,3].map(x => x * 2) // [2,4,6]` |
| `filter(fn)` | Returns items that match a condition. | `[1,2,3,4].filter(x => x > 2) // [3,4]` |
| `reduce(fn, initial)` | Reduces an array to a single value. | `[1,2,3].reduce((a,b) => a+b, 0) // 6` |

---

## 3. **Number Functions**
| Function | Description | Example |
|----------|------------|---------|
| `parseInt(str)` | Converts a string to an integer. | `parseInt("42") // 42` |
| `parseFloat(str)` | Converts a string to a decimal number. | `parseFloat("3.14") // 3.14` |
| `toFixed(n)` | Formats a number to `n` decimal places. | `(3.14159).toFixed(2) // "3.14"` |
| `Math.round(x)` | Rounds to the nearest integer. | `Math.round(4.5) // 5` |
| `Math.floor(x)` | Rounds down. | `Math.floor(4.9) // 4` |
| `Math.ceil(x)` | Rounds up. | `Math.ceil(4.1) // 5` |
| `Math.max(a,b,...)` | Returns the largest value. | `Math.max(1,5,3) // 5` |
| `Math.min(a,b,...)` | Returns the smallest value. | `Math.min(1,5,3) // 1` |
| `Math.random()` | Returns a random number between 0 and 1. | `Math.random() // 0.8347` |

---

## 4. **Date Functions**
| Function | Description | Example |
|----------|------------|---------|
| `new Date()` | Creates a new Date object. | `new Date()` |
| `getFullYear()` | Returns the year. | `new Date().getFullYear()` |
| `getMonth()` | Returns the month (0-11). | `new Date().getMonth() // 0 (Jan)` |
| `getDate()` | Returns the day of the month. | `new Date().getDate()` |
| `getDay()` | Returns the day of the week (0-6). | `new Date().getDay() // 3 (Wed)` |
| `getHours()` | Returns the hour (0-23). | `new Date().getHours()` |
| `getMinutes()` | Returns the minutes (0-59). | `new Date().getMinutes()` |
| `getSeconds()` | Returns the seconds (0-59). | `new Date().getSeconds()` |

---

## 5. **DOM Manipulation Functions**
| Function | Description | Example |
|----------|------------|---------|
| `getElementById(id)` | Selects an element by ID. | `document.getElementById("myDiv")` |
| `getElementsByClassName(class)` | Selects elements by class name. | `document.getElementsByClassName("myClass")` |
| `getElementsByTagName(tag)` | Selects elements by tag name. | `document.getElementsByTagName("p")` |
| `querySelector(selector)` | Selects the first matching element. | `document.querySelector(".myClass")` |
| `querySelectorAll(selector)` | Selects all matching elements. | `document.querySelectorAll("p")` |
| `createElement(tag)` | Creates a new element. | `document.createElement("div")` |
| `appendChild(element)` | Adds an element as a child. | `parent.appendChild(child)` |
| `removeChild(element)` | Removes a child element. | `parent.removeChild(child)` |
| `setAttribute(attr, value)` | Sets an attribute. | `element.setAttribute("class", "newClass")` |

---

## 6. **Event Handling Functions**
| Function | Description | Example |
|----------|------------|---------|
| `addEventListener(event, fn)` | Adds an event listener. | `btn.addEventListener("click", myFunction)` |
| `removeEventListener(event, fn)` | Removes an event listener. | `btn.removeEventListener("click", myFunction)` |
| `preventDefault()` | Prevents default behavior. | `event.preventDefault()` |
| `stopPropagation()` | Stops event bubbling. | `event.stopPropagation()` |

---

## 7. **Local Storage Functions**
| Function | Description | Example |
|----------|------------|---------|
| `localStorage.setItem(key, value)` | Stores data. | `localStorage.setItem("name", "John")` |
| `localStorage.getItem(key)` | Retrieves data. | `localStorage.getItem("name") // "John"` |
| `localStorage.removeItem(key)` | Removes an item. | `localStorage.removeItem("name")` |
| `localStorage.clear()` | Clears all data. | `localStorage.clear()` |

---

## 8. **JSON Functions**
| Function | Description | Example |
|----------|------------|---------|
| `JSON.stringify(obj)` | Converts an object to a string. | `JSON.stringify({name: "John"})` |
| `JSON.parse(str)` | Converts a string to an object. | `JSON.parse('{"name":"John"}')` |

---

## **Key Takeaways**
- **String, Array, and Number functions** help manipulate data.
- **DOM functions** interact with and modify webpage elements.
- **Event functions** handle user interactions.
- **Local Storage and JSON functions** manage data storage and conversion.
