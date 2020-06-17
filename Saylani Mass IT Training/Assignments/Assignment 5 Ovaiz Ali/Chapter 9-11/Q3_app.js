/* Write a program to take input color of road traffic signal
from the user & show the message according to this table: */
var color;
color = prompt("Enter color of road traffic signal");
if (color === "Red" || color === "red") {
    document.writeln("Must Stop");
} else if (color === "Yellow" || color === "yellow") {
    document.writeln("Ready to move");
} else if (color === "Green" || color === "green") {
    document.writeln("Move now");
} else {
    document.writeln("Wrong Choice");
}