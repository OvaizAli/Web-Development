/* If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions  */
function calcS(a,b,c){
    return((a + b + c)/2)
}
function calcArea(a,b,c,s){
    return(s * (s-a) * (s-b) * (s-c));
}
var a = prompt("Enter the value of a");
var b = prompt("Enter the value of b");
var c = prompt("Enter the value of c");
a = parseInt(a);
b = parseInt(b);
c = parseInt(a);
document.writeln("Area of triangle is " + calcArea(a,b,c,calcS(a,b,c)));