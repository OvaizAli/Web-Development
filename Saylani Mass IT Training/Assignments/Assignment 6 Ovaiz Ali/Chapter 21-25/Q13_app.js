/* Write a program to take user input and store username
    in a variable.If the username contains any special symbol
among[@., !], prompt the user to enter a valid username.
For character codes of[@.Note:
        ASCII code of!is 33 ASCII code of, is 44 ASCII code of.is 46 ASCII code of @ is 64 */
var input = prompt("Enter your username");
var i, flag;
for (i = 0; i < input.length; i++) {
    if (input[i] === "@" || input[i] === "," || input[i] === "." || input[i] === "!") {
        alert("Please enter a valid username");
        flag = 1;
    }
}
if (flag != 1) {
    document.writeln("Username: " + input);
}