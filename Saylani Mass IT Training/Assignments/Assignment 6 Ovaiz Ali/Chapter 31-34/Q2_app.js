/* Write a program that alerts the current month in words.
For example December. */
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var currMonth = now.getMonth();
document.writeln("Current Month: " + month[currMonth]);