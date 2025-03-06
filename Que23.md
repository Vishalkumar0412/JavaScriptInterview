  
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