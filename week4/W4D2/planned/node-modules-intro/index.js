console.log("hello node");
// console.log(process.platform)
// console.log(global)

// these variables are set by node
// console.log('directory: ', __dirname)
// console.log('this is the current file: ', __filename)

const chalk = require("chalk");

console.log(chalk.green("Hello world!"));

// https://github.com/sindresorhus/awesome-nodejs#weird

// https://github.com/SkyHacks/nerds
let nerds = require("nerds");
let multiPoke = nerds.resolve("Pokemon", 3).asArray();
console.log(multiPoke);

// create a folder
// run npm init (-y)
// create a file
// install one of the packages
// try it out

const supervillains = require("supervillains");
const randomVillain = supervillains.random();
console.log(
  `A randomly picked villain: 😈 ${chalk.magentaBright(randomVillain)} 😈`
);

// this is using a node internal module
// we need this line but we don't need to install it before
const crypto = require("crypto");
const randomStr = crypto.randomBytes(10).toString("Hex");
console.log("Random string:", chalk.yellow(randomStr));

// we want to use the add function from add.js

const addNumbers = require("./functions/add");

console.log("3 + 7 =", addNumbers(3, 7));

// we import the functions from functions.js

const functions = require("./functions");
console.log(functions.helloFunction());
console.log(functions.goodbyeFunction());

// or we can use obj destructuring to pick what we need
const { helloFunction, goodbyeFunction } = require("./functions");
console.log(helloFunction());
console.log(goodbyeFunction());

// access a parameter from the command line -> node index.js hello
const param = process.argv[2];
console.log(param); // -> hello
