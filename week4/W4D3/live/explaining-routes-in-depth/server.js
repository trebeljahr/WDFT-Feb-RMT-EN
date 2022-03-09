const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/public"));
app.use("/views/admin/super-user", express.static(__dirname + "/views2"));

// this is what express static is kind of writing for us!
// app.get("/css/index.css", (req, res) => {
//   res.sendFile(__dirname + "/public/css/index.css");
// });

app.get("/", (_, res, next) => {
  res.sendFile(__dirname + "/views2/index.html");
});

app.get("/some-route-we-like", (_, res) => {
  res.sendFile(__dirname + "/views2/some-route.html");
});

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});

// "/"
// "/some-route-we-like"
// "/views/admin/super-user/index.html"
// "/views/admin/super-user/some-route.html"
// "/css/index.css"
// "/someJs.js"
