/* Write a function that take start and end number as inputs & display counting in your browser. */
function displayCount(s,e){
    s = parseInt(s);
    e = parseInt(e);
    for(var i = s; i <= e; i++){
        document.writeln(i + "<br>");
    }
}
var num1 = prompt("Enter starting number");
var num2 = prompt("Enter ending number");
displayCount(num1,num2);