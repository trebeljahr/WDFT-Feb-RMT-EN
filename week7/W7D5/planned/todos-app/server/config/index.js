const express = require("express");
const logger = require("morgan");

// ℹ️ Needed to accept from requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request if from the same domain, by default express wont accept POST requests
const cors = require("cors");

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
