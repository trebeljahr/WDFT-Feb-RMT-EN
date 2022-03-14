const express = require("express");

const app = express();

const PORT = 3000;

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.use(require("./routes/shoppingCart"));
app.use(require("./routes/languages"));

app.get("/", (_, res) => {
  res.send("Hello Berlin");
});

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});

// "/", [firstFunction, secondFunction ....]

// "/", "/shoppingCart", "/user", "/login", "/another-route"
