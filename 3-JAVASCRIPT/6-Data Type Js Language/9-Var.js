/*   VAR
Var:- It is used to configure a function scope Variable.
-> You can declare in any block of a function and access from any another block in
function.
-> Var allows declaring, assignment and initialization.

->It allows Shadowing 

*/
function demo() {
    var x;  // Declaring a Variable
    x = 10; // Assigning a value into a variable
    if(x==10) // Compare right value equal to left value. 
              // If the right value is equal to left value then it will return true.
    {
        var y = 20; // Initialization
    }
    console.log("x=" + x + "\n" + "y=" + y); // Output to the console
}
demo(); // call the function 
// op is x=10 y=20

/*
<!--Actually It have 2 block first is Function Block another is if block
 There are two concept Inner block and Outer block and var y = "20"; is Inner block.
Now var y= "20"; is initialized with value It is present in if block and I am trying to access 
y Outside the Block.

*/