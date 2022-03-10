function Soldier() {
  this.health = 50;
  this.attack = 10;
}

Soldier.prototype.fight = function (attack) {
  this.health -= attack;
  console.log("Ouch I am hit, Health is: ", this.health);
};

function Viking() {
  Soldier.call(this);
  this.name = "Ragnar";
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.sayHello = function () {
  console.log("Hello I am", this.name);
};

const simpleSoldier = new Soldier();
console.log(simpleSoldier);

const ragnar = new Viking();
console.log(ragnar);
