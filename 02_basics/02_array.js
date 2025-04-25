const marvel_heros =["ironman", "thor", "spiderman"]
const dc_heros = ["batman", "flash", "superman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //[ 'ironman', 'thor', 'spiderman', [ 'batman', 'flash', 'superman' ] ]
// console.log(marvel_heros[3][1]); // flash

all_Heros = marvel_heros.concat(dc_heros);
// console.log(all_Heros) // [ 'ironman', 'thor', 'spiderman', 'batman', 'flash', 'superman' ]

// spread ...
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // [ 'ironman', 'thor', 'spiderman', 'batman', 'flash', 'superman' ]

const another_array = [1,2,[3,4,5],8,9,[10,[11,12]],13]
const real_array = another_array.flat(Infinity) // give a spread out array [
//     1, 2,  3,  4,  5,
//     8, 9, 10, 11, 12,
//    13
 //]
// console.log(real_array);

console.log(Array.isArray("Pranjal")); // false

console.log(Array.from("Pranjal")); //  [
//    'P', 'r', 'a',
//   'n', 'j', 'a',
//   'l'
 //]converting into array

console.log(Array.from({name:"Pranjal"})); // [] not specified kiska array banan hai keys ya values
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ] return a new array from set of elements



