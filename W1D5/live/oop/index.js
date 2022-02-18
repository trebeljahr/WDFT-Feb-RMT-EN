// const spiderMan = {
//   firstName: "Peter",
//   lastName: "Parker",
//   secretIdentiy: "Spider Man",
//   abilities: [],
//   revealSecretIdentity: function () {
//     console.log(`I am ${this.secretIdentiy}`);
//   },
//   learnNewAbility(ability) {
//     this.abilities.push(ability);
//   },
//   bragAboutAbilities() {
//     console.log(`I can do all this:`);
//     this.abilities.forEach((ability, index) => {
//       console.log(`${index + 1}. ${ability}`);
//     });
//   },
//   sayHello() {
//     // console.log("Hello");
//     // return "Hello I am Peter Parker"
//     return `Hello I am ${this.firstName} ${this.lastName}`;
//   },
//   sayBye: (person) => {
//     console.log(`Goodbye ${person}`);
//   },
// };

// console.log(spiderMan.revealSecretIdentity);

// console.log(spiderMan.sayHello);
// console.log(spiderMan.sayHello());

// spiderMan.sayBye("Tony Stark");

// spiderMan.revealSecretIdentity();
// // sayHello();

// spiderMan.learnNewAbility("Can jump really high");
// spiderMan.learnNewAbility("Can shoot webs");
// spiderMan.learnNewAbility("Can cook");

// // console.log(spiderMan.abilities);
// spiderMan.bragAboutAbilities();

// Date in JS is a class as well
// new Date()
class Superhero {
  constructor(firstName, lastName, secretIdentity) {
    // console.log("Hello from Superhero constructor");
    // console.log(firstName, lastName, secretIdentity);
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = firstName + " " + lastName;
    this.secretIdentity = secretIdentity;
    this.abilities = [];
    // would work
    // this.sayBye = () => {}
    // this.sayBye = function() {}

    // doesn't work
    // this.sayBye() {}
  }

  sayBye(person) {
    console.log(`Goodbye ${person}`);
  }

  revealSecretIdentity() {
    console.log(`I am ${this.secretIdentiy}`);
  }

  learnNewAbility(ability) {
    this.abilities.push(ability);
  }

  bragAboutAbilities() {
    // []
    if (this.abilities.length === 0) {
      console.log("I can't do anything I am sorry");
      return;
    }

    console.log(`I can do all this:`);
    this.abilities.forEach((ability, index) => {
      console.log(`${index + 1}. ${ability}`);
    });
  }

  sayHello() {
    // console.log("Hello");
    // return "Hello I am Peter Parker"
    return `Hello I am ${this.firstName} ${this.lastName}`;
  }

  // don't work
  //   sayBye: () => {}
  //   sayBye: function () {}
}

const tonyStark = new Superhero("Tony", "Stark", "IronMan");
console.log(tonyStark.firstName);
tonyStark.sayBye("Ernesto");

const tonyStark2 = new Superhero("Tony2", "Stark", "IronMan");
console.log(tonyStark2.firstName);
tonyStark2.sayBye("Rowena");

const peterParker = new Superhero("Peter", "Parker", "SpiderMan");

peterParker.learnNewAbility("Can jump really high");
peterParker.learnNewAbility("Can shoot webs");
peterParker.learnNewAbility("Can cook");

peterParker.bragAboutAbilities();

tonyStark.bragAboutAbilities();
