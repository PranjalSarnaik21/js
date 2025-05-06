// objects literals (all key has string datatype )
// Declare the symbol and used as a key in json payload
const mySym = Symbol("key1")
const jsUser = {
    name : "Pranjal",
    age : 24,
    location : "Jaipur",
    email : "Pranjal@cognizant.com",
    isLoggedIn : false,
    lastlogingDays : ["Mon", "fri"],
    "full Name" : "Pranjal sarnaik",
    [mySym] : "myKey1"  
}
console.log(jsUser.name); // Pranjal
console.log(jsUser["name"]); // Pranjal
console.log(jsUser["full Name"]); // Pranjal sarnaik
// console.log(jsUser.full name); wrong syntax
console.log(jsUser[mySym]); // myKey1
console.log(typeof(jsUser[mySym])); // string coz the value is string
console.log(typeof(mySym)); // symbol

// overWrite
jsUser.email = "Pranjal@gmail.com"
console.log(jsUser.email); // Pranjal@gmail.com
//Freeze : it will not overwrite the value
// Object.freeze(jsUser)
jsUser.email = "Pranjal@hotmail.com"
// console.log(jsUser.email); // Pranjal@gmail.com
// console.log(jsUser); //  [Symbol(key1)]: 'myKey1'

jsUser.greeting = function(){
    console.log("hello");
    
}
console.log(jsUser.greeting()); // hello // undefined
console.log(jsUser.greeting); // [Function (anonymous)] reference of the function not created

// this is used to find the properties of that object
jsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`);
    
}
console.log(jsUser.greetingTwo()); // hello, Pranjal






