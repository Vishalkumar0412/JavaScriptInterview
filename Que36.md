# Q Diffrenece B/w map and foreach method of an array
 `map()` is used when you want to modify each element of  an array and create a new array with modified values
 ```js
        let array=[1,3,6,7,8,5,4,3,2]
        let newArr=array.map(el=>el*2)
        console.log(newArr)//[2, 6, 12, 14, 16,  10, 8,  6,  4]
 ```


*`foreach`* method is used when you want to perform some operation to each element of array without creating a new array 
```js
        let array2=[1,4,5,5,6,4,2,3]
        let newArr2=array2.forEach(el=>console.log(el*2))
        console.log(newArr2)
```