/* Write a program that takes input a number from user &
    state whether the number is positive, negative or zero. */
var num;
num = prompt("Enter a number");
num = parseInt(num);
if (num > 0) {
    document.writeln("Number is positive");
} else if (num < 0) {
    document.writeln("Number is negative");
} else {
    document.writeln("Number is zero");
}