console.log(global.Math);
function pickRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(Math.random());
  return array[randomIndex];
}

module.exports = pickRandom;
