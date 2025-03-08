// arr.push(6)
// console.log(arr);
// let popedElem=arr.pop()
// console.log("arr after pop",arr);
// console.log("popedElem",popedElem)
// arr.unshift(99)
// // console.log(arr);
// let shifted=arr.shift()
// console.log(arr);
// console.log(shifted);
// let slicedArr=arr.slice(2,5)
// console.log("arr",arr);//it will not modify the orginal array
// console.log("slicedArr",slicedArr);//last index not include
// let splicedArr=arr.splice(2,3,1050)
// console.log("splicedArr",splicedArr);
// console.log(arr);//it modify original array
// let index=arr.lastIndexOf(2)
// console.log(index);

// let findElem=arr.findIndex((x)=>{
//     return x%2===0
// })
// console.log(findElem);

// let mapped=arr.map((elem)=>
    // {
//         return elem*2;    
// })
// console.log(arr);
// console.log(mapped);

// console.log(forEached);
// arr.forEach((elem)=>{
//         console.log(elem*2)
// })


// console.log(arr);


// let filteredArray=arr.filter(el=>{
//     return el%2===0;//even
// })

// console.log("arr",arr);

// console.log(filteredArray);
// let arr2=["vikas","agrawal","vishal","nigam"]
// let joined=arr2.join("----")
// console.log(joined);
// let arr2=[1,[2,4,[3,2,[7,8],9],10],11]
// let flated=arr2.flat(4)
// console.log(flated);

let arr=[1,2,3,4,5,6,7]
let reduced=arr.reduce((acc,curr)=>{

    // console.log(acc); // acc if not declare then start by 0th index
    // console.log(curr);//acc if not declare then start by 0th index
    //4
    console.log(curr);
    
    return acc+curr; //3 acc=10

},4)

console.log(reduced);





