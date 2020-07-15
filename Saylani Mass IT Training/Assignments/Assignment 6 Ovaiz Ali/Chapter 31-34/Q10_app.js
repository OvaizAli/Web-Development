/* Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.  */
var refDate = new Date(2020,7,11);
var gDate = new Date(2015,1,1);
var refDateString = refDate.toString();
var diff = new Date(refDate.getTime() - gDate.getTime())
document.writeln("On reference date " + refDateString+ ", "+ diff / 1000 + " Seconds had been passed since the beginning of 2015");