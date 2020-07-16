/* Write a function that calculates the area of a rectangle.      A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variables  */
function areaOfRect(w,h){
    w = parseInt(w);
    h = parseInt(h);
    return(w * h);
}
var w = prompt("Enter width of rectangle");
var h = prompt("Enter height of rectangle");
document.writeln("Area of Rectangle by passing arguments as value: " + areaOfRect(5,5) + "<br>");
document.writeln("Area of Rectangle by passing arguments as variable: " + areaOfRect(w,h));