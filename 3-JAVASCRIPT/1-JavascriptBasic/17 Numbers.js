/////  JavaScript Numbers ////
// JavaScript has only one type of number. Numbers can be written with or without decimals.
console.log('Numbers');
let x = 3.14; // A number with decimals
let y = 3;    // A number without decimals
console.log('Numbers can be written with or without decimals:');
console.log(x);
console.log(y);

// Extra large or extra small numbers can be written with scientific (exponent) notation:
console.log('Extra large or extra small numbers can be written with scientific (exponent) notation');
let x1 = 123e5; // 12300000
let y1 = 123e-5; // 0.00123
console.log(x1);
console.log(y1);

/*
Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
The maximum number of decimals is 17.
*/
console.log('Integer Precision');
let x3 = 999999999999999;   // x will be 999999999999999
let y3 = 9999999999999999;  // y will be 10000000000000000
console.log(x3);
console.log(y3);

/*
Floating Precision
Floating point arithmetic is not always 100% accurate.
*/
console.log('Floating Precision');
let n = 0.2 + 0.1;
console.log("Floating point arithmetic is not always 100% accurate\n",n);

/*
Adding Numbers and Strings
WARNING !!
JavaScript uses the + operator for both addition and concatenation.
Numbers are added. Strings are concatenated.
*/
console.log('Adding Numbers and Strings');
let x4 = 10;
let y4 = 20;
let z = x4 + y4;
console.log(z);

// If you add two strings, the result will be a string concatenation.
console.log('If you add two strings, the result will be a string concatenation.');
let x5 = "10";
let y5 = "20";
let z5 = x5 + y5;
console.log(z5);

// If you add a number and a string, the result will be a string concatenation.
console.log('If you add a number and a string, the result will be a string concatenation.');
let x6 = 10;
let y6 = "20";
let z6 = x6 + y6;
console.log(z6);

// If you add a string and a number, the result will be a string concatenation.
console.log('If you add a string and a number, the result will be a string concatenation.');
let x7 = "10";
let y7 = 20;
let z7 = x7 + y7;
console.log(z7);

// A common mistake is to expect this result to be 30.
console.log('A common mistake is to expect this result to be 30.');
let x8 = 10;
let y8 = 20;
let z8 = "The result is: " + x8 + y8;

// A common mistake is to expect this result to be 102030.
let x9 = 10;
let y9 = 20;
let z9 = "30";
let result = x9 + y9 + z9;
console.log(result);

/*
Numeric Strings
JavaScript strings can have numeric content.
JavaScript will try to convert strings to numbers in all numeric operations.
*/
console.log('Numeric Strings');
let x10 = "100"; 
let y10 = "10"; 
let z10 = x10 / y10;
console.log(z10);

// In the last example JavaScript uses the + operator to concatenate the strings.
console.log('In the last example JavaScript uses the + operator to concatenate the strings.');
let x11 = "100";
let y11 = "10";
let z11 = x11 + y11;
console.log(z11);

/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number).
*/
console.log('NaN - Not a Number');
let x12 = 100 / "Apple";
console.log("A number divided by a non-numeric string becomes NaN (Not a Number)\n", x12);

// However, if the string is numeric, the result will be a number.
let x13 = 100 / "10";
console.log('A number divided by a numeric string becomes a number\n',x13);

// You can use the global JavaScript function isNaN() to find out if a value is a not a number.
let x14 = 100 / "Apple";
console.log("You can use the global JavaScript function isNaN() to find out if a value is not a number\n", isNaN(x14));

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN.
console.log('Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN.');
let x15 = NaN;
let y15 = 5;
let z15 = x15 + y15;
console.log("If you use NaN in a mathematical operation, the result will also be NaN\n",z15);

// Or the result might be a concatenation like NaN5.
console.log('Or the result might be a concatenation like NaN5');
let x16 = NaN;
let y16 = "5";
let z16 = x16 + y16;
console.log("If you use NaN in a mathematical operation, the result can be a concatenation\n", z16);

// NaN is a number: typeof NaN returns number.
console.log('NaN is a number: typeof NaN returns number:');
console.log("The typeof NaN is number", typeof NaN);

/*
Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
*/
console.log('Infinity');
let myNumber = 2;
let txt = "";
// Execute until Infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}
console.log(txt);

// Division by 0 (zero) also generates Infinity.
console.log('Division by 0 (zero) also generates Infinity');
let x17 = 2 / 0;
let y17 = -2 / 0;
console.log('Division by zero generates Infinity');
console.log(x17);
console.log(y17);

// Infinity is a number: typeof Infinity returns number.
console.log('Infinity is a number: typeof Infinity returns number.');
console.log("Infinity is a number\n",typeof Infinity);

/*
Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
*/
console.log('Hexadecimal');
let x18 = 0xFF;
console.log(x18);

/*
By default, JavaScript displays numbers as base 10 decimals.
But you can use the toString() method to output numbers from base 2 to base 36.
Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
*/
console.log('The toString() method can output numbers from base 2 to 36');
let myNumbers = 32;
console.log("Decimal 32 = " + "\n\n" +

"Hexatrigesimal (base 36): " + myNumbers.toString(36) + "\n" +
"Duotrigesimal (base 32): " + myNumbers.toString(32) + "\n" +
"Hexadecimal (base 16): " + myNumbers.toString(16) + "\n" +
"Duodecimal (base 12): " + myNumbers.toString(12) + "\n" +
"Decimal (base 10): " + myNumbers.toString(10) + "\n" +
"Octal (base 8): " + myNumbers.toString(8) + "\n" +
"Binary (base 2): " + myNumbers.toString(2));

/*
JavaScript Numbers as Objects
Normally JavaScript numbers are primitive values created from literals.
let x = 123;
But numbers can also be defined as objects with the keyword new.
let y = new Number(123);
*/
console.log('JavaScript Numbers as Objects');
let x19 = 123;
let y19 = new Number(123);
console.log(typeof x19);
console.log(typeof y19);

// When using the == operator, x and y are equal.
console.log('When using the == operator, x and y are equal');
let x20 = 500;
let y20 = new Number(500);
console.log("Numbers and Number objects cannot be safely compared\n", x20 == y20);

// When using the === operator, x and y are not equal.
console.log('When using the === operator, x and y are not equal');
let x21 = 500;
let y21 = new Number(500);
console.log("Numbers and Number objects cannot be safely compared\n", x21 === y21);

// Note the difference between (x==y) and (x===y).
console.log('(x == y) true or false?');
let x22 = new Number(500);
let y22 = new Number(500);
console.log('JavaScript objects cannot be compared\n', x22 == y22);

console.log('(x === y) true or false?');
let x23 = new Number(500);
console.log('JavaScript objects cannot be compared\n', x22 === y22);







