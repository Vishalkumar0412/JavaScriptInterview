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