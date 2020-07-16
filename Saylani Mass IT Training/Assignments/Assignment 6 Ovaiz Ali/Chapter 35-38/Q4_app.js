/* Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.  */
function calculator(num1,num2,op){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(op == "+"){
        return(num1+num2);
    }else if(op == "-"){
        if(num1 > num2){
            return(num1 - num2);
        }else{
            return(num2 - num1);
        }
    }else if(op == "*"){
        return(num1 * num2);
    }else if(op == "/"){
        return(num1 / num2);
    }
}
var num1 = prompt("Enter num1 value");
var num2 = prompt("Enter num2 value");
var op = prompt("Enter operator from (+, -, *, /)");
document.writeln("Calculation of two numbers is " + calculator(num1,num2,op));