/*
(1) Statment
(2) Semicolons 
(3) JavaScript White Space 
(4) JavaScript Line Length and Line Breaks
(5) JavaScript Code Blocks 
(6) JavaScript Keywords 
*/

/*
(1) Statment :-
- JavaScript statements are composed of Values, Operators, Expressions, Keywords, and Comments. 
*/
console.log('(1) Statment ');
let x, y, z;
x = 10;
y = 20;
z = x + y;
console.log(" 2 The value of Z:\n", z); 
// Output is = 30


/* 
(2) Semicolons :-
- Semicolons separate JavaScript statements. Add a semicolon at the end of each executable statement.
*/
console.log('(2) Semicolons');
let a, b, c;
a = 5;
b = 10;
c = a + b;
console.log("JavaScript statements are separated by semicolons \n", c);
// Output is = 15

let p, q, r;
p = 10; q = 20; r = 30; r = p + q;
console.log("Multiple statements on one line are allowed \n", r);
// Output is = 30

/*
(3) JavaScript White Space :-
- JavaScript ignores multiple spaces. 
- You can add white space to your script to make it more readable.
- A good practice is to put spaces around operators ( = + - * / )
*/
console.log('(3) JavaScript White Space ');
let person = "Abhishek";
let persons="Abhishek";

/* 
(4) JavaScript Line Length and Line Breaks :-
- For best readability, programmers often like to avoid code lines longer than 80 characters.
- If a JavaScript statement does not fit on one line, the best place to break it is after an operator.
*/
console.log('(4) JavaScript Line Length and Line Breaks');
console.log('Hello Dolly!');
// Output is = Hello Dolly!

/* 
(5) JavaScript Code Blocks :-
- JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
- The purpose of code blocks is to define statements to be executed together.
- One place you will find statements grouped together in blocks, is in JavaScript functions.
*/
console.log('(5) JavaScript Code Blocks ');
function myFunction() {
    console.log('Hello Dolly!');
    console.log('How are you?');
}

/*
(6) JavaScript Keywords :-
- JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
- Our Reserved Words Reference lists all JavaScript keywords.
- Here is a list of some of the keywords you will learn about in this tutorial:

Keyword	Description
var:-	Declares a variable
let:-	Declares a block variable
const:-	Declares a block constant
if:-	Marks a block of statements to be executed on a condition
switch:-	Marks a block of statements to be executed in different cases
for:-	Marks a block of statements to be executed in a loop
function:-	Declares a function
return:-	Exits a function
try:-	Implements error handling to a block of statements
*/
