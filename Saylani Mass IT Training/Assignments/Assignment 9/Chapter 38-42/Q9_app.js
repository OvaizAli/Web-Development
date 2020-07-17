/* Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.  */
var hr = prompt("Enter the number of hours worked");
hr = parseInt(hr);
if(hr > 40){
    document.writeln("Your Overtime Pay is: " + ((hr - 40) * 12));
}else{
    document.writeln("Since you did'nt worked overtime your Overtime Pay is: 0");
}