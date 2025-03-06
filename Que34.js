const array=[1,2,3,4,5,6,7,8]
const splicedArray=array.splice(2,3,9,0);
console.log(splicedArray);//[ 3, 4, 5 ]
console.log(array); //[1, 2, 9, 0, 6, 7, 8];