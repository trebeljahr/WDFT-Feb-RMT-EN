// how to reference JS file from index.html

// what is setup

// what is draw

let img;
let player;
let obstacle;
let obstacle2;
let obstacles = [];
let improvedPlayer;
const SPACE = 32;

function preload() {
  // how to draw an image -> first load it.
  img = loadImage("gustavo.png");
}

function setup() {
  obstacles.push(new Obstacle(200, 400 - 30, 80, 30));
  obstacles.push(new Obstacle(100, 400 - 30, 50, 30));
  player = new Player(0, 0, 55, 55);

  console.log(
    "Is obstacle an instance of Obstacle class?",
    obstacle instanceof Obstacle
  );
  console.log(
    "Is obstacle an instance of Rectangle class?",
    obstacle instanceof Rectangle
  );

  createCanvas(400, 400);
}

function rectangleCollision(rect1, rect2) {
  // simple collision detections -> AABB for 2 rects without rotation
  if (rect1 instanceof Rectangle && rect2 instanceof Rectangle) {
    const leftOfRect1 = rect1.x;
    const rightOfRect1 = rect1.x + rect1.width;
    const topOfRect1 = rect1.y;
    const bottomOfRect1 = rect1.y + rect1.height;

    const leftOfRect2 = rect2.x;
    const rightOfRect2 = rect2.x + rect2.width;
    const topOfRect2 = rect2.y;
    const bottomOfRect2 = rect2.y + rect2.height;

    const collidingInXDirection =
      rightOfRect1 > leftOfRect2 && rightOfRect2 > leftOfRect1;

    const collidingInYDirection =
      bottomOfRect1 > topOfRect2 && bottomOfRect2 > topOfRect1;

    return collidingInXDirection && collidingInYDirection;
  }
  console.log("Those are not rectangles");
}

function isMarioCollidingWithAnyObject() {
  const obstaclesWeWouldCollideWith = obstacles.filter((obstacle) => {
    return rectangleCollision(player, obstacle);
  });
  return obstaclesWeWouldCollideWith.length >= 1;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveX(-10);
    if (isMarioCollidingWithAnyObject()) {
      player.moveX(10);
    }
  } else if (keyCode === RIGHT_ARROW) {
    player.moveX(10);
    if (isMarioCollidingWithAnyObject()) {
      player.moveX(-10);
    }
  } else if (keyCode === UP_ARROW || keyCode === SPACE) {
    console.log("Jumping");
    console.log(player.onGround());
    console.log(player.y);
    console.log(400 - 55);
    if (player.onGround()) {
      player.moveY(-200);
    }
  }
}

class Rectangle {
  constructor(x, y, width, height) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  draw() {
    let yellow = color(255, 204, 0);
    fill(yellow);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Obstacle extends Rectangle {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}

class Player extends Rectangle {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  draw() {
    // how to draw an image

    image(img, this.x, this.y, this.width, this.height);
  }
  onGround() {
    const feetOfPlayer = this.y + this.height;
    return feetOfPlayer >= 400;
  }
  moveX(number) {
    this.x += number;
  }
  moveY(number) {
    this.y += number;
  }
}

function draw() {
  background(220);
  obstacles.forEach((obstacle) => obstacle.draw());
  player.draw();

  //   player.moveY(10);
  //   if (player.onGround() || isMarioCollidingWithAnyObject()) {
  //     player.moveY(-10);
  //   }
}

// how to react to keyboard events

// how to stop the loop
