// loop or iterations
// for 
//  so , let index = 0  --> intialized variable 
// then, index < 10 --> condition
// index++ --> if the condtion is true then element will increase by 1 
// and when the condition get false it will exit the loop
for (let index = 0; index < 10; index++) {
    const element = index;
    //
    // console.log(element); 
} // it'll show 0 to 9 digits in vertical way

for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element);
    if (i==5) {
        //console.log("5 is the best");   
    } 
} // 5 parynt print hoil nantr if condtion print hoil nantr prt loop 10 prynt jail

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(`table : ${i}`);
    for (let j = 1; j <= 10; j++) {
        const element = j;
        console.log(i + "x" + j + "=" + i*j );    
    }   
}
let myArray = ["flash","batman","superHero"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);     
}

// break
for (let i = 1; i <=10; i++) {
    if (i == 5) {
        console.log("5 is the best");
        break   // it will print up to 5
    }
    console.log(`the value is ${i}`);    
}
 // copy alt shift down arrow ; to duplicate
 
 for (let i = 1; i <=10; i++) {
     if (i == 5) {
         console.log("5 is the best"); 
         continue  // it will skip the condition 
         // it will print before 5 and then (5 is the best) then 6 to 10 (not print only 5)
     }
     console.log(`the value is ${i}`);  
 }

 

