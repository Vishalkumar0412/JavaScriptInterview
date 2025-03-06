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