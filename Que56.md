# Q. In how many ways you can concatenate strings?
Ways to concatenate strings
├── + Operator
├── concat() method
├── Template literals
└── join() method



**Code Examples and Outputs:**

**+ Operator:**
```javascript
// + operator
let s1 = 'Hello';
let s2 = 'World';
let r1 = s1 + s2;
console.log(r1);
// Output: HelloWorld
```
**concat() method:**
```js
// concat() method
let r2 = s1.concat(s2);
console.log(r2);
// Output: HelloWorld
```
**Template literals:**

```js
// template literals
let r3 = `${s1} ${s2}`;
console.log(r3);
// Output: Hello World
```
***join() method:***
```js
// join() method
let strings = [s1, s2];
let r4 = strings.join(' ');
console.log(r4);
// Output: Hello World
```
