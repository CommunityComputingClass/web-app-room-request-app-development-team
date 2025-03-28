let availableRooms = ["H201", "H205", "H208", "H213", "H303"]; 
let floorPlan2, floorPlan3, currentFloor;
let scaleFactor = 0.6; 

let nameInput, emailInput, timeInput, reasonInput, submitButton;

function preload() {
    floorPlan2 = loadImage("2nd floor.png"); // 2nd floor image
    floorPlan3 = loadImage("3rd floor.png"); // 3rd floor image
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    currentFloor = 3; // Start on the 2nd floor

    let switchButton = createButton("Switch Floor");
    switchButton.position(1250, 500);
    switchButton.mousePressed(switchFloor);

    // Create input fields
    nameInput = createInput();
    nameInput.position(50, 300);
    nameInput.size(200);
    nameInput.attribute("placeholder", "Enter your name");

    emailInput = createInput();
    emailInput.position(50, 350);
    emailInput.size(200);
    emailInput.attribute("placeholder", "Enter your email");

    timeInput = createInput();
    timeInput.position(50, 400);
    timeInput.size(200);
    timeInput.attribute("placeholder", "Requested time");

    reasonInput = createInput();
    reasonInput.position(50, 450);
    reasonInput.size(200);
    reasonInput.attribute("placeholder", "Reason for request");

    // Submit button
    submitButton = createButton("Submit Request");
    submitButton.position(50, 500);
    submitButton.mousePressed(submitRequest);
}

function switchFloor() {
    if (currentFloor === 2) {
        currentFloor = 3;
    } else {
        currentFloor = 2;
    }
    redraw();
}

function submitRequest() {
    let requestData = {
        name: nameInput.value(),
        email: emailInput.value(),
        time: timeInput.value(),
        reason: reasonInput.value(),
    };
    console.log("Room Request Submitted:", requestData);
    alert("Request Submitted! Check console for details.");
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

    // Instructions at the top
    fill(0);
    textSize(22);
    textAlign(CENTER, TOP);
    text(
        "You are on the LWHS Room Request Page. Click on a specific room to select it,\n" +
        "then enter your name, email, the time you are requesting the room, and the reason for the request.",
        width / 2, 20
    );

    push();
    translate(400, 50);
    scale(scaleFactor);

    let floorPlan = (currentFloor === 2) ? floorPlan2 : floorPlan3;
    floorPlan.resize(1500, 600);
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
