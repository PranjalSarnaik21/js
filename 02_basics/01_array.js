const array1 = [0,1,2,3,4,5] // resizable & mix of different datatypes
// Shallow copy of an object is a copy whose properties shares the same reference point
// if we change anything is copied one it aslo change in other object (original one)
// Deep copy do not share the same reference
const array2 = new Array("Pranjal", "Rohan","Tina")
// console.log(array2[0]); //Pranjal
array1.push(2)  // it will add the element
array1.pop()  // it willremove the last element
array1.unshift(9) // it will add element at 1st
array1.shift() // it will remove 1st element
// console.log(array1);
// console.log(array1.includes(9)); // false; check value is exist or not if not then false
// console.log(array1.indexOf(29)); // -1 ; there is no 30 elements in it so showing -1
// const newarray = array1.join()
// console.log(newarray); // 0,1,2,3,4,5 ; change array into string
// console.log(typeof(newarray)); // string

console.log("A", array1); // A [ 0, 1, 2, 3, 4, 5 ] original array

const newArr1 = array1.slice(1,3) // [ 1, 2 ] range is not include
console.log(newArr1);
console.log("B",array1); // B [ 0, 1, 2, 3, 4, 5 ] no change in original array

const newArr2 = array1.splice(1,3) // [ 1, 2, 3 ] range includes
console.log(newArr2);
console.log("C",array1); 
// C [ 0, 4, 5 ] in splice selected portion get geleted i.e. original array get manipulate
