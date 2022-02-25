const spiderMan = {
  firstName: "Peter",
  lastName: "Parker",
  secretIdentiy: "Spider Man",
  abilities: [],
  revealSecretIdentity: function () {
    console.log(`I am ${this.secretIdentiy}`);
  },
  learnNewAbility(ability) {
    this.abilities.push(ability);
  },
  bragAboutAbilities() {
    console.log(`I can do all this:`);
    this.abilities.forEach((ability, index) => {
      console.log(`${index + 1}. ${ability}`);
    });
  },
  sayHello() {
    // console.log("Hello");
    // return "Hello I am Peter Parker"
    return `Hello I am ${this.firstName} ${this.lastName}`;
  },
  sayBye: (person) => {
    console.log(`Goodbye ${person}`);
  },
};

console.log(spiderMan.revealSecretIdentity);

console.log(spiderMan.sayHello);
console.log(spiderMan.sayHello());

spiderMan.sayBye("Tony Stark");

spiderMan.revealSecretIdentity();
// sayHello();

spiderMan.learnNewAbility("Can jump really high");
spiderMan.learnNewAbility("Can shoot webs");
spiderMan.learnNewAbility("Can cook");

// console.log(spiderMan.abilities);
spiderMan.bragAboutAbilities();
