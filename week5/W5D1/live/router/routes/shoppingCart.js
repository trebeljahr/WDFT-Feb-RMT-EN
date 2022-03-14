const router = require("express").Router();

router.get("/shoppingCart", (req, res) => {
  res.send("Shopping Cart Page");
});

module.exports = router;
