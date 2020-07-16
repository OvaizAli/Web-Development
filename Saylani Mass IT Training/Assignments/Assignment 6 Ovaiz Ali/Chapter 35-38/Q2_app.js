/* Write a function that takes first & last name and then it greets the user using his full name.  */
function bioData(){
    var fName = prompt("Enter your first name");
    var lName = prompt("Enter your last name");
    document.writeln("Welcome "+ fName + " "+lName);
}
bioData();