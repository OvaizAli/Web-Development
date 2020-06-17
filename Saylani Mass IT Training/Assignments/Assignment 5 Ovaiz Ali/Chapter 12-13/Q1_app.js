/* Write a program that takes a character(number or string) in a variable & checks whether the given input is a
number, uppercase letter or lower
case letter.(Hint: ASCII codes: -A = 65, Z = 90, a = 97, z = 122). */
var input;
input = prompt("Enter  a character (number or char)");
if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
    document.writeln("This is a lower case letter");
} else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
    document.writeln("This is a upper case letter");
} else {
    document.writeln("This is a number");
}