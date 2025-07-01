// control flow e.g. if we logging then related to that code run if we looged out then another code run

// if statement
// syntax (comparision is done in condition like <, >, <=, >=, !=, ==, ===, !==)
// if(condition should be true){}
if(2=="2"){
    //console.log("executed");  // executed for number check
}
if(2===2){
    console.log("executed");  // executed for type checking
}

const temperature = 41
if (temperature>=40){
    console.log("temp is less than 50");   
}
else{
    console.log("temp is greater than 50")
}
console.log("executed")

// var is not used becoz it has only global scope

// implict function
const balanced = 2000
if(balanced > 500) console.log("test"); // test
// short hand
if(2>1) console.log("execute");

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power is ${power}`);    
} else {
    console.log("not executed");    
}

// bad Practices
// if(2>1) console.log("execute"),console.log("exectue2");

// nesting (check multiple condition)
const balance = 1000
if(balance < 500){
    console.log("less than 500");  
}else if (balance < 900){
    console.log("less than 900");  
}else{
    console.log("less than 1200");    // less than 1200
}
// Shopping Cart 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false
if(userLoggedIn && debitCard){
    console.log("Allow to buy");  // Allow to buy &&=ampercent and
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow to buy");  // Allow to buy || = or 
}