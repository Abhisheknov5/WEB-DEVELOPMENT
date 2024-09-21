/*
Anonymous Function:-

- A function without name is known as "Anonymous Function".
- Anonymous functions are used mostly in callbacks.
- Callback is a mechanism where function executes automatically according to the state and situation.
- Anonymous function is enclosed in "( )".
- It is invoked using "IIFE" pattern. [Immediately Invoked Function Expression]

Syntax:
        ( function() {

           }
        )();

Syntax:
        let  hello = function() {

        }
        hello();

*/
(function Hello() {
        console.log("Hello! JavaScript");
})();