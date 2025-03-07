# Q. What is Event Object in JS?

- **Whenever any event is triggered**, the browser automatically creates an **event object** and passes it as an argument to the **event handler function**.
- The **event object** contains various **properties** and **methods** that provide **information about the event**, such as the **type of the event**, the **element that triggered the event**, etc.

### Code Example

```html
<button id="myButton">Click Me</button>
// Get the button element
var button = document.getElementById("myButton");

// Attach event listener to the button element
button.addEventListener("click", handleClick);

// Event handler function
function handleClick(event) {
    // Accessing properties of the event object
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
}

```
Event type: click
Target element: <button id="myButton">Click Me</button>