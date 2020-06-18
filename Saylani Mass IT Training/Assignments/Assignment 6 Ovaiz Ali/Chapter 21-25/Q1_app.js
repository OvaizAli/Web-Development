/* Write a program that takes two user inputs
for first and
last name using prompt and merge them in a new variable
titled fullName.Greet the user using his full name. */
var fName, lName, fullName;
fName = prompt("What is your First Name");
lName = prompt("What is your Last Name");
fullName = fName + " " + lName;
document.writeln("Welcome " + fullName);