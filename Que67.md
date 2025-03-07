# Q. How do you check if a property exists in an object?

**Object:**
```javascript
var person = {
    name: "Alice",
    age: 25
};


// 1. Using the in Operator
console.log("name" in person); // Output: true
console.log("city" in person); // Output: false'



// 2. Using the hasOwnProperty() Method
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("city")); // Output: false



// 3. Comparing with undefined
console.log(person.name !== undefined); // Output: true
console.log(person.city !== undefined); // Output: false