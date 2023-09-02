const items_container = document.querySelector(".items-container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    if(items_container.style.display === "none"){
        items_container.style.display = "block"
        button.style.backgroundColor = "#000"
        button.style.color = "#fff"
    }else{
        items_container.style.display = "none"
        button.style.backgroundColor = "transparent"
        button.style.color = "#000"
    }
})