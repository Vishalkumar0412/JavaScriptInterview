# Q. How to create new elements in DOM using JS? What is the difference between createElement() and cloneNode()?

DOM methods to create elements dynamically
1. createElement()
2. cloneNode()
3. createTextNode()
4. innerHTML
5. insertAdjacentHTML()
6. document.write()


**Code Examples:**

**createElement() - create new element:**
```javascript
// createElement() - create new element
var newDiv = document.createElement('div');
newDiv.textContent = 'Newly created div';
document.body.appendChild(newDiv);
<div>Newly created div</div>
```
```js
// cloneNode() - copy the existing element with all attributes
<div id="parentElement">
    <h1>Existing Element</h1>
</div>

// Existing element
var existingElement = document.getElementById('parentElement');
var clonedElement = existingElement.cloneNode(true);
clonedElement.textContent = 'Cloned element';
document.body.appendChild(clonedElement);
```
