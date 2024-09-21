/*
<!--
FAQ: Can we define a variable in function and make it global in access?
Ans: Yes. If you are using Javascript with BOM you can configure a global variable inside function using
     "window" object.
-->
<script>
    "use strict";
    var x1 = 10;
    let y1 = 20;
    const z1 =30;
    function f1()
    {
        window.a = 200;
        document.write("Function-1 <br>  x=" + x1 + "<br>y=" + y1 + "<br>z=" + z1 + "<br>a=" +  a + "<br>");
    }
    function f2()
    {
        document.write("Function-2 <br>  x=" + x1 + "<br>y=" + y1 + "<br>z=" + z1 + "<br>a=" +  a + "<br>");
    }
    f1();
    f2();
</script>

<!--
FAQ: What is the result of given declaration syntax?
var x= y = 20;
x = ?
y = ?
Ans:- x = 20
      y = 20
FAQ:  What is the result of

        var x, y=20;

        x = ?
        y = ?

Ans:    x=undefined
       y=20


FAQ: What is the result of

        const x, y=20;
   
Ans:  x must be initialized. Error


FAQ:  What is the result of
        const x=10; y=20;

Ans:  If it is in strict mode then y is not defined.
     It it is not in strict mode.

        x= 10;
        y = 20;

FAQ: What is destructuring in declarations?
Ans : It is the process of configuring a set of values into a set of variables.

       var [x, y, z] = [10,20,30];
       var [x, y, z] = [10, 20];
-->

<script>
    "use strict";
    const [x, y] = [20, 40];
    document.write("x=" + x + "<br>y=" + y);
</script>
*/