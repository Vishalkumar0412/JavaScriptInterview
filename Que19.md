# Q.19 Error Handling in JavaScript
Error Handling is the process of managing the errors 

- **try**: Block where you test code that might throw an error.
- **catch**: Block that handles the error if one occurs in the `try` block.
- **throw**: Keyword to manually create and throw a custom error.
- **finally**: Block that runs after `try`/`catch`, regardless of the outcome.

Example:
```javascript
try {
    let result = riskyOperation();
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Cleanup done.");
}