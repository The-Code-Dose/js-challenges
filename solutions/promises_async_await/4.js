const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1. Finished");
  }, 1000);
});
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2. Finished");
  }, 2000);
});
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3. Finished");
  }, 3000);
});

Promise.all([firstPromise, secondPromise, thirdPromise])
    .then((res) => console.log(res));