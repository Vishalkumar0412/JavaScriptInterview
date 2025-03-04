# Q.3 what is variable and what is differce b/w let, var and const 

variable are container for storing data.

## in javaScript we have 3 tyoes of variable in js 

### var keyword 

var create functional scope variable 

```

function example (){
    if (true){
        var count =10;
        console.log(count)
        //output 10
    }
    console.log(count)
    //output 10
}
```

## let keyword

let create variable in block-scope 

```
function example(){
if(true){
    let count =20;
    console.log(count )
    //op 20
}
console.log(count)
// output Refrence Error Output not define 
}

```

## const keyword 

const can be asigned only once and its value can not be change after words

```
// using contant 
const z=10;
z=20;
// this will result and error
//TypeError: Assignment to constant variable.


```
