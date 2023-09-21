const promise = ( message, seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, seconds);
  });
}
Promise.all([promise("1. Finished", 1000), promise("2. Finished", 1000), promise("3. Finished", 1000)]).then((res) =>
  console.log(res),
);
