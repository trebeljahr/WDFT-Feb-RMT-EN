// npm init -y
// we use the core module http

// old way
// const http = require("http");

// new way
import http from "http";
import chalk from "chalk";

const server = http.createServer((request, response) => {
  console.log("this is the requested url: ", request.url);
  console.log("this is the requested method: ", request.method);
  console.log("this is the request handler");
  // only for a specific request url we want to display the home page string
  if (request.url === "/") {
    response.end("<h1>this is the home page</h1>");
  } else if (request.url === "/about") {
    response.end("<h1>this is the about page</h1>");
  } else {
    response.end("<h1>404 - Not Found</h1>");
  }
});

// start the server - common to use: 3000, 8000, 5555, 5000, 5500, 4000, 8080
const port = 3000;
server.listen(port, () => {
  // ahem! beautiful logs are very important!
  console.log(chalk.green(`🦄 🌈  ================================= 🌈 🦄`));
  console.log(chalk.green(`       Starting up server on port ${port}`));
  console.log(
    chalk.green(`       Go to ${chalk.blue("https://localhost:" + port)}`)
  );
});
