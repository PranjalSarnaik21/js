// Primitive DataTypes
// 7 types: string, Number, Boolean, null, undefined, symbol, BigInt
// examples
const score = 100 // number
const scorevalue = 100.3 // number
const isLoggedIn = false  // boolean
const outsidetemp = null // object
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId); // false
// console.log(typeof(id)) // symbol
// console.log(id) //Symbol(123)
// console.log(anotherId); // Symbol(123)

bigNumber = 123456678778980933445555n
console.log(typeof(bigNumber)); // bigint

// REferenceType / Non Primitive
// Array, Objects, Functions

const arr = ["a", "r", "t"] // dataType = object

let myObj = {
    name: "Pranjal",
    age: "24"
}
console.log(typeof(myObj)); // object

const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof(myFunction)); // function 0r function object

console.log(typeof(unknown)); // undefined

// js is a dynamically typed langauge. This means that variable types are determined at runtime,
// and you do not need to explicitly declare the type of a variable before using it.
// you can assign different types of values to a variable during its lifetime.

// Stack (Primitive) -- variable declare kiya hai uska copy milta hai, 
// Heap (Non-Primitive) -- reference of original value if any changes happen it will change in memory

//Stack eg
let name1 = "Pranjal"
let anotherName = name1
anotherName = "Priya"

console.log(name1); // Pranjal
console.log(anotherName); // Priya

// Heap eg
let userOne = {
    email: "pranjal@cogni.com",
    upi: "pranjal@pyl"
}
let userTwo = userOne
// to accecss the element in object
 userTwo.email = "Priya@gmail.com"

 console.log(userOne.email); // Priya@gmail.com
 console.log(userTwo.email); // Priya@gmail.com
