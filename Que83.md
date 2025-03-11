# Q. What is the use of "this" keyword in the context of event handling in JS?

**Description:**
- "this" keyword refers to the element that the event handler is attached to.

**HTML Structure:**
```html
<button id="myButton">Click Me</button>
```

```js
var button = document.getElementById("myButton");
button.addEventListener("click", handler);

function handler(event) {
    console.log("Clicked: " + this.id);
    this.disabled = true;
}