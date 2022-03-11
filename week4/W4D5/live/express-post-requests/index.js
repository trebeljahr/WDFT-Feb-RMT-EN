// const axios = require("axios");
require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const PORT = 3000;
const server = express();

console.log(process.env.secret);
server.set("view engine", "hbs");

server.use(express.static(path.join(__dirname, "public")));
server.use("/user-content", express.static(path.join(__dirname, "uploads")));

// this not needed anymore -> bodyParser()
// server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(
  fileUpload({
    createParentPath: true,
  })
);

server.post("/image-upload", async (req, res) => {
  console.log(req.files);

  let imageData = req.files.image;
  console.log(req.files.image);
  // "/home/rico/ironhack/WDFT-14FEB2022/week4/W4D5/live/express-post-requests  /uploads/box.png"
  const location = path.join(__dirname, "uploads", imageData.name);
  await imageData.mv(location);
  res.render("image", { imgUrl: path.join("/user-content", imageData.name) });
});

server.post("/post-example", (req, res) => {
  console.log(req.body);
  res.send("Received the form!");
});

server.get("/", (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
