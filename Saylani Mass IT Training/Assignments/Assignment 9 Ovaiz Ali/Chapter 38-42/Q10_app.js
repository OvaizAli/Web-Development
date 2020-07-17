/* A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.  */
function cashier(amt){
    var hCount = 0,fCount = 0,tCount = 0;
        if((amt/100) > 0){
            hCount = Math.floor(amt/100);
            amt -= (hCount * 100); 
        }
        if((amt/50) > 0){
            fCount = Math.floor(amt/50);
            amt -= (fCount * 50); 
        }
        if((amt/10) > 0){
            tCount = Math.floor(amt/10);
            amt -= (tCount * 10); 
        }
    document.writeln("You will have " + hCount + " hundred notes " + fCount + " fifty notes " + tCount + " ten notes.")
}
var amt = prompt("Enter amount to withdraw!!");
amt = parseInt(amt);
cashier(amt);