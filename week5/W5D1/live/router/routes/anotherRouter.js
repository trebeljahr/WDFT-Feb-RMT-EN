const router = require("express").Router();

router.get("/another-route", (_, res) => {
  res.send("Hello from another route");
});

router.get("/hello/another-route/somethingSpecific", (req, res) => {
  res.redirect("/login");
  //   res.send("This is something very specific and important");
});

router.get("/hello/another-route/:id", (req, res) => {
  console.log(req.params.id);
  res.send("Hello from /hello/another-route/" + req.params.id);
});

module.exports = router;
