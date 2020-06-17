/* Write a program to take“ gender” as input from user.If the
user is male, give the message: Good Morning Sir.If the
user is female, give the message: Good Morning Ma’ am. */
var gender;
gender = prompt("Enter your gender");
if (gender === "Male" || gender === "male") {
    document.writeln("Good Morning Sir");
} else if (gender === "Female" || gender === "female") {
    document.writeln("Good Morning Ma'am");
} else {
    document.writeln("Wrong Value Entered");
}