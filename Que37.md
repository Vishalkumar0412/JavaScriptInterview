# Q. Array like objects 
Array like objects are objects that have indexed element and length property like object but may not have all methods like array pop,push 

## types of array like object 
1. HTML COLLECTION
2. Strings
3. arguments

## How to convert an array like object in to an array
1. Array.from(ArrayLike)
2. spread syntax [...ArrayLike]
3. Array.prototype.slice.call(Arraylike)