// Functions : everything which we packed in container and used as a copy no need to write everything
// num = reference ; num() = execution
function addTwoNumbers (number1, number2){
    console.log(number1 + number2); 
}
// addTwoNumbers(2,'4') // 24
// addTwoNumbers(2,null) // 2
addTwoNumbers(2,3) // 5
const result = addTwoNumbers (2,3)
console.log("result : ",result); // result :  undefined

function addTwoNumbers1 (number1, number2){
   let result1 = number1 + number2
   // console.log('p'); 
   return result1
   //console.log("Pranjal");
   // after return it will not print anything ; before it will print 
}
const result1 = addTwoNumbers1 (2,3)
console.log("result : ",result1); // result :  5

// 2nd way to write function
function addTwoNumbers2 (num1, num2){
return num1 + num2
}
const result2 = addTwoNumbers2(3,7)
console.log(result2); // 10

function userLoggedIn (username) {
    return `${username} logged in`
}
console.log(userLoggedIn()); // undefined logged in
console.log(userLoggedIn("Pranjal")); // Pranjal logged in
