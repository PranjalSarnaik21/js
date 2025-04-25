const array1 = [0,1,2,3,4,5] // resizable & mix of different datatypes
// Shallow copy of an object is a copy whose properties shares the same reference point
// if we change anything is copied one it aslo change in other object (original one)
// Deep copy do not share the same reference
const array2 = new Array("Pranjal", "Rohan","Tina")
console.log(array2[0]); //Pranjal
array2.push(2)
array2.pop()
console.log(array2);

