/* Write a JavaScript program that accept two integers and
display the larger.Also show
if the two integers are equal. */
var fInt, sInt;
fInt = prompt("Enter first integer");
fInt = parseInt(fInt);
sInt = prompt("Enter second integer");
sInt = parseInt(sInt);
if (fInt > sInt) {
    document.writeln("First integer is larger");
} else if (fInt < sInt) {
    document.writeln("Second integer is larger");
} else {
    document.writeln("Both integers are equal");
}