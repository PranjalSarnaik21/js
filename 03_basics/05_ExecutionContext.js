// Jvascript Execution Context
//Execution Context : jo bhi file banai hai use javascript kaise run kregi
// js single threaded hai
// types of EC : 1) Global EC(global varibale ko this k andar allocate kiya jata hai) 2) function/functional EC 
// 3) Eval EC (it is a property of global EC)
// Execution of code done in 2 phases: 1) Memory Creation Phase(in this phase places are allocated to variable) 2) Execution Phase (here execution or calculation of variables are done )

let val1 = 3
let val2 = 5
function addValues(num1,num2){
    let total = num1 + num2
    return total
}
addValues(2,3)
let result1 = addValues(val1,val2)
 let result2 = addValues(5,3)

// steps of execution
// 1) Global EC --> this 
// 2) Memory Creation Phase 
// allocation of variables:val1=undefined, val2=undefined, addValues=defination,  result1=undefined, result2=undefined
// 3) execution Phase 
// val1 = 3, val2 = 5, addValues= new Evnrionment(Sandbox) Creation (jitne functions utne naye sandbox create honge) 
// sandbox = new variable env + execution threads
// 2a) memoryPhase: val1=undefined, val2=undefined, total=undefined
// 3a) execution phase: num1=3, num2=5, total=8 ()total will return in global execution context 
//  new sandbox mP: same as above ; eP: values will be different
// after every caluclationor execution  the sandox will be deleted in memory

// call stack : lifo concept : lastIn first out 
// eg 3 methods : one(); two(); three() 
// function one(params) {
//     console.log("One"); 
// }
// function two(params) {
//     console.log("Two"); 
// }
// function three(params) {
//     console.log("Three"); 
// }
// one() //One
// two() // Two
// three() // Three
function one(params) {
    console.log("One"); 
    two()
}
function two(params) {
    console.log("Two"); 
    three()
}
function three(params) {
    console.log("Three"); 
}
one()

// One
// Two
// Three