/* Write a program to take“ city” name as input from user.If
user enters“ Karachi”, welcome the user like this: “Welcome to city of lights” */
var city;
city = prompt("Enter name of your city");
if (city === "karachi" || city === "Karachi") {
    document.writeln("Welcome to city of lights<br>");
} else {
    document.writeln("Welcome to " + city + "<br> ");
}