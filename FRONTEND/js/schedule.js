function addTodayTask(){

let input=document.getElementById("todayTask");

let list=document.getElementById("todayList");

if(input.value==="") return;

let li=document.createElement("li");

li.innerHTML=input.value + 
' <span onclick="this.parentElement.remove()">❌</span>';

li.onclick=function(){

this.style.textDecoration="line-through";

}

list.appendChild(li);

input.value="";

}


function addWeekTask(){

alert("Weekly task added!");

}

function addMonthTask(){

alert("Monthly goal added!");

}

function addYearTask(){

alert("Yearly goal added!");

}