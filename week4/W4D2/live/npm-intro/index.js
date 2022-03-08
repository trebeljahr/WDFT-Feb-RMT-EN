// first have to npm i express in your director for this to work!
const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  console.log("Hello world, we got a get request!!!!!");
  //   response.send("Hello world from our own server");

  response.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
  console.log("Hello listening on port 3000");
});
