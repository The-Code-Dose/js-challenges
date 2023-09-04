const function1 = () =>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then(result=>result.json())
    .then(data=>console.log(data.value))
    .catch(error=>console.log(error));
}

async function function2 (){
    try{
        const result = await fetch("https://api.chucknorris.io/jokes/random");  
        if(!result.ok){
            throw new Error('Network response was not ok');
        } 
        const data = await result.json();
        console.log(data.value); 
    }
    catch(error){
        console.log(error);
    }
    
    


    
}

//function1();
function2();