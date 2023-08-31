const doubledPromise = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number * 2);
      } else {
        reject(new Error("Input is not a number"));
      }
    }, 1000);
  });
};

const num = 2;

// using .then and .catch
doubledPromise(num)
  .then((res) => {
    console.log(res); // 4
    return doubledPromise(res);
  })
  .then((res) => {
    console.log(res); // 8
    return doubledPromise(res);
  })
  .then((res) => {
    console.log(res); // 16
  })
  .catch((err) => {
    console.log(err); // 'Input is not a number'
  });

// using async await
const incrementallyDouble = async () => {
  try {
    let result = await doubledPromise(num);
    console.log(result); // 4

    result = await doubledPromise(result);
    console.log(result); // 8

    result = await doubledPromise(result);
    console.log(result); // 16
  } catch (error) {
    console.log(error); // 'Input is not a number'
  }
};

incrementallyDouble();
