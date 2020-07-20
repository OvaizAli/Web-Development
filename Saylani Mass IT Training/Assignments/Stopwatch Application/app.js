var interval;
var msec = 0;
var sec = 0;
var min = 0;
var msecHeading = document.getElementById("msec");
var secHeading = document.getElementById("sec");
var minHeading = document.getElementById("min");

function timer(){
    msec ++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0
    }
    if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start(){
    interval = setInterval(timer,10);
    document.getElementById("pause").disabled = false;
}
function pause(){
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = false;
    clearInterval(interval);
}
function reset(){
    msecHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    minHeading.innerHTML = 0;
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = false;
}