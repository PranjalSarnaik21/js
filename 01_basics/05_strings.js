const name = "Pranjal"
const repoCount = 5
// console.log(name + repoCount + "Value"); // Pranjal5Value

// String Interpolation (backticks = `)
// console.log(`Hello my name is ${name.toLowerCase()} and repo count is ${repoCount}`); 
//Hello my name is Pranjal and repo count is 5 
let fName = "Pranjal"
let lName = "Sarnaik"
// console.log(fName + " " + lName); // Pranjal Sarnaik

// Functions
let GameName = new String ("PranjalS")
// console.log(GameName[0]);
// console.log(GameName.__proto__); // {} = object
// console.log(GameName.length); //8
// console.log(GameName.charAt(2)); // a
// console.log(GameName.indexOf('r')); // 1

let GameName1 = new String ("Pranjal_sar")
const newString = GameName1.substring(0,4); 
console.log(newString); // Pran last letter is not included; not follow -tive number

anotherName = GameName1.slice(-11,4);
console.log(anotherName); // Pran

newString1 = new String ("   Pranjal   ")
console.log(newString1.trim());  // Pranjal (trimStart() and trimEnd())

const url = "https://pranjal.com/pranjal%20sarnaik" 
// when there is space is url it will change in value 
console.log(url.replace('%20', '-')); // https://pranjal.com/pranjal-sarnaik
console.log(url.includes("pranjal")); // true
 
const str = ("Pr-an-ja-l")
console.log(str.split("-")); //[ 'Pr', 'an', 'ja', 'l' ]





 




