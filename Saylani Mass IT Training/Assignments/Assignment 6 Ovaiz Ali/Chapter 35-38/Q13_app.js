/* Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'  */
function charCount(str,ch){
    var count = 0;
    for(var i = 0; i < str.length;i++){
        if(str.charAt(i) == ch){
            count++;
        }
    }
    return count;
}
var str = prompt("Enter an example string");
var ch = prompt("Enter character to find it's count");
document.writeln("STRING: "+ str + "<br>");
document.writeln("CHAR: "+ ch + "<br>");
str = str.toLowerCase();
ch = ch.toLowerCase();
document.writeln("OUTPUT (count of given character): " + charCount(str,ch));