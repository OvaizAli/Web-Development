/* Create a new array.Store values one by one in such a way
that you can access the values in the order in which they
were stored.(FIFO - First In First Out) */
var arr = ["Keyboard", "Mouse", "Printer", "Monitor"],
    i, out;
document.writeln("Devices: <br>");
for (i = 0; i < arr.length; i++) {
    document.writeln(arr[i] + ", ");
}
document.writeln("<br><br>");

out = arr.shift();
document.writeln("Out: <br>");
document.writeln(out);

document.writeln("<br>");
out = arr.shift();
document.writeln("Out: <br>");
document.writeln(out);

document.writeln("<br>");
out = arr.shift();
document.writeln("Out: <br>");
document.writeln(out);

document.writeln("<br>");
out = arr.shift();
document.writeln("Out: <br>");
document.writeln(out);