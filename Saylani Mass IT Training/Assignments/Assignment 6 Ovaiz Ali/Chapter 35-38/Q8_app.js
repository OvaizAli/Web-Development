/* Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2  */
function calculateHypotenuse(b,p){
    b = parseInt(b);
    p = parseInt(p);
    return(calculateSquare(b) + calculateSquare(p));
    function calculateSquare(s){
        return(s * s);
    }
}
var b = prompt("Enter base value");
var p = prompt("Enter perpendicular value");
document.writeln("Squared Hypotenuse: " + calculateHypotenuse(b,p));