/* Guess game:
    Store a secret number(ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a.If user guesses the same number, show“ Bingo!Correct
answer”.
b.If the guessed number + 1 is the secret number, show“ Close enough to the correct answer”. */
var uNum, sNum = 7;
uNum = prompt("Guess the secret number: ");
uNum = parseInt(uNum);
if (uNum === sNum) {
    document.writeln("Bingo! Correct answer");
} else if (uNum + 1 === sNum) {
    document.writeln("Close enough to the correct answer");
} else {
    document.writeln("Wrong Answer");
}