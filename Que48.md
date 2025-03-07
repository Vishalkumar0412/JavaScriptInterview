# Q. How do you use default parameters in a function?

**Description:**
- In JavaScript, default parameters allow you to specify default values for function parameters.

**Code and Outputs:**

**Function with Default Parameter Value:**
```javascript
// Function with default parameter value
function greet(name = "Happy") {
    console.log("Hello, " + name + "!");
}

greet();
// Output: Hello, Happy!

greet("Amit");
// Output: Hello, Amit!