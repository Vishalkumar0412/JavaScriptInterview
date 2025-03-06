# Que16. Object 
Object is data type that allaow you to store key value pair 


## We can store in object 
1. String/number/boolean/undefined /null
2. Arrray
3. Functions 
4. Object 

```js
let person={
    name :"vishal",
    hobbies:["Teaching","football","coding"],
    greet: function (){
        console.log("Name :"+ this.name);
        
    },

}
console.log(person.name);
console.log(person.hobbies[1]);
person.greet();
```

