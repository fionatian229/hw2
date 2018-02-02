function setup() {
 createCanvas(350, 350);
 
 background(255);
 colorMode(HSB);
 noStroke();
} 

function draw() {
 background(0, 0, 255, 0.1);
 fill(random(30), 200, 255);
 ellipse(random(width), random(height), random(20, 40));
}