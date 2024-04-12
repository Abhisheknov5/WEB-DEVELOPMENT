/* VARIABLES:-
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:-
(1) Automatically
(2) Using var
(3) Using let
(4) Using const
*/
console.log('1 VARIABLES');
// In this first example x, y, and z are undeclared Variables.
// They are automatically declared when first used.
x = 10;
y = 20;
z = x + y;
console.log('The value of Z is=' + z);

/* Var:-
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.
*/
console.log('2 Var');
var x1 = 5;
var y1 = 5;
var z1 = x1 + y1;
console.log('The value of z=', z1);

let x2 = 5; 
let y2 = 5;
let z2 = x2 + y2;
console.log('The value of z=', z2);

const x3 = 5;
const y3 = 5;
const z3 = x2 + y2;
console.log('The value of z=', z3);

// Mixed Example
console.log('3 Mixed Example');
const price1 = 10;
const price2 =20;
let total = price1 + price2;
console.log('Mixed value is:',total);

/*
The two variables price1 and price2 are declared with the const keyword.
These are constant values and cannot be changed.
The variable total is declared with the let keyword.
The value total can be changed.
*/

/*
When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
*/

/*
JavaScript Identifiers:-
All JavaScript variables must be identified with unique names.
These unique names are called identifiers.
Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
The general rules for constructing names for variables (unique identifiers) are:
(1) Names can contain letters, digits, underscores, and dollar signs.
(2) Names must begin with a letter.
(3) Names can also begin with $ and _ (but we will not use it in this tutorial).
(4) Names are case sensitive (y and Y are different variables).
(5) Reserved words (like JavaScript keywords) cannot be used as names.
*/

/*
The Assignment Operator
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.
This is different from algebra. The following does not make sense in algebra:
x = x + 5
In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.
(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)
Note
The "equal to" operator is written like == in JavaScript.
*/

/*
JavaScript Data Types:-
JavaScript variables can hold numbers like 100 and text values like "John Doe".
In programming, text values are called text strings.
JavaScript can handle many types of data, but for now, just think of numbers and strings.
Strings are written inside double or single quotes. Numbers are written without quotes.
If you put a number in quotes, it will be treated as a text string.
*/
console.log('4 Data types');
const pi = 3.14;
let person = "Abhishek";
let answer = "Yes I am!";
console.log(pi);
console.log(person);
console.log(answer);

/*
Declaring a JavaScript Variable:-
Creating a variable in JavaScript is called "declaring" a variable.
You declare a JavaScript variable with the var or the let keyword:
var carName;
or:
let carName;
After the declaration, the variable has no value (technically it is undefined).
To assign a value to the variable, use the equal sign:
carName = "Volvo";
You can also assign a value to the variable when you declare it:
let carName = "Volvo";
In the example below, we create a variable called carName and assign the value "Volvo" to it.
*/
console.log('5 Declaring a JavaScript Variable');
let carName = "Volvo";
console.log(carName);

/*
One Statement, Many Variables:-
You can declare many variables in one statement.
Start the statement with let and separate the variables by comma:
*/
console.log('6 One Statement, Many Variables');
let persons = "Abhishek", carNamee = "Magnite", price = 100;
console.log("You can declare many variables in one statement=",carNamee);

// A declaration can span multiple lines:
console.log('7 A declaration can span multiple lines');
let personss = "John Doe",
carNames = "Volvo",
prices = 200;
console.log('A declaration can span multiple lines:', carNames);

/*
Value = undefined :-
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.
A variable declared without a value will have the value undefined.
The variable carName will have the value undefined after the execution of this statement:
*/
console.log('8 Value = undefined');
let bikeName;
console.log(bikeName);

/*
Re-Declaring JavaScript Variables:-
If you re-declare a JavaScript variable declared with var, it will not lose its value.
The variable carName will still have the value "Volvo" after the execution of these statements.
*/
console.log('9 Re-Declaring JavaScript Variables');
var bikeNamee = "Duke";
console.log(bikeNamee);

/*Note
You cannot re-declare a variable declared with let or const.
This will not work:
let bikeNamee = "Duke";
let bikeNamee;
*/

/*
JavaScript Arithmetic:-
As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:
*/
console.log('10 JavaScript Arithmetic');
let n = 5 + 2 + 3;
console.log(n);

// You can also add strings, but strings will be concatenated.
console.log('11 String concatenated');
let p = "Abhishek" + " " + "Sharma";
console.log(p);

let t1 = "5" + 2 + 3;
console.log(t1);

/*
JavaScript Dollar Sign $
Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names.
Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".
*/
console.log('12 JavaScript Dollar Sign $');
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
console.log($$$ + $myMoney);

/*
JavaScript Underscore (_) :-
Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names.
*/
console.log('13 JavaScript Underscore (_) ');
let _x = 2;
let _100 = 5;
console.log(_x + _100);

