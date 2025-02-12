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