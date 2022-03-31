const { Schema, model } = require("mongoose");

const TodoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { Todo: model("todo", TodoSchema) };
