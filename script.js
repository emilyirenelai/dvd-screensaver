// p5.js functions
/* global
 *    background, createCanvas, height, image, loadImage, width, frameRate, tint, Color, Tint, imageTint;
 */

let dvdImage, x, xVelocity, y, yVelocity, canvasWidth, canvasHeight, imageWidth, imageHeight, Tint, imageTint;

function setup() {
  canvasWidth = 800;
  canvasHeight = 600;
  createCanvas(canvasWidth, canvasHeight);
  // Load the logo once
  imageWidth = 160;
  imageHeight = 120;
  imageTint = 'blue';
  dvdImage = loadImage(
    "https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387"
  ); 
  //initial value of x and y
  x = 50;
  xVelocity = 2;
  
  y = 50;
  yVelocity = 2;
  //frameRate(1); to make the frame rate () per second
}

function draw() {
  //set background color and clear the screen;
  background(220);
  
  //Add 1 to x. Increment x by 1. Set x to x+1;
  x += xVelocity;
  y += yVelocity;
  

  //IF the box hits the right OR left side of the canvas, negate xVelocity.
   if (x + imageWidth > canvasWidth || x < 0) {// || is the logical "or"
     xVelocity *= -1; 
     
     //console.log("HIT THE WALL");
   
     if (imageTint == 'blue') {
       imageTint = 'purple';
     } else if (imageTint == 'purple') {
       imageTint = 'pink';
     } else if (imageTint == 'pink') {
       imageTint = 'red';
     } else if (imageTint == 'red') {
         imageTint = 'orange';
     } else if (imageTint == 'orange') {
       imageTint = 'yellow';
     } else if (imageTint == 'yellow') {
       imageTint = 'green';
     } else if (imageTint == 'green') {
       imageTint = 'blue';
     }
   }
   
  
  //IF the box hits the bottom OR top side of the canvas, negate yVelocity.
  if (y + imageHeight > canvasHeight || y < 0) {
    yVelocity *= -1;
    
    //console.log("HIT THE WALL");
    
     if (imageTint == 'blue') {
       imageTint = 'purple';
     } else if (imageTint == 'purple') {
       imageTint = 'pink';
     } else if (imageTint == 'pink') {
       imageTint = 'red';
     } else if (imageTint == 'red') {
         imageTint = 'orange';
     } else if (imageTint == 'orange') {
       imageTint = 'yellow';
     } else if (imageTint == 'yellow') {
       imageTint = 'green';
     } else if (imageTint == 'green') {
       imageTint = 'blue';
     }
  }
  
  // Draw the logo at the new position
  tint(imageTint);
  image(dvdImage, x, y, imageWidth, imageHeight);
}
