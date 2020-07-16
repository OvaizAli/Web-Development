/* Write a function that displays current date & time in your browser.  */
function displayTime(){
    var now = new Date();
    var dateString = now.toString();
    document.writeln(dateString);
}
displayTime();