/* Write a program to take input a number from user &
display it’ s multiplication table on your browser.If user
does not enter a new number, multiplication table of 5
should be displayed by
default. */
var num;
num = prompt("Input any number to get multiplication table for it");
if (num === "") {
    num = 5;
    var i = 1;
    document.writeln("Table of " + num + "<br>");
    for (i; i <= 10; i++) {
        document.writeln(num + " x " + i + " = " + (num * i) + " <br> ");
    }
} else {
    var i = 1;
    document.writeln("Table of " + num + "<br>");
    for (i; i <= 10; i++) {
        document.writeln(num + " x " + i + " = " + (num * i) + " <br> ");
    }
}