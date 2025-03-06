# Q.33 splice() Method in JavaScript

- **Description**: The `splice()` method changes the contents of an array by removing, replacing, or adding elements.

- **Syntax**: `array.splice(start, deleteCount, item1, item2, ...);`
  - `start`: Index at which to start changing the array.
  - `deleteCount`: Number of elements to remove.
  - `item1, item2, ...`: Elements to add to the array.

- **Examples:**
  - Remove 2 elements starting from index 1:
    ```javascript
    const array=[1,2,3,4,5,6,7,8]
    const splicedArray=array.splice(2,3,9,0);
    console.log(splicedArray);//[ 3, 4, 5 ]
    console.log(array); //[1, 2, 9, 0, 6, 7, 8]
    
    ```