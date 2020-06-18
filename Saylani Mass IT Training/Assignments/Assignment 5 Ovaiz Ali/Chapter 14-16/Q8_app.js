/* Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500
for each student, display
the scores & percentages of students like */
var sNames = ["Michael", "John", "Tony"];
var sMarks = [320, 230, 480];
document.writeln("Score of " + sNames[0] + " is " + sMarks[0] + ". Percentage: " + ((sMarks[0] / 500) * 100) + "%<br>");
document.writeln("Score of " + sNames[1] + " is " + sMarks[1] + ". Percentage: " + ((sMarks[1] / 500) * 100) + "%<br>");
document.writeln("Score of " + sNames[2] + " is " + sMarks[2] + ". Percentage: " + ((sMarks[2] / 500) * 100) + "%<br>");