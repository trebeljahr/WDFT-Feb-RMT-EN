const { Todo } = require("../models/Todo.model");
const router = require("express").Router();

router.get("/todos", async (req, res, next) => {
  const todos = await Todo.find();
  return res.json({ todos });
});

router.delete("/todos/delete", async (req, res, next) => {
  console.log(req.body);
  const id = req.body.id;
  await Todo.findOneAndDelete({ _id: id });
  return res.json({ message: "Delete success" });
});

router.post("/todos/update", async (req, res, next) => {
  console.log(req.body);
  const { name, done } = req.body;
  await Todo.updateOne(
    { _id: req.body._id },
    { name, done },
    {
      upsert: true,
    }
  );
  return res.json({ message: "Update success" });
});

router.post("/todos/create", async (req, res, next) => {
  try {
    const { name, done } = req.body;
    console.log(req.body);
    const newTodo = await Todo.create({ name, done });
    return res.json({ message: "Create success", todo: newTodo });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "There was an error creating the todo" });
  }
});
module.exports = router;
