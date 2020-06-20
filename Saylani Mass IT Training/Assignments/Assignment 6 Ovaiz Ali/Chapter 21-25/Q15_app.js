/* Write a program to take password as an input from
user.The password must qualify these requirements:
    a.It should contain alphabets and numbers
b.It should not start with a number
c.It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a - z, A - Z & 0 - 9, refer to ASCII
table at the end of this document. */
var pass = prompt("Enter your password");
if (pass.length < 6) {
    alert("Enter a valid password");
} else if (pass.charAt(0) >= 48 || pass.charAt(0) <= 57) {
    alert("Enter a valid password");
} else if (pass.match("^[A-Za-z0-9]+$")) {
    alert("Valid Password");
} else {
    alert("Enter a valid password");
}