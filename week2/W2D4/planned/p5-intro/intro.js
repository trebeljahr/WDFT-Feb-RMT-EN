let playerImage;
let playerX = 100;
// this preloads the game assets
function preload() {
	playerImage = loadImage('gustavo.png')
}
// this creates the html element <canvas></canvas> that we can draw in to 
function setup() {
	console.log('setup')
	createCanvas(1000, 600)
}

let x = 450
let speed = 3
function draw() {
	console.log(mouseX, mouseY)
	// clear()
	console.log('draw')

	// this renders the image
	// image(image, x, y, width, height)
	image(playerImage, playerX, 100, 100, 100)

	// creates a rectangle (x, y, width, height)
	// the top left corner of the rect is positioned
	let lineColor = color(0, 256, 0);
	stroke(lineColor)
	// fill('red')
	rect(0, 550, 50, 50)
	fill('blue')
	rect(405, 300, 50, 50)
	// line(startX, startY, endX, endY)
	line(0, 50, 1000, 50)
	line(0, 100, 1000, 100)
	// x += speed
	// if (x > 950) {
	// 	// change the direction of the circle
	// 	speed = - 3
	// }
	// (x, y, radius)
	// circle(x, 200, 100)

	// 
	circle(mouseX, mouseY, 100)
}

function keyPressed() {
	// https://keycode.info/
	console.log('key pressed')
	// we have acces to a variable keyCode
	console.log(keyCode)
	// if right arrow is pressed 
	if (keyCode === 39) {
		// move the player to the right
		playerX += 20;
	}
}