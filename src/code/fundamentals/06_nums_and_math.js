const score = 80000;
// console.log(score);

const balance = new Number(10000);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anotherNumber = 23.89653;

// console.log(anotherNumber.toPrecision(3)); // focus on three value and also round off

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// ++++++++++++++++++ MATHS +++++++++++++++++++++++++++

// console.log(Math); // Object
// console.log(Math.abs(-4));
// console.log(Math.round(4.5)); // roundOff
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.sqrt(4));
// console.log(Math.min(44, 454, 22, 457, 0, 65465));
// console.log(Math.max(44, 454, 22, 457, 0, 65465));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
