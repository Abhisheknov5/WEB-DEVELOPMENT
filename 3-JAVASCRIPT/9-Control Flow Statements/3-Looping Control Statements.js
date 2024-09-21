/*
 Looping Control :-

- Looping is the process of executing a set of statement repeatedly based on given condition.
- Loops are used to create recursion jobs.
- Loops are created by using
    a) for
    b) while
    c) do while
*/
console.log('Looping Control');
/*
(1)The "for" loop:
-------------------
- It is a looping control statement used when developer is sure about the number of iterations and iteration counter is fixed and will not change dynamically.
- It comprises of
    a) Initialization
    b) Condition
    c) Counter

- Initialization defines where to start.
- Condition specifies when to stop.
- Counter defines how to move. [previous or next or step]

Syntax:
        for(initialization; condition; counter)
        {
        }


Note: A "for" loop must configure memory for initialization, condition and counter. However the values can be defined outside the memory scope.

    for( ;   ;)        => valid loop declaration
    {
    }

    for(  i<=10; i++)    => invalid loop declaration
    {
    }
*/

console.log('1 for Loop');

// Loop to print numbers from 1 to 5
for(var i = 0; i <= 5; i++){
    console.log(i);
}
// Op is = 1 2 3 4 5

/*
Expression 1
- Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).
- This is not always the case. JavaScript doesn't care. Expression 1 is optional.
- You can initiate many values in expression 1 (separated by comma):
*/
// Example = 1
console.log('Example=1');

// Define an Array of Car Brands
const car1 = ["Toyata","Ford","BMW","Honda","Chevrolet"];

// Initialize variables
let text1 = "";

// Loop through the cars Array
for(let i = 0, len = car1.length; i < len; i++){
    text1 += car1[i] + "\n";
}
console.log(text1);
// op is:-
// Toyata
// Ford
// BMW
// Honda
// Chevrolet


/*
And you can omit expression 1 (like when your values are set before the loop starts).
*/
// Example = 2
console.log('Example = 2');

// Define an Array of car brands
const car2 = ["BMW","Volvo","Saab","Ford"];

//Initialize variables
let a = 2;
let len = car2.length;
let text2 = "";

// Loop through the cars array starting from index 2.
for(; a < len; a++){
    text2 += car2[a] + "\n";
}
console.log(text2);
// op is:-
// Saab
// Ford

/*
(2) while loop :-

- It is similar to do-while but statements are executed only when the condition evalutes to true.

Syntax:
    initialization;
    while(condition)
    {
      statements;
      counter;
    }
*/
console.log('1 while loop');

let j = 1;          // Initialize the counter variable
while (j <= 5) {    // Condition: while j is less than or equal to 5
    console.log(j); // Print the value of j
    j++;            // Increment i by 1
}
// op is 1 2 3 4 5

/*
(3) do while loop :-
- It is a looping control statement used by developers, when they are not sure about the number of iterations and iteration counter may change dynamically.

- It ensures that statements will execute at least once even when the condition is not satisfied.

Syntax:
        intialization;
        do
        {
          statements;
          counter;
        } while(condition)

*/
console.log("3-do while loop");

var k = 1;          // Initialize the variable i to 1
do {
    console.log(k); // Print the current value of i to the console
    k++;            // Increment i by 1
}
while ( k <= 5);    // Continue looping as long as i is less than or equal to 5
