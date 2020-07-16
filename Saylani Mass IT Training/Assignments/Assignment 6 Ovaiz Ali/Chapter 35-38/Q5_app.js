/* Write a function that squares its argument.  */
function square(num){
    num = parseInt(num);
    return(num * num);
}
var num = prompt("Enter argument for square function");
document.writeln("Result of square function is " + square(num));