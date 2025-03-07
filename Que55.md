#  What is string immutability? V. IMP.

**Description:**
- Strings in JavaScript are considered immutable because you cannot modify the contents of an existing string directly.

Memory (Managed by JavaScript Engine inside browsers)
├── 8888888 (memory address) --> Interview
└── 9999999 (memory address) --> Interview Happy


**Code Example:**

```javascript
var str = 'Interview';
// Creates a new string
str = str + ' Happy';
```

***Short explanation:*** The question asks to extract text from an image explaining string immutability in JavaScript, where strings cannot be changed directly, and any modification creates a new string. A code example and memory diagram illustrate this concept.