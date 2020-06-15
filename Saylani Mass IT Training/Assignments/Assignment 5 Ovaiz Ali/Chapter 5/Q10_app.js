/* Write a program to initialize a variable with some
number and do arithmetic in following sequence:
    a.Add 5
b.Multiply by 10
c.Divide the result by 2
Perform all calculations in a single expression */
var num1 = 11;
document.writeln("Initial value of variable: " + num1 + "<br>");
num1 += 5;
document.writeln("Result of Addition by 5: " + num1 + "<br>");
num1 *= 10;
document.writeln("Result of Multiplication by 10: " + num1 + "<br>");
num1 /= 2;
document.writeln("Final Result after Division by 2: " + num1);