// for of 
// for of we can use on array , {} , "" , map, any dataType but not on an object

// example of for of-array
arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);   // no need to write long syntax like (condition, ++)
}
// example of for of-string
greetings = "Hello World"
for (const greet of greetings) {
    //console.log(greet);    
}

// Maps : it is an object holds key-value pairs and remember the original insertion order of the key.
// it has unique values
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States")
map.set('FR',"France")
console.log(map);   // its response in object format

// Iteration Of map (for of-map)
for (const keys of map) {
    console.log(keys);  // output in array format
}
for (const [keys] of map) {
    console.log(keys);  // only print the keys i.e. IN USA FR
}  
for (const [keys,values] of map) {
   // console.log(`${keys} = ${values}`); // IN = India
    console.log(keys,'->', values); // IN -> India
    
}