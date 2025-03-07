# Q. What is Map Object in JS?

**Descriptions:**
- The Map object is a collection of key-value pairs where each key can be of any type, and each value can also be of any type.
- A Map maintains the order of key-value pairs as they were inserted.

**Code Examples and Outputs:**

**Creating a Map to store person details:**
```javascript
// Creating a Map to store person details
const personDetails = new Map();
personDetails.set("name", "Alice");
personDetails.set("age", 30);
console.log(personDetails.get("name")); 
// Output: "Alice"
console.log(personDetails.has("age")); 
// Output: true
personDetails.delete("age");
console.log(personDetails.size); 
// Output: 1