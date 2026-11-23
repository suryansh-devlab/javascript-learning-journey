"use strict"; // treat all JS code as newer version (treat all code as new standard)

// alert("hello") // using nodejs, not browser

let name = "surya";
let age = 22;
let isLoggedIn = false;

// object
console.log(typeof name);
console.log(typeof age);
console.log(typeof null); // null is object
console.log(typeof undefined); // undefined

// Primitive data types -> call by value
// number, bigInt, Boolean -> true/false , String, undefined, null -> standalone value, symbol -> uniques

const score = 100;
const scoreValue = 100.33;

let isLoggedOut = false;
let outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId); // false

const bigNumber = 9453465768314165489351n; // n convert into bigInt
console.log(bigNumber);

// Non-Primitive data types (Reference type) -> call by reference
// Array, Objects, Functions

const heros = ["Batman", "SpiderMan", "Doga"]; // Array

// Object
let myObj = {
  name: "surya",
  age: 22,
};

// Function
const myFun = function () {
  console.log("Hello World!");
};
