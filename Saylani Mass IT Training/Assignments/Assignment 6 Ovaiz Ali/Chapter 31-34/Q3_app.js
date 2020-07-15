/* Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.  */

var day = ["","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
var now = new Date();
var currDay = now.getDay();
alert("Today is : " + day[currDay]);