/* Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.  */
var date = new Date();
var hours = date.getHours();
// document.writeln(hours);
if(hours>= 12){
document.writeln("It's PM");
}else{
    document.writeln("It's AM");
}