const mongoose = require("mongoose");

const possiblePokeTypes = [
  "electro",
  "fire",
  "water",
  "dirt",
  "grass",
  "normal",
  "ghost",
  "fly",
  "dragon",
];

const pokeTypeSchema = mongoose.Schema({
  name: {
    type: String,
    enum: possiblePokeTypes,
    required: true,
    unique: true,
  },
  strongAgainst: {
    type: String,
    enum: possiblePokeTypes,
  },
  weakAgainst: {
    type: String,
    enum: possiblePokeTypes,
  },
});

const PokeType = mongoose.model("pokeType", pokeTypeSchema);

module.exports = PokeType;
