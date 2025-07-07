// Example (This is not good practice to check array)
const userName = []
if(userName){
    console.log("UserName is there");   
} else{
    console.log("userName is not there"); 
} // UserName is there

// falsy values = false, 0 , BigInt 0n, "" , -0, null, undefined , NaN
// truthy values are all except falsy values
// truthy values = [], {}, "0","false", function(){}

// to check array
const userName1 = []
if(userName.length === 0){
    console.log("its an empty array");   
}else{
    //console.log("not an empty array");    
} // ("its an empty array"

// to check object
const obj = {}
if(Object.keys(obj).length===0){     // here we convert object into array and to check we used length 
    console.log("It's an empty object"); 
}
// false == 0 --> true ;   0 == "" -->true ;  false  == '' --> true

// nullish coalescing operator (??) used for : null, undefined
let val1;
// val1 = null ?? 12    // 12
// val1 = 10 ?? undefined      // 10
// val1 = 10 ?? undefined ?? 13 // 10 (will take the 1st value)
// val1 = null ?? null      //null
// val1 = undefined ?? undefined    //undefined
// val1 = undefined ?? null    //null
//val1 = null ?? undefined  // undefined
// console.log(val1);

// Terniary Operator --> It's like if-else statement
// condition ? true : false
const tea = 100
tea <= 80 ? console.log("less than 80") : console.log("more than 80");  // more than 80


