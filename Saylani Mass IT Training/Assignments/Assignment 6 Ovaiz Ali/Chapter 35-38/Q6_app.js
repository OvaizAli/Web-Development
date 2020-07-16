/* Write a function that computes factorial of a number.  */
function factorial(num){
    num = parseInt(num);
    var result = 1;
    for(var i = num; i > 0; i--){
        result *= i;
    }
    return(result);
}
var num = prompt("Enter number for factorial calculation");
document.writeln("Result of factorial function is " + factorial(num));