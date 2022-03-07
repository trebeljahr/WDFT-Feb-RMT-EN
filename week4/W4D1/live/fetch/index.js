const base = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&`;
const endpoint = `${base}srsearch=Javascript`;

const responsePromise = fetch(endpoint);
console.log(responsePromise);
responsePromise
  .then((responseValue) => {
    console.log(responseValue);
    return responseValue.json();
  })
  .then((data) => {
    console.log(data);
  });

// async-await
async function getDataFromWikipedia() {
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log("From async function", data);

  console.log(data.query.search);
  const wikipediaContainer = document.getElementById("wikipedia");
  data.query.search.forEach((searchResult) => {
    const title = document.createElement("h1");
    title.innerText = searchResult.title;
    wikipediaContainer.appendChild(title);
    const div = document.createElement("div");
    div.innerHTML = searchResult.snippet;
    wikipediaContainer.appendChild(div);
  });
}

getDataFromWikipedia();

async function fetchRickAndMortyData() {
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const data = await response.json();
  console.log("fetching data from rick and morty", data);
  const rickAndMortyContainer = document.getElementById("rickAndMorty");
  data.results.forEach((character) => {
    console.log(character.name, character.image);

    const title = document.createElement("h1");
    title.innerText = character.name;
    rickAndMortyContainer.appendChild(title);

    const img = document.createElement("img");
    img.setAttribute("src", character.image);
    rickAndMortyContainer.appendChild(img);
  });
}
fetchRickAndMortyData();

// API -> application programming interface

const promise = fetch("https://www.google.com/");
promise.catch((err) => {
  console.warn(err);
  document.body.innerHTML = "There was an error!";
});
