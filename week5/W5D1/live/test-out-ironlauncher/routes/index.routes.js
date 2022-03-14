const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/hello", (req, res) => {
  res.render("hello", { name: "Berlin" });
});
module.exports = router;
