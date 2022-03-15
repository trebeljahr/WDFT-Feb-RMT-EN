const mongoose = require("mongoose");

const pokeMoveSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  pokeType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pokeType",
    required: true,
  },
});

const PokeMove = mongoose.model("pokeMove", pokeMoveSchema);

module.exports = PokeMove;
