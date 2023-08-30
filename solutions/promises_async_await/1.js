function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Resolved");
        },2000);
    })
}

const firstFunction = () => {
    getPromise()
        .then((res) => console.log(res));
}

const secondFunction = async () => {
    const res = await getPromise();
    console.log(res);
}
firstFunction();
secondFunction();