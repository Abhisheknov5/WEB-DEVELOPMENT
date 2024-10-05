/* 
JavaScript Values:-
- The JavaScript syntax defines two types of values:
(1) Fixed values
(2) Variable values
- Fixed values are called Literals.
- Variable values are called Variables */
// Javascript Literals

// (1) Numbers:- Numbers are written with or without decimals.
console.log('(1) Numbers');
console.log(10.50); // 10.5
console.log(1001);  // 1001

// 2 Strings are text, written within double or single quotes.
console.log('(2) Strings');
console.log("Abhishek"); // Abhishek
console.log('Abhishek'); // Abhishek
/*
(3) JavaScript Variables:-
- In a programming language, variables are used to store data values.
- JavaScript uses the keywords var, let and const to declare variables.
- An equal sign is used to assign values to variables.
- In this example, x is defined as a variable. Then, x is assigned (given) the value 6.
*/
console.log('(3) JavaScript Variables');
let x;
x = 6;
console.log('X is assigned the value of\n', x);
// Output is = 6

/*
(4) JavaScript Operators :-
- JavaScript uses arithmetic operators ( + - * / ) to compute values.
*/
console.log('(4) JavaScript Operators ');
console.log((5 + 6) * 10);
// Output is = 110

/* 
(5) Assignment Operator :-
- JavaScript uses an assignment operator ( = ) to assign values to variables.
*/
console.log('(5) Assignment Operator ');
let x1, y1;
x1 = 10;
y1 = 20;
console.log('Assignment Operator=\n',x1+y1);
// Output is = 30

/*
(6) JavaScript Expressions :-
- An expression is a combination of values, variables, and operators, which computes to a value.
- The computation is called an evaluation.
- For example, 5 * 10 evaluates to 50. */
console.log('(6) JavaScript Expressions ');
console.log(5 * 10); // 50

let d;
d = 5;
console.log("Expressions can also contain variable values:",d * 20);
// Output is = 100

/*The values can be of various types, such as numbers and strings.
For example, "John" + " " + "Doe", evaluates to "John Doe".
*/
console.log("John" + " " + "Doe"); // john Doe
/*
(7) JavaScript Keywords :-
- JavaScript keywords are used to identify actions to be performed.
- The let keyword tells the browser to create variables.
*/
console.log('(7) JavaScript Keywords  ');
let x2, y2;
x2 = 10 + 20;
y2 = 30 + 40;
console.log('The let Keyword Creates Variables:', x2 + y2);
// Output is = 100

/*
(8) JavaScript Comments :-
- Not all JavaScript statements are "executed".
- Code after double slashes // or between /* and  is treated as a comment.
- Comments are ignored, and will not be executed. */
console.log('(8) JavaScript Comments');
let s;
s = 5;
// s = 6; I will not be executed.
console.log(s); // 5

/* JavaScript Identifiers / Names:-
- Identifiers are JavaScript names.
- Identifiers are used to name variables and keywords, and functions.
- The rules for legal names are the same in most programming languages.
- A JavaScript name must begin with:
A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_)
Subsequent characters may be letters, digits, underscores, or dollar signs.
*/

/* 
(9) JavaScript is Case Sensitive :-
- All JavaScript identifiers are case sensitive. 
- The variables lastName and lastname, are two different variables. */
console.log('(9) JavaScript is Case Sensitive');
let lastname, lastName;
lastName = "Kumar";
lastname = "Sharma";
console.log(lastName); // kumar

/*(10) JavaScript and Camel Case:-
- Historically, programmers have used different ways of joining multiple words into one variable name:

Hyphens:-
first-name, last-name, master-card, inter-city.
Hyphens are not allowed in JavaScript. They are reserved for subtractions.

Underscore:-
first_name, last_name, master_card, inter_city.
Upper Camel Case (Pascal Case):
FirstName, LastName, MasterCard, InterCity.

Lower Camel Case:-
- JavaScript programmers tend to use camel case that starts with a lowercase letter:
firstName, lastName, masterCard, interCity.
*/