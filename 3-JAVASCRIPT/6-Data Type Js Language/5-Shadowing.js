/*    Shadowing
Shadowing:- Shadowing is the process of re-declaring or re-initializing same name identifier 
with in the given scope.
{
    var y = 20;
    var y = 30;
}
*/
function demo(){
    var x; // declaring
    x = 10; // Assigning

    if(x == 10) {
        var y = 20;  // Initialization
        y = 30;      // assignment
        var y = 40;  // Shadowing
        console.log("X=" + x + "\n" + "Y=" + y);
    }
}
demo();
