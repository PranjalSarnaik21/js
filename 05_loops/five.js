//forEach
// eg of array (in forEach we have to call function)
const programming = ["js","py","java"]
programming.forEach (function (code) {
    //console.log(code);  // js , py, java vertical
})

// will use arrow function
const Firstname = ["pranjal", "Rohan", "nisha"]
Firstname.forEach((name) => {
//console.log(name);
})

// another way to use forEach
const program = ["js","py","java"]
// function printMe(item){
//  console.log(item); 
// }
// program.forEach(printMe)

program.forEach((item, index, arr) => {
    console.log(item, index, arr);
})  // js 0 [ 'js', 'py', 'java' ]

// forEach is mostly used is object inside arry [{},{},{}]
const coding = [
    {
        language : "javascript",
        extension : "js"
    },
    {
        language : "java",
        extension : "java"
    },
    {
        language : "python",
        extension : "py"
    },
]
 coding.forEach((items) => {
    console.log(items.language);
 }) 
 //Output   
// javascript
//java
//python
