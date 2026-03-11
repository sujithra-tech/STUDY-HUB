function toggleFocus(){

let relax = document.getElementById("relaxCard");

let button = document.getElementById("focusBtn");

if(focusOn){

relax.style.display="none";

button.innerText="Focus Mode OFF";

focusOn=false;

}

else{

relax.style.display="block";

button.innerText="Focus Mode ON";

focusOn=true;

}

}