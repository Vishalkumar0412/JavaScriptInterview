# Q. how many ways we can create an object?


Ways to create and initialize an object
1. Object Literal
2. Object Constructor
3. Object.create() Method


**Code Examples and Outputs:**

**Object Literal:**
```javascript
// Object literal
var person = {
    name: "Happy",
    age: 38,
    role: "Trainer"
};
console.log(person);
// Output: { name: 'Happy', age: 38, role: 'Trainer' }
// name: "Happy"
// age: 38
// role: "Trainer"
// [Prototype]: Object
```

```js
// Object.create() Method
var person = {
    name: "",
    age: 0,
    role: ""
};
var men = Object.create(person);
men.name = "Happy";
men.age = 38;
men.role = "Trainer";
console.log(men);
// Output: { name: 'Happy', age: 38, role: 'Trainer' }
```
