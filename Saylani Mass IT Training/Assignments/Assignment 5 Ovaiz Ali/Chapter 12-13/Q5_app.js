/* Write a program that
a.Store correct password in a JS variable.
b.Asks user to enter his / her password
c.Validate the two passwords:
    i.Check
if user has entered password.If not, then
give message“ Please enter your password”
ii.Check
if both passwords are same.If they are
same, show message“ Correct!The password you
entered matches the original password”.Show“ Incorrect password” otherwise. */
var pass = "786110",
    uPass;
upass = prompt("Enter your password");
if (upass === pass) {
    document.writeln("Correct! The password you entered matches the original password");
} else if (upass === "") {
    document.writeln(" Please enter your password");
} else {
    document.writeln("Incorrect password");
}