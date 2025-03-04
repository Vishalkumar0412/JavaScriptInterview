# Q.5 What is DOM?

**DOM (Document Object Model)** is a programming interface that represents an HTML or XML document as a tree structure, where each node is an object representing a part of the document.

- It allows JavaScript to interact with and manipulate HTML elements dynamically.
- The browser creates a DOM when it loads a web page.
- Changes to the DOM reflect on the webpage in real-time.

## Example:
```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello World</h1>
    <script>
      document.getElementById("title").innerText = "Hello JavaScript!";
    </script>
  </body>
</html>
```
```css
Document
│── html
│   │── head
│   │   └── title
│   │       └── "My Page"
│   │── body
│       │── h1
│       │   └── "Hello World"
│       └── p
│           └── "This is a paragraph."