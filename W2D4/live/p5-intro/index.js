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
  img = loadImage("gustavo.png");
}

function setup() {
  obstacles.push(new Obstacle(200, 400 - 30, 80, 30));
  obstacles.push(new Obstacle(100, 400 - 30, 50, 30));
  player = new Player(0, 0, 55, 55);
  improvedPlayer = new ImprovedPlayer();

  //   console.log(
  //     "Is obstacle an instance of Obstacle class?",
  //     obstacle instanceof Obstacle
  //   );
  //   console.log(
  //     "Is obstacle an instance of Rectangle class?",
  //     obstacle instanceof Rectangle
  //   );

  createCanvas(400, 400);
  frameRate(60);
}

function rectangleCollision(rect1, rect2) {
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
  //   console.log(obstaclesWeWouldCollideWith);
  return obstaclesWeWouldCollideWith.length >= 1;
}

function keyPressed() {
  //   if (keyCode === LEFT_ARROW) {
  //     player.moveX(-10);
  //     if (isMarioCollidingWithAnyObject()) {
  //       player.moveX(10);
  //     }
  //   } else if (keyCode === RIGHT_ARROW) {
  //     player.moveX(10);
  //     if (isMarioCollidingWithAnyObject()) {
  //       player.moveX(-10);
  //     }
  //   } else if (keyCode === UP_ARROW || keyCode === SPACE) {
  //     console.log("Jumping");
  //     console.log(player.onGround());
  //     console.log(player.y);
  //     console.log(400 - 55);
  //     if (player.onGround()) {
  //       player.moveY(-200);
  //     }
  //   }
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

class ImprovedPlayer {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.velX = 0;
    this.velY = 0;
  }

  draw() {
    if (keyIsDown(LEFT_ARROW)) {
      this.velX -= 0.1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.velX += 0.1;
    }
    if (keyIsDown(UP_ARROW)) {
      this.velY -= 0.1;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.velY += 0.1;
    }

    if (this.velX > 0) {
      this.velX -= 0.05;
    } else if (this.velX < 0) {
      this.velX += 0.05;
    }

    if (this.velY > 0) {
      this.velY -= 0.05;
    } else if (this.velY < 0) {
      this.velY += 0.05;
    }

    console.log(this.velX.toFixed(2));

    this.x += this.velX;
    this.y += this.velY;

    let yellow = color(255, 204, 0);
    fill(yellow);
    rect(this.x, this.y, 30, 30);
  }
}

function draw() {
  background(220);
  improvedPlayer.draw();
  //   console.log(keyCode);
  //   noLoop();
  //   console.log(frameCount);
  //   console.log("Drawing...");
  //   let yellow = color(255, 204, 0);
  //   fill(yellow);
  // stroke(c);
  //   rect(x, y, 55, 55);
  //   obstacles.forEach((o) => o.draw());
  //   player.draw();
  //   console.log("onGround", onGround());
  //   console.log("collidingWithObstacle", marioCollidesWithObstacle());

  //   player.moveY(10);
  //   if (player.onGround() || isMarioCollidingWithAnyObject()) {
  //     player.moveY(-10);
  //   }
  //   let green = color(30, 200, 30);
  //   fill(green);
  //   triangle(30, 75, 58, 20, 86, 75);

  //   beginShape(TESS);
  //   vertex(20 + mouseX, 20 + mouseY);
  //   vertex(80 + mouseX, 20 + mouseY);
  //   vertex(80 + mouseX, 40 + mouseY);
  //   vertex(40 + mouseX, 40 + mouseY);
  //   vertex(40 + mouseX, 60 + mouseY);
  //   vertex(80 + mouseX, 60 + mouseY);
  //   vertex(80 + mouseX, 80 + mouseY);
  //   vertex(20 + mouseX, 80 + mouseY);
  //   endShape(CLOSE);

  // let's choose a random color
  //   const randomColor = color(random(255), random(255), random(255));
  //   fill(randomColor);
  //   ellipse(mouseX, mouseY, 50, 50);

  //   rect(mouseX, mouseY, 30, 30);
}

// fill, stroke
// how to draw a rectangle, circle
// beginShape/endShape, vertex
// push, pop

// how to react to keyboard events

// how to react to the mouse

// how to stop the loop

// mouseX and mouseY

// how to draw an image

// how to make things move around in a "nicer" way

// sounds/music

// maybe particles/generator systems

// simple collision detections -> AABB, Circle -> Rect -> hints for SAT?
