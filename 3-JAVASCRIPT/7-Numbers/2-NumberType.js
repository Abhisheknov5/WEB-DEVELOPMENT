/*
1. Number Type:-
- JavaScript Number Type includes
   
        Signed Integer        - 10
        Unsigned Integer          10
        Floating Point            45.34    
        Double                350.53
        Decimal                 2349.33  [29 decimal places]
        Bigint                999383838n
        Exponent                2e3 [2000]   2 x 10(3)
        Hexa Decimal            0f
        Octa                    0o495
        Binary                0b1010  [10]

- Every input in DOM is a string.
- JavaScript requires "parsing" methods [convertion] to convert a numeric string into number.
- It refers to number enclosed in quotes.
- The parsing methods are
    a) parseInt()
    b) parseFloat()

FAQ:  parseInt("10") + parseInt("30");
Ans :  40

FAQ:  parseInt("10") + parseInt("40AB");
Ans:   50    

FAQ: parseInt("10") + parseInt("AB40");
Ans:  NaN
-->
<script>
   var age = prompt("Enter Age");
   document.write("You will be " + (parseInt(age) + 1) + " next year.");
</script>

<!--
Converting a number into String format:-
- JavaScript provides various methods to convert a number into string format.
        a) toString()
        b) toLocaleString()

- toString():- can convert into a string and handle all string manipulations.
- toLocaleString():- can apply various "regional" formats to a number, which includes currency style with currency symbol and various date and time formats.
Syntax:
    var price = 45000.44;
    document.write(price.toLocaleString('en-in', { style: 'currency', currency: 'INR'}));

FAQ: How to restrict only number type in input?
Ans:  By using the method "isNaN()", which returns boolean true if input value is not-a-number.

-->
<script>
    var price = 45000.44;
    document.write(price.toLocaleString('en-in', { style: 'currency', currency: 'INR'}));
</script>

<!--
FAQ: How to restrict only number type in input?
Ans:  By using the method "isNaN()", which returns boolean true if input value is not-a-number.
-->
<script>
    var age = prompt("Enter Age");
    if(isNaN(age)){
        document.write("Invalid : Age must be a number");
    } else {
        document.write("Age=" + age);
    }
</script>
*/