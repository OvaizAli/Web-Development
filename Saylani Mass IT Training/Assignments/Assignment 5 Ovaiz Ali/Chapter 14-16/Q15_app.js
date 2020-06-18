/* Write a program to store phone manufacturers(Apple,
    Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown / select menu in your
browser using document.write() method: */
var pManufacturers = ["Apple", "Samsumg", "Motrola", "Nokia", "Sony", "Haier"],
    i;
document.write("Phone Manufacturers<br>".bold());
for (i = 0; i < pManufacturers.length; i++) {
    document.writeln(pManufacturers[i] + "<br>");
}