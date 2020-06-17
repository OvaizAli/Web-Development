/* Write a program to take input remaining fuel in car( in
        litres) from user.If the current fuel is less than 0.25 litres,
    show the message“ Please refill the fuel in your car” */
var rFuel;
rFuel = prompt("Enter your car's remaining fuel in litres");
if (rFuel < 0.25) {
    document.writeln("Please refill the fuel in your car");
} else {
    document.writeln("Enjoy your journey");
}