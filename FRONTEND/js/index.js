function startStudy(){

let name = document.querySelector("input").value;

if(name === ""){
alert("Please enter your name");
return;
}

alert("Welcome " + name + "! Let's start studying 📚");

}


