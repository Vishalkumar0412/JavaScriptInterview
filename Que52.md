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