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


function1();
function2();

// const check = ()=>{
//     const data =  {
//     taxi:
//     "a car licensed to transport passengers in return for payment of a fare",
//     food: {
//         sushi:
//         "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
//         apple: {
//         Honeycrisp:
//             "an apple cultivar developed at the MAES Horticultural Research Center",
//         Fuji:
//             "an apple cultivar developed by growers at Tohoku Research Station"
//         }//apple
//   }//food
// }//data

// console.log(Object.entries(data));


// }//method

// check();