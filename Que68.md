# Q. How do you clone or copy an object?

**Diagram:**
Ways to clone or copy an object
 1. Spread Syntax (...)
 2. Object.assign()
 3. JSON.parse() & JSON.stringify()
 
**Code Examples:**

**Original object:**
```javascript
// Original object
const originalObject = {
    name: "Happy",
    age: 35,
    city: "Delhi"
};


// Method 2: Object.assign() (shallow copy)
// Parameters: target, source
const clonedObjectAssign = Object.assign({}, originalObject);


// Method 3: JSON.parse() and JSON.stringify() (deep copy)
const clonedObjectJSON = JSON.parse(JSON.stringify(originalObject));