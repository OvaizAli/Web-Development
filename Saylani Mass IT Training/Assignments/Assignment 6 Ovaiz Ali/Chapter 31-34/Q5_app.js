/* Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.  */
var day = new Date().getUTCDate();
if(day<16){
    document.writeln("First fifteen days of the month");
}else{
    document.writeln("Last days of the month");
}
