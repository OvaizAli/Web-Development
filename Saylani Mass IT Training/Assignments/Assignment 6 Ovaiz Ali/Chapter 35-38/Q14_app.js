/* The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference: • Pass the radius to the function. • Calculate the circumference based on the radius, and output "The circumference is NN". Create a function called calcArea: • Pass the radius to the function. • Calculate the area based on the radius, and output "The area is NN". 
 
Circumference of circle    =     2πr Area of circle       =     πr2  */
function calcCircumference(r){
    return(2 * 3.142 * r);
}
function calcArea(r){
    return(3.142 * r * r);
}
var r = prompt("Enter the value of radius");
document.writeln("Radius: " + r + "<br>");
r = parseInt(r);
document.writeln("The area is " + calcArea(r) + "<br>");
document.writeln("The circumference is " + calcCircumference(r));
