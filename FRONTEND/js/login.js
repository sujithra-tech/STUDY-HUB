function startStudy(){

let name = document.getElementById("name").value;

if(name === ""){
alert("Please enter your name");
}
else{
alert("Welcome " + name + "! Let's start studying.");
}

}