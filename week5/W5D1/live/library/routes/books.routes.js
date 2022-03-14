const router = require("express").Router();
const Book = require("../models/Book.model");
const mongoose = require("mongoose");

router.get("/books", async (req, res) => {
  const booksFromDB = await Book.find();
  console.log(booksFromDB);
  res.render("books", { allTheBooks: booksFromDB });
});

router.get("/books/create", (req, res) => {
  res.render("createBook");
});

router.post("/books/create", async (req, res) => {
  console.log(req.body);
  const userCreatedBook = new Book({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    rating: req.body.rating,
  });

  //   const { title, description, author, rating } = req.body;
  //   const userCreatedBook = new Book({
  //     title,
  //     description,
  //     author,
  //     rating,
  //   });

  //   const userCreatedBook = new Book({ ...req.body });
  await userCreatedBook.save();
  res.redirect("/books");
});

router.get("/books/:id", async (req, res) => {
  const bookId = mongoose.Types.ObjectId(req.params.id);
  const bookDetails = await Book.findById(bookId);
  console.log(bookDetails);
  //   res.send("Hello from single book page");
  res.render("singleBook", { bookDetails });
});

router.delete("/books/:id/delete", async (req, res) => {
  const bookId = mongoose.Types.ObjectId(req.params.id);
  console.log("bookId to delete", bookId);

  await Book.findByIdAndDelete(bookId);
  res.send("Successfully deleted");
});

router.post("/books/:id/edit", async (req, res) => {
  const bookId = mongoose.Types.ObjectId(req.params.id);
  await Book.findByIdAndUpdate(bookId, { ...req.body });
  res.redirect("/books/" + bookId);
});

module.exports = router;
