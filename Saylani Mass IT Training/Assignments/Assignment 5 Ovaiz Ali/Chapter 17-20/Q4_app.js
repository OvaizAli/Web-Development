/* Write a program to print multiplication table of any
number using
for loop.Table number & length should be
taken as an input from user. */
var num = prompt("Enter a number to show its multiplication table");
num = parseInt(num);
var length = prompt("Enter length multiplication table");
length = parseInt(length);
var i = 1;
document.writeln("Multiplication Table of " + num + "<br>");
document.writeln("Length " + length + "<br><br>");
for (i; i <= length; i++) {
    document.writeln(num + " x " + i + " = " + (num * i) + " <br> ");
}