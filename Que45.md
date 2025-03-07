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