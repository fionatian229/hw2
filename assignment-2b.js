function setup() {
 createCanvas(350, 350);
 background(240);

} 

function draw() {
 line(width/2, height/2, width + random(width/2), random(height/2));
}