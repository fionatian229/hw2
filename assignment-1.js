function drawLines(reps) {
 var i = 0;
 while (i < reps) {
   line(random(width), random(height), random(width), random(height));
   i++;
 }
}


function setup() {
 createCanvas(350, 350);
 
 drawLines(10);
} 

function draw() {
 
}