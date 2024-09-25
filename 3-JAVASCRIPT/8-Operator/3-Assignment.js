/*
JavaScript Assignment Operators :-
- Assignment operators assign values to JavaScript variables.

Operator	Example	    Same As
=	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y

Shift Assignment Operators :-
Operator	Example	    Same As
<<=	        x <<= y	    x = x << y
>>=	        x >>= y	    x = x >> y
>>>=	    x >>>= y	x = x >>> y

Bitwise Assignment Operators :-
Operator	Example 	Same As
&=	        x &= y	    x = x & y
^=      	x ^= y	    x = x ^ y
|=	        x |= y	    x = x | y
 
Logical Assignment Operators :-
Operator	Example	    Same As
&&=	        x &&= y	    x = x && (x = y)
||=	        x ||= y	    x = x || (x = y)
??=	        x ??= y	    x = x ?? (x = y)
Note
The Logical assignment operators are ES2020.
*/
/*
(1) The = Operator :-
- The Simple Assignment Operator assigns a value to a variable.

Simple Assignment Examples
*/
console.log('JavaScript Assignment Operators');
console.log('(1) The = Operator');
// Simple assignment of a value to a variable
let x = 10;

// Display the value of x in the console
console.log("Value of x is: " + x);  // Op is =  Value of x is: 10

// Declare a variable y and assign it a value of 50
let y1 = 50;

// Declare a variable x and assign it the result of an arithmetic operation
let x1 = 10 + y1;

// Display the value of x in the console
console.log("Value of x is: " + x1);  //  Op is = Value of x is: 60

/*
(2)The += Operator :-
- The Addition Assignment Operator adds a value to a variable.

Addition Assignment Examples
*/
console.log('(2)The += Operator');
let x2 = 10;
x2 += 5; 
console.log(x2); // Op is = 15

let text1 = "Hello";
text1 += "World";
console.log(text1); // HelloWorld

/*
(3)The -= Operator :-
-The Subtraction Assignment Operator subtracts a value from a variable.

Subtraction Assignment Example
*/
console.log('(3)The -= Operator');
let x3 = 10;
x3 -= 5;
console.log(x3); // 5

/*
(4) The *= Operator :-
- The Multiplication Assignment Operator multiplies a variable.

Multiplication Assignment Example
*/
console.log('(4) The *= Operator');
let x4 = 10;
x4 *= 5;
console.log(x4); // 50

/*
(5) The **= Operator :-
- The Exponentiation Assignment Operator raises a variable to the power of the operand.
Exponentiation Assignment Example
*/
console.log('(5) The **= Operator ');
let x5 = 10;
x5 **= 5;
console.log(x5); // 100000

/*
(6) The /= Operator :-
- The Division Assignment Operator divides a variable.
Division Assignment Example
*/
console.log('(6) The /= Operator');
let x6 = 10;
x6 /= 5;
console.log(x6); // 2

/*
(7) The %= Operator :-
- The Remainder Assignment Operator assigns a remainder to a variable.
Remainder Assignment Example
*/
console.log('(7) The %= Operator');
let x7 = 10;
x7 %= 5;
console.log(x7); // 0

/*
(8) The <<= Operator :-
- The Left Shift Assignment Operator left shifts a variable.
Left Shift Assignment Example
*/
console.log('(8) The <<= Operator');
let x8 = -100;
x8 <<= 5; 
console.log(x8); // -3200

/*
(9) The >>= Operator :-
- The Right Shift Assignment Operator right shifts a variable (signed).
Right Shift Assignment Example
*/
console.log('(9) The >>= Operator ');
let x9 = -100;
x9 >>= 5;
console.log(x9); // -4

/*
(10) The >>>= Operator :-
- The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).
Unsigned Right Shift Assignment Example
*/
console.log('(10) The >>>= Operator ');
let x10 = -100;
x10 >>>= 5;
console.log(x10); // 134217724

/*
(11) The &= Operator :-
- The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.
Bitwise AND Assignment Example
*/
console.log('(11) The &= Operator ');
let x11 = 100;
x11 &= 5;
console.log(x11); // 4

/*
(12) The |= Operator :-
- The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.
Bitwise OR Assignment Example
*/
console.log('(12) The |= Operator ');
let x12 = 100;
x12 |= 5;
console.log(x12); // 101

/*
(13) The ^= Operator :-
- The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.

Bitwise XOR Assignment Example
*/
console.log('(13) The ^= Operator ');
let x13 = 100;
x13 ^= 5;
console.log(x13); // 97

/*
(14) The &&= Operator :-
- The Logical AND assignment operator is used between two values.
- If the first value is true, the second value is assigned.

Logical AND Assignment Example
*/
console.log('(14) The &&= Operator');
let x14 = 100;
x14 &&= 5;
console.log(x14); // 5

/*
(15) The ||= Operator :-
- The Logical OR assignment operator is used between two values.
- If the first value is false, the second value is assigned.

Logical OR Assignment Example
*/
console.log('(15) The ||= Operator');
let x15 = undefined;
x15 ||= 5;
console.log(x15); // 

/*
(16) The ??= Operator :-
- The Nullish coalescing assignment operator is used between two values.
- If the first value is undefined or null, the second value is assigned.

Nullish Coalescing Assignment Example
*/
console.log('(16) The ??= Operator');
let x16;
console.log(x16 ??= 5); // 5
  

 