let img;
let player;
let obstacles = [];
let improvedPlayer;
const SPACE = 32;

function preload() {
  // how to draw an image -> first load it.
  img = loadImage("gustavo.png");
}

function setup() {
  obstacles.push(new Obstacle(200, 400 - 30, 80, 30));
  // obstacles.push(new Obstacle(100, 400 - 30, 50, 30));
  player = new Player(0, 0, 55, 55);

  console.log(
    "Is obstacle an instance of Obstacle class?",
    obstacles[0] instanceof Obstacle
  );
  console.log(
    "Is obstacle an instance of Rectangle class?",
    obstacles[0] instanceof Rectangle
  );

  createCanvas(400, 400);
}

function collidingInXDir(rect1, rect2) {
  const leftOfRect1 = rect1.x;
  const rightOfRect1 = rect1.x + rect1.width;
  const topOfRect1 = rect1.y;
  const bottomOfRect1 = rect1.y + rect1.height;
  const collidingInXDirection =
    rightOfRect1 > leftOfRect2 && rightOfRect2 > leftOfRect1;
  return collidingInXDirection;
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

    console.log("X Collision?", collidingInXDirection);
    console.log("Y Collision?", collidingInYDirection);
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
    this.velX = 0;
    this.velY = 0;
  }
  draw() {
    // how to draw an image

    image(img, this.x, this.y, this.width, this.height);
  }
  onGround() {
    const feetOfPlayer = this.y + this.height;
    return feetOfPlayer >= 400;
  }
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.velX -= 0.1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.velX += 0.1;
    }

    this.velX = min(this.velX, 10);
    this.velX = max(this.velX, -10);

    if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)) {
      this.velX = decayVelocity(this.velX);
    }

    this.x += this.velX;
    this.y += this.velY;
    this.velY += 0.5;
    this.y += this.velY;

    if (isMarioCollidingWithAnyObject()) {
      this.x -= this.velX;
      this.y -= this.velY;
    }

    this.y = min(this.y, height - this.height - 1);
  }
}

function keyPressed() {
  if (keyCode === SPACE) {
    player.velY = -8;
  }
}

function decayVelocity(vel) {
  // implement decaying velocities
  const decay = vel > 0 ? -vel / 10 : vel < 0 ? vel / 10 : 0;
  vel += decay;
  const overshootFromTop = vel < 0 && decay < 0;
  const overshootFromBot = vel > 0 && decay > 0;
  if (overshootFromTop || overshootFromBot) {
    return 0;
  }
  return vel;
}

function draw() {
  background(220);
  obstacles.forEach((obstacle) => obstacle.draw());
  player.draw();
  player.move();
}
