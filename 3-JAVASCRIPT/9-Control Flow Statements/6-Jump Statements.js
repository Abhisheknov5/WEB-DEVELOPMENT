/*
Jump Statements :-
- Jump statements are used in programming to change the flow of control in a program.
  They allow you to jump to different parts of the code based on certain conditions or situations.
            break, return, continue
*/
/*
(1) Break Statement :-

- The break statement can also be used to jump out of a loop.
- break is used to exit a loop or switch statement early.
*/
console.log('Jump Statements ');

console.log('1 Break Statement');
for(let i = 0; i < 10; i++){
    if(i == 5){
        break; // Stop loop when i is 5
    }
    console.log(i); // Prints numbers 0 to 4
}
// Op is = 0 1 2 3 4 

// Another Exampple
let text = "";
for(let i = 0; i < 10; i++){
    if(i === 3) {
        break; // Exit the loop when i is 3
    }
    text += "The number is " + i + "\n"; // Append text for console output

}
console.log(text);
// op is 
// The number is 0
// The number is 1
// The number is 2

/*
(2) Continue Statements :-
The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
*/
console.log('2 Continue Statements');

let texts = "";
for(let i = 0; i < 10; i++){
    if(i === 3){
        continue; // Skip the iteration when i is 3
    }
    texts += "The number is " + i + "\n"; // Append text for console output
}
console.log(texts);

// Op is =
// The number is 0
// The number is 1
// The number is 2
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9


// Here’s an example where continue is used to skip over even numbers and only print odd numbers:
for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        continue; // Skip the rest of the loop for even numbers
    }
    console.log(i); // Print Odd Numbers
}
// Op is = 1 3 5 7 9

/*
(3) JavaScript Labels :-
To label JavaScript statements you precede the statements with a label name and a colon:

label:
statements
The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

Syntax:

break labelname;
continue labelname;

The continue statement (with or without a label reference) can only be used to skip one loop iteration.

The break statement, without a label reference, can only be used to jump out of a loop or a switch.

With a label reference, the break statement can be used to jump out of any code block:
*/
console.log('3 JavaScript Labels');

const cars = [ "BMW","Volvo","Saab","Ford"];
let textss = "";

// Use alabeled block with break to exit early
list: {
    textss += cars[0] + "\n";
    textss += cars[1] + "\n";
    break list; // Exit block
    textss += cars[2] + "\n";
    textss += cars[3] + "\n";
}
console.log(textss); // Output the result to the console

// Op is = BMW volvo