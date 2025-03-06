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