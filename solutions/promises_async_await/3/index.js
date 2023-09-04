const doubledPromise = (number)=>{
    return new Promise((resolve, reject)=>{
        resolve(number*2);
    })

}

const function1 = ()=>{
    doubledPromise(2).then((result)=>{
        doubledPromise(result).then((res)=>{
            console.log(res);
        })
    })
}

async function function2(){
    const result = await doubledPromise(2);
    const res = await doubledPromise(result);
    console.log(res);
}

//function1();
function2();