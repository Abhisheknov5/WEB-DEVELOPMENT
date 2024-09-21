/* LET
let :- It is used to configure a block scope Variable.
-> Block Scope allow to access within the given block and its inner blocks.
-> It allows declaring, initialization, and Assignment.
-> It will not allow Shadowing and Hoisting.


*/

function demo() {
    let x; // Declaring a Variable
    x = 10; // Assigning a value to the Variable

    if(x == 10) {
        let y = 20; // Initialization
        console.log("X=" + x + "\nY=" + y); // Output to the console
    }
}
demo() // call the Function
// op is x=10 and y=20