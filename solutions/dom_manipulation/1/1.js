const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (button.innerHTML === "Save") {
    button.innerText = "Saved";
    button.style.backgroundColor = "#000";
    removeSaved();
  } else {
    removeSaved();
  }
});

function removeSaved() {
  setTimeout(() => {
    button.innerText = "Save";
    button.style.backgroundColor = "red";
  }, 2000);
}
