/* Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7 pm.Implement the
following
case using
if,
else &
    else if statements */
var time;
time = prompt("Enter time in 24 hours clock like 1900 = 7pm");
time = parseInt(time);
if (time >= 0000 && time < 1200) {
    document.writeln("Good Morning");
} else if (time >= 1200 && time < 1700) {
    document.writeln("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    document.writeln("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    document.writeln("Good Night");
}