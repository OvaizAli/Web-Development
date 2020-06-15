/* What will be the output in variables a, b & result after
execution of the following script:
    var a = 2,
        b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
    --a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.writeln("Due to (--a) the value of (a) is 1 [Pre-increment]<br>");
document.writeln("Due to (--b) the value of (b) is 0 [Pre-increment]<br>");
document.writeln("Due to (++b) the value of (b) is 1 [Pre-increment]<br>");
document.writeln("Due to (b--) the value of (b) is 1 [Post-increment]<br>");
document.writeln("Thus, result of expression (--a - --b + ++b + b--) is " + result + "<br> ");