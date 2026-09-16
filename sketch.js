
let asciifier;


function setupAsciify() {
  // Get the default asciifier instance.
  asciifier = p5asciify.asciifier();
  // Set the font size of the default asciifier to 8.
  asciifier.fontSize(2);
  fill("blue");

  // ... and so much more! ᓭᘏ
}

function setup() {
    createCanvas(400, 400, WEBGL);
    //ascii = new P5Ascify();
}

function draw() {
    orbitControl();
    background("white");
    let rotatebox = frameCount * 0.01;
    rotateX(100);
    rotateY(rotatebox);
    box(100);
    

}