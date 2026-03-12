const addUrlBtn = document.getElementById("addUrlBtn");
const tutorialList = document.getElementById("tutorialList");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
const fileUpload = document.getElementById("fileUpload");

addUrlBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();

  if (!url) return alert("Please enter a URL!");

  const card = document.createElement("div");
  card.className = "tutorial-card";
  card.innerHTML = `<strong>${title || "Untitled Tutorial"}</strong><br>
                    <a href="${url}" target="_blank">${url}</a>`;
  tutorialList.appendChild(card);

  titleInput.value = "";
  urlInput.value = "";
});

fileUpload.addEventListener("change", (event) => {
  tutorialList.innerHTML = "";
  Array.from(event.target.files).forEach(file => {
    const card = document.createElement("div");
    card.className = "tutorial-card";
    card.textContent = `📂 ${file.name}`;
    tutorialList.appendChild(card);
  });
});
