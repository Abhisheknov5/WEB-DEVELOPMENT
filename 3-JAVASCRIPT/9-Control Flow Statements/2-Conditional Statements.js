
/*
 1. Selection Control Statements / Conditional Statements
            if, else, switch, case, default

- Very often when you write code, you want to perform different actions for different decisions.
- You can use conditional statements in your code to do this.
- In JavaScript we have the following conditional statements:

if :- Use if to specify a block of code to be executed, if a specified condition is true
else :- Use else to specify a block of code to be executed, if the same condition is false
else if :- Use else if to specify a new condition to test, if the first condition is false
switch :- Use switch to specify many alternative blocks of code to be executed
*/
console.log('JavaScript Statements');
/*
(1) The if Statement :-
- Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax
if (condition) {
  //  block of code to be executed if the condition is true
}
- Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.
*/
// Example-1
console.log('1 If Statements');
let number = 10;
if (number > 5) {
      console.log('The Number is Greater than 5');
}
// op is = The Number is Greater than 5

// Example-2
let temperature = 30;
if (temperature >= 30) {
      console.log("It's a hot day!");
}
// op is = It's a hot day!

/*
(2) The else Statement :-
- Use the else statement to specify a block of code to be executed if the condition is false.

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
*/
// Example-1
console.log('2 The else Statement');

let tomorrow = "sunny";
if(tomorrow == "rain") {
      console.log('Take a Raincoat');
} else {
      console.log('no need to take a Raincoat');
}
// Op is = no need to take a Raincoat

// Example-2
// Even Odd
let n = 14;
if (n % 2 == 0) {
      console.log('Even');
} else {
      console.log('Odd');
}
// Op is Even

/*
(3) The else if Statement :-
- Use the else if statement to specify a new condition if the first condition is false.

Syntax
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
*/
console.log('3 The else if Statement ');

// Define the Persons Age
const age = 25;
let message;

// Determine the message based on the Age
if(age < 13) {
      message = "You are a Child..";
} else if (age < 20) {
      message = "You are a teeneger..";
} else if (age < 65) {
      message = "You are an Adult..";
} else {
      message = "You are a Senior Citizen.."
}
// Output the message to the console
console.log(message);

// Op is = You are an Adult..

/*
(4) Switch Statement :-
- The switch statement is used to perform different actions based on different conditions.
- Use the switch statement to select one of many code blocks to be executed.
- A switch statement is like asking a question with multiple possible answers, and based on the answer, you do something specific.

Syntax :-
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

The break Keyword :-

- When JavaScript reaches a break keyword, it breaks out of the switch block.
- This will stop the execution inside the switch block.
- It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

The default Keyword:-

- The default keyword specifies the code to run if there is no case match:


*/
console.log('4 Switch Statement');

// Example - 1
console.log('Week');
let day = 0;

switch(day){
      case 0:
            console.log('Sunday');
            break;
      case 1:
            console.log('Monday');
            break;
      case 3:
            console.log('Tuesday');
            break;
      case 4:
            console.log('Wednesday');
            break;
      case 5:
            console.log('Thrusday');
            break;
      case 6:
            console.log('Friday');
            break;
      case 7:
            console.log('Saturday');
            break;
      default:
            console.log('Invalid Day');

}
// Op is Sunday

// Example 2
const fruit = "apple";

switch(fruit) {
      case "banana":
            console.log('Bananas are Yellow..');
            break;
      case "apple":
            console.log('Apples are Red..');
            break;
      case "Orange":
            console.log('Oranges are Orange..');
            break;
      default:
            console.log('Unknown Fruit..');

}
// Op is Apples are Red..



