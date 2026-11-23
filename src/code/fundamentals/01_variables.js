/* Variables- 
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope), 
Never use var in your code instead of let because of block and functional scope issues.

console.table([]) -> group of variables , show values of variables in a tabular form 
*/

const accountId = 285123;
let accountEmail = "suryansh@gmail.com";
var accountPassword = "12345";
let accountState;

accountCity = "Lucknow";

// accountId = 2; // not allowed
console.log(accountId);
accountEmail = "n@hc.com";
accountPassword = 22156;
accountCity = "Mumbai";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// // js is variable while amazing is a value that is assigned.
// let js = "amazing";

// // Value in console
// console.log(50 + 10);
// console.log("Suryansh");

// let first_name = "Suryansh";
// let last_name = "Kushwaha";
// console.log(last_name);
// console.log(first_name);
