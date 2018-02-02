function setup() {
 createCanvas(640, 480);
 
 background(255);
 colorMode(HSB);
 noStroke();
} 

function draw() {
 background(0, 0, 255, 0.1);
 fill(random(30), 200, 255);
 translate(random(width), random(height));
 rotate(random(PI));
 beginShape();
 vertex(26.3, 0);
 vertex(34.02, 15.65);
 vertex(51.3, 18.16);
 vertex(38.8, 30.35);
 vertex(41.75, 47.55);
 vertex(26.3, 39.43);
 vertex(10.85, 47.55);
 vertex(13.8, 30.35);
 vertex(1.3, 18.16);
 vertex(18.57, 15.65);
 vertex(26.3, 0);
 endShape();
}