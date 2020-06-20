/* Write a program that simulates a coin toss using random()
method of JS Math class.Display the value of coin in your
browser */
if ((Math.floor((Math.random() * 2) + 1) == 2)) {
    document.writeln((Math.floor((Math.random() * 2) + 1)) + "<br>" + "Random coin value: Heads<br>");
} else {
    document.writeln((Math.floor((Math.random() * 2) + 1)) + "<br>" + "Random coin value: Tails<br>");
}