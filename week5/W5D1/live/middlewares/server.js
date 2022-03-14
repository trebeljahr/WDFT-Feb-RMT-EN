const express = require("express");
const app = express();

// const staticMiddleware = express.static(__dirname + "/public");
// app.use("/public", staticMiddleware);

function pizzaLogger(req, res, next) {
  console.log("Pizza!!!!");
  next();
}

app.use("/hello/pizza", pizzaLogger);

app.use((req, res, next) => {
  if (req.method === "POST") {
    console.log("We received a POST request");
  }
  console.log("Hello from our middleware");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

function handleRoutesWithoutResponse(req, res, next) {
  res.send("404 - Sry this route doesn't exist on our server!");
  next();
}

app.use(handleRoutesWithoutResponse);
app.use(lastLog);

function lastLog(req, res, next) {
  console.log("Hello I am last!");
  next();
  //   res.send("Trying to overwrite earlier response");
}

app.listen(3000, () => {
  console.log("Listening...");
});

// "/", []
