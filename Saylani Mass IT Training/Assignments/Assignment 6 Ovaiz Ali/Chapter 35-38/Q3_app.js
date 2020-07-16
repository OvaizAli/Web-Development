/* Write a function that adds two numbers (input by user) and returns the sum of two numbers.  */
function sum(num1,num2){
    return(parseInt(num1)+parseInt(num2));
}
var num1 = prompt("Enter num1 value");
var num2 = prompt("Enter num2 value");
document.writeln("Sum of two numbers is " + sum(num1,num2));