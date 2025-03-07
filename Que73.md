# # Top 100 JavaScript Interview Questions and Answers - HINDI | V. IMP.

## Events and How They Are Triggered

- **Events** are actions that happen in the browser, such as a **button click**, **mouse movement**, or **keyboard input**.

### Code Example

```html
<button id="myButton">Click Me</button>

// Get the reference of button in a variable
var button = document.getElementById("myButton");

// Attach an event handler to the button
button.addEventListener("click", handleClick);

// Event handler function
function handleClick() {
    alert("button clicked");
}
```
**Key Terms**
**Event:** The "click" event in this case.

**Event handler/Callback function:** The handleClick function.