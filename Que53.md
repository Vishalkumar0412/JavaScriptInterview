# Extracted Text from Image

**Title:**
Top 100 JavaScript Interview Questions and Answers - HINDI  
Q. What are call, apply and bind methods in JS?

**Descriptions:**
- `call`, `apply`, and `bind` are three methods in JavaScript that are used to work with functions and control how they are invoked and what context they operate in.
- These methods provide a way to manipulate the `this` value and pass arguments to functions.

**Code Examples and Outputs:**

**Defining a function that uses the "this" context and an argument:**
```javascript
// Defining a function that uses the "this" context and an argument
function sayHello(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = { name: 'Happy' };
```
1. **call**- Using the "call" method to invoke the function with a specific context and arguments:
```js 
sayHello.call(person, 'Hello');
// Output: "Hello, Happy!"
```
2. **apply** - Using the "apply" method to invoke the function with a specific context and an array of arguments:
```js
sayHello.apply(person, ['Hi']);
// Output: "Hi, Happy!"
```
3. **bind** - Using the "bind" method to create a new function with a specific context (not invoking it immediately):
```js
const greetPerson = sayHello.bind(person);
greetPerson('Greetings');
// Output: "Greetings, Happy!"
```