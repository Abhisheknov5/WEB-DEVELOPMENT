/*
(1) Data type :-
- In programming, data types is an important concept.
- To be able to operate on variables, it is important to know something about the type.
- Without data types, a computer cannot safely solve this. */

/*
 JavaScript Types are Dynamic:-
 - JavaScript has dynamic types. 
 - This means that the same variable can be used to hold different data types.*/
 console.log('1 JavaScript Types are Dynamic');
 let x1; // Now x is undefined
 x1 = 5; // Now x is Number
 x1 = "Abhishek"; // Now x is a String
 console.log(x1);
 // Output is = Abhishek

 /* 
(2) JavaScript Strings :-
- A string (or a text string) is a series of characters like "John Doe".
- Strings are written with quotes. You can use single or double quotes. */
console.log('(2) JavaScript Strings ');
let carName1 = "Magnite";
let carName2 = "Baleno";
console.log(carName1); // Magnite
console.log(carName2); // Baleno
/*
(3) JavaScript Numbers :-
- All JavaScript numbers are stored as decimal numbers (floating point).
- Numbers can be written with, or without decimals. */
console.log('(3) JavaScript Numbers ');
// With Decimal
let x2 = 34.00; 
console.log(x2); // 34
// Without decimals
let x3 = 34;
console.log(x3); // 34

/* 
(4) Exponential Notation :-
- Extra large or extra small numbers can be written with scientific (exponential) notation. */
console.log('(4) Exponential Notation ');
let y3 = 123e5; 
console.log(y3); // 12300000

let y4 = 123e-5; // 0.00123
console.log(y4);

/* 
(5) JavaScript BigInt :-
- All JavaScript numbers are stored in a a 64-bit floating-point format.
- JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.*/
console.log('(5) JavaScript BigInt ');
let x4 = BigInt("123456789012345678901234567890");
console.log(x4); // 123456789012345678901234567890n

/* 
(6) JavaScript Booleans :-
- Booleans can only have two values: true or false. */
console.log('(6) JavaScript Booleans ');
let x5 = 5;
let y5 = 5;
let z = 6;
console.log(x5 == y5); // Returns true
console.log(x5 == z); // Returns false

/* 
(7) JavaScript Arrays :-
- JavaScript arrays are written with square brackets.
- Array items are separated by commas.
- The following code declares (creates) an array called cars, containing three items (car names). */
console.log('(7) JavaScript Arrays ');
const cars = ["Magnite", "Varna", "Warna"];
console.log(cars[0]);

/*  
(8) JavaScript Objects :-
- JavaScript objects are written with curly braces {}.
- Object properties are written as name:value pairs, separated by commas. */
console.log('(8) JavaScript Objects ');
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName + " is " + person.age + " years old. ");
// Output is = John is 50 years old. 

/* 
(9) The typeof Operator :-
- You can use the JavaScript typeof operator to find the type of a JavaScript variable.
- The typeof operator returns the type of a variable or an expression. */
console.log('(9) The typeof Operator ');
typeof ""; // Returns String
typeof "Abhishek"; // Returns String
typeof "Kumar"; // Returns String
console.log(typeof("Abhishek")); // String

console.log(typeof 0); //Number
console.log(typeof 314); //Number
console.log(typeof 3.14); //Number
console.log(typeof 3); //Number
console.log(typeof (3 + 4)); //Number

/* 
(10) Undefined :-
- In JavaScript, a variable without a value, has the value undefined. The type is also undefined.*/
console.log('(10) Undefined ');
let car; // value is undefined type is undefined.
console.log(car); // Undefined
console.log(typeof car); // Undefined

/*
(11) Empty Values :-
- An empty value has nothing to do with undefined.
- An empty string has both a legal value and a type. */
console.log('(11) Empty Values ');
let carss = ""; // The value is "", the typeof is "String".
console.log("The value is: " + carss); // The value is: 
console.log("The type is: " + typeof carss); // The type is: string
