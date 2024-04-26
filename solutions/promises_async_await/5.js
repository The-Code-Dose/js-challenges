const URL = "https://whatthecommit.com/index.json";

// using .then and .catch
const fetchUsingThen = () => {
  const requests = [];
  for (let i = 0; i < 10; i++) {
    requests.push(fetch(URL));
  }

  Promise.all(requests)
    .then((responses) => Promise.all(responses.map((result) => result.json())))
    .then((data) => console.log(data))
    .catch((err) => console.log("Error: " + err));
};

fetchUsingThen();

// fetch using async await
const fetchAsyncAwait = async () => {
  const requests = [];
  for (let i = 0; i < 10; i++) {
    requests.push(fetch(URL));
  }

  try {
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map((result) => result.json()));
    console.log(data);
  } catch (error) {
    console.log("Error: " + error);
  }
};

fetchAsyncAwait();

// simple fetch for 1 time
const getFetch = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getFetch();
