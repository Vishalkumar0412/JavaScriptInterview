# Q What are Pure and Impure functions in JS?

**pure**
1. A pure function is a function that always produces the same output for the same input
2. Pure functions cannot modify the state
3. pure functions cannot have side effects 
```js
// Pure function
function add(a,b){
    return a+b
}
console.log(add(3,5))
//8
console.log(add(3,5))
//8

```
***impure***
1. An impure function can produce diffrent outputs for the same input 
2. impure functions can modify the state 
3. impure function can have side effects 

```js
let total =0;
function addTotal(value){
    total+=value;
    return total
}
console.log(addTotal(5))
//5
console.log(addTotal(5))
//10
```