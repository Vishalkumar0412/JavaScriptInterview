# Q. Explanation of the throw Statement in JavaScript
The throw statement in JavaScript is used to manually generate or throw an exception. When an exception is thrown, the normal flow of the program is interrupted, and control is passed to the nearest try-catch block or the call stack unwinds until the exception is caught or the program terminates if unhandled. This is typically used for error handling to signal that something has gone wrong.

```js
// Example of throw statement
function checkNumber(num) {
    try {
        if (num < 0) {
            throw new Error("Number cannot be negative!");
        }
        console.log("Number is valid: " + num);
    } catch (error) {
        console.log("Error caught: " + error.message);
    } finally {
        console.log("This will always execute.");
    }
}

// Test the function
checkNumber(10); // Output: Number is valid: 10, This will always execute.
checkNumber(-5); // Output: Error caught: Number cannot be negative!, This will always execute.