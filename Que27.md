# Q.27 When to use which type of conditional statements in real applications? V. IMP.

**Descriptions and Benefits:**
- **if...else**: for complex, different & multiline execution.
  - **Benefit**: Cover all scenarios.
- **Ternary operators**: for simple conditions & single value evaluations.
  - **Benefit**: Short one line syntax.
- **Switch case**: For some left side values.
  - **Benefit**: More structured code.

**Code and Outputs:**

**if...else Example:**
```javascript
const age = 25;
const height = 6;

if (age < 25 && height < 5) {
    console.log("You are a minor.");
    console.log("You are a short.");
} else if (age >= 18 && height > 6) {
    console.log("You are an adult.");
    console.log("You are an tall.");
} else {
    console.log("You are average");
}
// Output: "You are average"
```
***Ternary Operator Example:***
```js
const isUser = true;

const user = isUser ? 10 : 20;
console.log(user);
// Output: 10
```

***Switch Case Example:***
```js
const dayOfWeek = "Tuesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start");
        break;
    case "Tuesday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid");
}
// Output: "Weekend!"
```