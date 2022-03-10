const mongoose = require("mongoose");

// not related to mongoose - more about how module.exports and require work
const ourModule = require("./our-own-module");
console.log(ourModule);

function padStringArrayToLength(strArray, length) {
  for (let i = strArray.length; i < length; i++) {
    strArray.push(defaultPadding);
  }
  return strArray;
}

function stringArrayPaddingFactory(length) {
  function completeStrArray(strArray) {
    if (strArray.length === length) {
      return strArray;
    }
    if (strArray.length < length) {
      const paddedstrArray = padStringArrayToLength(strArray, length);
      console.log(paddedstrArray);
      return paddedstrArray;
    }
    return strArray;
  }
  return completeStrArray;
}

const padToLength2 = stringArrayPaddingFactory(2);

const generationsEnum = [];
for (let i = 0; i < 7; i++) {
  generationsEnum.push(i + 1);
}

// more stuff you could do with function factories/currying/higher order functions
const removeDecimals = (value) => Math.floor(value);
// currying -> is the name for that pattern/idea
const roundToDigitFactory = (len) => (value) => Number(value.toFixed(len));

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hp: {
    set: roundToDigitFactory(2),
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

    set: stringArrayPaddingFactory(4),
    validate: {
      validator: (movesArray) => {
        return movesArray.length === 4;
      },
      message: "Pokemons should have 4 moves",
    },
    default: [],
  },
  pokeTypes: {
    type: [String],
    set: padToLength2,
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
    moves: ["Thunderbolt"],
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
