# Q.8 What Are Types of Conditional Statements in JavaScript

Conditional statements in JavaScript control the flow of execution based on conditions.

**Types of Conditional Statements**:

1. **if Else Statement**  
   - Executes a block of code if a condition is `true`.  
   - Syntax: 

   ```js
    if (condition1) {
      // code if condition1 true
      } else if (condition2) {
      // code if condition2 true
        } else {
        // code if all false
        }
    ```

    ```js 
         let score = 85;
        if (score >= 90) {
          console.log("A");
        } else if (score >= 80) {
          console.log("B");
        } else {
          console.log("C");
        }
        → `"B"`
    ```
## Switch Statements
```js
        switch (expression) {
          case value1:
            // code
            break;
          case value2:
            // code
            break;
          default:
            // code if no match
        }
```