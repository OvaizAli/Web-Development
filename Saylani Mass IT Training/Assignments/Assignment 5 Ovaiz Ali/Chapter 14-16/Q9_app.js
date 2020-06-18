/* Initialize an array with color names.Display the array
elements in your browser.
a.Ask the user what color he / she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b.Ask the user what color he / she wants to add to the end &
    add that color to the end of the array.Display the
updated array in your browser.
c.Add two more color to the beginning of the array.
Display the updated array in your browser.
d.Delete the first color in the array.Display the updated
array in your browser.
e.Delete the last color in the array.Display the updated
array in your browser.
f.Ask the user at which index he / she wants to add a color &
    color name.Then add the color to desired
position / index..Display the updated array in your
browser.
g.Ask the user at which index he / she wants to delete
color(s) & how many colors he / she wants to delete.Then
Initialize an array with color names.Display the array
elements in your browser.
a.Ask the user what color he / she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b.Ask the user what color he / she wants to add to the end &
    add that color to the end of the array.Display the
updated array in your browser.
c.Add two more color to the beginning of the array.
Display the updated array in your browser.
d.Delete the first color in the array.Display the updated
array in your browser.
e.Delete the last color in the array.Display the updated
array in your browser.
f.Ask the user at which index he / she wants to add a color &
    color name.Then add the color to desired
position / index..Display the updated array in your
browser.
g.Ask the user at which index he / she wants to delete
color(s) & how many colors he / she wants to delete.Then */
var colors = ["Red", "Green", "Yellow"],
    i;
document.writeln("Elements of Colors Array<br><br>".bold());
for (i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}
// a
document.writeln("<br><br>");
var input = prompt("Which color do you want to add in the beginning of the array");
colors.unshift(input);
document.writeln("Updated elements of Colors Array<br><br>".bold());
for (i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}

// b
document.writeln("<br><br>");
var input = prompt("Which color do you want to add in the end of the array");
colors.push(input);
document.writeln("Updated elements of Colors Array<br><br>".bold());
for (i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}

// c
document.writeln("<br><br>");
colors.unshift("White", "Black");
document.writeln("Updated elements of Colors Array<br><br>".bold());
for (i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}

// d
document.writeln("<br><br>");
colors.shift();
document.writeln("Updated elements of Colors Array<br><br>".bold());
for (i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}

// e
document.writeln("<br><br>");
colors.pop();
document.writeln("Updated elements of Colors Array<br><br>".bold());
for (i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}

// f
document.writeln("<br><br>");
var input = prompt("Which color do you want to add to any particular index");
var index = prompt("At what index");
index = parseInt(index);
colors.splice(index, 0, input);
document.writeln("Updated elements of Colors Array<br><br>".bold());
for (i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}

// g
document.writeln("<br><br>");
var index = prompt("At what index do you want to delete color(s)");
index = parseInt(index);
var input = prompt("How many color(s)");
input = parseInt(input);
colors.splice(index, input);
document.writeln("Updated elements of Colors Array<br><br>".bold());
for (i = 0; i < colors.length; i++) {
    document.writeln(colors[i] + "<br>");
}