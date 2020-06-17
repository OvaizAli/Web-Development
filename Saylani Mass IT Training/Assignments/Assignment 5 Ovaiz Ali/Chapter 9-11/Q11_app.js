/* Write a program to create a calculator
for +, -, * , / & %
using
if statements.Take the following input:
    a.First number
b.Second number
c.Operation(+, -, * , /, %)
        Compute & show the calculated result to user. */
var fNum, sNum, choice;
fNum = prompt("Enter first number");
fNum = parseInt(fNum);
sNum = prompt("Enter second number");
sNum = parseInt(sNum);
choice = prompt("Choose any operation from  (+, -, *, /, %)");
if (choice === "+") {
    document.writeln("Sum of these numbers is " + (fNum + sNum));
} else if (choice === "-") {
    if (fNum < sNum) {
        document.writeln("Difference of these numbers is " + (sNum - fNum));
    } else {
        document.writeln("Differrnce of these numbers is " + (fNum - sNum));
    }
} else if (choice == "*") {
    document.writeln("Product of these numbers is " + (fNum * sNum));
} else if (choice == "/") {
    document.writeln("Division of these numbers is " + (fNum / sNum));
} else if (choice == "%") {
    document.writeln("Mod of these numbers is " + (fNum % sNum));
}