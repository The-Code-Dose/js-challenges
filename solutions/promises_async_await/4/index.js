
    const Promise_one = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Promise 1");
            resolve();
        }, 1000);
    })

    const Promise_two = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Promise 2");
            resolve();
        }, 2000);
    })

    const Promise_three = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Promise 3!");
            resolve();
        }, 3000);
    })



Promise.all([Promise_one, Promise_two, Promise_three])
  .then(() => {
    console.log("Finished!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });