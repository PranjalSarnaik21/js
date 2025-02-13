// let score = "33ab"
let score = null
console.log(typeof score); // string
console.log(typeof (score)); //written in method  ; string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN -> Not a number

// when we put score = null then the type is object ; 
// and after conversion into number then the value is 0

// when we put score = undefined then the type is undefined;
// and after number conversion value is NaN

// when we put score = true then the type is boolean;
// and after number conversion value is 1 and if false then 0

// 1 = true ; 0 = false
// "P" = true ; "" = false

// Operations
let value = 3
let negValue = -value
console.log(negValue);

/*
console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 8
console.log(2/3); // 0.666
console.log(2%3); // 2
*/
// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 3); // 123
// console.log(1 + 2 + "3"); // 33

// console.log(+true) // 1
console.log(+"") // 0 Plus is a conversion symbol

let gameCounter = 100
// ++gameCounter;  prefix & postfix
gameCounter++;   
console.log(gameCounter); // 101
