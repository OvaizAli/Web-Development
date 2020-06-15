/* A visitor visits an online clothing store
www.xyzClothing.com.Write a script to store in variables
the following information:
a.Visitor’ s name
b.Product title
c.Quantity i.e.how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T - shirt(s) on XYZ Clothing store”. */
var vName = "John Doe";
var pTitle = "T-shirt(s)";
var quantity = "12";
document.writeln(vName.bold() + " ordered " + quantity.bold() + " " +
    pTitle.bold() + " on XYZ Clothing store");