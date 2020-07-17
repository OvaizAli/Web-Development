/* Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …  */
function checkLeapYear(yr){
    if(yr % 4 === 0){
        if(yr % 100 === 0){
            if(yr % 400 === 0){
                document.writeln(yr + " is a leap year");
            }
            else{
                document.writeln(yr + " is not a leap year");
            }
        }else{
            document.writeln(yr + " is a leap year");
        }
    }else{
        document.writeln(yr + " is not a leap year");
    }
    
}
var yr = prompt("Enter year to check whether it's leap year or not");
yr = parseInt(yr);
checkLeapYear(yr);