const chalk = require("chalk");
const hello = () => chalk.blue("hello! ...");
const goodbye = () => chalk.redBright("goodbye!");

module.exports = {
  helloFunction: hello,
  goodbyeFunction: goodbye,
};
