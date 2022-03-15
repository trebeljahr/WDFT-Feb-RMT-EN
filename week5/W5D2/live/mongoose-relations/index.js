const mongoose = require("mongoose");
const PokeType = require("./models/pokeType");
const Pokemon = require("./models/pokemon");
const PokeMove = require("./models/pokeMove");
// const pokemon = {
//   name: "Pikachu",
//   hp: 50,
//   pokeType: ObjectId("lakdjfödalsfjdaslfhdasfsahddjfdhsa"),
// };

// const electro = {
//   _id: ObjectId("lakdjfödalsfjdaslfhdasfsahddjfdhsa"),
//   type: "electro",
//   strongAgainst: "water",
//   weakAgainst: "dirt",
// };

// relationships one could have:
// one - to - many
// many - to - one
// many - to - many

// rule of cardinality

async function main() {
  await mongoose.connect("mongodb://localhost/relations-in-mongoose");
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();

  await mongoose.connect("mongodb://localhost/relations-in-mongoose");

  const electroType = new PokeType({
    name: "electro",
    strongAgainst: "water",
    weakAgainst: "dirt",
  });
  await electroType.save();

  const thunderbolt = new PokeMove({
    name: "Thunderbolt",
    strength: 70,
    pokeType: electroType,
  });
  await thunderbolt.save();

  const paralysis = new PokeMove({
    name: "Paralysis",
    strength: 10,
    pokeType: electroType,
  });
  await paralysis.save();

  const pikachu = new Pokemon({
    name: "Pikachu",
    hp: 50,
    pokeType: electroType,
    moves: [thunderbolt, paralysis],
  });
  await pikachu.save();

  const raichu = new Pokemon({
    name: "Raichu",
    hp: 100,
    pokeType: electroType,
    moves: [thunderbolt],
  });
  await raichu.save();

  const pikachuFromDb = await Pokemon.findOne({ name: "Pikachu" });
  await pikachuFromDb.populate("pokeType");
  await pikachuFromDb.populate({
    path: "moves",
    populate: { path: "pokeType" },
  });
  console.log(pikachuFromDb);
  console.log(pikachuFromDb.moves);

  await pikachu.attack(0, raichu._id);
  await raichu.attack(0, pikachu._id);
  await pikachu.attack(0, raichu._id);

  const raichuFromDb = await Pokemon.findOne({ name: "Raichu" });
  await raichuFromDb.populate("pokeType");
  await raichuFromDb.populate({
    path: "moves",
    populate: { path: "pokeType" },
  });
  console.log(raichuFromDb);

  await mongoose.connection.close();
}

main();
