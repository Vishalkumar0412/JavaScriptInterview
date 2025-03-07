# Q. What are some common methods to iterate over the properties of an object?

Ways to iterate over the properties of an object
 1. for...in loop
 2. Object.keys() & forEach()
 3. Object.values() & forEach()


**Code Examples and Outputs:**

**Object:**
```javascript
const person = {
    name: "John",
    age: 30
};
// 1. Using for...in loop
for (let prop in person) {
    console.log(prop + ": " + person[prop]);
}
// Output: name: John age: 30

// 2. Using Object.keys() and forEach()
Object.keys(person).forEach((prop) => {
    console.log(prop + ": " + person[prop]);
});
// Output: name: John age: 30

// 3. Using Object.values() and forEach()
Object.values(person).forEach((value) => {
    console.log(value);
});
// Output: John 30