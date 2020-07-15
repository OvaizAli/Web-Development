/* Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. */
var laterDate = new Date();
laterDate.setMonth(11);
laterDate.setDate(31);
document.writeln("Later Date: " + laterDate);