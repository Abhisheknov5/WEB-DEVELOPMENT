// JavaScript Number Properties //
/*
Property	       Description
EPSILON	           The difference between 1 and the smallest number > 1.
MAX_VALUE	       The largest number possible in JavaScript
MIN_VALUE	       The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	                 A "Not-a-Number" value
*/

/*
1 JavaScript EPSILON:-
Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.
*/
console.log('JavaScript Number Properties');
console.log('1 JavaScript EPSILON');
let x = Number.EPSILON;
console.log(x); // 2.220446049250313e-16


/*
2 JavaScript MAX_VALUE:-
Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
*/
console.log('2 JavaScript MAX_VALUE');
let x1 = Number.MAX_VALUE;
console.log(x1); // 1.7976931348623157e+308

/*
3 Number Properties Cannot be Used on Variables:-
Number properties belong to the JavaScript Number Object.
These properties can only be accessed as Number.MAX_VALUE.
Using x.MAX_VALUE, where x is a variable or a value, will return undefined:
*/
console.log('3 Number Properties Cannot be Used on Variables');
let x2 = 6;
console.log(x2.MAX_VALUE); // undefined

/*
4 JavaScript MIN_VALUE:-
Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.
*/
console.log('4 JavaScript MIN_VALUE');
let x3 = Number.MIN_VALUE;
console.log(x3); // 5e-324

/*
5 JavaScript MAX_SAFE_INTEGER:-
Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
Number.MAX_SAFE_INTEGER is (253 - 1).
*/
console.log('5 JavaScript MAX_SAFE_INTEGER');
let x4 = Number.MAX_SAFE_INTEGER;
console.log(x4); // 9007199254740991

/*
6 JavaScript MIN_SAFE_INTEGER:-
Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.
Number.MIN_SAFE_INTEGER is -(253 - 1).
*/
console.log('6 JavaScript MIN_SAFE_INTEGER');
let x5 = Number.MIN_SAFE_INTEGER;
console.log(x5); // -9007199254740991

// 7 JavaScript POSITIVE_INFINITY
console.log('7 JavaScript POSITIVE_INFINITY');
let x6 = Number.POSITIVE_INFINITY;
console.log(x6); // Infinity

// POSITIVE_INFINITY is returned on overflow:
let x7 = 1 / 0;
console.log(x7); // Infinity

// 8 JavaScript NEGATIVE_INFINITY
console.log('8 JavaScript NEGATIVE_INFINITY');
let x8 = Number.NEGATIVE_INFINITY;
console.log(x8); // - Infinity

// NEGATIVE_INFINITY is returned on overflow:
let x9 = -1 / 0;
console.log(x9); // - Infinity

/*
9 JavaScript NaN - Not a Number:-
NaN is a JavaScript reserved word for a number that is not a legal number.
*/
console.log('9 JavaScript NaN - Not a Number');
let x10 = Number.NaN;
console.log(x10); // NaN

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number).
let x11 = 100 / "Apple";
console.log(x11); // NaN