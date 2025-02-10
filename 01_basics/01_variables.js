const accountId = 12664
let accountEmail = "pranjal@gmail.com"
var accountPassword = "123"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "aa@google.com"
accountPassword = "111"
accountCity = "washim"


console.log(accountId);

/*
Prefer const for not to change the value and use let for change the value
Prefer not to use var 
because of issue in block scope {} and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


