console.log(2 > 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 != 1);

// while comparing values make sure datatype must be same!
console.log("2" > 1);

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true
// The reason is that an equality check == and comparisons > < >= <= work differently
// Comparisons convert null to a number, treating it as 0.

console.log(undefined == 0); // false
console.log(undefined >= 1); // false
console.log(undefined <= 1); // false
console.log(undefined < 1); // false
console.log(undefined > 1); // false

// ******* Strict check === ************
// Check value as well as its data type

console.log("2" === 2);
