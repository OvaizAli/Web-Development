/* Write a program that converts the variable num to
string.
var num = 35.36;
Remove the dot to display“ 3536” display in your browser. */
var num = 35.36;
document.writeln("Number: " + num + "<br>");
num = num.toString().replace(".", "")
document.writeln("Result: " + num);