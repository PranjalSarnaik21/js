//Singleton
const tree = new Object()
console.log(tree); // {}
// nonSingleton
const tree1 = {} 
console.log(tree1); // {}

// nested objects
const myUser = {
    name: "Pranjal",
    email: "aa@gmail.com",
    fullname: {
        middleName: "Prakash",
        lastName: "Sarnaik"
    }
}
console.log(myUser.fullname.lastName); // Sarnaik

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = { 5: "a", 6: "b"}
console.log(obj1,obj2,obj3); // { '1': 'a', '2': 'b' } { '3': 'a', '4': 'b' } { '5': 'a', '6': 'b' }
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// spread operator
const obj5 = {...obj1,...obj2} // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5);

user = [
    {
        Name: "Pranjal",
        Id: 1,
        email: "p@google.com"
    },
    {
        Name: "Pranjal",
        Id: 2,
        email: "pp@google.com"
    },
    {
        Name: "Pranjal",
        Id: 3,
        email: "pp@google.com"
    }
]
console.log(user[1].Id); //2

const user1 = {
    Name: "Pranjal",
    Id: 1,
    email: "p@google.com"
}
// console.log(Object.keys(user1)); // [ 'Name', 'Id', 'email' ]
// console.log(Object.values(user1)); // [ 'Pranjal', 1, 'p@google.com' ]
// console.log(Object.entries(user1)); 
// [ [ 'Name', 'Pranjal' ], [ 'Id', 1 ], [ 'email', 'p@google.com' ] ]
// the dataType is array ; so its easy to any operation or access
// console.log(user1.hasOwnProperty('Name')); // true

// Destructuring the object
const course = {
    courseName : "Js",
    coursePrice : 999,
    CourseInstructor : "Pranjal"
}
const {CourseInstructor : instructor} = course
console.log(instructor); // Pranjal
