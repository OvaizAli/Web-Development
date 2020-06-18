/* Write a program to replace all occurrences of“ and” in the
string with“ & ”and display the result in your browser.
var message = “Ali and Sami are best friends.They play cricket and
football together.”; */
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.writeln("Before: " + message + "<br>");
document.writeln("After: " + message.replace(/and/g, "&"));