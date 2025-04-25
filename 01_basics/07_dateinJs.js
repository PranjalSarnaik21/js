let myDate = new Date()
// console.log(typeof(myDate)); // object
// console.log(myDate); // 2025-04-25T13:28:41.497Z
// console.log(myDate.toString()); // Fri Apr 25 2025 13:30:07 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toJSON()); // 2025-04-25T13:30:07.786Z
// console.log(myDate.toLocaleString()); // 4/25/2025, 1:30:07 PM
// console.log(myDate.toLocaleDateString()); // 4/25/2025

 let createdDate = new Date (2023,1,23)
// console.log(createdDate.toString()); // Thu Feb 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time) in js month start with 0 coz its in array

let createdDate2 = new Date(2025,0,12,5,43)
// console.log(createdDate2.toLocaleString()); // 1/12/2025, 5:43:00 AM

let newDate = new Date("2023-01-26")
// console.log(newDate.toLocaleString()); // 1/26/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1745588838193 we will get today's date in millisecond
// it is easy to compare the date in millisecond
// console.log(newDate.getTime()); // 1674691200000 it will give newDte in millisecond

// if we want date in second
// console.log(Math.floor(Date.now()/1000)); //1745589083
// console.log(newDate.getMonth()+1);  // 1
console.log(myDate.toLocaleString('default',{weekday:"long"})); // Friday











