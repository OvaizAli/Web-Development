/* Write a program that takes user input.Convert and
show the input in title
case . */
var str = prompt("Enter the title");
document.writeln("User input: " + str + "<br>");
document.writeln("Title case: " + str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase());