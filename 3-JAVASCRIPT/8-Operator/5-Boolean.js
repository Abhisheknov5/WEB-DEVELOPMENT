console.log('Boolean Values ');
/*
(1) Boolean Values :-

- A JavaScript Boolean represents one of two values: true or false.
- Very often, in programming, you will need a data type that can only have one of two values, like

- YES / NO
- ON / OFF
- TRUE / FALSE
- For this, JavaScript has a Boolean data type. It can only take the values true or false.

*/

/*
(2) The Boolean() Function :-

You can use the Boolean() function to find out if an expression (or a variable) is true:
*/
console.log('2 The Boolean() Function');
console.log(Boolean(10 > 9));

/*
(3) Comparisons and Conditions :-

- The chapter JS Comparisons gives a full overview of comparison operators.
- The chapter JS If Else gives a full overview of conditional statements.

- Here are some examples:

Operator	Description	Example
==	equal to	if (day == "Monday")
>	greater than	if (salary > 9000)
<	less than	if (age < 18)
The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.
*/
console.log('3 Comparisons and Conditions');
console.log(Boolean(100)); // true
console.log(Boolean(3.14)); // true
console.log(Boolean(-15)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean("false")); // true
console.log(Boolean("7 + 1 + 3.14")); // true

/*
(4) Everything Without a "Value" is False :-

- The Boolean value of 0 (zero) is false:
*/
console.log('4 Everything Without a "Value" is False');
let x = 0;
console.log(Boolean(x)); // false

/*
(5) The Boolean value of -0 (minus zero) is false :-
*/
console.log('5 The Boolean value of -0 (minus zero) is false ');
let x1 = -0;
console.log(Boolean(x1)); // false

/*
(6) The Boolean value of "" (empty string) is false :-
*/
console.log('6 The Boolean value of "" (empty string) is false');
let x2 = "";
console.log(Boolean(x2));

/*
(7) The Boolean value of undefined is false :-
*/
console.log('7 The Boolean value of undefined is false');
let x3 = "";
console.log(Boolean(x3)); // false

/*
(8) The Boolean value of null is false :-
*/
console.log('8 The Boolean value of null is false');
let x4 = null;
console.log(Boolean(x4)); // false

/*
(9) The Boolean value of false is (you guessed it) false :-
*/
console.log('9 The Boolean value of false is (you guessed it) false');
let x5 = false;
console.log(Boolean(x5)); // false

/*
(10) The Boolean value of NaN is false :-
*/
console.log('10 The Boolean value of NaN is false');
let x6 = 10 / "Hello";
console.log(Boolean(x6)); // false

/*
(11) JavaScript Booleans as Objects :-

Normally JavaScript booleans are primitive values created from literals:

let x = false;
But booleans can also be defined as objects with the keyword new:

let y = new Boolean(false);
*/
let x7 = false;
let y7 = new Boolean(false)
console.log(typeof (x7)); // typeof x returns boolean
console.log(typeof(y7));  // typeof y returns object

/*
(12) When using the == operator, x and y are equal :-
*/
console.log('12 When using the == operator, x and y are equal');
let x8 = false;
let y8 = new Boolean(false);
console.log(x8 == y8); // true

/*
(13) When using the === operator, x and y are not equal :-
*/
console.log('13  When using the === operator, x and y are not equal');
let x9 = false;
let y9 = new Boolean(false);
console.log(x9 === y9);

/*
(14) Note the difference between (x==y) and (x===y).
*/
console.log('14 Note the difference between (x==y) and (x===y).');
console.log('(x == y) true or false?');

let x10 = new Boolean(false);
let  y10 = new Boolean(false);
console.log(x10 == y10); // false

console.log('(x === y) true or false?');
let x11 = new Boolean(false);
let y11 = new Boolean(false);
console.log(x11 === y11); // false

// Comparing two JavaScript objects always return false.
