const name = "suryansh";
const repoCount = 50;

// console.log(name + repoCount + " value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hiteshhc");

// console.log(gameName[0]);
// console.log(gameName._proto_);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

// Substring and Slice
const newString = gameName.substring(0, 4); // last not include in it.
console.log(newString);

const anotherString = gameName.slice(0, 6);
console.log(anotherString);

// Trim and Replace
const newStringOne = "  Surya    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove whitespaces

const url = "https://sury.com/surya%20kushwaha";

console.log(url.replace("%20", "_"));
console.log(url.includes("surya"));
