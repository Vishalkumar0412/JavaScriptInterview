# Q. What is Event Bubbling in JS? V. IMP.

### HTML Structure

```html
<div id="outer">
    <div id="inner">
        <button id="myButton">Click Me</button>
    </div>
</div>
```
```js
// Get the reference of elements
var outer = document.getElementById("outer");
var inner = document.getElementById("inner");
var button = document.getElementById("myButton");

// Attach event handlers with elements
outer.addEventListener("click", handleBubbling);
inner.addEventListener("click", handleBubbling);
button.addEventListener("click", handleBubbling);

function handleBubbling(event) {
    console.log("Bubbling:", this.id);
}
```

### Bubbling: myButton
### Bubbling: inner
### Bubbling: outer

## Key Concepts
Event Bubbling: When an event is triggered on a nested element (e.g., the button), the event propagates (or "bubbles up") from the innermost element (myButton) to the outermost element (outer).
The this.id in the event handler logs the ID of the element where the event listener is attached, demonstrating the bubbling order.