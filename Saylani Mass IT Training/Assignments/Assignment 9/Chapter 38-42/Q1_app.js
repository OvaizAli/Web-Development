/* Write a custom function power ( a, b ), to calculate the value of a raised to b. */
function power(a,b){
    var result = 1;
    for(var i = 1; i <= b; i++){
        result *= a;
    }
    return (result);
}
var a = prompt("Enter base value");
var b = prompt("Enter power value");
a = parseInt(a);
b = parseInt(b);
document.writeln("Result of power function is " + power(a,b));