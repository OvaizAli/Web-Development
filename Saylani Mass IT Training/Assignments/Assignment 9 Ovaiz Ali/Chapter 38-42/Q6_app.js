/* Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. */
function delVowels(str){
    var wVowels = "";
    for(var i = 0; i < str.length; i++){
        if(!("aeiou".includes(str[i]))){
            wVowels += str[i];
        }
    }
    return(wVowels);
}
var str = prompt("Enter example string to remove vowels ");
document.writeln("Example string: " + str + "<br>");
str = str.toLowerCase();
document.writeln("Output without vowels: " + delVowels(str));