
// let gap = 70;
// let x1 = mouseX;
// let y1 = mouseY;

function setup() {
  createCanvas(1000, 1000);
	background(100);
  frameRate(60); //Drawing speed 3 fps
	smooth();

}

function draw() {

  fill(0,5);
	rect(0, 0, 1000, 1000);
	noStroke();
	fill(350, 250, 250);
	ellipse(mouseX, mouseY 30, 30);

}

// function display(){
//
// }
//
// function update(){
// 	let x1 = mouseX;
// 	let y1 = mouseY;
// }
