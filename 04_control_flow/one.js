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

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power is ${power}`);    
} else {
    console.log("not executed");    
}

// short hand
if(2>1) console.log("execute");

// bad Practices
// if(2>1) console.log("execute"),console.log("exectue2");

// nesting (check multiple comdition)
const balance = 2000
