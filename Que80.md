#  Q. How can you stop event propagation or event bubbling in JS?

- **Event bubbling can be stopped by calling `stopPropagation()` method on event.**

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
    event.stopPropagation(); // Stop event propagation
}