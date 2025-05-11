// Scopes : {} -- if it is in functions or in if else then the curly braces are scopes
// Blocked Scope : Which is in if-else condition means anything in curly braces remain in that curly braces.
var a = 100 
if (true) {
    var a = 10
    let b = 12
    const c = 14
}
console.log(a); // 10 it is surpasses the blocked scope so not to use
// it will give problem if 10 coder are working on same code if someone used var then it will be issue to recognized from where we are getting the value
//console.log(b); // b is not defined coz it is in codition
// console.log(c); // c is not defined

let b1 = 20  
if (true) {
    let b1 = 12
    const c1 = 14
    console.log(`inner value ${b1}`); // inner value 12
}
console.log(b1); // 20
// Global Scope : outerside of the blocked scope we can call global scope in blocked scope 
// but we can't call blocked scope in global scope 
// the global scope for windows and in code env.are different

// nested Scopes
function one () {
    const userName = "Pranjal"
    function two (){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website); showing error coz we can't call the website outside the block
    //two() // Pranjal-- child function can call the parent function
}
one() // nothing will get in response cuz we didn't log it

// if else nested scope
if (true) {  // true means it will definately go inside the block
    const userName = "Pranjal"
    if (userName === "Pranjal") {
        const website = " youtube"
        console.log(userName + website);   // Pranjal youtube
    }
    //console.log(website);
}
// console.log(userName);

// interesting exampale
 console.log(addOne(5)); // 6 we can call the function before define it
  function addOne (num){
    return num + 1
}
// expresion (a varibale can store anything like json, function) 
// addTwo() -- gives error we cant access it before decalring the variable called hosting
const addTwo = function (num){
    return num+2
}