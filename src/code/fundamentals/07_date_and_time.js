// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // day with date
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString()); // date with time

// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2026, 10, 26);
// let myCreatedDate = new Date(2026, 10, 26, 5, 3);
let myCreatedDate = new Date("01-11-2026"); // month start from 1
// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.toDateString());

// Month start from 0 and day also

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime()); // getTime milliseconds
// console.log(Math.floor(Date.now() / 1000)); // getTime seconds

let newDate = new Date();

// console.log(newDate.getFullYear());
// console.log(newDate.getDay());
// console.log(newDate.getDate());
