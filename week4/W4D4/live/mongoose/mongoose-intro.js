const mongoose = require("mongoose");

// not related to mongoose - more about how module.exports and require work
const ourModule = require("./our-own-module");
console.log(ourModule);

function padPokeTypesToLength(pokeTypes, length) {
  for (let i = pokeTypes.length; i < length; i++) {
    pokeTypes.push("");
  }
  return pokeTypes;
}

function completePokeTypes(pokeTypes) {
  if (pokeTypes.length === 2) {
    return pokeTypes;
  }
  if (pokeTypes.length < 2) {
    const paddedPokeTypes = padPokeTypesToLength(pokeTypes, 2);
    console.log(paddedPokeTypes);
    return paddedPokeTypes;
  }
  return pokeTypes;
}

const generationsEnum = [];
for (let i = 0; i < 7; i++) {
  generationsEnum.push(i + 1);
}

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hp: {
    type: Number,
    required: true,
    min: 0,
    max: 1000,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  generation: {
    type: Number,
    enum: generationsEnum,
    default: 1,
  },
  moves: {
    type: [String],
    required: true,
    validate: {
      validator: (movesArray) => {
        return movesArray.length === 4;
      },
      message: "Pokemons should have 4 moves",
    },
    default: ["", "", "", ""],
  },
  pokeTypes: {
    type: [String],
    set: completePokeTypes,
    validate: {
      validator: (movesArray) => {
        return movesArray.length === 2;
      },
      message: "Pokemons should have exactly 2 types",
    },
  },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

async function main() {
  // this is a "hack" that will delete the old data, so that we can develop on our
  // schema without "weird" surprises
  await mongoose.connect("mongodb://localhost:27017/live-pokemon");
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();

  await mongoose.connect("mongodb://localhost:27017/live-pokemon");
  console.log("We connected successfully!");

  const pikachu = new Pokemon({
    name: "Pikachu",
    hp: 30,
    moves: ["Thunderbolt", "", "", ""],
    pokeTypes: ["Electro"],
  });

  await pikachu.save();

  //   const pikachu2 = new Pokemon({
  //     name: "Pikachu",
  //     hp: 50,
  //   });

  //   await pikachu2.save();

  const charizard = new Pokemon({
    name: "Charizard",
    hp: 150,
    pokeTypes: ["Fire", "Dragon"],
  });
  await charizard.save();

  const bulbasaur = new Pokemon({
    name: "Bulbasaur",
    hp: 0,
    pokeTypes: ["Grass", "Flower"],
    generation: 1,
  });
  await bulbasaur.save();

  await mongoose.connection.close();
}

main();
