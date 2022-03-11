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

server.get("/", (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
