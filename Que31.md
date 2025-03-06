# Q.31 what is the diffrence b/w find and filter method in array
The **find()** method gets first element that specify the condition



```js

const array = [1,2,3,4,5,6,7]
const c= array.find((num)=>num%2===0)
console.log(c); //2
```


The **filter()** method gets array of element that specify the condition
```js
const array = [1,2,3,4,5,6,7]
let d= array.filter((num)=>num%2===0)
console.log(d); //[2,4,6]
```