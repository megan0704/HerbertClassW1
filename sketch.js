//
// // let gap = 70;
// var x = mouseX;
// var y = mouseY;
//
// function setup() {
//   createCanvas(1000, 1000);
// 	background(100);
//   frameRate(60); //Drawing speed 3 fps
// 	smooth();
//
// }
//
// function draw() {
//
//   fill(0,5);
// 	rect(0, 0, 1000, 1000);
// 	noStroke();
// 	fill(350, 250, 250);
// 	ellipse(x, y, 30, 30);
//
// }
//
// // function display(){
// //
// // }
// //
// // function update(){
// // 	let x1 = mouseX;
// // 	let y1 = mouseY;
// // }
var img;

function setup() {
  createCanvas(800, 800);

	background(100);
   frameRate(100);
   smooth();

	 img = loadImage("pen2.png");

}

function draw() {

	// fill(0,5);
	// 	rect(0, 0, 1000, 1000);
  // if(mouseIsPressed &&dist(mouseX,mouseY,x,y)<r){
  // 	x=mouseX;
  //   y=mouseY;
  image(img, mouseX, mouseY, 30, 30);
	// 	noStroke();  //lineweight);
	//   fill(350, 250, 250 );
	// ellipse(x,y, 30, 30) ;
  // }
}
