class Rectangle {
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
        this.score++;
        this.array.splice(index, 1);
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

    this.speedX = decayVelocity(this.speedX);
    this.speedY = decayVelocity(this.speedY);

    this.x += this.speedX;
    this.y += this.speedY;

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
    return !!obstacles.array.find((obstacle) => collision(obstacle, this));
  }
}

function collision(rect1, rect2) {
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
  const overshootFromTop = vel < 0 && decay < 0;
  const overshootFromBot = vel > 0 && decay > 0;
  if (overshootFromTop || overshootFromBot) {
    return 0;
  }
  return vel;
}
