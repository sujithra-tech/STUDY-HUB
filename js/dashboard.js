function saveTutorial(){

let url = document.getElementById("link").value;

document.getElementById("videoFrame").src = url;

}

function saveNotes(){

let notes = document.getElementById("notes").value;

localStorage.setItem("notes", notes);

alert("Notes Saved Successfully");

}