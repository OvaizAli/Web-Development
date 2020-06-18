/* Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12]. */
var A = [24, 53, 78, 91, 12],
    i, largest = -1;
document.writeln("Array items: ");
for (i = 0; i < A.length; i++) {
    document.writeln(A[i] + ", ");
    if (A[i] > largest) {
        largest = A[i];
    }
}
document.writeln("<br><br>");
document.writeln("The largest number is " + largest);