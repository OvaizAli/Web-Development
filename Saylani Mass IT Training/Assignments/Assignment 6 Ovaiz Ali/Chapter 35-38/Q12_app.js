/* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development'  */
function longWord(str){
    var len;
    var max = '';
    var arr = str.split(' ');
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > max.length){
            max = arr[i];
        }
    }
    return(max);
}
var str = prompt("Enter an example string");
document.writeln("STRING: "+ str + "<br>");
str = longWord(str);
document.writeln("OUTPUT: " + str);