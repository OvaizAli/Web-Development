/* Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. 
  */
 function mainFunction(m1,m2,m3){
     document.writeln("Average of the three subjects is " + avg(m1,m2,m3) + "<br>");
     document.writeln("Overall percentage is " + percent(m1,m2,m3));
 }
 function avg(m1,m2,m3){
    return((m1 + m2 + m3)/3);
 }
 function percent(m1,m2,m3){
    return(((m1 + m2 + m3)/300)* 100);
 }
 var m1 = prompt("Enter marks of the first subject");
 var m2 = prompt("Enter marks of the second subject");
 var m3 = prompt("Enter marks of the third subject");
 m1 = parseInt(m1);
 m2 = parseInt(m2);
 m3 = parseInt(m3);
 mainFunction(m1,m2,m3);
