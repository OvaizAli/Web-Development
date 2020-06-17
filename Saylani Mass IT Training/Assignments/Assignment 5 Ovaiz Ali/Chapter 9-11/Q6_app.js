/* Write a program to take input the marks obtained in three
subjects & total marks.Compute & show the resulting
percentage on your page.Take percentage & compute
grade as per following table: */
document.writeln("Marks Sheet".bold().fontsize(10) + "<br><br><br><br>")
var oSub1, oSub2, oSub3, tSub1, tSub2, tSub3, percent;
tSub1 = prompt("Enter Total Marks of Subject1");
oSub1 = prompt("Enter Obtained Marks of Subject1");
tSub2 = prompt("Enter Total Marks of Subject2");
oSub2 = prompt("Enter Obtained Marks of Subject2");
tSub3 = prompt("Enter Total Marks of Subject3");
oSub3 = prompt("Enter Obtained Marks of Subject3");
tSub1 = parseInt(tSub1);
tSub2 = parseInt(tSub2);
tSub3 = parseInt(tSub3);

oSub1 = parseInt(oSub1);
oSub2 = parseInt(oSub2);
oSub3 = parseInt(oSub3);
document.writeln("Total Marks: " + (tSub1 + tSub2 + tSub3) + "<br>");
document.writeln("Marks Obtained: " + (oSub1 + oSub2 + oSub3) + "<br>");
percent = (oSub1 + oSub2 + oSub3) / (tSub1 + tSub2 + tSub3) * 100;
document.writeln("Percentage: " + percent + " %<br>");
if (percent >= 80) {
    document.writeln("Grade: A-one<br> Remarks: Excellant");
} else if (percent >= 70) {
    document.writeln("Grade: A<br> Remarks: Good");
} else if (percent >= 60) {
    document.writeln("Grade: B<br> Remarks: You need to improve");
} else {
    document.writeln("Grade: Fail<br> Remarks: Sorry");
}