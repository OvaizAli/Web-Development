/* Write a program that stores a random secret number from
1 to 10 in a variable.Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */
var value = Math.floor((Math.random() * 10) + 1);
var input = prompt("Enter a number between 1 and 10");
input = parseInt(input);
if (value === input) {
    alert("Congratulations!");
} else {
    alert("Try again!");
}