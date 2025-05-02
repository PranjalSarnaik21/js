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




