         / * Strings */
/* 
JavaScript Strings:-
JavaScript strings are for storing and manipulating text.
A JavaScript string is zero or more characters written inside quotes.
You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
*/
console.log('String');
let text = "Abhishek";
console.log(text);

// You can use single or double quotes.
console.log('You can use single or double quotes:');
let carName1 = "Magnite";
let carName2 = "Kia";
console.log(carName1);
console.log(carName2);

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
console.log('quotes inside a string');
let answer1 = "I am 'Abhishek";
let answer2 = "Akash'";
let answer3 = 'Ashish"';
console.log(answer1);
console.log(answer2);
console.log(answer3);

/*
String Length:-
To find the length of a string, use the built-in length property.
*/
console.log('String Length');
let text2 = "ABHISHEK";
console.log(text2.length);
/*
Escape Character:-
Because strings must be written within quotes, JavaScript will misunderstand this string.
let text = "We are the so-called "Vikings" from the north.";
The string will be chopped to "We are the so-called ".
The solution to avoid this problem, is to use the backslash escape character.
The backslash (\) escape character turns special characters into string characters:

Code	Result	Description
\'	      '     Single quote
\"	      "	    Double quote
\\	      \	    Backslash
The sequence \"  inserts a double quote in a string.

Six other escape sequences are valid in JavaScript:
Code	Result
\b	    Backspace
\f	    Form Feed
\n	    New Line
\r	    Carriage Return
\t	    Horizontal Tabulator
\v	    Vertical Tabulator
*/
console.log('Escape Character');
console.log('The sequence \"  inserts a double quote in a string:=');
let text1 =  "We are the so-called\"Vikings\" from the north.";
console.log(text1);

// The sequence \\  inserts a backslash in a string.
console.log('The sequence \\  inserts a backslash in a string:= ');
let text3 = "The character \\ is called backslah.";
console.log(text3);

/*
Breaking Long Code Lines
For best readability, programmers often like to avoid code lines longer than 80 characters.
If a JavaScript statement does not fit on one line, the best place to break it is after an operator:
Example
document.getElementById("demo").innerHTML =
"Hello Dolly!";

You can also break up a code line within a text string with a single backslash:
Example
document.getElementById("demo").innerHTML = "Hello \
Dolly!";

The \ method is not the preferred method. It might not have universal support.
Some browsers do not allow spaces behind the \ character.
A safer way to break up a string, is to use string addition:

Example
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
You cannot break up a code line with a backslash:

Example
document.getElementById("demo").innerHTML = \
"Hello Dolly!";
*/

/*
JavaScript Strings as Objects:-
Normally, JavaScript strings are primitive values, created from literals:
let x = "John";
But strings can also be defined as objects with the keyword new:
let y = new String("John");
*/
console.log('JavaScript Strings as Objects');
let x = 'Abhishek';
let y = new String("Akash");
console.log(typeof x);
console.log(typeof y);

/*
Do not create Strings objects.
The new keyword complicates the code and slows down execution speed.
String objects can produce unexpected results.
When using the == operator, x and y are equal.
*/
console.log('When using the == operator, a and b are equal:=');
let a = "Abhishek"; // a is a string
let b = new String("Abhishek"); // b is an object
let result = (a == b.valueOf()); // Compare a and the primitive value of b
console.log("Strings and objects cannot be safely compared.", result);

// When using the === operator, x and y are not equal.
console.log('When using the === operator, x and y are not equal:=');
let c = "Abhishek";
let d = new String("Kumar");
let results = (c === d.valueOf());
console.log("Strings and objects cannot be safely compared.", results);

// Note the difference between (x==y) and (x===y).
console.log("(x == y) true or false?");
let x1 = new String("Abhishek");
let y1 = new String("Abhishek");
console.log(x1 == y1);

console.log('(x === y) true or false?');
let x2 = new String('Aman');
let y2 = new String('Aman');
console.log(x2 === y2);
