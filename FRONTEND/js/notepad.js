const newBtn = document.getElementById("newBtn");
const openBtn = document.getElementById("openBtn");
const saveBtn = document.getElementById("saveBtn");
const noteArea = document.getElementById("noteArea");
const fileList = document.getElementById("fileList");

const modal = document.getElementById("modal");
const fileNameInput = document.getElementById("fileNameInput");
const createBtn = document.getElementById("createBtn");
const cancelBtn = document.getElementById("cancelBtn");

let notes = {};

newBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

createBtn.addEventListener("click", () => {
  const fileName = fileNameInput.value.trim();
  if (!fileName) return alert("Enter a file name!");

  notes[fileName] = "";
  updateFileList();
  modal.style.display = "none";
  fileNameInput.value = "";
});

saveBtn.addEventListener("click", () => {
  const selectedFile = document.querySelector(".file-item.active");
  if (!selectedFile) return alert("No file selected!");
  const fileName = selectedFile.textContent;
  notes[fileName] = noteArea.value;
  alert("Note saved!");
});

openBtn.addEventListener("click", () => {
  const selectedFile = document.querySelector(".file-item.active");
  if (!selectedFile) return alert("No file selected!");
  const fileName = selectedFile.textContent;
  noteArea.value = notes[fileName];
});

function updateFileList() {
  fileList.innerHTML = "";
  Object.keys(notes).forEach(name => {
    const div = document.createElement("div");
    div.className = "file-item";
    div.textContent = name;
    div.addEventListener("click", () => {
      document.querySelectorAll(".file-item").forEach(el => el.classList.remove("active"));
      div.classList.add("active");
    });
    fileList.appendChild(div);
  });
}
