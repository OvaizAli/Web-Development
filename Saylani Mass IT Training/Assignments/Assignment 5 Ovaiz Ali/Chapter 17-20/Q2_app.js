/* Declare and initialize a multidimensional array
representing the following matrix: */
var arr = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1],
    ],
    i, j;
for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {
        document.writeln(arr[i][j] + " ");
    }
    document.writeln("<br>");
}