// STRING METHOD
console.log("String Method");

// 1 length 
console.log("1 length Method");

const Str = "Abhishek";
console.log(Str.length);

// 2 Converting to Upper case to Lower case
console.log("2 toUppercase Method");

const Str1 = "Abhishek";
console.log(Str1.toUpperCase());

console.log("2 toLowerCase Method");

const Str2 = "ABHISHEK";
console.log(Str2.toLowerCase());

// 3 includes
console.log("3 includes Method");

const Str3 = "Apple is Sweet Fruit";
console.log(Str3.includes("Apple"));
console.log(Str3.includes("Fruit"));
console.log(Str3.includes("isss"));

// 4 String startsWith
console.log( "4 startswith Method");

const Str4 = "Apple is Sweet Fruit";
console.log(Str4.startsWith("Apple"));
console.log(Str4.startsWith("Fruit"));
console.log(Str4.startsWith("isssss"));

// 5 endwith
console.log("5 endwith Method");

const Str5 = "Apple is Sweet Fruit";
console.log(Str5.endsWith("Fruit"));
console.log(Str5.endsWith("Apple"));

// 6 Search 
console.log("6 Search Method");

const Str6 = "Apple is Sweet Fruit";
console.log(Str6.search("Apple"));
console.log(Str6.search("is"));
console.log(Str6.search("Mango"));
console.log(Str6.search("t"));

// 7 match 
console.log("7 Match Method");

const Str7 = "Apple is Sweet Fruit";
console.log(Str7.match(/is/g));
console.log(Str7.match(/sweet/g));
console.log(Str7.match(/Sweet/g));

// 8 indexof
console.log("8 Index Method");

const Str8 ="Apple is Sweet Fruit";
console.log(Str8.indexOf("is"));

// 9 last Indexof
console.log("9 lastIndexof Method");

const Str9 = "Apple is Sweet is Fruit";
console.log(Str9.lastIndexOf("is"));

// 10 replace 
console.log("10 replace Method");

const Str10 = "Apple is Sweet Fruit";
console.log(Str10.replace("Sweet","Good"));

const Str11 = "Apple is Sweet is Fruit";
console.log(Str11.replace(/is/g,"are"));

// 11 trim
console.log("11 trim Method");

const Str12 = "       Hello World!        ";
console.log(Str12.trim());

// 12 charAt
console.log("12 charAt Method");

const Str13 = "Apple is Sweet Fruit";
console.log(Str13.charAt(3)); 
console.log(Str13.charAt(0)); 

// 13 charcodeAt
console.log("13 charcodeAt Method");

const Str14 = "Apple is Sweet Fruit";
console.log(Str14.charCodeAt(0))

// 14 fromCharcode
console.log("14 fromcharcode Method");

console.log(String.fromCharCode(65));

// 15 Concat
console.log("15 Concat Method");

const Str15 = " is Sweet Fruit";
const Str16 = "Apple";
console.log(Str16.concat(Str15));

// 16 Split
console.log("16 Split Method");

const Str17 = "Apple is Sweet Fruit";
console.log(Str17.split("i"));

// 17 repeat
console.log("17 Repeat Method");

const Str18 = "Apple is Sweet Fruit\n";
console.log(Str18.repeat(2));

// 18 Slice
console.log("18 Slice Method");

const Str19 = "Apple is Sweet Fruit";
console.log(Str19.slice(3));
console.log(Str19.slice(3,10));
console.log(Str19.slice(0));
console.log(Str19.slice(-1));
console.log(Str19.slice(-2));

// 19 Substr
console.log("19 Substr Method");

const Str20 = "Apple is Sweet Fruit";
console.log(Str20.substr(2,5));
console.log(Str20.substr(3,5));

// 20 Substring
console.log("20 Substring Method");

const Str21 = "Apple is Sweet Fruit";
console.log(Str21.substring(3,5));
console.log(Str21.substring(3,7));

// Javascript Number Method
console.log("JAVASCRIPT NUMBER METHOD"); 
// 1 toString
console.log("1 toString Method");

const Str22 = "Apple is Sweet Fruit";
console.log(Str22.toString())

const Str23 = 50;
console.log(Str23.toString());

const Str24 = "Apple is Sweet Fruit";
const Str25 = 50;
const Str26 = Str25.toString();
console.log(Str26+20);

// 2 value of
console.log("2 Value of Method");

const Str27 = "Apple is Sweet Fruit";
console.log(Str26.valueOf());

// 3  to exponential 
console.log("3 to Exponential Method");

const e = 9.656;
console.log(e.toExponential(2));

// 4 toFixed 
console.log("4 toFixed Method");

const e1 = 9.656;
console.log(e1.toFixed(0));
console.log(e1.toFixed(2));

// 5 to Precision
console.log("5 toPrecision Method");

const e2 = 9.656;
console.log(e2.toPrecision());
console.log(e2.toPrecision(2));

// 6 Number Method
console.log("6 Number Method");

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number(" 10"));
console.log(Number("John"));
console.log(Number("10 33"));

// 7 parseInt
console.log("7 ParseInt Method");
const e3 = "10.00";
console.log(parseInt(e3));

// 8 parseFloat 
console.log("8 parseFloat Method");

const e4 = "10.33";
console.log(parseFloat(e4));

// 9 isFinite 
console.log("9 isFinite Method");

//const e5 = "100";
const e5 = Infinity;
console.log(isFinite(e5));

// 10 isInteger
console.log("10 isInteger Method");

const e6 = 100;
//const e6 ="100";
console.log(Number.isInteger(e6));

// 11 toFixed 
console.log("11 toFixed Method");

const e7 = 5.56789; 
console.log(e7.toFixed(3));

// Javascript Math Method
// Number to Integer
console.log("Javascript Number Method");

// 1 Math round
console.log("1 Math round Method");

const e8 = Math.round(4.6);
console.log(e8);

console.log(Math.round(4.5));
console.log(Math.round(4.4));

// 2 Math ceil
console.log("2 Math ceil Method");

const e9 = Math.ceil(4.9);
console.log(e9);

console.log(Math.ceil(4.7));
console.log(Math.ceil(-4.2));
console.log(Math.ceil(7.7));

// 3 Math floor
console.log("3 Math floor Method");

const e10 = Math.floor(4.9);
console.log(e10);

console.log(Math.floor(4.7));
console.log(Math.floor(4.4));
console.log(Math.floor(4.2));
console.log(Math.floor(-4.2));

// 4 Math trunc
console.log("4 Math trunc Method");

const e11 = Math.trunc(4.9);
console.log(e11);

console.log(Math.trunc(4.7));
console.log(Math.trunc(4.4));
console.log(Math.trunc(4.2));
console.log(Math.trunc(-4.7));

// 5 Math sign
console.log("5 Math sign Method");

const e12 = Math.sign(-4);
console.log(e12);

console.log(Math.sign(0));
console.log(Math.sign(4));

// 6 Math pow
console.log("6 Math pow Method");

const e13 = Math.pow(8,2);
console.log(e13);

// 7 Math Sqrt 
console.log("7 Math sqrt Method ");

const e14 = Math.sqrt(4);
console.log(e14);

// 8 Math abs
console.log("8 MAth abs Method");

const e15 = Math.abs(-4.7);
console.log(e15);

// 9 Math sin
console.log("9 Math Sin Method");

const e16 = Math.sin(90 * Math.PI/180);
console.log(e16);

// 10 Math cos
console.log("10 Math cos Method");

const e17 = Math.cos(0 * Math.PI/180);
console.log(e17);

// 11 Math min
console.log("11 Math min Method");

const e18 = Math.min(100,12,33,-56,-89);
console.log(e18);

// 12 Math max
console.log("12 Math max Method");

const e19 = Math.max(10,44,500,45,-55);
console.log(e19);

// 13 Math random
console.log("13 Math random Method");

const e20 = Math.random();
console.log(e20);

// 14 Math log Method
console.log("14 Math log Method");

const e21 = Math.log(1);
console.log(e21);

// 15 Math log2 Method
console.log("15 Math log2 Method");

const e22 = Math.log2(8);
console.log(e22);

// 16 Math log10 Method
console.log("16 Math log10 Method");

const e23 = Math.log10(1000);
console.log(e23);

// JAVASCRIPT DATE METHOD
console.log("JAVASCRIPT DATE METHOD");

// 1 new Date Method
console.log("1 new Date");
const now = new Date();
console.log(now); 

// 2 toDateString Method
console.log("2 toDateString Method");

const date = new Date();
console.log(date.toDateString());

// 3 getDate Method
console.log("3 getDate Method");

const date1 = new Date();
console.log(date1.getDate());

// 3 getFull year Method
console.log("4 getFullYear Method");
 
const date2 = new Date();
console.log(date2.getFullYear());

// 4 getFullMonth Method
console.log("5 getMonth Method");

const date3 = new Date();
console.log(date3.getMonth());

// 5 getFullDay method
console.log("6 get Day Method");

const date4 = new Date();
console.log(date4.getDay());

// JAVASCRIPT TIME METHOD
console.log("JAVASCRIPT TIME METHOD");
console.log("get Method");

// 1 getHours Method
console.log("1 getHours Method");

const time = new Date();
console.log(time.getHours());

// 2 getminutes Method
console.log("2 getmintues Method");

const time1 = new Date();
console.log(time1.getMinutes());

// 3 getseconds Method
console.log("3 getSeconds Method");

const time2 = new Date();
console.log(time2.getSeconds());

// 4 getmilisecond Method
console.log("4 getmilisecond Method");

const time3 = new Date();
console.log(time3.getMilliseconds());

// 5 getmilisecond Method
console.log("4 getmilisecond Method");

const time4 = new Date();
console.log(time4.getMilliseconds());

// JAVASCRIPT TIME METHOD
console.log("JAVASCRIPT TIME METHOD");
console.log("set Method");

// 1 setdata Method
console.log("1 setdata Method");

const date6 = new Date();
date6.setDate(20);
console.log(date6);

// 2 setFullYear Method
console.log("2 setFullYear Method");

const date7 = new Date();
date7.setFullYear(2023);
console.log(date7);  

// 3 setMonth Method
console.log("3 setMonth Method");

const date8 = new Date();
date8.setMonth(4);
console.log(date8);  

// 4 setHours Method
console.log("4 setHours Method");

const date9 = new Date();
date9.setHours(14);
console.log(date9);  
