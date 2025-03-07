# Q. Difference bw for-of and for-in loop

`for-of`
1. for of loop is used to loop through the values of an objects like arary,strings 
2. it allows you to access the value directly without having to use an index 
```js
let arr=[1,4,3,4,5]
for(let val of arr){
    console.log(val)
}
//output 1 2 3
```
`for-in` 
1. for-in loop is used to loop throgh properties of an object 
2. it allow you to iterate over the keys of over the keys an object and access the value assoiated the values assoisiated by using key as a index

```js
const person={
    name:"happy",
    role:"devoloper"
};
for(let key in person){
    console.log(person[key])
}
```

## `forEach`
 forEach method is availible on array or object that allow you to iterate over each element of array and perform some action on each element


# Notes 

1. for-of loop is suitable when you need to more control over th loop such as break and continue statements 
2. forEach method iterate over each element of the array and perform some actions on each element 