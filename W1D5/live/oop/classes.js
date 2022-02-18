// Date in JS is a class as well
// new Date()
class Superhero {
  constructor(firstName, lastName, secretIdentity) {
    // console.log("Hello from Superhero constructor");
    // console.log(firstName, lastName, secretIdentity);

    // attaching the arguments we pass into the constructor
    // to the new instance of the class we create
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

// new ClassName() -> calls the constructor
// the arguments we pass inside (...)
// will end up in the constructor(...) in the same order
const tonyStark = new Superhero("Tony", "Stark", "IronMan");
console.log(tonyStark.firstName);
tonyStark.sayBye("Ernesto");

// this tonyStark2 is a new instance of the superhero class
// it is NOT "attached" to the other instance of tonyStark!
// instances follow the same template (i.e. what we specify in the class)
// but are separate "entities"
// a little bit like a cookie cutter cuts separate cookies -> all cookies will share
// the same "shape" but when I change one cookie, I don't
// automatically change all the others!
const tonyStark2 = new Superhero("Tony2", "Stark", "IronMan");
console.log(tonyStark2.firstName);
tonyStark2.sayBye("Rowena");

const peterParker = new Superhero("Peter", "Parker", "SpiderMan");

// all instances have access to the methods we defined in the class template!
// but the "this" keyword will reference the value of "THIS" specific instance
peterParker.learnNewAbility("Can jump really high");
peterParker.learnNewAbility("Can shoot webs");
peterParker.learnNewAbility("Can cook");

peterParker.bragAboutAbilities();

tonyStark.bragAboutAbilities();

console.log(tonyStark);
console.log(peterParker);
