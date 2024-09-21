/*
Recursive Function:-

A recursive function is a function that calls itself in order to solve a problem. 
It generally breaks the problem into smaller, more manageable sub-problems until it reaches a base case,
which provides a simple, non-recursive solution.
*/

// Function to calculate the Factorial of a Number

function Factorial(n) {
    // Base case: if n is 0, return 1.
    if(n === 0){
        return 1;
    } else {
        // Recursive case: return n multiplied by the factorial of (n - 1)
        return n * Factorial(n-1);
    }
}
console.log(`Factorial of 5 is ${Factorial(5)}`);
// Op is 120

/*
Summary
Base Case: Handles the simplest scenario where n is 0.
Recursive Case: Breaks the problem into smaller pieces until it reaches the base case.
Result: Computes the factorial by multiplying n with the factorial of the number just smaller than n.
*/