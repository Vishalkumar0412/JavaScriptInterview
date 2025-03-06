# Difference between splice() and slice() in JavaScript

- **splice()**: Modifies the original array by adding, removing, or replacing elements. Returns the removed elements.
  - **Syntax**: `array.splice(start, deleteCount, item1, item2, ...)`
  - Example:
    ```javascript
    let arr = [1, 2, 3, 4];
    arr.splice(1, 2, 5); // Removes 2 elements from index 1, adds 5
    console.log(arr); // Output: [1, 5, 4]
    ```
**slice():** Creates a new array with a subset of elements from the original array, without modifying it. Returns the new array.
**Syntax:** array.slice(start, end)
Example:

```js
et arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // Extracts elements from index 1 to 2
console.log(newArr); // Output: [2, 3]
console.log(arr); // Output: [1, 2, 3, 4] (unchanged)
