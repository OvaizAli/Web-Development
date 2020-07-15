/* Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.  */
var currDate = new Date();
document.writeln("Current Date: " + currDate + "<br>");
currDate.setHours(currDate.getHours()-1);
document.writeln("1 hour ago, it was " + currDate);