// how to reference JS file from index.html

// what is setup

// what is draw

let img;
let obstacle;
let obstacle2;
let y = 0;
let x = 30;
const marioWidth = 55;
const marioHeight = 55;
const SPACE = 32;

function preload() {
  img = loadImage("gustavo.png");
}

function setup() {
  obstacle = new Obstacle(200, 400 - 30, 80, 30);
  obstacle2 = new Obstacle(100, 400 - 30, 50, 30);
  createCanvas(400, 400);
  frameRate(60);
}

function marioCollidesWithObstacle() {
  const leftOfMario = x;
  const rightOfMario = x + marioWidth;
  const topOfMario = y;
  const bottomOfMario = y + marioHeight;

  const leftOfObstacle = obstacle.x;
  const rightOfObstacle = obstacle.x + obstacle.width;
  const topOfObstacle = obstacle.y;
  const bottomOfObstacle = obstacle.y + obstacle.height;

  const collidingInXDirection =
    rightOfMario > leftOfObstacle && rightOfObstacle > leftOfMario;

  const collidingInYDirection =
    bottomOfMario > topOfObstacle && bottomOfObstacle > topOfMario;

  return collidingInXDirection && collidingInYDirection;
}

function keyPressed() {
  //   console.log(keyCode);
  //   console.log(LEFT_ARROW);
  if (keyCode === LEFT_ARROW) {
    x -= 10;
    if (marioCollidesWithObstacle()) {
      x += 10;
    }
  } else if (keyCode === RIGHT_ARROW) {
    x += 10;
    if (marioCollidesWithObstacle()) {
      x -= 10;
    }
  } else if (keyCode === UP_ARROW || keyCode === SPACE) {
    console.log(onGround());
    y += 10;
    if (onGround()) {
      y -= 200;
      y -= 10;
    }
  }
}

function onGround() {
  //   const bottomOfMario = y + marioHeight;
  //   const topOfObstacle = obstacle.y;
  //   const obstacleY2 = obstacle.y + obstacle.height;
  //   const collidingInYDirection = bottomOfMario > topOfObstacle && obstacleY2 > y;
  //   if (collidingInYDirection) {
  //     return true;
  //   }

  return y > 400 - 54 + 10;
}

class Obstacle {
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

function draw() {
  //   console.log(keyCode);
  //   noLoop();
  //   console.log(frameCount);
  //   console.log("Drawing...");
  background(220);
  //   let yellow = color(255, 204, 0);
  //   fill(yellow);
  // stroke(c);
  //   rect(x, y, 55, 55);
  image(img, x, y, marioWidth, marioHeight);
  obstacle.draw();
  obstacle2.draw();
  y += 10;
  console.log("onGround", onGround());
  console.log("collidingWithObstacle", marioCollidesWithObstacle());
  if (onGround() || marioCollidesWithObstacle()) {
    y -= 10;
  }
  let green = color(30, 200, 30);
  fill(green);
  triangle(30, 75, 58, 20, 86, 75);

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

// how to make things move around in a "nice" way

// sounds/music

// maybe particles/generator systems

// simple collision detections -> AABB, Circle -> Rect -> hints for SAT?
