/* Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?  */
var currDate = new Date();
alert("Current Date: " + currDate);
currDate.setFullYear(currDate.getFullYear()-100);
alert("100 years back, it was " + currDate);