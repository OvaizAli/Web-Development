/* Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array. */
var cNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"],
    i, selectedCities = [];
document.writeln("Cities list: <br>");
for (i = 0; i < cNames.length; i++) {
    document.writeln(cNames[i] + ", ");
}
document.writeln("<br><br>");
selectedCities = cNames.splice(2, 3);
document.writeln("Selected cities list: <br>");
for (i = 0; i < selectedCities.length; i++) {
    document.writeln(selectedCities[i] + ", ");
}