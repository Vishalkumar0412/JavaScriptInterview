let gloabalVariable = "global" // global access anywhere

greet()

function greet(){
    let funtionalVariable="function" // have access within funtion only 
    if(true){
        let blockVariable="block"
        console.log(gloabalVariable);
        console.log(funtionalVariable);
        console.log(blockVariable);

        
    }
    console.log(funtionalVariable);
    console.log(gloabalVariable);

    
}
console.log(gloabalVariable);



