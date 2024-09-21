/*
JavaScript Date Objects
Date Object Overview: JavaScript Date objects allow you to work with dates and times.
They can be created using different methods and can represent various date and time formats.

Creating Date Objects
Current Date and Time:
*/
const d = new Date();
console.log(d); // Outputs current date and time, e.g., Tue Sep 10 2024 01:58:17 GMT+0530 (India Standard Time)

// From Date String:

const d1 = new Date("2022-03-25");
console.log(d1); // Outputs: Fri Mar 25 2022 00:00:00 GMT+0530 (India Standard Time)

const d2 = new Date("October 13, 2014 11:13:00");
console.log(d2); // Outputs: Mon Oct 13 2014 11:13:00 GMT+0530 (India Standard Time)

// From Year, Month, Day, Hours, Minutes, Seconds, Milliseconds:

const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d3); // Outputs: Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)

//Note: JavaScript months are 0-indexed (January = 0, December = 11).




const d4 = new Date(2018, 15, 24, 10, 33, 30);
console.log(d4); // Outputs: Tue Apr 24 2019 10:33:30 GMT+0530 (India Standard Time)



const d5 = new Date(2018, 5, 35, 10, 33, 30);
console.log(d5); // Outputs: Sun Jul 05 2018 10:33:30 GMT+0530 (India Standard Time)

// Using Fewer Numbers:

// 6 Numbers (Year, Month, Day, Hour, Minute, Second):


const d6 = new Date(2018, 11, 24, 10, 33, 30);
console.log(d6); // Outputs: Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)
// 5 Numbers (Year, Month, Day, Hour, Minute):


const d7 = new Date(2018, 11, 24, 10, 33);
console.log(d7); // Outputs: Mon Dec 24 2018 10:33:00 GMT+0530 (India Standard Time)
// 4 Numbers (Year, Month, Day, Hour):


const d8 = new Date(2018, 11, 24, 10);
console.log(d8); // Outputs: Mon Dec 24 2018 10:00:00 GMT+0530 (India Standard Time)
// 3 Numbers (Year, Month, Day):


const d9 = new Date(2018, 11, 24);
console.log(d9); // Outputs: Mon Dec 24 2018 00:00:00 GMT+0530 (India Standard Time)
// 2 Numbers (Year, Month):


const d10 = new Date(2018, 11);
console.log(d10); // Outputs: Sat Dec 01 2018 00:00:00 GMT+0530 (India Standard Time)
// 1 Number (Milliseconds Since 1970):


const d11 = new Date(0); // January 1, 1970
console.log(d11); // Outputs: Thu Jan 01 1970 00:00:00 GMT+0530 (India Standard Time)

// Previous Century:
// One and Two Digit Years (Interpreted as 19xx):


const d12 = new Date(99, 11, 24);
console.log(d12); // Outputs: Fri Dec 24 1999 00:00:00 GMT+0530 (India Standard Time)

const d13 = new Date(9, 11, 24);
console.log(d13); // Outputs: Fri Dec 24 1909 00:00:00 GMT+0530 (India Standard Time)

// JavaScript Stores Dates as Milliseconds
// Milliseconds Since January 01, 1970:


const d14 = new Date(100000000000); // 100 billion milliseconds from 1970
console.log(d14); // Outputs: Fri Mar 25 1972 00:00:00 GMT+0530 (India Standard Time)

const d15 = new Date(-100000000000); // 100 billion milliseconds before 1970
console.log(d15); // Outputs: Mon Jul 21 1868 00:00:00 GMT+0530 (India Standard Time)

const d16 = new Date(24 * 60 * 60 * 1000); // 1 day (24 hours) from January 1, 1970
console.log(d16); // Outputs: Fri Jan 02 1970 00:00:00 GMT+0530 (India Standard Time)

// Date Methods
// Display Dates:

// toString(): Full text string with time zone.


const d17 = new Date();
console.log(d17.toString()); // Outputs full date and time with time zone
//toDateString(): More readable date format.


console.log(d17.toDateString()); // Outputs: Tue Sep 10 2024


// toUTCString(): Date as a UTC string.
console.log(d17.toUTCString()); // Outputs: Tue, 10 Sep 2024 01:58:17 GMT


// toISOString(): Date in ISO format.
console.log(d17.toISOString()); // Outputs: 2024-09-10T01:58:17.000Z