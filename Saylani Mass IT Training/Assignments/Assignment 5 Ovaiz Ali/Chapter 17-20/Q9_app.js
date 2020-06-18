/* Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12] */
var A = [24, 53, 78, 91, 12],
    i, smallest = 1000;
document.writeln("Array items: ");
for (i = 0; i < A.length; i++) {
    document.writeln(A[i] + ", ");
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
document.writeln("<br><br>");
document.writeln("The smallest number is " + smallest);