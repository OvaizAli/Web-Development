/* Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b. Current Month  */
/* c. Number of units d. Charges per unit e. Net Amount Payable (within Due Date) f. Late Payment Surcharge g. Gross Amount Payable (after Due Date) Where, 
 
Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge  */
document.writeln("K-Electric Bill".bold().fontsize(15) + "<br>");

var name = prompt("Enter your name");
var month = prompt("Enter your billing month");
var units = prompt("Enter number of units utilised");
var cUnits = prompt("Enter charges per unit");

document.writeln("Customer Name: "+ name.bold() +"<br>");
document.writeln("Month: "+ month.bold() +"<br>");
document.writeln("Number of Units: "+ units.bold() +"<br>");
document.writeln("Charges per Unit: "+ cUnits.bold() + "<br><br><br>");
document.writeln("Net Amount Payable (within Due Date): "+ (units * cUnits) +"<br>");
document.writeln("Late payment Surcharge: "+ "350".bold() +"<br>");
document.writeln("Gross Amount Payable (after Due Date): " + ((units * cUnits) + 350));