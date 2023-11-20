const handleClick = () =>{

    if(!isclicked){
        button.style.backgroundColor="black";
        button.style.color = "white";
        dropdown.classList.toggle('active');
        isclicked=true;

    }
    else{
        button.style.backgroundColor="white";
        button.style.color = "black";
        dropdown.classList.remove('active');
        isclicked=false;
    }



}
let isclicked = false;
const button = document.getElementById("button-not-clicked");
const dropdown = document.getElementById("dropdownContainer");
button.addEventListener("click", handleClick);