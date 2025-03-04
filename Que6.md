# Q.6 What is Selectors in JS 
selectors helps us to get specific element from dom tree based on its IDs classnames and tag names 

**Types of Selectors**:

1. **getElementById**  
   - Targets a single element by its `id`.  
   - Syntax: `document.getElementById("id")`  
   - Example: `document.getElementById("header")` → Returns element with id="header".

2. **getElementsByClassName**  
   - Targets multiple elements by their `class` name. Returns an HTMLCollection.  
   - Syntax: `document.getElementsByClassName("class")`  
   - Example: `document.getElementsByClassName("item")` → Returns all elements with class="item".

3. **getElementsByTagName**  
   - Targets elements by their tag name (e.g., `div`, `p`). Returns an HTMLCollection.  
   - Syntax: `document.getElementsByTagName("tag")`  
   - Example: `document.getElementsByTagName("p")` → Returns all `<p>` elements.

4. **querySelector**  
   - Targets the first element matching a CSS selector.  
   - Syntax: `document.querySelector("selector")`  
   - Example: `document.querySelector(".item")` → Returns first element with class="item".

5. **querySelectorAll**  
   - Targets all elements matching a CSS selector. Returns a NodeList.  
   - Syntax: `document.querySelectorAll("selector")`  
   - Example: `document.querySelectorAll(".item")` → Returns all elements with class="item".

**Key Differences**:  
- `getElementById`: Single element, ID-based, fastest.  
- `getElementsByClassName`/`TagName`: Multiple elements, live collection.  
- `querySelector`/`All`: Flexible CSS syntax, `querySelectorAll` is static.