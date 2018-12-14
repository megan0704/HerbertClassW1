var beginX = 20.0; // Initial x-coordinate
var beginY = 10.0; // Initial y-coordinate
var endX = 570.0; // Final x-coordinate
var endY = 320.0; // Final y-coordinate
var distX; // X-axis distance to move
var distY; // Y-axis distance to move
var exponent = 4; // Determines the curve
var x = 0.0; // Current x-coordinate
var y = 0.0; // Current y-coordinate
var step = 0.01; // Size of each step along the path
var pct = 0.0; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(800, 400);
  noStroke();
  distX = endX - beginX;
  distY = endY - beginY;


}
function mousePressed() {
  fill(220);


  rect(200,200,50,50);
  triangle(random(600,800), random(0, 100),random(600,800), random(100,200),random(400,600), random(200,300));

 /* pct = 0.0;
 beginX = x;
 beginY = y;
 endX = mouseX;
 endY = mouseY;
 distX = endX - beginX;
 distY = endY - beginY; */
}

function draw() {
   fill(0,2);

   rect(0, 0, width, height);

   pct += step;
   if (pct < 1.0) {
     x = beginX + pct * distX;
     y = beginY + pow(pct, exponent) * distY;
   }
   fill(255, 0, 0);
   ellipse(x, y, 20, 20);

}

/*function keyPressed() {
  if (key == 's' || key == 'S'){
    fill(220);
    noStroke();

    triangle(random(600,800), random(0, 100),random(600,800), random(100,200),random(400,600), random(200,300));
  }

  if (key == 'd' || key == 'D'){
    fill(220);
    noStroke();

    triangle(random(400,200), random(0, height/2),random(0,width/2), random(0, height/2),random(0,width/2), random(0, height/2));
  }



}*/
