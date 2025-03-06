# Q.20 Synchronous vs Asynchronous Programming in JavaScript

- **Synchronous**: Code executes line by line, blocking further execution until the current task completes.
  - Example: `let x = 1; console.log(x);` (runs immediately, in order).

- **Asynchronous**: Code execution doesn’t wait; tasks like timers or API calls run in the background, handled via callbacks, promises, or async/await.
  - Example: 
    ```javascript
    setTimeout(() => console.log("Delayed"), 1000);
    console.log("First");

    ``` 
  ## Asyc programming
   - async programming allows multiple task or operations to be intiated and executed **cuncurruntly** 
   - async operations do not block another operation
  
    ### Use of async operations
      1. File uploading 
      2. File downloading 
      3. Fetching data from API
      4. Animations and transitions 
      5. Time Taking Operations 