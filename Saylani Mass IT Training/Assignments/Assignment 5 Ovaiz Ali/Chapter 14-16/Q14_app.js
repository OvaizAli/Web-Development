/* Create a new array.Store values one by one in such a way
that you can access the values in reverse order.(Last InFirst Out) */
var arr = ["Keyboard", "Mouse", "Printer", "Monitor"],
    i, out;
document.writeln("Devices: <br>");
for (i = 0; i < arr.length; i++) {
    document.writeln(arr[i] + ", ");
}
document.writeln("<br><br>");

out = arr.pop();
document.writeln("Out: <br>");
document.writeln(out);

document.writeln("<br>");
out = arr.pop();
document.writeln("Out: <br>");
document.writeln(out);

document.writeln("<br>");
out = arr.pop();
document.writeln("Out: <br>");
document.writeln(out);

document.writeln("<br>");
out = arr.pop();
document.writeln("Out: <br>");
document.writeln(out);