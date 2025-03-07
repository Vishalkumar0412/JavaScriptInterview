// // const z=10;
// // z=20;
// // this will result and erro

// //TypeError: Assignment to constant variable.


// function example (){
//     if (true){
//         var count =10;
//         console.log(count)
//         //output 10
//     }
//     console.log(count)
//     //output 10
// }

function example(){
    if(true){
        let count =20;
        console.log(count )
        //op 20
    }
    console.log(count)
    // output Refrence Error Output not define 
}
example()
    