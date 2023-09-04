const handleClick = (spanElement) =>{
    spanElement.textContent = "✔";
    
    
    const tooltipText = document.querySelector('.tooltip-text');

    console.log(tooltipText);
    tooltipText.classList.add(".tooltip-text-new")
    // pic.classList.add("custom-span-newclass");
}




