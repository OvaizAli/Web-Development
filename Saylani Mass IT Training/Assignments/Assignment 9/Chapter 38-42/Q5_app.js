/* You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now. */
function customIndexOf(str,qStr){
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < qStr.length; j++){
            if(str[i+j] !== qStr[j]){
                break;
            }
            if(j === qStr.length -1){
                return i;
            }
        }
    }
    return -1;
}
var str = prompt("Enter the example string");
var qStr = prompt("Enter the query string");
document.writeln("Index of the query string in the example string is " + (customIndexOf(str,qStr)));