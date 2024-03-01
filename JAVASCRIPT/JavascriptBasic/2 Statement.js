/*Statment:-
JavaScript statements are composed of
Values, Operators, Expressions, Keywords, and Comments. */
console.log('1 Statement');
let x, y, z;
x = 10;
y = 20;
z = x + y;
console.log(" 2 The value of Z:\n", z);

/* Semicolons:-
Semicolons separate JavaScript statements.
Add a semicolon at the end of each executable statement. */
console.log('3 Semicolons');
let a, b, c;
a = 5;
b = 10;
c = a + b;
console.log("JavaScript statements are separated by semicolons \n", c);

let p, q, r;
p = 10; q = 20; r = 30; r = p + q;
console.log("Multiple statements on one line are allowed \n", r);

/* JavaScript White Space:-
JavaScript ignores multiple spaces. 
You can add white space to your script to make it more readable.
A good practice is to put spaces around operators ( = + - * / )*/
console.log('4 White Space');
let person = "Abhishek";
let persons="Abhishek";
/* JavaScript Line Length and Line Breaks:-
For best readability, programmers often like to avoid code lines longer than 80 characters.
If a JavaScript statement does not fit on one line, the best place to break it is after an operator.
*/
console.log('5 JavaScript Line Length and Line Breaks');
console.log('Hello Dolly!');

/* JavaScript Code Blocks
JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
The purpose of code blocks is to define statements to be executed together.
One place you will find statements grouped together in blocks, is in JavaScript functions.
*/
console.log('6 JavaScript Code Blocks');
function myFunction() {
    console.log('Hello Dolly!');
    console.log('How are you?');
}
