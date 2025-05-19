user = {
    "userName" : "Pranjal",
    "Price" : 30,
    "welcome":function(){
        console.log(`${this.userName}, welcome to website`);   // 'this'= refer to current cotext
         console.log(this); //{ userName: 'Pranjal', Price: 30, welcome: [Function: welcome] }
    }
}
user.welcome() // Pranjal, welcome to website
user.userName = "Tina"
user.welcome() // Tina, welcome to website
// console.log(this) //{} global k anadr context nhi hai

// In browser engine if we do console.log(this) then it will window object 
// so in browser engine global objects are windows and in node engine will get {} empty object

function chai(params) {
    let username2="Pranjal"
    //console.log(this);  //in node env. it will give too many values like global objects
    console.log(this.username2);
}
// chai() // undefined
// so, conclusion is we can't use this in functions only use in objects

// Arrow Function
const func = () => {
    let name = "Tina"
console.log(this);
}
func() //{} this is not work in arrow function too

// Basic arrow Function
// 0r Explicit Arrow Function 
const addTwoNum = (num1, num2) => {
    return num1 + num2
} 
console.log(addTwoNum(3,4)); //7
// if u r giving curly braces then return keyword is mandatory

const addTwoNum2 = (num3, num4) => num3 + num4
console.log(addTwoNum2(7,7)); // 14

// Implicit Arrow Function
const addTwoNum1 = (num1,num2) => (num1 + num2)
console.log(addTwoNum1(3,4)); // 7 
// if u r giving praentethis no need to give return keyword

// Arrow function for objects
const addTwoNum3 = (num1, num2) => ({"userName": "Pranjal"})
console.log(addTwoNum3(1,2)); // { userName: 'Pranjal' }

