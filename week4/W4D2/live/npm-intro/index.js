const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log("Hello world, we got a get request!!!!!");
  response.send("Hello world from our own server");
});

app.listen(3000, () => {
  console.log("Hello listening on port 3000");
});
