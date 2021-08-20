/**
 * DATA TYPES in Javascript
 */

 // Javascript is dynamically typed.
 // We can put any type in any variable
 var myString = "Hello";
 myString = 10;

 //Javascript has 8 basic data types

/**
 * 1 Number
 */
let number = 10;
number = 2.3;

    // Special numeric values
    console.log(1/0);     // Infinity
    console.log("not a number" / number); // NaN

/**
 * 2 BigInt
 */
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;   

/**
 * 3 String
 */
let str = "Double quotes";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

    console.log(`the result is ${1 + 2}`);  // 3

/**
 * 4 Boolean
 */
let isChecked = true;
let isPrime = false;

/**
 * 5 "Null" value
 */
let name = null;
//In JavaScript, null is not a “reference to a non-existing object” 

/**
 * 6 "Undefined" value
 */
let age;
//The meaning of undefined is “value is not assigned”.
console.log(age);

/**
 * 7 Symbol
 */
const symbol = Symbol();
console.log(symbol);
//Everytime the factory function Symbol() is called, a new and unique symbol is created.
console.log(Symbol() === Symbol());

    // Symbols are used for:
    //  Enums -> Constants with semantic names and unique values
    //  Name Clashes -> no collisions with keys in objects
    //  Privacy -> when you don’t want your object properties to be enumerable








