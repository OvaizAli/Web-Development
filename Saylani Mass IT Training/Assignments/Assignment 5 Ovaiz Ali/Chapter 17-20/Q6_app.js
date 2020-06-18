/* Generate the following series in your browser.See
example output.
a.Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b.Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d.Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e.Series: 2 k, 4 k, 6 k, 8 k, 10 k, 12 k, 14 k, 16 k, 18 k, 20 k */
var i;
document.writeln("Counting: <br><br>".bold())
for (i = 0; i < 16; i++) {
    document.writeln(i + ", ");
}

document.writeln("<br><br>");
document.writeln("Reverse Counting: <br><br>".bold())
for (i = 10; i > 0; i--) {
    document.writeln(i + ", ");
}

document.writeln("<br><br>");
document.writeln("Even: <br><br>".bold())
for (i = 0; i <= 20; i = i + 2) {
    document.writeln(i + ", ");
}

document.writeln("<br><br>");
document.writeln("Odd: <br><br>".bold())
for (i = 1; i <= 20; i = i + 2) {
    document.writeln(i + ", ");
}

document.writeln("<br><br>");
document.writeln("Series: <br><br>".bold())
for (i = 2; i <= 20; i = i + 2) {
    document.writeln(i + "k, ");
}