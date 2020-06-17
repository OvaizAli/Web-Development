/* Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks
for each subject is 100, store it in another
variable.
c) Take obtained marks
for first subject from user and
stored it in different variable.
d) Take obtained marks
for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table) */
var sub1, sub2, sub3, osub1, osub2, osub3;
// sub1 = prompt("Enter the name of the first subject.");
// sub2 = prompt("Enter the name of the second subject.");
// sub3 = prompt("Enter the name of the third subject.");
// osub1 = prompt("Enter the marks of " + sub1);
// osub2 = prompt("Enter the marks of " + sub2);
// osub3 = prompt("Enter the marks of " + sub3);
document.writeln("Subject".bold() + " &nbsp&nbsp&nbsp&nbsp" + "Total Marks".bold() + " &nbsp" + "Obtained Marks".bold() + " &nbsp" + "Percentage".bold() + "<br>");
document.writeln(sub1 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "100" + "  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + osub1 + "  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + osub1 + " %");
document.writeln(sub2 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "100" + "  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + osub2 + "  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + osub2 + " %");
document.writeln(sub3 + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "100" + "  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + osub3 + "  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + osub1 + " %");