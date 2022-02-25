function setup() {
  createCanvas(800, 800);
  // drawing an image
  background(51);
  // setting the framerate
  frameRate(60);
}
function draw() {
  //   noLoop();
  // how to draw a rectangle, circle
  // beginShape/endShape, vertex
  // push, pop

  let green = color(30, 200, 30);
  // fill, stroke
  fill(green);
  stroke(200);
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

  // choose a random color
  // const randomColor = color(random(255), random(255), random(255));

  // how to react to the mouse
  // mouseX and mouseY

  // draw an ellipse wherever the mouse is
  //   fill(randomColor);
  //   ellipse(mouseX, mouseY, 50, 50);

  // we could draw a rect under our mouse
  // rect(mouseX, mouseY, 30, 30);
}
