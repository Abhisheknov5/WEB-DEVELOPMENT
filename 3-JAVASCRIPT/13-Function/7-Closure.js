/*
Function Closure:-

- Closure is a technique configured for every function.
- A function allows the members accessbile to its inner function, which is the nature of a closure.
- You can implement various techniques to access the inner function results in outer function, which is restricted by default.

*/
function Outer(){
    // Declare a variable 'a' inside the outer function
    var a = 10;

    // Define the Inner Function which is nested inside outer
    function Inner(b){
        // The Inner function uses the variable 'a' from the Outer function
        // It returns the sum of 'a' and 'b'
        return a + b;
    }
    // Call the Inner function with the argument 50 and display the result
    console.log("Addition=" + Inner(50));
}
Outer(); 
// Op is Addition = 60