let availableRooms = ["H201", "H205", "H208", "H213"]; 
let floorPlan;
let scaleFactor = 0.6; // Shrink image and rooms

function preload() {
    floorPlan = loadImage("Layout.png"); // Ensure this file is in the correct directory
}

function setup() {
    createCanvas(windowWidth, windowHeight); // Keep full canvas size
}

function setAvailableRooms(newRooms) {
    availableRooms = newRooms; 
    redraw(); 
}

function drawRoom(x, y, w, h, roomName) {
    fill(availableRooms.includes(roomName) ? [80, 239, 96, 150] : [240, 107, 107, 150]);
    rect(x, y, w, h, 5); // Draw at new adjusted positions
    fill(0);
    textSize(20); // Keep text readable
    textAlign(CENTER, CENTER);
    text(roomName, x + w / 2, y + h / 2);
}

function draw() {
    background(255);

    push();
    translate(400, 50); // Move everything MORE right and UP
    scale(scaleFactor); // Shrink image and rooms

    image(floorPlan, 0, 0, floorPlan.width, floorPlan.height); // Keep image scaled

    // Shift boxes UP (-y) and RIGHT (+x)
    let xShift = 100;  // Move right
    let yShift = -50; // Move up

    drawRoom(425 + xShift, 250 + yShift, 100, 80, "H201");
    drawRoom(575 + xShift, 250 + yShift, 100, 80, "H203");
    drawRoom(730 + xShift, 250 + yShift, 100, 80, "H205");
    drawRoom(725 + xShift + 40, 480 + yShift, 100, 80, "H207");
    drawRoom(840 + 150, 250 + yShift, 100, 80, "H208");
    drawRoom(970 + 150, 250 + yShift, 100, 80, "H209");
    drawRoom(1100 + 175, 250 + yShift, 100, 80, "H211");
    drawRoom(1225 + 200, 250 + yShift, 100, 80, "H213");

    pop();
}

function mousePressed() {
    console.log(`Mouse clicked at: (${mouseX - 50}, ${mouseY - 50})`);
}
