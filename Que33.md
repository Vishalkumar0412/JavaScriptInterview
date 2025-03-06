# Q.33 What is the difference b/w push() and concat() method in array

- **push()**: 

    Adds one or more elements to the end of an array and modifies the original array. Returns the new length of the array.
  - Example:
    ```javascript
    let arr = [1, 2];
    arr.push(3);
    console.log(arr); // Output: [1, 2, 3]
    ```

   **concat():**

    Combines two or more arrays into a new array without modifying the original arrays. Returns the new array.
    ```js
        let arr1 = [1, 2];
        let arr2 = [3, 4];
        let newArr = arr1.concat(arr2);
        console.log(newArr); // Output: [1, 2, 3, 4]
        console.log(arr1); // Output: [1, 2] (unchanged)
        let arr1 = [1, 2];

    ```