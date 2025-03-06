# Q.29  What is the difference between Spread and Rest operator in JS?

**Description:**
- The spread operator (...) is used to expand or spread elements from an iterable (such as an array, string, or object) into individual elements.

**Diagram:**


Uses of Spread Operator
├── Copying an Array
├── Merging Arrays
└── Passing Multiple Arguments to a Function



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