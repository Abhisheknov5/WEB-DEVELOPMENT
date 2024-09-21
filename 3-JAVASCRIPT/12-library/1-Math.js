/*
(1) JavaScript Math Object :-

- The JavaScript Math object allows you to perform mathematical tasks on numbers.
- Unlike other objects, the Math object has no constructor.
- The Math object is static.
- All methods and properties can be used without creating a Math object first.

*/
console.log('1 JavaScript Math Object');
console.log("The Value of Math.PI is: " + Math.PI);

/*
(2) Math Properties (Constants) :-

The syntax for any Math property is : Math.property.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:
*/
console.log('2 Math Properties (Constants)');

console.log("The value of Math.E: " + Math.E); // 2.718281828459045
console.log("The value of Math.PI: " + Math.PI); // 3.141592653589793
console.log("The value of Math.SQRT2: " + Math.SQRT2); // 1.4142135623730951
console.log("The value of Math.SQRT1_2: " + Math.SQRT1_2);// 0.7071067811865476
console.log("The value of Math.LN2: " + Math.LN2);// 0.6931471805599453 
console.log("The value of Math.LN10: " + Math.LN10); //  2.302585092994046
console.log("The value of Math.LOG2E: " + Math.LOG2E);// 1.4426950408889634
console.log("The value of Math.LOG10E is: " + Math.LOG10E); // 0.4342944819032518
  

console.log('3 Math Methods');
/*
Math Methods :-
The syntax for Math any methods is : Math.method(number)
*/

/*
Number to Integer :-
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/
console.log('Number to Integer');
/*
Math.round() :-
Math.round(x) returns the nearest integer.
*/
console.log('Math.round()');
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

/*
Math.ceil()
Math.ceil(x) returns the value of x rounded up to its nearest integer:
*/
console.log('Math.ceil()');
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(-4.2)); //-4

/*
Math.floor():-
Math.floor(x) returns the value of x rounded down to its nearest integer:
*/
console.log('Math.floor()');
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(-4.2));// -5

/*
Math.trunc() :-
Math.trunc(x) returns the integer part of x:
*/
console.log('Math.trunc()');
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(4.7)); // 4
console.log(Math.trunc(4.4)); // 4
console.log(Math.trunc(4.2)); // 4
console.log(Math.trunc(-4.2)); // -4

/*
(4) Math.sign() :-
Math.sign(x) returns if x is negative, null or positive:
*/
console.log('4 Math.sign()');
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(4)); // 1

/*
(5) Math.pow() :-
Math.pow(x, y) returns the value of x to the power of y:
*/
console.log('5 Math.pow()');
console.log(Math.pow(8,2));

/*
(6) Math.sqrt() :-
Math.sqrt(x) returns the square root of x:
*/
console.log('6 Math.sqrt()');
console.log(Math.sqrt(64));

/*
(7) Math.abs() :-
Math.abs(x) returns the absolute (positive) value of x:
*/
console.log('7 Math.abs()');
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.abs(4.7));  // 4.7
 
/*
(8) Math.sin() :-
Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.
*/
console.log('8 Math.sin()');
console.log(Math.sin(90 * Math.PI / 180));
// returns 1 (the sine of 90 degrees)

/*
(9) Math.cos() :-
Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.

*/
console.log('9 Math.cos()');
console.log(Math.cos(0 * Math.PI / 180)); //1

/*
(10) Math.min() and Math.max() :-
Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
*/
console.log('10 Math.min() and Math.max()');
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

/*
(11) Math.random() :-
Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
*/
console.log('11 Math.random()');
console.log(Math.random()); // 0.38507250846140395

/*
(12) The Math.log() Method :-
Math.log(x) returns the natural logarithm of x.

The natural logarithm returns the time needed to reach a certain level of growth:
*/
console.log('12 The Math.log() Method ');
console.log(Math.log(1)); // 0
console.log(Math.log(2)); // 0.6931471805599453

// Math.E and Math.log() are twins.

//How many times must we multiply Math.E to get 10?
console.log(Math.log(10)); // 2.302585092994046

/*
(13) The Math.log2() Method :-
Math.log2(x) returns the base 2 logarithm of x.

How many times must we multiply 2 to get 8?
*/
console.log('13 The Math.log2() Method ');
console.log(Math.log2(8)); // 3

/*
(14) The Math.log10() Method :-
Math.log10(x) returns the base 10 logarithm of x.

How many times must we multiply 10 to get 1000?
*/
console.log('14 The Math.log10() Method ');
console.log(Math.log10(1000)); // 3


/*
JavaScript Math Methods
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)
*/