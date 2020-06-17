/* Write a program that checks whether the given input is an even number or an odd number. */
var num;
num = prompt("Enter a number");
num = parseInt(num);
if (num % 2 == 0) {
    document.writeln("Number is EVEN");
} else {
    document.writeln("Number is ODD");
}