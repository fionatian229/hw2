
function setup() {
  // put setup code here
  createCanvas(1494, 1137);
  background(0);
  noLoop();
  noStroke();
}

function draw() {
  // put drawing code here
  var white = '#FFFFFF';
  var yellow = '#FFFB00';
  var blue = '#0632FE';
  var red = '#E94415';
  
  fill(white);
  rect(0, 0, 68, 315);
  rect(0, 348, 68, 351);
  rect(0, 731, 68, 406);
  rect(97, 731, 170, 187);
  rect(97, 348, 170, 351);
  rect(298, 348, 387, 351);
  rect(714, 348, 154, 351);
  rect(901, 731, 266, 187);
  rect(901, 951, 424, 187);
  rect(1357,951, 137, 187);
  rect(1357, 348, 137, 570);
  rect(1357, 0, 137, 314);

  

  
  fill(yellow);
  rect(97, 0, 170, 315);
  rect(1192, 0, 133, 315); 
  rect(1192, 731, 133, 187);
  rect(298, 951, 570, 187);     


  fill(blue);
  rect(714, 0, 452, 314);
  rect(1192, 348, 133, 351);
  rect(298, 731, 570, 187);
          
  

  fill(red);
  rect(298, 0, 387, 315);
  rect(97, 951, 170, 187);
  rect(901, 348, 266, 351);

}