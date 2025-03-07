# Q. What is Event Delegation in JS? V. IMP.

- **Event delegation** in JavaScript is a technique where you attach a single **event handler** to a **parent element** to handle events on its **child elements**.

### HTML Structure

```html
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Item 1
Item 2
Item 3

```js
var parentList = document.getElementById("myList");

// Attach event handler to parent element
parentList.addEventListener("click", handleItemClick);

// Event handler function
function handleItemClick(event) {
    var target = event.target;
    console.log("Clicked:", target.textContent);
}
```

```js
Clicked: Item 1
Clicked: Item 2
```