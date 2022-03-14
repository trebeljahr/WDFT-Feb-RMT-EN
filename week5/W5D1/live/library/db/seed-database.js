const data = require("./seed-data");

const mongoose = require("mongoose");
const Book = require("../models/Book.model");

async function main() {
  try {
    await mongoose.connect("mongodb://localhost/library");
    await Book.insertMany(data);
    console.log("Success, data seeded correctly to the db");
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.connection.close();
    console.log("Closed the DB connection");
  }
}

main();
