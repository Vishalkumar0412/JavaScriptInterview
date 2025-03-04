# Q.4  what are the important string operations 

## Add operation 

```
let str1= "hello"
let str2="world"
let result = str1 + " " + str2 
console.log(result)
//hello world
```

## using concat 
 
 + and concate perform similer taks but another way for string only 

```
let result = str1.concat(" ",str2)
cosole.log()

```
## length
it is use to fine length of the string 
` console.log(result.length) `
## toLowerCase()
` result.toLowerCase() `

## toUpperCase()
 `console.log(result.toUpperCase())`

## JavaScript split() Method (String to Array)
The split() method in JavaScript is used to split a string into an array based on a specified separator
`string.split(separator, limit)`
- *separator* → Defines where to split the string (e.g., space " ", comma ",", etc.).
- *limit (optional)* → Specifies the maximum number of splits

```
const splitted = result.split(" ")
console.log(splitted);
// ['hello',"world"]
```

# `replace()` Method in JavaScript

The `replace()` method in JavaScript is used to replace a specified value in a string with another value. It returns a new string without modifying the original one.

## Syntax:
```js
string.replace(searchValue, newValue);
```

```js 
const text = "Hello World!";
const newText = text.replace("World", "JavaScript");
console.log(newText); // "Hello JavaScript!"
```
# `trim()` Method in JavaScript

The `trim()` method in JavaScript is used to remove whitespace from both ends of a string. It does **not** modify the original string but returns a new one.

## Syntax:
```js
string.trim();
```

```js
const text = "   Hello World!   ";
const trimmedText = text.trim();
console.log(trimmedText);
// Output: "Hello World!"
```