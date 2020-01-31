var x;
var y;
var radius;

function setup() {
  createCanvas(800, 800);
 
}

function draw() {
  background(100, 100, 200, 179);
  strokeWeight(10)
  triangle(270, 675, 522, 180, 774, 675);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(255, 100, 200, 200);
  }
  else {
    fill(255, 220, 50, 200);
  }

  ellipse(x, y, radius * 2);
  x += random(-10, 10);
  y += random(-10, 10);
}
