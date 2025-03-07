# Q. Explain the difference between dot notation and bracket notation?

**Descriptions:**
- Both dot notation and bracket notation are used to access properties or methods of an object.
- Dot notation is more popular and used due to its simplicity.

- Limitation of dot notation - In some scenarios bracket notation is the only option, such as when accessing properties when the property name is stored in a variable.

**Code Examples and Outputs:**

**Dot notation:**
```javascript
const person = {
    name: "Happy",
    age: 35
};

// Dot notation:
console.log(person.name);
// Output: "Happy"


// Dynamically assign property name to a variable
var propertyName = "age";
console.log(person[propertyName]); 
// Output: 35

console.log(person.propertyName); 
// Output: undefined