const getPromise = () =>{
    return new Promise((resolve, resject)=>{
        setTimeout(()=>{
            resolve("Resolved!");
        },2000)
    })
}

const function1 = ()=>{
    getPromise().then((result)=>{
        console.log(result);
    })
}

const function2 = ()=>{
    async function innerfunction(){
        const result = await getPromise();
        console.log(result);

    }//function
    innerfunction();
}


//make a call here
//function1();
//function2();