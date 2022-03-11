const axios = require("axios");
const express = require("express");
const path = require("path");
const PORT = 3000;
const server = express();

server.set("view engine", "hbs");

server.use(express.static(path.join(__dirname, "public")));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const characterEndpoint = "https://rickandmortyapi.com/api/character/"; // + "?name=" + req.query.character + "&" + "hello=someValue";
server.get("/find-by-name", async (req, res) => {
  try {
    const apiResponse = await axios.get(characterEndpoint, {
      params: { name: req.query.character },
    });
    console.log(apiResponse.status);
    //   console.log(apiResponse);
    console.log(apiResponse.data);
    const [firstCharacterFound] = apiResponse.data.results;
    console.log(req.query);
    // { character: "hello", episode: 5}
    res.render("character", {
      name: firstCharacterFound.name,
      imgUrl: firstCharacterFound.image,
    });
  } catch (err) {
    console.log("this is the error we got from the API", err);
    res.send(
      "Your character doesn't exist in our database." +
        "Our API says: " +
        err.response.data.error
    );
  }
});

// localhost:3000/character/hello/10/berlin
server.get("/example/:message/:id/:city", (req, res) => {
  console.log(req.params);
  const parameters = Object.entries(req.params)
    .map((elem) => elem.join(":"))
    .join(", ");
  console.log(parameters);
  // "id: 5, hello: 10"
  res.send("Your parameters in the url are: " + parameters);

  // alternatively we could do
  // res.send("Your parameters in the url are: " + JSON.stringify(req.params));
});

server.get("/city/:cityName", (req, res) => {
  const { cityName } = req.params;

  const imageUrl = `/images/${cityName}.jpg`;
  console.log(imageUrl);

  res.render("city", { cityName, imageUrl });
});

server.get("/", (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
