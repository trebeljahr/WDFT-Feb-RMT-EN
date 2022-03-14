const router = require("express").Router();

router.get("/languages/fr", (req, res) => {
  res.send("Bonjour");
});

router.get("/languages/it", (req, res) => {
  res.send("Ciao");
});

router.get("/languages/in", (req, res) => {
  res.send("Namaste");
});

router.get("/languages/:any", (req, res) => {
  console.log(req.params);
  res.send("Hello, your language is not supported. Sry");
});

module.exports = router;
