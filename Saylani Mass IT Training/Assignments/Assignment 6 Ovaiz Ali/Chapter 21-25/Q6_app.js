/* Repeat Q1 using string concat() method. */
var fName, lName, fullName;
fName = prompt("What is your First Name");
lName = prompt("What is your Last Name");
fullName = fName.concat(" ", lName);
document.writeln("Welcome " + fullName);