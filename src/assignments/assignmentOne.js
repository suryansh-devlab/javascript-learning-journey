/* Value and Variables
Declare variables called country,continent and population and assign their 
values according to your own country (population in millions).
Log their values to the console. */

let country = "India";
let continent = "Asia";
let population = 80;

console.log(country, continent, population);

/*Data Types
Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
Log the types of isIsland, population, country and language to the console. */

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*Basic Operators﻿
If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' */

console.log(population / 2);
++population;
console.log(population);
console.log(population > 6);
console.log(population < 33);

language = "Hindi";

// let description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;

// console.log(description);

/* Strings and Template Literals
Recreate the description variable from the last assignment,
this time using the template literal syntax. */

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

/*Taking Decisions: if / else Statements

If your country's population is greater than 33 million, log a 
string like this to the console: "India's population is 22 million 
below average" (the 22 is the average of 33 minus the country's population).

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
 */

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
    below average`,
  );
}
