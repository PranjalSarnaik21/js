// We can't store forEach loop in variable and we don't use conditions directly also
// const programming = ["js","py","java"]
//  const code = programming.forEach(
//     (item) => {
//         console.log(item);    
//     }
// )
// console.log(code); // undefined

// forEach for Conditions
const digits = [1,2,3,4,5,6,7,8,9,10]
const newDigits = []
digits.forEach((items) => {
    if (items>8) {
        newDigits.push(items);    
    }
}) 
// console.log(newDigits); // [ 9, 10 ]

// filter : we used conditions directly
const Numbers= [1,2,3,4,5,6,7,8,9,10]
const codes = Numbers.filter((numbs) => {
   return numbs > 5        // we write return coz it is in block scope
})
// console.log(codes);  // [ 6, 7, 8, 9, 10 ]

// another way without {} braces but with ()
const Numbers1= [1,2,3,4,5,6,7,8,9,10]
const codes1 = Numbers1.filter((numbs) => (numbs> 4) 
)
//console.log(codes1);  // [ 5, 6, 7, 8, 9, 10 ]

// another way without any braces
const Numbers2= [1,2,3,4,5,6,7,8,9,10]
const codes2 = Numbers1.filter((numbs) => (numbs> 6) 
)
//console.log(codes2);  // [7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBooks = books.filter((bk) => (bk.genre === "History"))
  console.log(userBooks);
  // will do overwrite
userBooks = books.filter((bk) => { return bk. publish>=2000 && bk.genre ==="Science"})
  console.log(userBooks);
  
  