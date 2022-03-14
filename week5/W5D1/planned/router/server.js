const express = require("express");
const app = express();
// to use the router we have to import it.
// ./login - points to the file our router is defined in
// if we move it or rename it, we also have to change this import in here!
const loginRoutes = require("./routes/login");

const PORT = 3000;

// we have to use the Router!
// just like a middleware.
app.use(loginRoutes);

// now our app has all the routes that loginRoutes provided!

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
