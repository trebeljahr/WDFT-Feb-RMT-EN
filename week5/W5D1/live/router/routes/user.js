const router = require("express").Router();

router.get("/user", (req, res) => {
  res.send("Hello User");
});

router.get("/login", (req, res) => {
  res.send("The login page");
});

router.use(require("./anotherRouter"));

module.exports = router;
