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