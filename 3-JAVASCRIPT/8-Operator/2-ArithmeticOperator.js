/*
(1) JavaScript Arithmetic Operators :-
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
Arithmetic Operations :-
Arithmetic Operations
- A typical arithmetic operation operates on two numbers.
- The two numbers can be literals:
*/
console.log('(1) JavaScript Arithmetic Operators');

// Perform an Aritmetic Operation
let x1 = 100 + 50;
console.log(x1); // OP is = 150

// or variables:
console.log('or variables');

// Declare Variables
let a = 100;
let b = 50;

// Perform Aritmetic Operation
let c = a + b;
console.log(c); // Op is = 150

// or expressions:
console.log('or expressions:');

// Declare Variables
let a1 = 3;

// Perform arithmetic operation: (100 + 50) * a1
let z = (100 + 50) * a1;
console.log(z); // Op is = 450

/*
(2) Operators and Operands :-
- The numbers (in an arithmetic operation) are called operands.
- The operation (to be performed between the two operands) is defined by an operator.

Operand	 Operator	Operand
100	       +           50

Adding :-
- The addition operator (+) adds numbers:
Example
*/
console.log('(2) Operators and Operands ');
console.log('Adding');
// Declare a variables
let x2 = 5;
let y2 = 5;

// Perform Addition
let z2 = x2 + y2;
console.log(z2); // Op is = 10

/*
Subtracting :-
- The subtraction operator (-) subtracts numbers.
Example
*/
console.log('Subtracting');
// Declare a variables
let x3 = 5;
let y3 = 2;

// Perform Addition
let z3 = x3 - y3;
console.log(z3); // Op is = 3

/*
Multiplying
- The multiplication operator (*) multiplies numbers.
Example
*/
console.log('Multiplying');
// Declare a variables
let x4 = 5;
let y4 = 2;

// Perform Addition
let z4 = x4 * y4;
console.log(z4); // Op is = 10

/*
Dividing :-
- The division operator (/) divides numbers.
Example
*/
console.log('Dividing');
// Declare a variables
let x5 = 5;
let y5 = 2;

// Perform Addition
let z5 = x5 / y5;
console.log(z5); // Op is = 2.5

/*
Remainder :-
- The modulus operator (%) returns the division remainder.
Example
*/

console.log('Remainder');
// Declare a variables
let x6 = 5;
let y6 = 2;

// Perform Addition
let z6 = x6 % y6;
console.log(z6); // Op is = 1

/*
- In arithmetic, the division of two integers produces a quotient and a remainder.
- In mathematics, the result of a modulo operation is the remainder of an arithmetic division.
*/

/*
Incrementing :-
- The increment operator (++) increments numbers.
Example
*/
console.log('Incrementing');

// Declare a variables
let x7 = 5;
x7++;
// Perform Addition
let z7 = x7;
console.log(z7); // Op is = 6

/*
Decrementing :-
The decrement operator (--) decrements numbers.
Example
*/
console.log('Decrementing');

// Declare a variables
let x8 = 5;
x8--;
// Perform Addition
let z8 = x8;
console.log(z8); // Op is = 4

/*
Exponentiation :-
- The exponentiation operator (**) raises the first operand to the power of the second operand.
*/
console.log('Exponentiation');

// Declare a variables
let x9 = 5;
// Perform Addition
let z9 = x9 ** 2
console.log(z9); // Op is = 25

/*
x ** y produces the same result as Math.pow(x,y):
*/
console.log('Math.pow');

// Declare a variables
let x10 = 5;
// Perform Addition
let z10 = Math.pow(x10,2)
console.log(z10); // Op is = 25

/*
Operator Precedence :-
- Operator precedence describes the order in which operations are performed in an arithmetic expression.
Example
*/
console.log('Operator Precedence');

// Perform the arithmetic operation demonstrating operator precedence
let result = 100 + 50 * 3;
// Display the result in the console
console.log(result);  // Op is =  250

/*
- Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?
- Is the addition or the multiplication done first?
- As in traditional school mathematics, the multiplication is done first.
- Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
- And (as in school mathematics) the precedence can be changed by using parentheses.
*/

/*
When using parentheses, the operations inside the parentheses are computed first:
*/


// Perform the arithmetic operation demonstrating operator precedence
let results = (100 + 50) * 3;
// Display the result in the console
console.log(results);  // Op is =  250

/*
When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:
*/
// Perform the arithmetic operation demonstrating left-to-right evaluation
let resultss = 100 + 50 - 3;

// Display the result in the console
console.log(resultss);  // Op is =  147

// Perform the arithmetic operation demonstrating left-to-right evaluation
let resultsss = 100 / 50 * 3;

// Display the result in the console
console.log(resultsss);  // Op is =  6







