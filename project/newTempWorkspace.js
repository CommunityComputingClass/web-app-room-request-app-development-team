let floor2
let floor3

function preload() {
    floor2 = loadImage("2ndFloor.png")
    floor3 = loadImage("3rdFloor.png")
}

function setup() {
    createCanvas(windowWidth - 18, windowHeight - 18);
    background(200);
    imageMode(CENTER);
    
  }
  
function draw() {
    background(200);
    image(floor3, width / 2 - 198, height / 2 + 200, floor3.width, floor3.height);
    strokeWeight(1)
    text(mouseX, 10, 10)
    text(mouseY, 10, 20)
    roomStroke()
    h101(560, 270)
    floors()
    // Nothing here yet – we'll add features step by step
}


function floors() {
    noFill()
    rect(390, 270, 865, 260)
}

function h101(x, y) {
    let localX = x
    let localY = y
    roomStroke()
    rect(localX, localY, 100, 120)
}

function roomStroke() {
    strokeWeight(5)
    stroke(0)
    fill(255)
}