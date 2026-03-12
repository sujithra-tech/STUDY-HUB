function updateDisplay(){

let minutes = Math.floor(time/60);

let seconds = time%60;

document.getElementById("time").innerText =
String(minutes).padStart(2,'0') + ":" +
String(seconds).padStart(2,'0');

}

function startTimer(){

document.getElementById("status").innerText="Running";

timer = setInterval(function(){

if(time>0){

time--;

updateDisplay();

}else{

clearInterval(timer);

document.getElementById("status").innerText="Finished";

}

},1000);

}

function stopTimer(){

clearInterval(timer);

document.getElementById("status").innerText="Paused";

}

function resetTimer(){

clearInterval(timer);

time=360;

updateDisplay();

document.getElementById("status").innerText="Ready";

}

function setTime(){

let m=document.getElementById("minutesInput").value;

time=m*60;

updateDisplay();

}

function quickTime(min){

time=min*60;

updateDisplay();

}
