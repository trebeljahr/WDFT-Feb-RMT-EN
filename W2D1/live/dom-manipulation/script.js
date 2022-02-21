console.log("Hello world from the JS");

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    score: 9,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: "Schindler”s List",
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.9,
  },
  {
    title: "Il buono, il brutto, il cattivo",
    year: 1966,
    director: "Sergio Leone",
    duration: "3h 2min",
    genre: ["Western"],
    score: 8.9,
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    score: 8.8,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.8,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Comedy", "Drama", "Romance"],
    score: 8.8,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    duration: "2h 4min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    score: 8.8,
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    score: 8.8,
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    duration: "2h 59min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.7,
  },
  {
    title: "One Flew Over the Cuckoo”s Nest",
    year: 1975,
    director: "Milos Forman",
    duration: "2h 13min",
    genre: ["Drama"],
    score: 8.7,
  },
  {
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    duration: "2h 26min",
    genre: ["Crime", "Drama"],
    score: 8.7,
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski",
    duration: "2h 16min",
    genre: ["Action", "Sci-Fi"],
    score: 8.7,
  },
];
console.log(document);

const ourH1 = document.getElementById("heading");
console.log(ourH1);

ourH1.innerHTML = "We changed it from JS!";

const h2 = document.createElement("h2");
h2.innerText = "This is an H2 we created from JS";

const divContainer = document.getElementById("container");
divContainer.appendChild(h2);

const listContainer = document.createElement("ul");

// let's say we want to add the numbers 10-100 to our html - how could we do that?
for (let i = 10; i < 15; i++) {
  const listElement = document.createElement("li");
  listElement.innerText = i;
  listContainer.appendChild(listElement);
}

divContainer.appendChild(listContainer);

// .forEach
// not really - .map
// for
// would technically work but kind of tedious - while
// for of

function addMovieElementToDOM(movie) {
  const divForTheMovie = document.createElement("div");

  // <div>
  // <h3>Title</h3>
  // <p>Director</p>
  // </div>
  const movieTitleElement = document.createElement("h3");
  movieTitleElement.innerText = movie.title; // "<h1>Harry Potter</h1>"
  divForTheMovie.appendChild(movieTitleElement);

  const movieDirectorElement = document.createElement("p");
  movieDirectorElement.innerText = movie.director;
  divForTheMovie.appendChild(movieDirectorElement);

  //   divForTheMovie.innerText = movie.title + " " + movie.director;
  divContainer.appendChild(divForTheMovie);
}

movies.forEach(addMovieElementToDOM);

// divContainer.innerHTML = "<script>console.log(1)</script>";

// return HTMLCollections which look like arrays but aren't
const headings = document.getElementsByClassName("heading");
console.log(headings);

// for (let i = 0; i < headings.length; i++) {
//   console.log(headings[i]);
// }

// headings.forEach((element) => console.log(element));

// one way to convert from HTMLcolletion to an actual array
const headingsAsAnArray = [...headings];
headingsAsAnArray.forEach((element, index) => {
  //   element.style.background = "red";
  element.className += " classNameFromJS";
  element.id = "someDifferentId" + index;
  console.log(element);
});

const button = document.getElementById("increment");

button.addEventListener("click", (event) => {
  console.log("the event", event);
  console.log("I was clicked");

  const counterElement = getsCounterElement();
  setStyleToRed(counterElement);
  const currentValue = getValueOfCounterElement(counterElement);
  counterElement.innerText = currentValue + 1;
});

function setStyleToRed(element) {
  element.style.background = "red";
}

function setStyleToBlue(element) {
  element.style.background = "blue";
}

function getValueOfCounterElement(counterElement) {
  const currentValue = Number(counterElement.innerText);
  console.log(currentValue);
  console.log(typeof currentValue);
  return currentValue;
}

const decrementButton = document.getElementById("decrement");

decrementButton.addEventListener("click", (event) => {
  console.log("the event", event);
  console.log("I was clicked");

  const counterElement = getsCounterElement();
  setStyleToBlue(counterElement);
  const currentValue = getValueOfCounterElement(counterElement);
  counterElement.innerText = currentValue - 1;
});

// button.removeEventListener("click");

// button.onclick = () => {
//   console.log("Hello World");
// };

console.log(button);
// document.appendChild()
// document.body.appendChild()

// querySelector returns only the first match
// querySelectorAll will return all matches
const firstDiv = document.querySelector("div#container");
console.log(firstDiv);

console.log(divContainer.querySelector("div#container"));

console.log(document.querySelector("#heading"));

function getsCounterElement() {
  const counterElement = document.getElementById("counter");
  return counterElement;
}

console.log(document.querySelector("#container > h1"));

// const formSubmitButton = document.querySelector("form > button");
const formSubmitButton = document.getElementById("form-button");
formSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.parentNode);
  console.log(event.target.parentNode.parentNode);
  // would also technically work but is deprecated - event.srcElement
  alert(1);
  const textInput = document.getElementById("textInput");
  const theValue = textInput.value;
  console.log(theValue);
  textInput.value = "You've submitted";
});

formSubmitButton.id = "formButton";
// .setAttribute
formSubmitButton.setAttribute("id", "formButton");
