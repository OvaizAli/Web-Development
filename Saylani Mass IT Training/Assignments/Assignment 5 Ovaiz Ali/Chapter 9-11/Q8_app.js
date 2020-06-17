/* Write a program to check whether the given number is
divisible by 3. Show the message to the user
if the number
is divisible by 3. */
var num;
num = prompt("Enter a number");
num = parseInt(num);
if (num % 3 == 0) {
    document.writeln("Number is divisible by 3");
} else {
    document.writeln("Number is not divisible by 3");
}