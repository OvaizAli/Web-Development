/* Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser */
var university = "University of Karachi";
var arr = university.split("");
for (var i = 0; i < arr.length; i++) {
    document.writeln(arr[i] + "<br>")
}