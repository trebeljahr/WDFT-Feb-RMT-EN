class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log(
      "Hello I am " +
        this.firstName +
        " " +
        (this.lastName ? this.lastName : "")
      // this.lastName || ""
    );
    // use template string instead -> `${}`
  }
  sayBye(name) {
    console.log("Goodbye " + name);
  }
}

const joshua = new Person("Joshua", "George");
console.log(joshua);
joshua.sayHello();
joshua.sayBye("Rico");

class Superhero extends Person {
  constructor(firstName, lastName, secretIdentity) {
    super(firstName, lastName);
    this.abilities = [];
    this.secretIdentity = secretIdentity + "!!!!";
  }

  learnNewAbility(ability) {
    this.abilities.push(ability);
  }

  sayHello() {
    super.sayHello();
    console.log("I am a superhero!!!! I am " + this.secretIdentity);
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
}

const tonyStark = new Superhero("Tony", "Stark", "IronMan");
console.log(tonyStark);

const peterParker = new Superhero("Peter", "Parker", "Spiderman");
console.log(peterParker);

peterParker.sayHello();

peterParker.learnNewAbility("Can cook");
peterParker.learnNewAbility("Can fly");

peterParker.bragAboutAbilities();

// joshua.bragAboutAbilities();
