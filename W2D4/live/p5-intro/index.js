// how to reference JS file from index.html

// what is setup

// what is draw

let img;
let obstacle;
let y = 0;
let x = 30;
const marioWidth = 55;
const SPACE = 32;

function preload() {
  img = loadImage("gustavo.png");
}

function setup() {
  obstacle = new Obstacle(200, 400 - 30, 80, 30);
  createCanvas(400, 400);
  frameRate(60);
}

function keyPressed() {
  //   console.log(keyCode);
  //   console.log(LEFT_ARROW);
  if (keyCode === LEFT_ARROW) {
    x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    const marioX2 = x + marioWidth;
    const obstacleX2 = obstacle.x + obstacle.width;
    const marioY2 = y + height;
    const obstacleY2 = obstacle.y + obstacle.height;

    console.log(marioX2, obstacle.x);
    if (
      marioX2 > obstacle.x &&
      obstacleX2 > x &&
      marioY2 > obstacle.y &&
      obstacleY2 > y
    ) {
      console.log("Hello we are colliding");
    } else {
      x += 10;
    }
  } else if (keyCode === UP_ARROW || keyCode === SPACE) {
    console.log(onGround());
    if (onGround()) {
      y -= 200;
    }
  }
}

function onGround() {
  return y > 400 - 54;
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
  image(img, x, y, marioWidth, 55);
  obstacle.draw();
  if (!onGround()) {
    y += 5;
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
