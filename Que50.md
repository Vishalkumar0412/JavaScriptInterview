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
