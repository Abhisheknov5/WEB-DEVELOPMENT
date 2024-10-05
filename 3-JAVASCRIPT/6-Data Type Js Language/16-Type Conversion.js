/*
JavaScript Type Conversion :-
- JavaScript variables can be converted to a new variable and another data type:
- By the use of a JavaScript function
- Automatically by JavaScript itself

Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans

*/
/*
(1) Converting Strings to Numbers :-
- The global method Number() converts a variable (or a value) into a number.
- A numeric string (like "3.14") converts to a number (like 3.14).
- An empty string (like "") converts to 0.
- A non numeric string (like "John") converts to NaN (Not a Number).
*/
console.log('(1) Converting Strings to Numbers');

// Using the Number() method to convert various inputs to numbers
console.log(Number("3.14"));       // Converts string "3.14" to the number 3.14
console.log(Number(Math.PI));     // Converts Math.PI (which is already a number) to itself (3.14159...)
console.log(Number(" "));        // Converts empty spaces to 0
console.log(Number(""));        // Converts an empty string to 0
console.log(Number("99 88"));  // Converts invalid string "99 88" to NaN (Not a Number)
console.log(Number("john"));  // Converts invalid string "John" to NaN (Not a Number)

/*
(2) Number Methods :-
- In the chapter Number Methods, you will find more methods that can be used to convert strings to numbers:

Method	         Description
Number()	     Returns a number, converted from its argument
parseFloat()	 Parses a string and returns a floating point number
parseInt()	     Parses a string and returns an integer
*/
/*
(3) The Unary + Operator :-
- The unary + operator can be used to convert a variable to a number:
*/
console.log('(3) The Unary + Operator');

// Define a Variable y as a String
let y = "5";

// Use the unary plus operator to convert y to a number
let x = +y;

// Display the types of y and x in thee console
console.log(typeof y); // Op is = string
console.log(typeof x); // Op is = Number

/*
- If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):
Example
*/
console.log('If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):');

// Defining a Variable y1 as a String
let y1 = "Abhishek";

// Use the unary plus operator to attempt to convert y to a number
let x1 = +y1;

// Display the types of y and x in the console
console.log(typeof y1); // Op is = String
console.log(typeof x1); // Op is = number

/*
(4) Converting Numbers to Strings :-
- The global method String() can convert numbers to strings.
- It can be used on any type of numbers, literals, variables, or expressions:
Example
*/
console.log('(4) Converting Numbers to Strings');

// The String() method can convert a number to a string.
let x2 = 123;
console.log(String(x2));         // Converts the number 123 to a string
console.log(String(123));       // Converts the number 123 to a string
console.log(String(100 + 23));  // Converts the result of 100 + 23 to a string

/*
(5) The Number method toString() does the same.
Example
*/
console.log('(5) The Number method toString() does the same.');
let x3 = 123;
console.log(x3.toString());         // 123
console.log((123).toString());      // 123
console.log((100 + 23).toString()); // 123

/*
(6) More Methods :-
- In the chapter Number Methods, you will find more methods that can be used to convert numbers to strings:

Method	               Description
toExponential()	    Returns a string, with a number rounded and written using exponential notation.
toFixed()	        Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	    Returns a string, with a number written with a specified length
*/

/*
(7) Converting Dates to Numbers :-
- The global method Number() can be used to convert dates to numbers.

d = new Date();
Number(d)          // returns 1404568027739

The date method getTime() does the same.

d = new Date();
d.getTime()        // returns 1404568027739
*/

/*
(8) Converting Dates to Strings :-
- The global method String() can convert dates to strings.

String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

- The Date method toString() does the same.

Example
Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
In the chapter Date Methods, you will find more methods that can be used to convert dates to strings:

Method	                Description
getDate()	        Get the day as a number (1-31)
getDay()	        Get the weekday a number (0-6)
getFullYear()       Get the four digit year (yyyy)
getHours()	        Get the hour (0-23)
getMilliseconds()	Get the milliseconds (0-999)
getMinutes()	    Get the minutes (0-59)
getMonth()	        Get the month (0-11)
getSeconds()      	Get the seconds (0-59)
getTime()	        Get the time (milliseconds since January 1, 1970)

*/

/*
(9) Converting Booleans to Numbers :-
- The global method Number() can also convert booleans to numbers.

Number(false)     // returns 0
Number(true)      // returns 1

The Boolean method toString() does the same.

false.toString()   // returns "false"
true.toString()    // returns "true"
*/

/*
(10) Automatic Type Conversion :-
- When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

- The result is not always what you expect:
*/
console.log('(10) Automatic Type Conversion ');
console.log(5 + null);   // Outputs: 5 (null is treated as 0)
console.log('5' + null); // Outputs: "5null" (string concatenation)
console.log('5' + 2);    // Outputs: "52" (string concatenation)
console.log('5' - 2);    // Outputs: 3 (string is converted to number)
console.log('5' * '2');  // Outputs: 10 (strings are converted to numbers)
console.log('5' / '2');  // Outputs: 2.5 (strings are converted to numbers)

/*
(11) Automatic String Conversion :-
- JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:

document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
Numbers and booleans are also converted, but this is not very visible:

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"

*/