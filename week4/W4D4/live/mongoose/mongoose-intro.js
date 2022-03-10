const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hp: {
    type: Number,
    required: true,
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
  });

  await pikachu.save();

  const pikachu2 = new Pokemon({
    name: "Pikachu",
    hp: 50,
  });

  await pikachu2.save();

  const charizard = new Pokemon({
    name: "Charizard",
    hp: 150,
  });
  await charizard.save();

  await mongoose.connection.close();
}

main();
