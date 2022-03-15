const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  pokeType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pokeType",
    required: true,
  },
  moves: [
    { type: mongoose.Schema.Types.ObjectId, ref: "pokeMove", required: true },
  ],
});

pokemonSchema.methods.attack = async function (
  indexOfTheMove,
  _idOfpokemonToAttack
) {
  const move = this.moves[indexOfTheMove];
  const pokemonToAttack = await Pokemon.findOne({ _id: _idOfpokemonToAttack });
  pokemonToAttack.hp -= move.strength;
  await pokemonToAttack.save();
  console.log(
    `${this.name} attacked with ${move.name}. Remaining HP of ${pokemonToAttack.name} is ${pokemonToAttack.hp}`
  );
};

const Pokemon = mongoose.model("pokemon", pokemonSchema);

module.exports = Pokemon;
