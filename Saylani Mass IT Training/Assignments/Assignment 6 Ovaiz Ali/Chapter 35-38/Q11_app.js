/* Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox'  */
function convFirstLetter(str) {
    str = str.toLowerCase();
    var array = str.split(' ');
    for(var c = 0; c < array.length; c++){
        array[c] = array[c][0].toUpperCase() + array[c].substring(1);
    }
    return array.join(' ');
}
var str = prompt("Enter an example string");
document.writeln("STRING: "+ str + "<br>");
str = convFirstLetter(str);
document.writeln("OUTPUT: " + str);
