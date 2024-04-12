// JavaScript BigInt //
/*
JavaScript BigInt:-
JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
*/
/*
JavaScript Integer Accuracy :-
JavaScript integers are only accurate up to 15 digits.
Integer Precision
*/
console.log('1 JavaScript Integer Accuracy ');
console.log('Integer Precision');
let x = 999999999999999;
let y = 9999999999999999;
console.log(x);
console.log(y);

/*
How to Create a BigInt
To create a BigInt, append n to the end of an integer or call BigInt().
*/
console.log('2 How to Create a BigInt');
let x1 = 9999999999999999;
let y1 = 9999999999999999n;
let x2 = 1234567890123456789012345n;
let y2 = BigInt(1234567890123456789012345)
console.log(x1);
console.log(y1);
console.log(x2);
console.log(y2);

/*
(2) BigInt: A new JavaScript Datatype
The JavaScript typeof a BigInt is "bigint":
*/
console.log('2 BigInt');
let x3 = BigInt(999999999999999);
let type =  typeof x3;
console.log(type);

/*
BigInt is the second numeric data type in JavaScript (after Number).
With BigInt the total number of supported data types in JavaScript is 8.
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/

/*
(3) BigInt Operators:-
Operators that can be used on a JavaScript Number can also be used on a BigInt.
BigInt Multiplication Example
*/
console.log('3 BigInt Operators');
let x4 = 9007199254740995n;
let y4 = 9007199254740995n;
let z4 = x4 * y4;
console.log(z4);

/*
Notes
Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).
Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).
*/

/*
BigInt Decimals:-
A BigInt can not have decimals.
BigInt Division Example
let x5 = 5n;
let y5 = x5 / 2;
Error: Cannot mix BigInt and other types, use explicit conversion.
*/
console.log('4 BigInt Decimals');
let x5 = 5n;
let y5 = Number(x5) / 2;
console.log("Cannot mix BigInt and other types, use explicit conversions:-",y5);

/*
5 BigInt Hex, Octal and Binary:-
BigInt can also be written in hexadecimal, octal, or binary notation:
BigInt Hex Example
*/
console.log('5 BigInt Hex, Octal and Binary');
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(hex);
console.log(oct);
console.log(bin);

/*
6 Precision Curiosity:-
Rounding can compromise program security:
MAX_SAFE_INTEGER Example
*/
console.log('6 Precision Curiosity');
let x6 = 9007199254740992 === 9007199254740993;
console.log(x6);

/*
7 Minimum and Maximum Safe Integers:-
ES6 added max and min properties to the Number object:
MAX_SAFE_INTEGER
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER Example
*/
console.log('7 Minimum and Maximum Safe Integers');
console.log('MAX_SAFE_INTEGER');
let x7 = Number.MAX_SAFE_INTEGER;
console.log("MAX_SAFE_INTEGER \n", x7);

console.log('MIN_SAFE_INTEGER');
let x8 = Number.MIN_SAFE_INTEGER;
console.log('MIN_SAFE_INTEGER \n', x8);

/*
8 New Number Methods:-
ES6 also added 2 new methods to the Number object:
Number.isInteger()
Number.isSafeInteger()
The Number.isInteger() Method
The Number.isInteger() method returns true if the argument is an integer.
*/
console.log('8 New Number Methods');
console.log('isInteger()');
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

/*
The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.
The Number.isSafeInteger() method returns true if the argument is a safe integer.
*/
console.log('isSafeInteger()');
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));
