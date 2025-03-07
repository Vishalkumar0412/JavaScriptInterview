# Q. What is the use of event handling in JS? V. IMP.

**Descriptions:**
- Event handling is the process of responding to user actions in a web page.
- The `addEventListener` method of JavaScript allows to attach an event name and with the function you want to perform on that event.

**Code Example:**

```javascript
<button id="myButton">Click me</button>

// Get a reference to the button element
const button = document.getElementById('myButton');

// Add an event listener for the 'click' event
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```
Event Types with Syntax:

- Click Event: addEventListener('click', handler)
- Mouseover Event: addEventListener('mouseover', handler)
- Keydown Event: addEventListener('keydown', handler)
- Keyup Event: addEventListener('keyup', handler)
- Submit Event: addEventListener('submit', handler)
- Focus Event: addEventListener('focus', handler)
- Blur Event: addEventListener('blur', handler)
- Change Event: addEventListener('change', handler)
- Load Event: addEventListener('load', handler)
- Resize Event: addEventListener('resize', handler)