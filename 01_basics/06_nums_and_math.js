const score = 400  // 400
console.log(score);
const balance = new Number (100) // [Number: 100] strictly give the type number
// console.log(balance);
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00 

const otherNum = 123.897
console.log(otherNum.toPrecision(4)); // 123.9 priority to starting number

const hundreds = 10000
// console.log(hundreds.toLocaleString("en-IN")); // 10,000

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// ------ MATHS ------
// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4 abs = to change negative value to positive
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.6));  // 5 top value
// console.log(Math.floor(4.6)); // 4 bottom value
// console.log(Math.pow(4,3)); // 64
// console.log(Math.min(1,2,3,4)); // 1

console.log(Math.random()); // 0.06929428418229411 it will give number between 0 ans 1 
console.log((Math.random()*10)+ 1); // 8.64624304892796 1 will assure the number is more than zero
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min); 
// 0.6 * 11 + 10 = 16 it gives number more than min value 







