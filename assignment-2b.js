function setup() {
 createCanvas(350, 350);
 background(240);

} 

function draw() {
 line(width/2, height/2, width/2 + random(width/2), random(height/2));
}