/* The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.  */
function kmToM(dist){
    return(dist * 1000);
}
function kmToFt(dist){
    return(dist * 3280.83989501);
}
function kmToInch(dist){
    return(dist * 39370.0787)
}
function kmToCm(dist){
    return(dist * 100000);
}
var dist = prompt("Enter distance between two cities in km");
dist = parseInt(dist);
document.writeln("Distance in KM: " + dist + "<br>");
document.writeln("Distance converted from KM to M: " + kmToM(dist) + "<br>");
document.writeln("Distance converted from KM to Ft: " + kmToFt(dist) + "<br>");
document.writeln("Distance converted from KM to Inches: " + kmToInch(dist) + "<br>");
document.writeln("Distance converted from KM to CM: " + kmToCm(dist));