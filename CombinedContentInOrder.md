# Q.1 what is javascript ? and role of javaScript Engine ?
Javasript is programming language that is use for converting static webpages into dynamin webpages.

## JavaScript Engine (JS Engine)  

A **JavaScript engine** is a program that **compiles and executes JavaScript code**. It takes JS code, converts it into machine code, and runs it efficiently.  

## ðŸ”¹ Popular JavaScript Engines  
- **V8** â†’ Used in Chrome & Node.js  
- **SpiderMonkey** â†’ Used in Firefox  
- **JavaScriptCore** â†’ Used in Safari 

# Q.2 What is client side and server side
 ## client 
 The client is a device, software or component that request and cosumes services from a server 

 ## Server 
 A server is a device,computer or software application that provides services, resources or functions to client 
 

# Q.3 what is variable and what is differce b/w let, var and const 

variable are container for storing data.

## in javaScript we have 3 tyoes of variable in js 

### var keyword 

var create functional scope variable 

```

function example (){
    if (true){
        var count =10;
        console.log(count)
        //output 10
    }
    console.log(count)
    //output 10
}
```

## let keyword

let create variable in block-scope 

```
function example(){
if(true){
    let count =20;
    console.log(count )
    //op 20
}
console.log(count)
// output Refrence Error Output not define 
}

```

## const keyword 

const can be asigned only once and its value can not be change after words

```
// using contant 
const z=10;
z=20;
// this will result and error
//TypeError: Assignment to constant variable.


```


# Q.4  what are the important string operations 

## Add operation 

```
let str1= "hello"
let str2="world"
let result = str1 + " " + str2 
console.log(result)
//hello world
```

## using concat 
 
 + and concate perform similer taks but another way for string only 

```
let result = str1.concat(" ",str2)
cosole.log()

```
## length
it is use to fine length of the string 
` console.log(result.length) `
## toLowerCase()
` result.toLowerCase() `

## toUpperCase()
 `console.log(result.toUpperCase())`

## JavaScript split() Method (String to Array)
The split() method in JavaScript is used to split a string into an array based on a specified separator
`string.split(separator, limit)`
- *separator* â†’ Defines where to split the string (e.g., space " ", comma ",", etc.).
- *limit (optional)* â†’ Specifies the maximum number of splits

```
const splitted = result.split(" ")
console.log(splitted);
// ['hello',"world"]
```

# `replace()` Method in JavaScript

The `replace()` method in JavaScript is used to replace a specified value in a string with another value. It returns a new string without modifying the original one.

## Syntax:
```js
string.replace(searchValue, newValue);
```

```js 
const text = "Hello World!";
const newText = text.replace("World", "JavaScript");
console.log(newText); // "Hello JavaScript!"
```
# `trim()` Method in JavaScript

The `trim()` method in JavaScript is used to remove whitespace from both ends of a string. It does **not** modify the original string but returns a new one.

## Syntax:
```js
string.trim();
```

```js
const text = "   Hello World!   ";
const trimmedText = text.trim();
console.log(trimmedText);
// Output: "Hello World!"
```

# Q.5 What is DOM?

**DOM (Document Object Model)** is a programming interface that represents an HTML or XML document as a tree structure, where each node is an object representing a part of the document.

- It allows JavaScript to interact with and manipulate HTML elements dynamically.
- The browser creates a DOM when it loads a web page.
- Changes to the DOM reflect on the webpage in real-time.

## Example:
```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello World</h1>
    <script>
      document.getElementById("title").innerText = "Hello JavaScript!";
    </script>
  </body>
</html>
```
```css
Document
â”‚â”€â”€ html
â”‚   â”‚â”€â”€ head
â”‚   â”‚   â””â”€â”€ title
â”‚   â”‚       â””â”€â”€ "My Page"
â”‚   â”‚â”€â”€ body
â”‚       â”‚â”€â”€ h1
â”‚       â”‚   â””â”€â”€ "Hello World"
â”‚       â””â”€â”€ p
â”‚           â””â”€â”€ "This is a paragraph."

# Q.6 What is Selectors in JS 
selectors helps us to get specific element from dom tree based on its IDs classnames and tag names 

**Types of Selectors**:

1. **getElementById**  
   - Targets a single element by its `id`.  
   - Syntax: `document.getElementById("id")`  
   - Example: `document.getElementById("header")` â†’ Returns element with id="header".

2. **getElementsByClassName**  
   - Targets multiple elements by their `class` name. Returns an HTMLCollection.  
   - Syntax: `document.getElementsByClassName("class")`  
   - Example: `document.getElementsByClassName("item")` â†’ Returns all elements with class="item".

3. **getElementsByTagName**  
   - Targets elements by their tag name (e.g., `div`, `p`). Returns an HTMLCollection.  
   - Syntax: `document.getElementsByTagName("tag")`  
   - Example: `document.getElementsByTagName("p")` â†’ Returns all `<p>` elements.

4. **querySelector**  
   - Targets the first element matching a CSS selector.  
   - Syntax: `document.querySelector("selector")`  
   - Example: `document.querySelector(".item")` â†’ Returns first element with class="item".

5. **querySelectorAll**  
   - Targets all elements matching a CSS selector. Returns a NodeList.  
   - Syntax: `document.querySelectorAll("selector")`  
   - Example: `document.querySelectorAll(".item")` â†’ Returns all elements with class="item".

**Key Differences**:  
- `getElementById`: Single element, ID-based, fastest.  
- `getElementsByClassName`/`TagName`: Multiple elements, live collection.  
- `querySelector`/`All`: Flexible CSS syntax, `querySelectorAll` is static.

# Q.7 What are data types in js?

JavaScript has two main categories of data types: **Primitive** and **Non-Primitive**.

**Primitive Data Types**:  7 types 
1. **Number**  
   - Represents numeric values (integers or decimals).  
   - Example: `let num = 42;` or `let float = 3.14;`

2. **String**  
   - Represents text or characters.  
   - Example: `let str = "hello";`

3. **Boolean**  
   - Represents `true` or `false`.  
   - Example: `let isTrue = true;`

4. **Undefined**  
   - A variable declared but not assigned a value.  
   - Example: `let x;` â†’ `x` is `undefined`.

5. **Null**  
   - Represents the intentional absence of a value.  
   - Example: `let value = null;`

6. **Symbol**  
   - Unique and immutable value, often used as object property keys.  
   - Example: `let sym = Symbol("id");`

7. **BigInt**  
   - Represents large integers with arbitrary precision.  
   - Example: `let big = 12345678901234567890n;`

**Non-Primitive Data Type**:  
1. **Object**  
   - Represents a collection of key-value pairs or complex data.  
   - Includes:  
     - **Objects**: `let obj = { name: "John", age: 30 };`  
     - **Arrays**: `let arr = [1, 2, 3];`  
     - **Functions**: `function sayHi() { return "Hi"; }`

**Key Points**:  
- Primitive types are immutable and passed by value.  
- Objects are mutable and passed by reference.

## Here are some interesting facts about JavaScript data types:

1. **Arrays are Objects**  
   - Arrays are technically objects in JS, not a distinct type. `typeof [1, 2, 3]` returns `"object"`.  
   - Check with: `Array.isArray([1, 2, 3])` â†’ `true`.

2. **NaN is a Number**  
   - `NaN` (Not-a-Number) is part of the `Number` type, but `NaN !== NaN`.  
   - Test: `typeof NaN` â†’ `"number"`.

3. **Undefined vs. Null History**  
   - `undefined` was added later to fix issues with `null`. Originally, `null` was the only way to indicate "no value," but it confused developers.

4. **Symbol Uniqueness**  
   - Even if two Symbols have the same description, theyâ€™re unique: `Symbol("id") !== Symbol("id")`.

5. **BigInt Saves Precision**  
   - Numbers lose precision beyond `2^53 - 1`, but `BigInt` handles huge integers perfectly. Example: `9007199254740992n + 1n` works accurately.

# Q.8 What are operator what are types of operator
Operators are symbols or keyword used to perform operations of operands 

**Types of Operators**:

1. **Arithmetic Operators**  
   - Perform mathematical calculations.  
   - Examples:  
     - `+` (Addition): `5 + 3` â†’ `8`  
     - `-` (Subtraction): `5 - 3` â†’ `2`  
     - `*` (Multiplication): `5 * 3` â†’ `15`  
     - `/` (Division): `6 / 2` â†’ `3`  
     - `%` (Modulus): `7 % 2` â†’ `1`  
     - `**` (Exponentiation): `2 ** 3` â†’ `8`

2. **Assignment Operators**  
   - Assign values to variables.  
   - Examples:  
     - `=` : `let x = 5;`  
     - `+=` : `x += 2;` â†’ `x = 7`  
     - `-=` : `x -= 3;` â†’ `x = 4`  
     - `*=` : `x *= 2;` â†’ `x = 8`

3. **Comparison Operators**  
   - Compare two values, return `true` or `false`.  
   - Examples:  
     - `==` (Equal): `5 == "5"` â†’ `true`  
     - `===` (Strict Equal): `5 === "5"` â†’ `false`  
     - `!=` (Not Equal): `5 != 3` â†’ `true`  
     - `>` (Greater Than): `5 > 3` â†’ `true`  
     - `<` (Less Than): `3 < 5` â†’ `true`

4. **Logical Operators**  
   - Combine or negate boolean values.  
   - Examples:  
     - `&&` (AND): `true && false` â†’ `false`  
     - `||` (OR): `true || false` â†’ `true`  
     - `!` (NOT): `!true` â†’ `false`

5. **Bitwise Operators**  
   - Operate on binary representations of numbers.  
   - Examples:  
     - `&` (AND): `5 & 1` â†’ `1`  
     - `|` (OR): `5 | 1` â†’ `5`  
     - `~` (NOT): `~5` â†’ `-6`

6. **Unary Operators**  
   - Operate on a single operand.  
   - Examples:  
     - `typeof` : `typeof "hello"` â†’ `"string"`  
     - `++` (Increment): `let x = 5; x++;` â†’ `6`

7. **Ternary Operator**  
   - A shorthand for if-else.  
   - Syntax: `condition ? value1 : value2`  
   - Example: `5 > 3 ? "Yes" : "No"` â†’ `"Yes"`

**Key Note**: Operators vary in precedence (e.g., `*` before `+`), affecting evaluation order.

# Q.8 What Are Types of Conditional Statements in JavaScript

Conditional statements in JavaScript control the flow of execution based on conditions.

**Types of Conditional Statements**:

1. **if Else Statement**  
   - Executes a block of code if a condition is `true`.  
   - Syntax: 

   ```js
    if (condition1) {
      // code if condition1 true
      } else if (condition2) {
      // code if condition2 true
        } else {
        // code if all false
        }
    ```

    ```js 
         let score = 85;
        if (score >= 90) {
          console.log("A");
        } else if (score >= 80) {
          console.log("B");
        } else {
          console.log("C");
        }
        â†’ `"B"`
    ```
## Switch Statements
```js
        switch (expression) {
          case value1:
            // code
            break;
          case value2:
            // code
            break;
          default:
            // code if no match
        }
```

# What is a Loop and Types of Loops in JavaScript

A loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition is met.

**Types of Loops**:

1. **for Loop**  
   - Repeats code a specific number of times using a counter.  
   - Syntax:  
     ```javascript
     for (initialization; condition; increment) {
       // code
     }

# List of Loops in JavaScript

# Definitions of Loops in JavaScript

1. **for Loop**  
   - A loop that repeats a block of code a fixed number of times, using an initialization, condition, and increment/decrement.

2. **while Loop**  
   - A loop that continues executing a block of code as long as a specified condition remains `true`.
     ```js
         while (condition) {
         // code
            }
     ```
3. **do...while Loop**  
   - A loop that executes a block of code at least once, then repeats as long as a condition is `true`.
    ```js
        do {
          // code
        } while (condition);
    ```
4. **for...in Loop**  
   - A loop that iterates over the enumerable properties (keys) of an object.
   ```js
               for (key in object) {
              // code
            }
   ```

5. **for...of Loop**  
   - A loop that iterates over the values of an iterable object, such as arrays or strings.


   ```js
        for (variable of iterable) {
          // code
        }  
    ```



# Definition of a Function in JavaScript

A **function** in JavaScript is a reusable block of code designed to perform a specific task. It can take input (parameters), process it, and return an output. Functions are defined once and can be called multiple times with different arguments.

**Syntax**:  
```javascript
function functionName(parameters) {
  // code to execute
  return value; // optional
}
```
### Key Points:

- Functions can be named or anonymous.
- They can return a value using return, or nothing (implicitly returns undefined).
- Parameters are optional.

## List of Types of Functions in JavaScript

1. Named Function (Function Declaration)  
2. Anonymous Function   
3. Arrow Function 
4. Function Expression
5. Immediately Invoked Function Expression (IIFE)  
6. Constructor Function  
7. Higher-Order Function

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


# Arrow Function in JavaScript

Arrow functions provide a shorter syntax for writing functions in JavaScript.

---

## **Syntax:**
```js
let functionName = (param1, param2) => expression;


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


# Que16. Object 
Object is data type that allaow you to store key value pair 


## We can store in object 
1. String/number/boolean/undefined /null
2. Arrray
3. Functions 
4. Object 

```js
let person={
    name :"vishal",
    hobbies:["Teaching","football","coding"],
    greet: function (){
        console.log("Name :"+ this.name);
        
    },

}
console.log(person.name);
console.log(person.hobbies[1]);
person.greet();
```



# Que17.  Scopes in JavaScript

- **Global Scope**: Variables declared outside any function or block, accessible everywhere in the code.
- **Function Scope**: Variables declared inside a function using `var`, accessible only within that function.
- **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., `{}`), accessible only within that block.
- **Lexical Scope**: Inner functions have access to variables of their outer functions (closure), determined by where the function is defined.

     ```js
            let gloabalVariable = "global" // global access anywhere

            greet()

            function greet(){
                let funtionalVariable="function" // have access within funtion only 
                if(true){
                    let blockVariable="block"//accesss only wihtin block
                    console.log(gloabalVariable);
                    console.log(funtionalVariable);
                    console.log(blockVariable);


                }
                console.log(funtionalVariable);
                console.log(gloabalVariable);
                console.log(blockVariable)// blockVariable is not defined


            }
            console.log(gloabalVariable);
            console.log(funtionalVariable);//funtionalVariable is not defined

    ```

# What is Hoisting in javascript
Hoisting is the javascript behavior where all the funtion and variable declaration move on the top of their respective scope during compilation phase

## Two types of hoisting 
1. Function hoisting 
2. variable hoisting 


# Q.19 Error Handling in JavaScript
Error Handling is the process of managing the errors 

- **try**: Block where you test code that might throw an error.
- **catch**: Block that handles the error if one occurs in the `try` block.
- **throw**: Keyword to manually create and throw a custom error.
- **finally**: Block that runs after `try`/`catch`, regardless of the outcome.

Example:
```javascript
try {
    let result = riskyOperation();
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Cleanup done.");
}

# Q.20 Synchronous vs Asynchronous Programming in JavaScript

- **Synchronous**: Code executes line by line, blocking further execution until the current task completes.
  - Example: `let x = 1; console.log(x);` (runs immediately, in order).

- **Asynchronous**: Code execution doesnâ€™t wait; tasks like timers or API calls run in the background, handled via callbacks, promises, or async/await.
  - Example: 
    ```javascript
    setTimeout(() => console.log("Delayed"), 1000);
    console.log("First");

    ``` 
  ## Asyc programming
   - async programming allows multiple task or operations to be intiated and executed **cuncurruntly** 
   - async operations do not block another operation
  
    ### Use of async operations
      1. File uploading 
      2. File downloading 
      3. Fetching data from API
      4. Animations and transitions 
      5. Time Taking Operations 

# Q.21 What is the diffrence b/w premitive and non-primitive data types?
| Premitive Data Types | Non premitive data types |
|----------------------|--------------------------|
| Premitive Data type can hold only single value    | Non premitive data tyepe can hold multiple values   |
| Premitive data types are immutable once its asign can not be changed     |They are mutable and values can be changed   | 
| Nunber, Boolean, Undefined, and null are Premitive data types    |Object, Array, Function, Date , and RegExp are Non premitve data types  | 
| They are simple data types     |They are Complex Data types  | 


# What is the diffrece b/w null and undefined 
 when a variable declare but not asign any value it is automaticaly asign ***undefined*** 
 ```js
 let undefinedVarible;
 console.log(undefiedVariable)// undefined 
```

- We use undefined when we don't have value right now we will get after some logic and operations

### Null is the variable that intentionaly asign the null value
```js
    let nullVariable= null;
    console.log(nullVaribale) // null
```

- null is used when you are sure you do not have any value of the particular variable


  
# Q23. WHAT IS TYPE COERCION IN JS?

**Left Side:**
- Type coercion is the automatic conversion of values from one data type to another during certain operations or comparisons.

**Uses of type coercion:**
1. Type coercion can be used during String and Number concatenation.
2. Type coercion can be used while using Comparison operators.

**Right Side (Code and Outputs):**
```javascript
let string = "42";
let number = 42;
let boolean = true;
let nullValue = null;

// Type coercion - automatic conversion
console.log(string + number); // Output: "4242"
console.log(number + boolean); // Output: 43
console.log(number == string); // Output: true
console.log(boolean == 1); // Output: true
console.log(boolean + nullValue); // Output: 1

# Q.24 What is the difference between unary, binary, and ternary operators?

**Header:**
Operators based on number of operands

**Unary Operator:**
```javascript
let a = 5;

// Unary operator
// Single operand
let b = -a;
console.log(b);
// Output: -5

console.log(++a);
// Output: 6
```

**Binary Operator:**
```js
let x = 10;
let y = 3;

// Binary operator
// Two operands
let z = x + y;
console.log(z);
// Output: 13
```

**Ternary Operator:**
```js
// Ternary operator
// Three operands
let result = condition ? 'Yes' : 'No';
console.log(result);
// Output: 'Yes'
```




# Q.25 What is short-circuit evaluation in JS?

Short-circuit evaluation stops the execution as soon as the result can be determined without evaluating the remaining sub-expressions.

**Code and Outputs:**
```js
// Short-circuit evaluation with logical OR
let result2 = true || someFunction();
console.log(result2);
// Output: true
```

**Short-circuit evaluation with logical AND:**
```javascript
// Short-circuit evaluation with logical AND
let result1 = false && someFunction();
console.log(result1);
// Output: false

# Q.26 What is operator precedence?

BODMAS
â”œâ”€â”€ Brackets
â”œâ”€â”€ Order
â”œâ”€â”€ Division
â”œâ”€â”€ Multiplication
â”œâ”€â”€ Addition
â””â”€â”€ Subtraction


**Code and Output:**
```javascript
let a = 6;
let b = 3;
let c = 2;

// BracketOf-Division-Multiplication-Add-Sub
let result = a + b * c * (a - b);
console.log(result);
// Output: 15
```

# Q.27 When to use which type of conditional statements in real applications? V. IMP.

**Descriptions and Benefits:**
- **if...else**: for complex, different & multiline execution.
  - **Benefit**: Cover all scenarios.
- **Ternary operators**: for simple conditions & single value evaluations.
  - **Benefit**: Short one line syntax.
- **Switch case**: For some left side values.
  - **Benefit**: More structured code.

**Code and Outputs:**

**if...else Example:**
```javascript
const age = 25;
const height = 6;

if (age < 25 && height < 5) {
    console.log("You are a minor.");
    console.log("You are a short.");
} else if (age >= 18 && height > 6) {
    console.log("You are an adult.");
    console.log("You are an tall.");
} else {
    console.log("You are average");
}
// Output: "You are average"
```
***Ternary Operator Example:***
```js
const isUser = true;

const user = isUser ? 10 : 20;
console.log(user);
// Output: 10
```

***Switch Case Example:***
```js
const dayOfWeek = "Tuesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start");
        break;
    case "Tuesday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid");
}
// Output: "Weekend!"
```

# Q.28 What is the difference between == and ===? 

**Code and Outputs:**

**Loose Equality (==):**
```javascript
// Loose Equality
console.log(1 == '1');
// Output: true

console.log(true == 1);
// Output: true
```
**Strict Equality (===):**
```js
// Strict Equality
console.log(1 === '1');
// Output: false

console.log(true === 1);
// Output: false
```
***Descriptions:***

**Loose Equality (==):** Operator compares two values for equality after performing type coercion.

**Strict Equality (===):** Operator compares two values for equality without performing type coercion.


**Note:** Normally === is preferred in use to get more accurate comparisons.

# Q.29  What is the difference between Spread and Rest operator in JS?

**Description:**
- The spread operator (...) is used to expand or spread elements from an iterable (such as an array, string, or object) into individual elements.

**Diagram:**


Uses of Spread Operator
â”œâ”€â”€ Copying an Array
â”œâ”€â”€ Merging Arrays
â””â”€â”€ Passing Multiple Arguments to a Function



**Code and Outputs:**

**Spread Operator Examples:**
```javascript
// Spread Operator Examples
const array = [1, 2, 3];
console.log(...array); // Output: 1, 2, 3

// Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Merging arrays
const array1 = [1, 2, 3];
const array2 = [4, 5];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5]

// Passing multiple arguments to a function
const numbers = [1, 2, 3, 4, 5];
sum(...numbers);

function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e); // Output: 15
}

```

**Code and Outputs:**

**Spread Operator Examples:**
```javascript
// Spread Operator Examples
const array = [1, 2, 3];
console.log(...array); // Output: 1, 2, 3

// Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Merging arrays
const array1 = [1, 2, 3];
const array2 = [4, 5];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5]

// Passing multiple arguments to a function
const numbers = [1, 2, 3, 4, 5];
sum(...numbers);

function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e); // Output: 15
}
```

*Description:**
- The rest operator is used in function parameters to collect all remaining arguments into an array.

**Code and Output:**

**Rest Operator Example:**

```javascript
// Rest Operator Example
display(1, 2, 3, 4, 5);

function display(first, second, ...restArguments) {
    console.log(first); // Output: 1
    console.log(second); // Output: 2
    console.log(remaining); // Output: [3, 4, 5]
}
```

# Q.30 what is the indexOf method in array

indexOf method get the index of specified element in array

```js
const array =[1,2,3,4,5,3]
const ind=array.indexOf(3)
console.log(ind);//2 
//only first element 
```


# Q.31 what is the diffrence b/w find and filter method in array
The **find()** method gets first element that specify the condition



```js

const array = [1,2,3,4,5,6,7]
const c= array.find((num)=>num%2===0)
console.log(c); //2
```


The **filter()** method gets array of element that specify the condition
```js
const array = [1,2,3,4,5,6,7]
let d= array.filter((num)=>num%2===0)
console.log(d); //[2,4,6]
```

# Q.32 **slice()** method in array
The slice method get a subset of an array with start index to end index the ***End index is not include***

```js

const array =[1,2,3,4,5,6,6,7]
let slicedArray=array.slice(3,5)
console.log(slicedArray)// [ 4, 5 ]
```


# Q.33 What is the difference b/w push() and concat() method in array

- **push()**: 

    Adds one or more elements to the end of an array and modifies the original array. Returns the new length of the array.
  - Example:
    ```javascript
    let arr = [1, 2];
    arr.push(3);
    console.log(arr); // Output: [1, 2, 3]
    ```

   **concat():**

    Combines two or more arrays into a new array without modifying the original arrays. Returns the new array.
    ```js
        let arr1 = [1, 2];
        let arr2 = [3, 4];
        let newArr = arr1.concat(arr2);
        console.log(newArr); // Output: [1, 2, 3, 4]
        console.log(arr1); // Output: [1, 2] (unchanged)
        let arr1 = [1, 2];

    ```

# Q.33 splice() Method in JavaScript

- **Description**: The `splice()` method changes the contents of an array by removing, replacing, or adding elements.

- **Syntax**: `array.splice(start, deleteCount, item1, item2, ...);`
  - `start`: Index at which to start changing the array.
  - `deleteCount`: Number of elements to remove.
  - `item1, item2, ...`: Elements to add to the array.

- **Examples:**
  - Remove 2 elements starting from index 1:
    ```javascript
    const array=[1,2,3,4,5,6,7,8]
    const splicedArray=array.splice(2,3,9,0);
    console.log(splicedArray);//[ 3, 4, 5 ]
    console.log(array); //[1, 2, 9, 0, 6, 7, 8]
    
    ```

# Difference between splice() and slice() in JavaScript

- **splice()**: Modifies the original array by adding, removing, or replacing elements. Returns the removed elements.
  - **Syntax**: `array.splice(start, deleteCount, item1, item2, ...)`
  - Example:
    ```javascript
    let arr = [1, 2, 3, 4];
    arr.splice(1, 2, 5); // Removes 2 elements from index 1, adds 5
    console.log(arr); // Output: [1, 5, 4]
    ```
**slice():** Creates a new array with a subset of elements from the original array, without modifying it. Returns the new array.
**Syntax:** array.slice(start, end)
Example:

```js
et arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // Extracts elements from index 1 to 2
console.log(newArr); // Output: [2, 3]
console.log(arr); // Output: [1, 2, 3, 4] (unchanged)


# Q Diffrenece B/w map and foreach method of an array
 `map()` is used when you want to modify each element of  an array and create a new array with modified values
 ```js
        let array=[1,3,6,7,8,5,4,3,2]
        let newArr=array.map(el=>el*2)
        console.log(newArr)//[2, 6, 12, 14, 16,  10, 8,  6,  4]
 ```


*`foreach`* method is used when you want to perform some operation to each element of array without creating a new array 
```js
        let array2=[1,4,5,5,6,4,2,3]
        let newArr2=array2.forEach(el=>console.log(el*2))
        console.log(newArr2)
```

# Q. Array like objects 
Array like objects are objects that have indexed element and length property like object but may not have all methods like array pop,push 

## types of array like object 
1. HTML COLLECTION
2. Strings
3. arguments

## How to convert an array like object in to an array
1. Array.from(ArrayLike)
2. spread syntax [...ArrayLike]
3. Array.prototype.slice.call(Arraylike)

# What is the diffrece bw while loop and for loop
 ## for loop
 1. `for` loop allow to iterate a block of code for specific number of time
 2. `for` loop is better for condition with initialization and with increment because all can be set one line of code 
 ## while loop 
1. `while` loop executes a block of code while a certain condition is true
2. `while` loop is better when there is only codition, no initialization no increment 


# Q. what is the diffrecnce bw while loop and do while loop 
1. `while` loop executes blcok of code while certain codition in true 
2. `do-while ` loop is similer to the while loop exepect that block of code is executes at least once even if condition is false

# Q. Diffrece bw break and continue 
1. The `break` is used to terminate the loop 
2. The `continue` statement is used to skip the currunt iteration of the loop and move on the next iteration


# Q. Difference bw for-of and for-in loop

`for-of`
1. for of loop is used to loop through the values of an objects like arary,strings 
2. it allows you to access the value directly without having to use an index 
```js
let arr=[1,4,3,4,5]
for(let val of arr){
    console.log(val)
}
//output 1 2 3
```
`for-in` 
1. for-in loop is used to loop throgh properties of an object 
2. it allow you to iterate over the keys of over the keys an object and access the value assoiated the values assoisiated by using key as a index

```js
const person={
    name:"happy",
    role:"devoloper"
};
for(let key in person){
    console.log(person[key])
}
```

## `forEach`
 forEach method is availible on array or object that allow you to iterate over each element of array and perform some action on each element


# Notes 

1. for-of loop is suitable when you need to more control over th loop such as break and continue statements 
2. forEach method iterate over each element of the array and perform some actions on each element 

# Q. What is the difference between named and anonymous functions? When to use what in applications?

**Descriptions:**
- **Named functions** have a name identifier.
  - Use named functions for big and complex logics.
  - Use when you want to reuse one function at multiple places.
- **Anonymous functions** do not have a name identifier and cannot be referenced directly by name.
  - Use anonymous functions for small logics.
  - Use when want to use a function in a single place.

**Code and Outputs:**

**Named Function:**
```javascript
// Named function
function sum(a, b) {
    return a + b;
}

console.log(sum(5, 3));
// Output: 8

# Q. What is function expression in JS?

**Description:**
- A function expression is a way to define a function by assigning it to a variable.

**Code and Outputs:**

**Anonymous Function Expression:**
```javascript
// Anonymous Function Expression
const add = function(a, b) {
    return a + b;
}

console.log(add(5, 3));
// Output: 8

# Q. What are callback functions? What is its use? V. IMP.

**Description:**
- A callback function is a function that is passed as an argument to another function.

**Code and Outputs:**

**Callback Function Example:**
```javascript
function add(x, y) {
    return x + y;
}
```
```js 
let a = 3, b = 5;
let result = add(a, b);
console.log(result);
// Output: 8

function display(x, y, operation) {
    var result = operation(x, y);
    console.log(result);
}

display(10, 5, add);
// Output: 15

# Q. What is Higher-order function in JS?

**Description:**
- A Higher order function:
  1. Take one or more functions as arguments (callback function) OR
  2. Return a function as a result

**Code and Outputs:**

**Take one or more functions as arguments:**
```javascript
// Take one or more functions
function hof(func) {
    func();
}

function sayHello() {
    console.log("Hello!");
}

hof(sayHello);
// Output: "Hello!"

# Q. What is the difference between arguments and parameters?

**Description:**
- Parameters are the placeholders defined in the function declaration.

**Code and Output:**

```javascript
// a and b are parameters
function add(a, b) {
    console.log(a + b);
}

# Q. What is the difference between arguments and parameters?

**Descriptions:**
- Parameters are the placeholders defined in the function declaration.
- Arguments are the actual values passed to a function when it is invoked or called.

**Code Examples:**

**Parameters:**
```javascript
// a and b are parameters
function add(a, b) {
    console.log(a + b);
}

add(3, 4);
// 3 and 4 are arguments

# Q. How do you use default parameters in a function?

**Description:**
- In JavaScript, default parameters allow you to specify default values for function parameters.

**Code and Outputs:**

**Function with Default Parameter Value:**
```javascript
// Function with default parameter value
function greet(name = "Happy") {
    console.log("Hello, " + name + "!");
}

greet();
// Output: Hello, Happy!

greet("Amit");
// Output: Hello, Amit!

# Q. What is the use of event handling in JS? V. IMP.

**Descriptions:**
- Event handling is the process of responding to user actions in a web page.
- The `addEventListener` method of JavaScript allows to attach an event name and with the function you want to perform on that event.

**Code Example:**

```javascript
<button id="myButton">Click me</button>

// Get a reference to the button element
const button = document.getElementById('myButton');

// Add an event listener for the 'click' event
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```
Event Types with Syntax:

- Click Event: addEventListener('click', handler)
- Mouseover Event: addEventListener('mouseover', handler)
- Keydown Event: addEventListener('keydown', handler)
- Keyup Event: addEventListener('keyup', handler)
- Submit Event: addEventListener('submit', handler)
- Focus Event: addEventListener('focus', handler)
- Blur Event: addEventListener('blur', handler)
- Change Event: addEventListener('change', handler)
- Load Event: addEventListener('load', handler)
- Resize Event: addEventListener('resize', handler)

# Q. What are First-Class functions in JS?

**Description:**
- A programming language is said to have First-class functions if functions in that language are treated like other variables.

**Diagram:**
Functions treated like variables
1. Assignable
2. Passable as Arguments
3. Returnable as Values


**Code Examples and Outputs:**

**1. Assigning function like a variable:**
```javascript
// 1. Assigning function like a variable
const myFunction = function() {
    console.log("Interview, Happy!");
};

myFunction();
// Output: "Interview, Happy!"

```

2. **Passing function as an argument like a variable:**
```js
function double(number) {
    return number * 2;
}

function performOperation(double, value) {
    return double(value);
}

console.log(performOperation(double, 5));
// Output: 10
```


# Q What are Pure and Impure functions in JS?

**pure**
1. A pure function is a function that always produces the same output for the same input
2. Pure functions cannot modify the state
3. pure functions cannot have side effects 
```js
// Pure function
function add(a,b){
    return a+b
}
console.log(add(3,5))
//8
console.log(add(3,5))
//8

```
***impure***
1. An impure function can produce diffrent outputs for the same input 
2. impure functions can modify the state 
3. impure function can have side effects 

```js
let total =0;
function addTotal(value){
    total+=value;
    return total
}
console.log(addTotal(5))
//5
console.log(addTotal(5))
//10
```

# Q. What is Function Currying in JS?

**Descriptions:**
- Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.
- **Advantage**: Reusability, modularity, and specialization. Big, complex functions with multiple arguments can be broken down into small, reusable functions with fewer arguments.


**Code Examples and Outputs:**

**Regular function that takes two arguments and returns their product:**
```javascript
// Regular function that takes two arguments and returns their product
function multiply(a, b) {
    return a * b;
}
```
**Curried version of the multiply function:**
```js
// Curried version of the multiply function
function curriedMultiply(a) {
    return function(b) {
        return a * b;
    };
}
```
**Create a specialized function for doubling a number:**
```js
const double = curriedMultiply(2);
console.log(double(5));
// Output: 10 (2 * 5)
```

# Extracted Text from Image

**Title:**
Top 100 JavaScript Interview Questions and Answers - HINDI  
Q. What are call, apply and bind methods in JS?

**Descriptions:**
- `call`, `apply`, and `bind` are three methods in JavaScript that are used to work with functions and control how they are invoked and what context they operate in.
- These methods provide a way to manipulate the `this` value and pass arguments to functions.

**Code Examples and Outputs:**

**Defining a function that uses the "this" context and an argument:**
```javascript
// Defining a function that uses the "this" context and an argument
function sayHello(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = { name: 'Happy' };
```
1. **call**- Using the "call" method to invoke the function with a specific context and arguments:
```js 
sayHello.call(person, 'Hello');
// Output: "Hello, Happy!"
```
2. **apply** - Using the "apply" method to invoke the function with a specific context and an array of arguments:
```js
sayHello.apply(person, ['Hi']);
// Output: "Hi, Happy!"
```
3. **bind** - Using the "bind" method to create a new function with a specific context (not invoking it immediately):
```js
const greetPerson = sayHello.bind(person);
greetPerson('Greetings');
// Output: "Greetings, Happy!"
```

# Q. What are template literals and string interpolation in strings? V. IMP.

**Description:**
- A template literal, also known as a template string, is a feature introduced in ECMAScript 2015 (ES6) for string interpolation and multiline strings in JavaScript.

**Label:**
- `${Template} Literal`

**Code Examples and Outputs:**

**Template literals with string interpolation (Backticks):**
```javascript
// Template literals with string interpolation
var myname = "Happy";
var str3 = `Hello ${myname}!`;
console.log(str3);
// Output: Hello Happy!

```
Template literals for multiline strings (Backticks):
```js
// Template literals for multiline strings
var multilineStr = `
This is a
multiline string.
`

```

#  What is string immutability? V. IMP.

**Description:**
- Strings in JavaScript are considered immutable because you cannot modify the contents of an existing string directly.

Memory (Managed by JavaScript Engine inside browsers)
â”œâ”€â”€ 8888888 (memory address) --> Interview
â””â”€â”€ 9999999 (memory address) --> Interview Happy


**Code Example:**

```javascript
var str = 'Interview';
// Creates a new string
str = str + ' Happy';
```

***Short explanation:*** The question asks to extract text from an image explaining string immutability in JavaScript, where strings cannot be changed directly, and any modification creates a new string. A code example and memory diagram illustrate this concept.

# Q. In how many ways you can concatenate strings?
Ways to concatenate strings
â”œâ”€â”€ + Operator
â”œâ”€â”€ concat() method
â”œâ”€â”€ Template literals
â””â”€â”€ join() method



**Code Examples and Outputs:**

**+ Operator:**
```javascript
// + operator
let s1 = 'Hello';
let s2 = 'World';
let r1 = s1 + s2;
console.log(r1);
// Output: HelloWorld
```
**concat() method:**
```js
// concat() method
let r2 = s1.concat(s2);
console.log(r2);
// Output: HelloWorld
```
**Template literals:**

```js
// template literals
let r3 = `${s1} ${s2}`;
console.log(r3);
// Output: Hello World
```
***join() method:***
```js
// join() method
let strings = [s1, s2];
let r4 = strings.join(' ');
console.log(r4);
// Output: Hello World
```


DOM Methods
â”œâ”€â”€ Selecting DOM elements
â”‚   â”œâ”€â”€ getElementById(id)
â”‚   â”œâ”€â”€ querySelector(selector)
â”‚   â”œâ”€â”€ querySelectorAll(selector)
â”‚   â”œâ”€â”€ getElementsByClassName(className)
â”‚   â””â”€â”€ getElementsByTagName(tagName)
â”œâ”€â”€ Modifying element properties and attributes
â”‚   â”œâ”€â”€ textContent
â”‚   â”œâ”€â”€ innerHTML
â”‚   â”œâ”€â”€ setAttribute(name, value)
â”‚   â”œâ”€â”€ removeAttribute(name)
â”‚   â””â”€â”€ style.property
â”œâ”€â”€ Creating & appending elements
â”‚   â”œâ”€â”€ createElement(tagName)
â”‚   â”œâ”€â”€ appendChild(node)
â”‚   â””â”€â”€ cloneNode(deep)
â”œâ”€â”€ Removing elements
â”‚   â”œâ”€â”€ remove()
â”‚   â””â”€â”€ removeChild(node)
â””â”€â”€ Adding and removing event listeners
â”œâ”€â”€ addEventListener(type, listener)
â””â”€â”€ removeEventListener(type, listener)

# Q. methods of modifing elements properties and attribute ?
1. textContent
2. innerHtml
3. setAttributes()
4. removeAttributes()
5. style.setProperty
6. classList.add()


# Q. How to create new elements in DOM using JS? What is the difference between createElement() and cloneNode()?

DOM methods to create elements dynamically
1. createElement()
2. cloneNode()
3. createTextNode()
4. innerHTML
5. insertAdjacentHTML()
6. document.write()


**Code Examples:**

**createElement() - create new element:**
```javascript
// createElement() - create new element
var newDiv = document.createElement('div');
newDiv.textContent = 'Newly created div';
document.body.appendChild(newDiv);
<div>Newly created div</div>
```
```js
// cloneNode() - copy the existing element with all attributes
<div id="parentElement">
    <h1>Existing Element</h1>
</div>

// Existing element
var existingElement = document.getElementById('parentElement');
var clonedElement = existingElement.cloneNode(true);
clonedElement.textContent = 'Cloned element';
document.body.appendChild(clonedElement);
```


# Q. Explanation of the throw Statement in JavaScript
The throw statement in JavaScript is used to manually generate or throw an exception. When an exception is thrown, the normal flow of the program is interrupted, and control is passed to the nearest try-catch block or the call stack unwinds until the exception is caught or the program terminates if unhandled. This is typically used for error handling to signal that something has gone wrong.

```js
// Example of throw statement
function checkNumber(num) {
    try {
        if (num < 0) {
            throw new Error("Number cannot be negative!");
        }
        console.log("Number is valid: " + num);
    } catch (error) {
        console.log("Error caught: " + error.message);
    } finally {
        console.log("This will always execute.");
    }
}

// Test the function
checkNumber(10); // Output: Number is valid: 10, This will always execute.
checkNumber(-5); // Output: Error caught: Number cannot be negative!, This will always execute.

# Question 61  What are the best practices for error handling?



**1. Use Try Catch and Handle Errors Appropriately:**
```javascript
// 1. Use Try Catch and Handle Errors Appropriately
try {
    // Code that may throw an error
} catch (error) {
    // Error handling and recovery actions
}
```
2. **Use Descriptive Error Messages:**
```js 
// 2. Use Descriptive Error Messages
throw new Error("Cannot divide by zero");
```
3. **Avoid Swallowing Errors:**
```js
// 3. Avoid Swallowing Errors
try {
    // Code that may throw an error
} catch (error) {
    // Do not leave the catch blank
}
```
4. **Log Errors:**
```js
// 4. Log Errors
try {
    // Code that may throw an error
} catch (error) {
    console.error("An error occurred:", error);
    // Log the error with a logging library
}



# Q. how many ways we can create an object?


Ways to create and initialize an object
1. Object Literal
2. Object Constructor
3. Object.create() Method


**Code Examples and Outputs:**

**Object Literal:**
```javascript
// Object literal
var person = {
    name: "Happy",
    age: 38,
    role: "Trainer"
};
console.log(person);
// Output: { name: 'Happy', age: 38, role: 'Trainer' }
// name: "Happy"
// age: 38
// role: "Trainer"
// [Prototype]: Object
```

```js
// Object.create() Method
var person = {
    name: "",
    age: 0,
    role: ""
};
var men = Object.create(person);
men.name = "Happy";
men.age = 38;
men.role = "Trainer";
console.log(men);
// Output: { name: 'Happy', age: 38, role: 'Trainer' }
```


# Q. What is the difference between an array and an object?

**Comparison Table:**

| Arrays                              | Objects                              |
|-------------------------------------|--------------------------------------|
| 1. Arrays are collection of values. | Objects are collections of key-value pairs. |
| 2. Arrays are denoted by square brackets `[ ]`. | Objects are denoted by curly braces `{ }`. |
| 3. Elements in array are ordered.   | Properties in objects are unordered. |

**Code Examples:**

**Array:**
```javascript
// Array
var fruits = ["apple", "banana", "orange"];
// Object
var person = {
    name: "Amit",
    age: 25,
    city: "Delhi"
};



# Q. How do you add or modify or delete properties of an object?

**Code Examples:**

**Blank object:**
```javascript
// Blank object
var person = {};
// Adding Properties
person.name = "Happy";
person.age = 35;
person.country = "India";
// Modifying Properties
person.age = 30;
// Deleting Properties
delete person.age;

# Q. Explain the difference between dot notation and bracket notation?

**Descriptions:**
- Both dot notation and bracket notation are used to access properties or methods of an object.
- Dot notation is more popular and used due to its simplicity.

- Limitation of dot notation - In some scenarios bracket notation is the only option, such as when accessing properties when the property name is stored in a variable.

**Code Examples and Outputs:**

**Dot notation:**
```javascript
const person = {
    name: "Happy",
    age: 35
};

// Dot notation:
console.log(person.name);
// Output: "Happy"


// Dynamically assign property name to a variable
var propertyName = "age";
console.log(person[propertyName]); 
// Output: 35

console.log(person.propertyName); 
// Output: undefined

# Q. What are some common methods to iterate over the properties of an object?

Ways to iterate over the properties of an object
 1. for...in loop
 2. Object.keys() & forEach()
 3. Object.values() & forEach()


**Code Examples and Outputs:**

**Object:**
```javascript
const person = {
    name: "John",
    age: 30
};
// 1. Using for...in loop
for (let prop in person) {
    console.log(prop + ": " + person[prop]);
}
// Output: name: John age: 30

// 2. Using Object.keys() and forEach()
Object.keys(person).forEach((prop) => {
    console.log(prop + ": " + person[prop]);
});
// Output: name: John age: 30

// 3. Using Object.values() and forEach()
Object.values(person).forEach((value) => {
    console.log(value);
});
// Output: John 30

# Q. How do you check if a property exists in an object?

**Object:**
```javascript
var person = {
    name: "Alice",
    age: 25
};


// 1. Using the in Operator
console.log("name" in person); // Output: true
console.log("city" in person); // Output: false'



// 2. Using the hasOwnProperty() Method
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("city")); // Output: false



// 3. Comparing with undefined
console.log(person.name !== undefined); // Output: true
console.log(person.city !== undefined); // Output: false

# Q. How do you clone or copy an object?

**Diagram:**
Ways to clone or copy an object
 1. Spread Syntax (...)
 2. Object.assign()
 3. JSON.parse() & JSON.stringify()
 
**Code Examples:**

**Original object:**
```javascript
// Original object
const originalObject = {
    name: "Happy",
    age: 35,
    city: "Delhi"
};


// Method 2: Object.assign() (shallow copy)
// Parameters: target, source
const clonedObjectAssign = Object.assign({}, originalObject);


// Method 3: JSON.parse() and JSON.stringify() (deep copy)
const clonedObjectJSON = JSON.parse(JSON.stringify(originalObject));

# Q. What is the difference between deep copy and shallow copy in JS?

**Description:**
- Shallow copy in nested objects case will modify the parent object property value, if cloned object property value is changed. But deep copy will not modify the parent object property value.

**Original object:**
```javascript
// Original object
const person = {
    name: "Happy",
    age: 30,
    address: {
        city: "Delhi",
        country: "India"
    }
};


// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, person);
shallowCopy.address.city = "Mumbai";
console.log(person.address.city); // Output: "Mumbai"
console.log(shallowCopy.address.city); // Output: "Mumbai"

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = "Bangalore";
console.log(person.address.city); // Output: "Delhi"
console.log(deepCopy.address.city); // Output: "Bangalore"

# Q. What is Set object in JS?

**Descriptions:**
- The Set object is a collection of unique values, meaning that duplicate values are not allowed.
- Set provides methods of adding, deleting, and checking the existence of values in the set.
- Set can be used to remove duplicate values from arrays.

**Code Examples and Outputs:**

**Creating a Set to store unique numbers:**
```javascript
// Creating a Set to store unique numbers
const uniqueNumbers = new Set();
uniqueNumbers.add(5);
uniqueNumbers.add(10);
uniqueNumbers.add(5); // Ignore duplicate values
console.log(uniqueNumbers);
// Output: {5, 10}

// Check size
console.log(uniqueNumbers.size);
// Output: 2

// Check element existence
console.log(uniqueNumbers.has(10));
// Output: true

// Delete element
uniqueNumbers.delete(10);
console.log(uniqueNumbers.size);
// Output: 1


// Set can be used to remove duplicate values from arrays
let myArr = [1, 4, 3, 4];
let mySet = new Set(myArr);
let uniqueArray = [...mySet];
console.log(uniqueArray);
// Output: [1, 4, 3]



# Q. What is Map Object in JS?

**Descriptions:**
- The Map object is a collection of key-value pairs where each key can be of any type, and each value can also be of any type.
- A Map maintains the order of key-value pairs as they were inserted.

**Code Examples and Outputs:**

**Creating a Map to store person details:**
```javascript
// Creating a Map to store person details
const personDetails = new Map();
personDetails.set("name", "Alice");
personDetails.set("age", 30);
console.log(personDetails.get("name")); 
// Output: "Alice"
console.log(personDetails.has("age")); 
// Output: true
personDetails.delete("age");
console.log(personDetails.size); 
// Output: 1

# Q. What is the difference between Map and Object in JS?

**Comparison Table:**

| Map                                   | Javascript Object                     |
|---------------------------------------|---------------------------------------|
| 1. Keys in a Map can be of any data type, including strings, numbers, objects, functions etc. | Keys in a regular Javascript object are limited to strings and symbols. |
| 2. A Map maintains the order of key-value pairs as they were inserted. | In a regular object, there is no guaranteed order of keys. |
| 3. Useful when keys are of different types, insertion order is important. | Useful when keys are strings or symbols and there are simple set of properties. |

**Video Timestamp:**
4:27:26 / 4:57:11

# # Top 100 JavaScript Interview Questions and Answers - HINDI | V. IMP.

## Events and How They Are Triggered

- **Events** are actions that happen in the browser, such as a **button click**, **mouse movement**, or **keyboard input**.

### Code Example

```html
<button id="myButton">Click Me</button>

// Get the reference of button in a variable
var button = document.getElementById("myButton");

// Attach an event handler to the button
button.addEventListener("click", handleClick);

// Event handler function
function handleClick() {
    alert("button clicked");
}
```
**Key Terms**
**Event:** The "click" event in this case.

**Event handler/Callback function:** The handleClick function.

# Q. What are the types of events in JS? V. IMP.


```html
<button id="myButton">Click Me</button>
// Get the reference of button in a variable
var button = document.getElementById("myButton");

// Attach an event handler to the button
button.addEventListener("click", handleClick);

// Event handler function
function handleClick() {
    alert("button clicked");
}
```
## Types of Events in JavaScript
**Click Event:** addEventListener('click', handler)

**Mouseover Event:** addEventListener('mouseover', handler)

**Keydown Event:** addEventListener('keydown', handler)

**Keyup Event:** addEventListener('keyup', handler)

**Submit Event:** addEventListener('submit', handler)

**Focus Event:** addEventListener('focus', handler)

**Blur Event:** addEventListener('blur', handler)

**Change Event:** addEventListener('change', handler)

**Load Event:** addEventListener('load', handler)

**Resize Event:** addEventListener('resize', handler)

## Key Terms

**Event:** Highlighted in the code as the "click" event.

# Q. What is Event Object in JS?

- **Whenever any event is triggered**, the browser automatically creates an **event object** and passes it as an argument to the **event handler function**.

### Code Example

```html
<button id="myButton">Click Me</button>
// Get the button element
var button = document.getElementById("myButton");

// Attach event listener to the button element
button.addEventListener("click", handleClick);

// Event handler function
function handleClick(event) {
    // Accessing properties of the event object
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);


}
```
```html
Event type: click
Target element: <button id="myButton">Click Me</button>

# Q. What is Event Object in JS?

- **Whenever any event is triggered**, the browser automatically creates an **event object** and passes it as an argument to the **event handler function**.
- The **event object** contains various **properties** and **methods** that provide **information about the event**, such as the **type of the event**, the **element that triggered the event**, etc.

### Code Example

```html
<button id="myButton">Click Me</button>
// Get the button element
var button = document.getElementById("myButton");

// Attach event listener to the button element
button.addEventListener("click", handleClick);

// Event handler function
function handleClick(event) {
    // Accessing properties of the event object
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
}

```
Event type: click
Target element: <button id="myButton">Click Me</button>

# Q. What is Event Delegation in JS? V. IMP.

- **Event delegation** in JavaScript is a technique where you attach a single **event handler** to a **parent element** to handle events on its **child elements**.

### HTML Structure

```html
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Item 1
Item 2
Item 3

```js
var parentList = document.getElementById("myList");

// Attach event handler to parent element
parentList.addEventListener("click", handleItemClick);

// Event handler function
function handleItemClick(event) {
    var target = event.target;
    console.log("Clicked:", target.textContent);
}
```

```js
Clicked: Item 1
Clicked: Item 2
```

# Q. What is Event Bubbling in JS? V. IMP.

### HTML Structure

```html
<div id="outer">
    <div id="inner">
        <button id="myButton">Click Me</button>
    </div>
</div>
```
```js
// Get the reference of elements
var outer = document.getElementById("outer");
var inner = document.getElementById("inner");
var button = document.getElementById("myButton");

// Attach event handlers with elements
outer.addEventListener("click", handleBubbling);
inner.addEventListener("click", handleBubbling);
button.addEventListener("click", handleBubbling);

function handleBubbling(event) {
    console.log("Bubbling:", this.id);
}
```

### Bubbling: myButton
### Bubbling: inner
### Bubbling: outer

## Key Concepts
Event Bubbling: When an event is triggered on a nested element (e.g., the button), the event propagates (or "bubbles up") from the innermost element (myButton) to the outermost element (outer).
The this.id in the event handler logs the ID of the element where the event listener is attached, demonstrating the bubbling order.

# Q. What is Event Bubbling in JS? V. IMP.

- **Event bubbling** is the process in JavaScript where an event triggered on a child element propagates up the DOM tree, triggering event handlers on its parent elements.

### HTML Structure

```html
<div id="outer">
    <div id="inner">
        <button id="myButton">Click Me</button>
    </div>
</div>
```
```js
// Get the reference of elements
var outer = document.getElementById("outer");
var inner = document.getElementById("inner");
var button = document.getElementById("myButton");

// Attach event handlers with elements
outer.addEventListener("click", handleBubbling);
inner.addEventListener("click", handleBubbling);
button.addEventListener("click", handleBubbling);

function handleBubbling(event) {
    console.log("Bubbling:", this.id);
}
```
***Key Concepts***

**Event Bubbling:** 
When an event is triggered on a nested element (e.g., the button), the event propagates (or "bubbles up") from the innermost element (myButton) to the outermost element (outer).
The this.id in the event handler logs the ID of the element where the event listener is attached, demonstrating the bubbling order.

#  Q. How can you stop event propagation or event bubbling in JS?

- **Event bubbling can be stopped by calling `stopPropagation()` method on event.**

### HTML Structure

```html
<div id="outer">
    <div id="inner">
        <button id="myButton">Click Me</button>
    </div>
</div>

```

```js
// Get the reference of elements
var outer = document.getElementById("outer");
var inner = document.getElementById("inner");
var button = document.getElementById("myButton");

// Attach event handlers with elements
outer.addEventListener("click", handleBubbling);
inner.addEventListener("click", handleBubbling);
button.addEventListener("click", handleBubbling);

function handleBubbling(event) {
    console.log("Bubbling:", this.id);
    event.stopPropagation(); // Stop event propagation
}

#  Extracted Text from Image

**Title:**
Top 100 JavaScript Interview Questions and Answers - HINDI  
Q. How can you stop event propagation or event bubbling in JS?

**Description:**
- Event bubbling can be stopped by calling stopPropagation() method on event.
- Stop propagation method on event.

**HTML Structure:**
```html
<div id="outer">
    <div id="inner">
        <button id="myButton">Click Me</button>
    </div>
</div>

```
```js
outer.addEventListener("click", handleBubbling);
inner.addEventListener("click", handleBubbling);
button.addEventListener("click", handleBubbling);

function handleBubbling(event) {
    console.log("Bubbling: " + this.id);
    event.stopPropagation(); // Stop event propagation
}


# Extracted Text from Image

**Title:**
Top 100 JavaScript Interview Questions and Answers - HINDI  
Q. What is the purpose of the event.preventDefault() method in JS?

**Description:**
- The event.preventDefault() method is used to prevent the default behavior of an event and the link click will be prevented.
- Stop propagation method on event.

**HTML Structure:**
```html
<a href="https://example.com" id="myLink">Click Me</a>
var link = document.getElementById("myLink");
link.addEventListener("click", handler);

function handler(event) {
    event.preventDefault(); // Prevent default action
    // Perform custom behavior
    console.log("clicked, default action prevented");
}

```


#  Extracted Text from Image

**Title:**
Top 100 JavaScript Interview Questions and Answers - HINDI  
Q. What is the use of "this" keyword in the context of event handling in JS?

**Description:**
- "this" keyword refers to the element that the event handler is attached to.

**HTML Structure:**
```html
<button id="myButton">Click Me</button>
```

```js
var button = document.getElementById("myButton");
button.addEventListener("click", handler);

function handler(event) {
    console.log("Clicked: " + this.id);
    this.disabled = true;
}

# Question 84

## Problem Statement

## Solution

## Explanation



# Question 85

## Problem Statement

## Solution

## Explanation



# Question 86

## Problem Statement

## Solution

## Explanation



# Question 87

## Problem Statement

## Solution

## Explanation



# Question 88

## Problem Statement

## Solution

## Explanation



# Question 89

## Problem Statement

## Solution

## Explanation



# Question 90

## Problem Statement

## Solution

## Explanation



# Question 91

## Problem Statement

## Solution

## Explanation



# Question 92

## Problem Statement

## Solution

## Explanation



# Question 93

## Problem Statement

## Solution

## Explanation



# Question 94

## Problem Statement

## Solution

## Explanation



# Question 95

## Problem Statement

## Solution

## Explanation



# Question 96

## Problem Statement

## Solution

## Explanation



# Question 97

## Problem Statement

## Solution

## Explanation



# Question 98

## Problem Statement

## Solution

## Explanation



# Question 99

## Problem Statement

## Solution

## Explanation



# Question 100

## Problem Statement

## Solution

## Explanation




