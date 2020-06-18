/* Write a program to print items of the following array
using
for loop:
    fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] */
var fruits = ["apple", "banana", "mango", "orange", "strawberry"],
    i;
for (i = 0; i < fruits.length; i++) {
    document.writeln(fruits[i] + "<br>");
}
document.writeln("<br><br>");
for (i = 0; i < fruits.length; i++) {
    document.writeln("Element at index " + i + " is " + fruits[i] + " <br> ");
}