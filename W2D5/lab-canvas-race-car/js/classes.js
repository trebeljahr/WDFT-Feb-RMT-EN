class Rectangle {
  // basic rectangle class to re-use some code...
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  draw() {
    rect(this.x, this.y, this.w, this.h);
  }
}

class Obstacles {
  constructor() {
    this.score = 0;
    this.array = [];
  }

  addObstacle() {
    // generate a random obstacle with randomX coordinate on the road and a random width
    // between 60, 120 and then add that to the array of obstacles
    const sideLaneSize = width / 12;
    const randomWidth = random(60, 120);
    const randomX = random(sideLaneSize, width - randomWidth - sideLaneSize);
    this.array.push(new Rectangle(randomX, 0 - 20, randomWidth, 20));
  }

  update() {
    const every300Frames = frameCount % (60 * 5) === 0;
    if (this.array.length < 5 && every300Frames) {
      this.addObstacle();
    }
    this.array.forEach((obstacle, index) => {
      obstacle.y += 5;
      if (obstacle.y - obstacle.h >= height) {
        // add to the score and delete the obstacle from the array
        this.score++;
        this.array.splice(index, 1);
        // also add back a new one at the top
        this.addObstacle();
      }
      fill("red");
      stroke("red");
      obstacle.draw();
    });
    stroke("black");
    fill("black");
    textSize(32);
    text(`Score: ${this.score}`, 30, 30);
  }
}

class Car extends Rectangle {
  constructor(img) {
    const w = 50;
    const h = 100;
    const x = width / 2 - w / 2;
    const y = height - h;
    super(x, y, w, h);
    this.img = img;
    this.speedX = 0;
    this.speedY = 0;
    this.acceleration = 0.3;
  }

  draw() {
    image(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    // when user presses keys, accelerate in given direction
    if (keyIsDown(LEFT_ARROW)) {
      this.speedX -= this.acceleration;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.speedX += this.acceleration;
    }
    if (keyIsDown(UP_ARROW)) {
      this.speedY -= this.acceleration;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.speedY += this.acceleration;
    }

    // simulate something like "air drag"
    this.speedX = decayVelocity(this.speedX);
    this.speedY = decayVelocity(this.speedY);

    this.x += this.speedX;
    this.y += this.speedY;

    // stop the car from getting out of the road, also set the speed in that direction to 0
    // so that we can't speed up into that direction and kind of "stick" into the wall
    // because we have to get rid of that leftover velocity before starting to move
    // in the other direction again
    const sideLaneSize = width / 12;
    const leftEdgeOfTheRoad = sideLaneSize;
    if (this.x < leftEdgeOfTheRoad) {
      this.x = leftEdgeOfTheRoad;
      this.speedX = 0;
    }
    const rightEdgeOfTheRoad = width - sideLaneSize - this.w;
    if (this.x > rightEdgeOfTheRoad) {
      this.x = rightEdgeOfTheRoad;
      this.speedX = 0;
    }
    const topEdgeOfTheRoad = 0;

    if (this.y < topEdgeOfTheRoad) {
      this.y = topEdgeOfTheRoad;
      this.speedY = 0;
    }
    const bottomEdgeOfTheRoad = height - this.h;
    if (this.y > bottomEdgeOfTheRoad) {
      this.y = bottomEdgeOfTheRoad;
      this.speedY = 0;
    }
  }
  collidesWith(obstacles) {
    // check the array of obstacles, for one that collides, since
    // .find returns either undefined or the found element, we need to do a
    // boolean conversion -> !! does that.
    return !!obstacles.array.find((obstacle) => collision(obstacle, this));
  }
}

function collision(rect1, rect2) {
  // this code is literally copy - pasted from MDN
  // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
  // it's the idea of an AABB - axis aligned bounding box collision for non-rotated rectangles
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  );
}

function decayVelocity(vel) {
  // implement decaying velocities
  const decay = vel > 0 ? -0.05 : vel < 0 ? 0.05 : 0;
  vel += decay;
  // we have to clamp down the value to 0 manually because of the way floating point
  // arithmetic works in JS.
  // because in JS (1 - 0.05) !== 0.95 ... but more like 0.950000000000004
  // so to not constantly bounce the velocity between two values that are very close, but not equal
  // to zero we look from which way we approach it and then "clamp" the value
  // to 0 if we overshoot it slightly
  // doing so 0.00000000004 turns into 0 and -0.000000000004 also turns into 0
  const overshootFromTop = vel < 0 && decay < 0;
  const overshootFromBot = vel > 0 && decay > 0;
  if (overshootFromTop || overshootFromBot) {
    return 0;
  }
  // instead of doing the above we could also clamp 0 down by using Number.Epsilon
  // comparison, like in the line commented out below
  // vel = Math.abs(vel - 0) < Number.Epsilon ? 0 : vel;
  // more on why this is that way: https://www.matthewburfield.com/javascript-deep-dive-floating-point-numbers/
  return vel;
}
