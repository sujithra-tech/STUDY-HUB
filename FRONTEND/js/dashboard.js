// ---------- DAILY STREAK ----------

let today = new Date().toDateString();

let lastLogin = localStorage.getItem("lastLogin");

let streak = localStorage.getItem("streak");

if(!streak){
streak = 1;
}

if(lastLogin !== today){

let yesterday = new Date();
yesterday.setDate(yesterday.getDate()-1);

if(lastLogin === yesterday.toDateString()){

streak++;

}else{

streak = 1;

}

localStorage.setItem("streak", streak);
localStorage.setItem("lastLogin", today);

}

document.getElementById("streak").innerText = streak;


// ---------- STUDY TIME TRACKING ----------

let startTime = Date.now();

let storedTime = localStorage.getItem("studyTime");

if(!storedTime){

storedTime = 0;

}else{

storedTime = parseInt(storedTime);

}

setInterval(()=>{

let now = Date.now();

let sessionTime = Math.floor((now-startTime)/1000);

let total = storedTime + sessionTime;

let hours = Math.floor(total/3600);

document.getElementById("studyTime").innerText = hours + "h";

},1000);


// SAVE TIME WHEN USER LEAVES PAGE

window.addEventListener("beforeunload",()=>{

let now = Date.now();

let sessionTime = Math.floor((now-startTime)/1000);

let total = storedTime + sessionTime;

localStorage.setItem("studyTime", total);

});