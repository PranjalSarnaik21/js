// Functions : everything which we packed in container and used as a copy no need to write everything
// num = reference ; num() = execution
function addTwoNumbers (number1, number2){    // number1, number2 = parameters & 2,4 = arguments
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

// example
function userLoggedIn (username) {
    return `${username} logged in`
}
console.log(userLoggedIn()); // undefined logged in
console.log(userLoggedIn("Pranjal")); // Pranjal logged in

// if-else
function userLoggedIn1 (username1){
    if (username1 === undefined) // 0r if(!username) if condition is only stasified when the statement is true and empty string and undefined is always false value so to change it into true we used ! sign
    {
        console.log("Please entered the valid username");
        // return // used to display which is in the curly bracket only not display response after the return keyword
    }
    return `${username1} looged in`
}
console.log(userLoggedIn1());  // Please entered the valid username
                               // undefined looged in

// declare the parameter
function userLoggedIn3 (username2 = "sam"){
    if (!username2) {
        console.log("Please entered the valid username2");
        return 
    }
     return `${username2} logged in`  
}
console.log(userLoggedIn3()); //sam logged in

// rest operator
function caculateCartValues (...num) {
    return num
}
console.log(caculateCartValues(200,300,400,500)); // [ 200, 300, 400, 500 ]

function caculateCartValues1 (value1, value2, ...num) {
    return num
}
console.log(caculateCartValues1(200,300,400,500)); // [ 400, 500 ]

// // created a object and then pass it from function
user = {
    Product : "Band",
    Price : 99
}
function handleMyObject (object){
    console.log(`Product is ${object.Product} and Price is ${object.Price}`);  
}
handleMyObject(user) // Product is Band and Price is 99

// no need to create a object first directly put is function
function handleObject(anyObjects) {
    console.log(`Product is ${anyObjects.Product1} and Price is ${anyObjects.Price1}`);   
}
handleObject({
        Product1 : "Rubber",
        Price1 : 10
    }
)  // Product is Rubber and Price is 10

// Create an array and define a function
array1 = [200,300,400,500]
function findSecondValue (anyArray){
    return anyArray[1]
}
// console.log(findSecondValue(array1));
 
// directly define an array in function
console.log(findSecondValue([200,300,400,500])); 300

