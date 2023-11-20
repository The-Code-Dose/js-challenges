const handleClick = (e)=>{

    state = !state;

    if(state){
        button.textContent="SAVED";
        button.style.backgroundColor="black";
    }
    else{
        button.textContent="SAVE";
        button.style.backgroundColor="red";

    }


}
let state = false;
const button = document.getElementById("button-not-clicked");
button.addEventListener("click", handleClick);