const text = document.querySelector("input");
const tooltip = document.querySelector("span");
const iconDiv = document.querySelector(".icon");
const copy = document.querySelector("#btn");

copy.addEventListener("click", () => {
  text.select();

  navigator.clipboard.writeText(text.value);
  copy.classList.remove("fa-regular");
  copy.classList.remove("fa-copy");
  copy.classList.add("fa-solid");
  copy.classList.add("fa-check");
  tooltip.style.display = "block";
  iconDiv.style.borderColor = "green";
  copy.style.color = "green";

  setTimeout(() => {
    copy.classList.remove("fa-solid");
    copy.classList.remove("fa-check");
    copy.classList.add("fa-regular");
    copy.classList.add("fa-copy");
    tooltip.style.display = "none";
    copy.style.color = "#000";
    iconDiv.style.borderColor = "rgb(206, 206, 206)";
  }, 3000);
});
