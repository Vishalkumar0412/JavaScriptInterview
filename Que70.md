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

