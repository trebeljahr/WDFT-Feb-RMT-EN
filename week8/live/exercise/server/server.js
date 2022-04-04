require("dotenv/config");
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const PORT = process.env.PORT || 5005;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN || "http://localhost:3000",
  })
);

app.get("/api/pokemon", async (req, res, next) => {
  const response = await axios.get(
    "https://pokeapi.glitch.me/v1/pokemon/squirtle"
  );
  console.log(response);
  res.json({ message: "Hello there!", pokemon: response.data[0] });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
