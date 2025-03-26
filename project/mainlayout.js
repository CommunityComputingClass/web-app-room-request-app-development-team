let availableRooms = ["H201", "H205", "H208", "H213", "H303"]; 
let floorPlan2, floorPlan3, currentFloor;
let scaleFactor = 0.6; 

function preload() {
    floorPlan2 = loadImage("2nd floor.png"); // 2nd floor image
    floorPlan3 = loadImage("3rd floor.png"); // 3rd floor image
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    currentFloor = 3; // Start on the 2nd floor

    let switchButton = createButton("Switch Floor");
    switchButton.position(50, 450);
    switchButton.mousePressed(switchFloor);
}

function switchFloor() {
    if (currentFloor === 2) {
        currentFloor = 3;
    } else {
        currentFloor = 2;
    }
    redraw();
}

function setAvailableRooms(newRooms) {
    availableRooms = newRooms;
    redraw();
}

function drawRoom(x, y, w, h, roomName) {
    fill(availableRooms.includes(roomName) ? [80, 239, 96, 150] : [240, 107, 107, 150]);
    rect(x, y, w, h, 5);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(roomName, x + w / 2, y + h / 2);
}

function draw() {
    background(255);

    push();
    translate(400, 50);
    scale(scaleFactor);

    let floorPlan = (currentFloor === 2) ? floorPlan2 : floorPlan3;
    floorPlan.resize (1500,600)
    image(floorPlan, 130, 70, floorPlan.width, floorPlan.height);

    let xShift = 100;  
    let yShift = -50; 

    if (currentFloor === 2) {
        drawRoom(485 + xShift, 300 + yShift, 100, 80, "H201");
        drawRoom(635 + xShift, 300 + yShift, 100, 80, "H203");
        drawRoom(770 + xShift, 300 + yShift, 100, 80, "H205");
        drawRoom(745 + xShift + 40, 530 + yShift, 100, 80, "H207");
        drawRoom(860 + 150, 300 + yShift, 100, 80, "H208");
        drawRoom(990 + 150, 300 + yShift, 100, 80, "H209");
        drawRoom(1100 + 175, 300 + yShift, 100, 80, "H211");
        drawRoom(1210 + 200, 300 + yShift, 100, 80, "H213");
    } else if (currentFloor === 3) {
        drawRoom(525, 230, 100, 80, "H301");
        drawRoom(670, 230, 100, 80, "H303");
        drawRoom(965, 230, 100, 80, "H305");
        drawRoom(1115, 230, 100, 80, "H307");
        drawRoom(1260, 230, 100, 80, "H309");
        drawRoom(1410, 230, 100, 80, "H311");
    }

    pop();
}

function mousePressed() {
    console.log(`Mouse clicked at: (${mouseX - 50}, ${mouseY - 50})`);
}
