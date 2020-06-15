/* Write a script to display multiplication table of any number in your browser. */
var num = 4;
var i = 1;
document.writeln("Table of " + num + "<br>");
for (i; i <= 10; i++) {
    document.writeln(num + " x " + i + " = " + (num * i) + " <br> ");
}