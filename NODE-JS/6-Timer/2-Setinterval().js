/*
setInterval():-It is used to define a time interval.
Node.js Timer setInterval() Example
This example will set a time interval of 1000 millisecond and the specified comment will be displayed after every 1000 millisecond until you terminate.

setInterval(function(){
    console.log("SetInterval Hey! 1 miliseconds completed!...");
},1000);

*/

var i =0;  
console.log(i);  
setInterval(function(){  
i++;  
console.log(i);  
}, 1000);   

