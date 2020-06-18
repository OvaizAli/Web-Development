/* Write a program to create a single string from the
below mentioned array:
    var arr = [“This”, “is”, “my”, “cat”];
(Use array’ s join method) */
var arr = ["This", "is", "my", "cat"],
    i;
document.writeln("Array: <br>");
for (i = 0; i < arr.length; i++) {
    document.writeln(arr[i] + ", ");
}
document.writeln("<br><br>");
document.writeln("String: <br>");
arr.join();
document.writeln(arr);