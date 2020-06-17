/* Write a program that takes a character(i.e.string of length 1) and returns true
if it is a vowel, false otherwise */
var input;
input = prompt("Enter a character");
if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
    document.writeln("True");
} else {
    document.writeln("False");
}