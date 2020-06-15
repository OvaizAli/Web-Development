/* The Temperature Converter: It’ s hot out!Let’ s make a
converter based on the steps here.
a.Store a Celsius temperature into a variable.
b.Convert it to Fahrenheit & output“ NNoC is NNoF”.
c.Now store a Fahrenheit temperature into a variable.
d.Convert it to Celsius & output“ NNoF is NNoC”. */
var cTemp = 25;
var fTemp = 70;
document.writeln(cTemp + "&#8451;" + " is " + ((cTemp * 9 / 5) + 32) + "&#8457;<br>");
document.writeln(fTemp + "&#8457;" + " is " + ((fTemp - 32) * 5 / 9) + "&#8451;");