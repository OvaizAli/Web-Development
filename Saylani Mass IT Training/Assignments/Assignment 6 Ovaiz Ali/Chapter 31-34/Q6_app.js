/* Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.  */

var rightNow = new Date();
var dateString = rightNow.toString();
var gDate = new Date(dateString);
document.writeln("Current Date: " + dateString+ "<br>");
document.writeln("Elapsed milliseconds since January 1, 1970: " + gDate.getTime() + "<br>");
document.writeln("Elapsed minutes since January 1, 1970: " + (gDate.getTime()/1000)/60 + "<br>");
