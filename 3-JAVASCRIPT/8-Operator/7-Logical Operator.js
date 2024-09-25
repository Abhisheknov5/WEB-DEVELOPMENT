/*
Logical Operators :-
Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	Description 	      Example	
&&	        and	                   (x < 10 && y > 1) is true	
||	        or	                   (x == 5 || y == 5) is false	
!	        not	                   !(x == y) is true
*/
console.log('Logical Operators');
let x = 5;
let y = 8;

// && (AND) operator: Both conditions must be true
console.log("x < 10 && y > 1: " + (x < 10 && y > 1)); // true, because both conditions are true

// || (OR) operator: At least one condition must be true
console.log("x == 5 || y == 5: " + (x == 5 || y == 5)); // true, because x == 5 is true

// ! (NOT) operator: Reverses the result of the condition
console.log("!(x == y): " + !(x == y)); // true, because x is not equal to y


