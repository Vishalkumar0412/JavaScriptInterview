# Que17.  Scopes in JavaScript

- **Global Scope**: Variables declared outside any function or block, accessible everywhere in the code.
- **Function Scope**: Variables declared inside a function using `var`, accessible only within that function.
- **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., `{}`), accessible only within that block.
- **Lexical Scope**: Inner functions have access to variables of their outer functions (closure), determined by where the function is defined.

     ```js
            let gloabalVariable = "global" // global access anywhere

            greet()

            function greet(){
                let funtionalVariable="function" // have access within funtion only 
                if(true){
                    let blockVariable="block"//accesss only wihtin block
                    console.log(gloabalVariable);
                    console.log(funtionalVariable);
                    console.log(blockVariable);


                }
                console.log(funtionalVariable);
                console.log(gloabalVariable);
                console.log(blockVariable)// blockVariable is not defined


            }
            console.log(gloabalVariable);
            console.log(funtionalVariable);//funtionalVariable is not defined

    ```