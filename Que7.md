# Q.7 What are data types in js?

JavaScript has two main categories of data types: **Primitive** and **Non-Primitive**.

**Primitive Data Types**:  7 types 
1. **Number**  
   - Represents numeric values (integers or decimals).  
   - Example: `let num = 42;` or `let float = 3.14;`

2. **String**  
   - Represents text or characters.  
   - Example: `let str = "hello";`

3. **Boolean**  
   - Represents `true` or `false`.  
   - Example: `let isTrue = true;`

4. **Undefined**  
   - A variable declared but not assigned a value.  
   - Example: `let x;` → `x` is `undefined`.

5. **Null**  
   - Represents the intentional absence of a value.  
   - Example: `let value = null;`

6. **Symbol**  
   - Unique and immutable value, often used as object property keys.  
   - Example: `let sym = Symbol("id");`

7. **BigInt**  
   - Represents large integers with arbitrary precision.  
   - Example: `let big = 12345678901234567890n;`

**Non-Primitive Data Type**:  
1. **Object**  
   - Represents a collection of key-value pairs or complex data.  
   - Includes:  
     - **Objects**: `let obj = { name: "John", age: 30 };`  
     - **Arrays**: `let arr = [1, 2, 3];`  
     - **Functions**: `function sayHi() { return "Hi"; }`

**Key Points**:  
- Primitive types are immutable and passed by value.  
- Objects are mutable and passed by reference.

## Here are some interesting facts about JavaScript data types:

1. **Arrays are Objects**  
   - Arrays are technically objects in JS, not a distinct type. `typeof [1, 2, 3]` returns `"object"`.  
   - Check with: `Array.isArray([1, 2, 3])` → `true`.

2. **NaN is a Number**  
   - `NaN` (Not-a-Number) is part of the `Number` type, but `NaN !== NaN`.  
   - Test: `typeof NaN` → `"number"`.

3. **Undefined vs. Null History**  
   - `undefined` was added later to fix issues with `null`. Originally, `null` was the only way to indicate "no value," but it confused developers.

4. **Symbol Uniqueness**  
   - Even if two Symbols have the same description, they’re unique: `Symbol("id") !== Symbol("id")`.

5. **BigInt Saves Precision**  
   - Numbers lose precision beyond `2^53 - 1`, but `BigInt` handles huge integers perfectly. Example: `9007199254740992n + 1n` works accurately.