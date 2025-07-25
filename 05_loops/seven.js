//map
// const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.map((num) => (num + 10))
// console.log(newNums);

//Chaining
const nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums
                .map((num) => (num * 10))
                .map((num)=>(num+1))
                .filter((num)=>(num>50))
console.log(newNums); // [ 51, 61, 71, 81, 91, 101 ]
