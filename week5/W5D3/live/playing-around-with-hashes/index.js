const bcrypt = require("bcrypt");
const saltRounds = 10;

async function main() {
  const salt = await bcrypt.genSalt(saltRounds);
  console.log(salt);
  const hash = await bcrypt.hash("password", salt);
  console.log(hash);
  const sameHash = await bcrypt.hash("password", salt);
  console.log(sameHash);

  // don't do that!!!!
  // const doTheyMatch = hash === sameHash;

  const hash2 = await bcrypt.hash("another-password", salt);
  console.log(hash2);

  const check = await bcrypt.compare("password", hash);
  console.log("Are they the same? ", check ? "Yes" : "No");
}

main();
