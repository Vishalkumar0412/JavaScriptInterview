#  Extracted Text from Image

**Title:**
Top 100 JavaScript Interview Questions and Answers - HINDI  
Q. How can you stop event propagation or event bubbling in JS?

**Description:**
- Event bubbling can be stopped by calling stopPropagation() method on event.
- Stop propagation method on event.

**HTML Structure:**
```html
<div id="outer">
    <div id="inner">
        <button id="myButton">Click Me</button>
    </div>
</div>

```
```js
outer.addEventListener("click", handleBubbling);
inner.addEventListener("click", handleBubbling);
button.addEventListener("click", handleBubbling);

function handleBubbling(event) {
    console.log("Bubbling: " + this.id);
    event.stopPropagation(); // Stop event propagation
}
