/* The Geometrizer: Calculate properties of a circle.
a.Store a radius into a variable.
MATH EXPRESSIONS | JAVASCRIPT
Page 8 of 9
b.Calculate the circumference based on the radius, and
output“ The circumference is NN”.
    (Hint: Circumference of a circle = 2 π r, π = 3.142)
Calculate the area based on the radius, and output“ The
area is NN”.(Hint: Area of a circle = π r2, π = 3.142) */
var radius = 20;
document.writeln("The Geometrizer<br><br>".bold());
document.writeln("Radius of a circle: " + radius + "<br>");
document.writeln("The circumference is: : " + (2 * 3.142 * radius) + "<br>");
document.writeln("The area is: " + (3.142 * radius * radius));