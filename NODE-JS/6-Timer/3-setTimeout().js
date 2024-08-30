/*
setTimeout():- It is used to execute a one-time callback after delay milliseconds.
Example:-
setTimeout(function() {   
    console.log("setTimeout: Hey! 1000 millisecond completed!..");  
    }, 1000); 
*/

var recursive = function(){
    console.log("Hey! 1000 millisecond completed!..");
    setTimeout(recursive,1000);
}
recursive();
