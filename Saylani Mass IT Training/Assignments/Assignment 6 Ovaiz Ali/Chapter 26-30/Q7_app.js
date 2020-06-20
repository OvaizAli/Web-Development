/* Write a program that asks the user about his weight.Parse
the user input and display his weight in your browser.
Possible user inputs can be:
    a.50
b.50 kgs
c.50.2 kgs
d.50.2 kilograms */
var num = "";
var input = prompt("Enter your weight in kilograms");
for (var i = 0; i < input.length; i++) {
    if (input[i] === "." || input[i] >= 48 || input[i] <= 57) {
        num = num + input[i];
    }
}
document.writeln("The weight of user is " + num + " kilograms");