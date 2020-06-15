/* The Lifetime Supply Calculator: Ever wonder how
much a“ lifetime supply” of your favorite snack is ?
    Wonder no more.
a.Store your favorite snack into a variable
b.Store your current age into a variable.
c.Store a maximum age into a variable.
d.Store an estimated amount per day(as a number).
e.Calculate how many would you eat total
for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”. */
var snack = "chocolate chip";
var age = 20;
var mAge = 100;
var sDay = 3;
document.writeln("The Lifetime Supply Calculator<br><br>".bold());
document.writeln("Favourite Snack: " + snack + "<br>");
document.writeln("Current age: " + age + "<br>");
document.writeln("Estimated Maximum Age: " + mAge + "<br>");
document.writeln("Amount of snacks per day: " + sDay + "<br>");
document.writeln("You will need " + (sDay * (mAge - age)) + " " + snack + " to last you until the ripe old age of " + mAge + " <br> ");