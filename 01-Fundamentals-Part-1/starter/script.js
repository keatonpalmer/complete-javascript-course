/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Keaton');
console.log(30);

let firstName = "Matilda";

console.log(firstName);

let person = 'Keaton';
let PI = 3.14;

let myFirstJob = 'Cashier';
let myCurrentJob = 'Information Systems Support Analyst';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 30);
// console.log(typeof 'Keaton');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
//const job; 

var job = 'Information Systems Support Analyst';
job = 'Teacher';

lastName = 'Palmer';
console.log(lastName);
*/

// Math Operators
const now = 2037;
const ageKeaton = now - 1991;
const ageSarah = now - 2018;
console.log(ageKeaton, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 
console.log(ageKeaton * 2, ageKeaton / 10, 2 ** 3);

const firstName = 'Keaton';
const lastName = 'Palmer';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;  // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageKeaton > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);