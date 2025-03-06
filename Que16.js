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


