/* Write a program to store student scores in an array &
    sort the array in ascending order using Array’ s sort
method. */
var scores = [320, 230, 480, 120],
    i;
document.writeln("Scores of Students: ");
for (i = 0; i < scores.length; i++) {
    document.writeln(scores[i] + ", ");
}
document.writeln("<br><br>");
scores.sort();
document.writeln("Ordered Scores of Students: ");
for (i = 0; i < scores.length; i++) {
    document.writeln(scores[i] + ", ");
}