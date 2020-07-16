/* Write a JavaScript function that checks whether a passed string is palindrome or not?   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.  */
function checkPalindrome(str){
    return (str == str.split(" ").reverse().join(" "))
}
var str = prompt("Enter  string to check whether it is palindrome or not");
str = str.toLowerCase();
if (checkPalindrome(str) == 1){
    document.writeln(str.charAt(0).toUpperCase() + str.slice(1) + " is a palindrome string");
}