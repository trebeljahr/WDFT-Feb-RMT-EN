const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = 3000;

app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("upper", (string) => {
  return string.toUpperCase() + "!!!!!!";
});

app.get("/", (_, res, next) => {
  res.render("home", {
    homePage: true,
    title: "{{{Index Page}}}",
    text: "Hello world, this is rendered with our handlebars templating engine",
    movie: {
      name: "Lord of the Rings",
      director: {
        name: "Peter Jackson",
        text: "an awesome director",
      },
      genre: "Fantasy",
      text: "Lord of the Rings is a trilogy",
    },
    // city: "Berlin",
    todos: [
      "Do Ironhack Bootcamp",
      "Build awesome app",
      "Get Rich quickly",
      "Retire :)",
    ],
    cities: ["Portimao", "Berlin", "Paris", "Lisbon"],
    people: ["Renato", "Rico", "Adryan", "Jaime"],
    // XSS attack
    htmlCode: "<h1 style='color: red'>Hello from our HTML string!</h1>",
  });
});

app.get("/some-route", (_, res) => {
  res.render("some-route.hbs", { pageTitle: "Some Route", someRoute: true });
});

app.get("/about", (_, res) => {
  res.render("about", {
    pageTitle: "About",
    aboutPage: true,
    altText: "some image",
    imageSrc:
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  });
});

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});
