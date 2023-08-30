const URL = "https://api.chucknorris.io/jokes/random"

const fetchUsingThen = () => {
    fetch(URL)
        .then(res => res.json())
        .then(res => console.log(res.value))
}

const fetchUsingAsynAwait = async () => {
    const res = await fetch(URL)
    const data = await res.json();
    console.log(data.value);
}

fetchUsingThen()
fetchUsingAsynAwait()