const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon");
const PokeType = require("./models/pokeType");
const PokeMove = require("./models/pokeMove");

async function main() {
  await mongoose.connect("mongodb://localhost/relations-in-mongoose");
  const pikachuFromDb = await Pokemon.findOne({ name: "Pikachu" });

  //   const fireType = new PokeType({
  //     name: "fire",
  //     strongAgainst: "grass",
  //     weakAgainst: "water",
  //   });
  //   await fireType.save();

  await pikachuFromDb.populate("pokeType");
  await pikachuFromDb.populate({
    path: "moves",
    populate: { path: "pokeType" },
  });
  console.log(pikachuFromDb);
  console.log(pikachuFromDb.moves);
}
main();
