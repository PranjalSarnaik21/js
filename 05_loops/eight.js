// reduce  
const nums = [1,2,3]
const total = nums.reduce(function (acc,cur_val){
    // console.log(`accumate: ${acc} and currentValue: ${cur_val}`);
    return acc + cur_val
},0)
// console.log(total); // 6

// array function
const num1 = [1,2,3]
const total1 = num1.reduce((acc, cur_val) => (acc + cur_val),1)
// console.log(total1);  // 7

// object inside array e.g.
const shoppingCart = [
    {
        item : "Top",
        price : 500
    },
    {
        item : "Tshirt",
        price : 300
    },
    {
        item : "Jeans",
        price : 2000
    },
    {
        item : "TankTop",
        price : 100
    },
]
const TotalBill = shoppingCart.reduce((acc,current) => acc + current.price,0)
console.log(TotalBill);  // 2900
