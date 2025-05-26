// Jvascript Execution Context
//Execution Context : jo bhi file banai hai use javascript kaise run kregi
// js single threaded hai
// types of EC : 1) Global EC 2) function/functional EC 3) Eval EC (it is a property of global EC)
// Execution of code done in 2 phases: 1) Memory Creation Phase(in this phase places are allocated to variable) 2) Execution Phase (here execution or calculation of variables are done )

let val1 = 3
let val2 = 5
function addValues(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addValues(val1,val2)
let result2 = addValues(5,3)