/* Write a program to ask the user about his age. Calculate and show his birth year in your browser.  */
var age = prompt("Enter your age ");
document.writeln("Your age is "+ age + "<br>");
document.writeln("Your birth year is " + (new Date().getFullYear()-age));