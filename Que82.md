# Extracted Text from Image

**Title:**
Top 100 JavaScript Interview Questions and Answers - HINDI  
Q. What is the purpose of the event.preventDefault() method in JS?

**Description:**
- The event.preventDefault() method is used to prevent the default behavior of an event and the link click will be prevented.
- Stop propagation method on event.

**HTML Structure:**
```html
<a href="https://example.com" id="myLink">Click Me</a>
var link = document.getElementById("myLink");
link.addEventListener("click", handler);

function handler(event) {
    event.preventDefault(); // Prevent default action
    // Perform custom behavior
    console.log("clicked, default action prevented");
}

```
