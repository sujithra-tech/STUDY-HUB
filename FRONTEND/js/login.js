
const button = document.getElementById("startBtn");

button.addEventListener("click", function(){

const name = document.getElementById("username").value;

if(name === ""){

alert("Please enter your name");

return;

}

/* store name */

localStorage.setItem("studyhub_user", name);

/* redirect */

window.location.href = "home.html";

});