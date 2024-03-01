// JavaScript Template Literals
/*
Template Literals
Template Strings
String Templates
Back-Tics Syntax
*/
/*
Back-Tics Syntax
Template Literals use back-ticks (``) rather than the quotes ("") to define a string.
Template literals use back-ticks (``) to define a string.
*/
let text = `Hello World!`;
console.log("Template literals use back-ticks (``) to define a string.\n", text);

/*
Quotes Inside Strings
With template literals, you can use both single and double quotes inside a string.
*/
console.log('Quotes Inside Strings');
let text1 = `My name is "Abhishek"`;
console.log('With back-ticks, you can use both single and double quotes inside a string\n', text1);

/*
Multiline Strings
Template literals allows multiline strings.
*/
console.log('Multiline Strings');
let text3 =
`Honesty
is the best
policay!!`;
console.log("Template literals allows multiline strings\n", text3);

/*
Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.
The method is called string interpolation.
The syntax is:
${...}
*/

/*
Variable Substitutions
Template literals allow variables in strings.
*/
console.log('Variable Substitutions');
let firstName = "Abhishek";
let lastName = "Kumar";
let text4 = `Welcome ${firstName}, ${lastName}!`; 
console.log(text4);

/*
Expression Substitution
Template literals allow expressions in strings:
*/
console.log('Expression Substitution');
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
