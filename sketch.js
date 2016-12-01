var mic;

function setup() {
  createCanvas(600,400);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  
  background(255);
  
  var vol = mic.getLevel();
  console.log(vol);
  
  fill(0);
  ellipse(width/2, height/2, vol*1000, vol*1000);
  
}