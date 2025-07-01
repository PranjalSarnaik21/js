// Swtich = to check multiple values or conditions
const month = 3
switch (month) {
    case 1:
        console.log("Jan");
        break;                    // we can duplicate it by selecting 1st then press shift alt and down arrow
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;             // break will control the flow i.e. in code if key's value got match it will print all cases after that, expect default case value
    case 4:
        console.log("April");
        break;
        
    default:
        console.log("default value");
        break;
}  // March

const months = "feb"
switch (months) {
    case "jan":
        console.log("1");
        break;                    
    case "feb":
        console.log("2");
        //break;
    case "march":
        console.log("3");
         break;             
    default:
        console.log("default value");
        break;
}   // give output as 2,3