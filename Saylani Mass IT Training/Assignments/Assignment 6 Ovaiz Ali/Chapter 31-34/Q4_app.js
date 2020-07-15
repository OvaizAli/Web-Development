/* Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.  */
var day = ["","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
var now = new Date();
var currDay = now.getDay();
if ("Sun"==day[currDay] || "Sat"==day[currDay]){
    document.writeln("It's Fun day");
}else{
    document.writeln("It's not a Fun day");
}