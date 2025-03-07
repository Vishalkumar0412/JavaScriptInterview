# Q. What is the difference between deep copy and shallow copy in JS?

**Description:**
- Shallow copy in nested objects case will modify the parent object property value, if cloned object property value is changed. But deep copy will not modify the parent object property value.

**Original object:**
```javascript
// Original object
const person = {
    name: "Happy",
    age: 30,
    address: {
        city: "Delhi",
        country: "India"
    }
};


// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, person);
shallowCopy.address.city = "Mumbai";
console.log(person.address.city); // Output: "Mumbai"
console.log(shallowCopy.address.city); // Output: "Mumbai"

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = "Bangalore";
console.log(person.address.city); // Output: "Delhi"
console.log(deepCopy.address.city); // Output: "Bangalore"