const getPromise = () =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Resolved!");
        },2000);

    })
    
}


const function1 = () =>{
    getPromise().then((result)=>console.log(result));
}

const function2 = ()=>{
    async function innerfunc(){
        const result = await getPromise();
        console.log(result);
    }
    innerfunc();
}

// function1();
//function2();
