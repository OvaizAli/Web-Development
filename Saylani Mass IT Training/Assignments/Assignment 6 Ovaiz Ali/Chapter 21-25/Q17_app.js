/* Write a program to display the last character of a user
input. */
var input = prompt("Enter a string");
document.writeln(input + "<br>");
document.writeln("Last character of input: " + input.charAt(input.length - 1));