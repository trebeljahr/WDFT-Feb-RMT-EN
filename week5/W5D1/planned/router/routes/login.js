const express = require("express");
const morgan = require("morgan");
// think of router as a separate part of the app, that we can later
// use in the main app.
// instead of writing all the routes and logic at the same place
// we can now easily split them among different files and places in our code
// this makes the whole thing MUCH more maintainable.
const router = express.Router();

// just like with app, we can use middlewares on it.
// keep in mind these middlewares will only be used on the routes from this router.
// not on the ones from the whole app.
router.use(morgan("dev"));

// registering routes works just like with app.get
// we have access to req.params and req.query like we are used to
router.get("/login/:user", (req, res) => {
  console.log("We are trying to login");
  res.send("Login Page for " + req.params.user);
});

router.get("/logout", (req, res) => {
  console.log("We are trying to logout");
  res.send("Logout Page");
});

// to make our router available outside we have to export it.
module.exports = router;

// module.exports can also be an object - this way we could destructure
// it when we "require" it from another piece of code
// example:
// module.exports = { router1, router2 }
// we only need router1
// const { router1 } = require("./login")
