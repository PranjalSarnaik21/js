// console.log(null>0); // false
// console.log(null==0); // false
// console.log(null>=0); // true

// The reason is that an equality check == and comparisions > < >= <= work differently.
// Comparisions convert null to a number, treating it as 0.
// That's why (3) null >=0 is true and (1) null > 0 is false.

// console.log(undefined>0); // false
// console.log(undefined==0); // false
// console.log(undefined>=0); //false

// in all condition of undefined it will give false

console.log("2"==1); // false
console.log("2"==2); // true coz js conversion happens  (not check the dataType)
console.log("2"===2); // false // Strict Check i.e. === ; check the data type also
