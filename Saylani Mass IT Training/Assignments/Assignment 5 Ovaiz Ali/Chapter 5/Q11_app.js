/* The Age Calculator: Forgot how old someone is ?
    Calculate it!
    a.Store the current year in a variable.
b.Store their birth year in a variable.
c.Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”. */
var cYear = 2020;
var bYear = 1999;
document.writeln("Age Calculator<br><br>".bold());
document.writeln("Current Year: " + cYear + "<br>");
document.writeln("Birth Year: " + bYear + "<br>");
document.writeln("Your Age is: " + (cYear - bYear - 1) + " or " + (cYear - bYear) + "<br>");