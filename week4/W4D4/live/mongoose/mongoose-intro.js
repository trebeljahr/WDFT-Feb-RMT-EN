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
    return paddedPokeTypes;
  }
  return pokeTypes;
}

const generationsEnum = [];
for (let i = 0; i < 7; i++) {
  generationsEnum.push(i + 1);
}
const typeValidator = (movesArray) => {
  return movesArray.length === 2;
};
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
      validator: typeValidator,
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

  const raichu = new Pokemon({
    name: "Raichu",
    hp: 60,
    moves: ["Thunderbolt", "", "", ""],
    pokeTypes: ["Electro"],
  });

  await raichu.save();

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

  const [pikachuFromDB] = await Pokemon.find({ name: "Pikachu" });
  console.log(pikachuFromDB.name);

  const all = await Pokemon.find();
  console.log(all);

  const pikachuAndRaichu = await Pokemon.find({
    name: { $in: ["Pikachu", "Raichu"] },
  });
  console.log(pikachuAndRaichu);

  const onlyPikachu = await Pokemon.findOne({
    name: { $in: ["Pikachu", "Raichu"] },
  });
  console.log(onlyPikachu);

  const noPokemon = await Pokemon.find({ name: "Ditto" });
  console.log(noPokemon);

  // console.clear();

  // const ourId = "6229fa79fc793a1204843213";
  // console.log(onlyPikachu._id);
  const foundById = await Pokemon.findById(onlyPikachu._id);
  console.log(foundById);

  const totalNumber = await Pokemon.countDocuments();
  console.log(totalNumber);

  const hpOver50 = await Pokemon.countDocuments({
    hp: { $gt: 50 },
  });

  console.log(hpOver50);

  const typeOnlyElectro = await Pokemon.find({
    pokeTypes: { $all: ["Electro", ""] },
  });
  console.log(typeOnlyElectro);

  await Pokemon.updateOne({ name: "Pikachu" }, { hp: 300 });
  const newTypes = ["Electricity", "Thunder", "A third type"];
  await Pokemon.updateMany(
    { pokeTypes: { $all: ["Electro", ""] } },
    { pokeTypes: newTypes },
    { runValidators: true }
  );

  const beforeUpdate = await Pokemon.findOneAndUpdate(
    { name: "Pikachu" },
    { name: "Pikachu2" }
  );
  console.log(beforeUpdate);
  const afterUpdate = await Pokemon.findById(beforeUpdate._id);
  console.log(afterUpdate);

  async function replaceNameOfPokemon(old, update) {
    return await Pokemon.findOneAndUpdate(
      { name: old },
      { name: update },
      {
        returnDocument: "after",
      }
    );
  }

  const afterUpdate2 = await replaceNameOfPokemon("Pikachu2", "Raichu123");
  console.log(afterUpdate2);

  await Pokemon.deleteOne({ name: "Bulbasaur" });
  // await Pokemon.deleteMany({
  //   pokeTypes: { $all: ["Electricity", "Thunder"] },
  // });
  // cleans everything in the collection of pokemons
  // await Pokemon.deleteMany();
  await mongoose.connection.close();
}

main();
