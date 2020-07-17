/* Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.  */
function findOccurrences(str){
    var count = 0;
    let flag = false;
    for (const letter of str.toLowerCase()){
        switch(letter){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            {
                if(flag){
                    count++;
                    flag = false;
                }else{
                    flag = true;
                }
                break;
            }
            default:
                flag = false;
            }
            
        }
        return count;
    }
var str = prompt("Enter an example string " + str);
document.writeln("Example string: " + str + "<br>")
document.writeln("Number of occurances: " + findOccurrences(str)); 