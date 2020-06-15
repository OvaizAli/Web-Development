/* Write a program to implement checkout process of a
shopping cart system
for an e - commerce website.Store
the following in variables
a.Price of item 1
b.Price of item 2
c.Ordered quantity of item 1
d.Ordered Quantity of item 2
e.Shipping charges
Compute the total cost & show the receipt in your browser. */
var price1 = 650;
var price2 = 100;
var oQuantity1 = 3;
var oQuantity2 = 7;
var sCharges = 100;
document.writeln("Shopping Cart".bold() + "<br><br>")
document.writeln("Price of item 1 is " + price1 + "<br>");
document.writeln("Quantity of item 1 is " + oQuantity1 + "<br>");
document.writeln("Price of item 2 is " + price2 + "<br>");
document.writeln("Quantity of item 2 is " + oQuantity2 + "<br>");
document.writeln("Shippng Charges " + sCharges + "<br><br><br>");
document.writeln("Total cost of your order is " + ((price1 * oQuantity1) + (price2 * oQuantity2) + sCharges));