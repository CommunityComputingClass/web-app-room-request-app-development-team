let availableRooms = ["H201", "H205", "H208"]; // List of available rooms

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
}

function setAvailableRooms(newRooms) {
    availableRooms = newRooms;
}

function H201() {
    fill(163, 163, 194);
    rect(600, 300, 75, 75);
}

function H203() {
    fill(163, 163, 194);
    rect(675, 300, 75, 75);
}

function H205() {
    fill(163, 163, 194);
    rect(750, 300, 75, 75);
}

function H207() {
    fill(163, 163, 194);
    rect(825, 300, 75, 75);
}

function H208() {
    fill(163, 163, 194);
    rect(825, 375, 75, 75);
}

function draw() {
    background(200); // Redraw background to prevent overlapping

    if (availableRooms.includes("H201")) {
        H201();
    }
    if (availableRooms.includes("H203")) {
        H203();
    }
    if (availableRooms.includes("H205")) {
        H205();
    }
    if (availableRooms.includes("H207")) {
        H207();
    }
    if (availableRooms.includes("H208")) {
        H208();
    }
}
