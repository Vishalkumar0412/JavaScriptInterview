# Q. What are the types of events in JS? V. IMP.


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
## Types of Events in JavaScript
**Click Event:** addEventListener('click', handler)

**Mouseover Event:** addEventListener('mouseover', handler)

**Keydown Event:** addEventListener('keydown', handler)

**Keyup Event:** addEventListener('keyup', handler)

**Submit Event:** addEventListener('submit', handler)

**Focus Event:** addEventListener('focus', handler)

**Blur Event:** addEventListener('blur', handler)

**Change Event:** addEventListener('change', handler)

**Load Event:** addEventListener('load', handler)

**Resize Event:** addEventListener('resize', handler)

## Key Terms

**Event:** Highlighted in the code as the "click" event.