const car2 = ["BMW","Volvo","Saab","Ford"];

//Initialize variables
//let a = 2;
let len = car2.length;
let text2 = "";

// Loop through the cars array starting from index 2.
for(a=2, len = car2.length; a < len; a++){
    text2 += car2[a] + "\n";
}
console.log(text2);