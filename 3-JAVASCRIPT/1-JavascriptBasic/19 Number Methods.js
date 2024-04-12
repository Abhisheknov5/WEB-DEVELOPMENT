// JavaScript Number Methods //
/*
1 JavaScript Number Methods :-
These number methods can be used on all JavaScript numbers.
Method	Description
toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	Returns a number as a number
*/

/*
1 The toString() Method:-
The toString() method returns a number as a string.
All number methods can be used on any type of numbers (literals, variables, or expressions):
*/
console.log('1 The toString() Method');
let x = 123;
x.toString();
console.log(x);
console.log((123).toString());
console.log((100 + 23).toString());

/*
2 The toExponential() Method:-
toExponential() returns a string, with a number rounded and written using exponential notation.
A parameter defines the number of characters behind the decimal point:
*/
console.log('2 The toExponential() Method');
let x1 = 9.656;
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(6));

/*
3 The toFixed() Method:-
toFixed() returns a string, with the number written with a specified number of decimals:
*/
console.log('3 The toFixed() Method');
let x2 = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));
// toFixed(2) is perfect for working with money.

/*
4 The toPrecision() Method:-
toPrecision() returns a string, with a number written with a specified length:
*/
console.log('4 The toPrecision() Method');
let x3 = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));

/*
5 The valueOf() Method:-
valueOf() returns a number as a number.
*/
console.log('5 The valueOf() Method');
let x4 = 123;
x4.valueOf();
console.log(x4);
console.log((123).valueOf());
console.log((100 + 23).valueOf());

/*
Converting Variables to Numbers:-
There are 3 JavaScript methods that can be used to convert a variable to a number.
Method	Description
Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number
The methods above are not number methods. They are global JavaScript methods.
*/

/*
6 The Number() Method:-
The Number() method can be used to convert JavaScript variables to numbers:
If the number cannot be converted, NaN (Not a Number) is returned.
*/
console.log('6 The Number() Method');
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number(" 10"));
console.log(Number("10 "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("Abhishek"));

/*
7 The Number() Method Used on Dates:-
Number() can also convert a date to a number.
*/
console.log('7 The Number() Method Used on Dates');
// Convert the date "1970-01-01" to its numeric representation (Unix timestamp)
let timestamp = Number(new Date("1970-01-01"));
// Log the result to the console
console.log(timestamp);

// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:
let x5 = new Date("1970-01-02");
let numericDate = Number(x5);
console.log(numericDate);

let x6 = new Date("2017-09-30");
let numericDates = Number(x6);
console.log(numericDates);

/*
8 The parseInt() Method:-
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
If the number cannot be converted, NaN (Not a Number) is returned.
*/
console.log('8 The parseInt() Method');
console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

/*
9 Number Object Methods:-
These object methods belong to the Number object:
Method	Description
Number.isInteger()	Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	Converts a string to a number
Number.parseInt()	Converts a string to a whole number
*/
/*
Number Methods Cannot be Used on Variables
The number methods above belong to the JavaScript Number Object.
These methods can only be accessed like Number.isInteger().
Using X.isInteger() where X is a variable, will result in an error:
TypeError X.isInteger is not a function.
*/
/*
9 The Number.isInteger() Method:-
The Number.isInteger() method returns true if the argument is an integer.
*/
console.log(' Number Object Methods');
console.log('9 The Number.isInteger() Method');
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

/*
10 The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.
The Number.isSafeInteger() method returns true if the argument is a safe integer.
*/
console.log('10 The Number.isSafeInteger() Method');
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));

/*
11 The Number.parseFloat() Method:-
Number.parseFloat() parses a string and returns a number.
Spaces are allowed. Only the first number is returned:
*/
console.log('11 The Number.parseFloat() Method');
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.33"));
console.log(Number.parseFloat("10 20 30"));
console.log(Number.parseFloat("10 years"));
console.log(Number.parseFloat("years 10"));

/*
If the number cannot be converted, NaN (Not a Number) is returned.

Note
The Number methods Number.parseInt() and Number.parseFloat()
are the same as the Global methods parseInt() and parseFloat().
The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).
*/

/*
12 The Number.parseInt() Method:-
Number.parseInt() parses a string and returns a whole number.
Spaces are allowed. Only the first number is returned:
*/
console.log('12 The Number.parseInt() Method');
console.log(Number.parseInt("-10"));
console.log(Number.parseInt("-10.33"));
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("10 20 30"));
console.log(Number.parseInt("10 years"));
console.log(Number.parseInt("years 10"));
