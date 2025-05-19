let defaultX = 400
let defaultY = 10
let floor1Rooms = []
let floor2Rooms = []
let floor3Rooms = []
let scienceWingLower = []
let scienceWingFloor2 = []
let graphics = true

function setup() {
    createCanvas(windowWidth + 30, windowHeight + 30);
    background(200);
    imageMode(CORNER);

    selectedFloor = 3;

    let floorCycleButton = createButton("Cycle selected floor");
    floorCycleButton.position(200,80);
    floorCycleButton.mousePressed(cycleFloor);

    // The following creates the 3rd floor rooms
    floor3Rooms.push(new room("H303", 165,0, 265, 115))
    floor3Rooms.push(new room("H305", 265,0, 365, 115))
    floor3Rooms.push(new room("H309", 465,0, 565, 115))
    floor3Rooms.push(new room("H311", 565,0, 665, 115))
    floor3Rooms.push(new room("H313", 665,0, 765, 115))
    floor3Rooms.push(new room("H315", 765,0, 865, 115))
    //library building abstraction
    floor3Rooms.push(new room("L251", 165, 280, 265, 395))
    floor3Rooms.push(new room("L253", 265, 280, 365, 395))
    floor3Rooms.push(new room("Photo Studio", 365, 280, 465, 395))

    // The following creates the 2nd floor rooms including its science wing
    floor2Rooms.push(new room("The Center", 0,160, 130, 260))
    floor2Rooms.push(new room("Miranda Lux CR", -125, 0, 0, 115))
    floor2Rooms.push(new room("H201", 130, 0, 246, 115))
    floor2Rooms.push(new room("H203", 246, 0, 365, 115))
    floor2Rooms.push(new room("H205", 365, 0, 465, 115))
    floor2Rooms.push(new room("H207", 465, 0, 565, 115))
    floor2Rooms.push(new room("H209", 565, 0, 665, 115))
    floor2Rooms.push(new room("H211", 665, 0, 765, 115))
    floor2Rooms.push(new room("H213", 765, 0, 865, 115))
    floor2Rooms.push(new room("Bio Lab 1", 700, 375, 830, 505))
    floor2Rooms.push(new room("Bio Lab 2", 700, 525, 830, 655))
    floor2Rooms.push(new room("Ehrer Theatre",100,360,620,655))

    // The following creates the 1st floor rooms
    floor1Rooms.push(new room("H103", 165,0, 265, 115))
    floor1Rooms.push(new room("H105", 265,0, 365, 115))
    floor1Rooms.push(new room("H107", 365,0, 465, 115))
    floor1Rooms.push(new room("H109", 465,0, 565, 115))
    floor1Rooms.push(new room("H111", 665,0, 765, 115))
    floor1Rooms.push(new room("H113", 765,0, 865, 115))
    floor1Rooms.push(new room("Chem Lab 1", 700, 375, 830, 505))
    floor1Rooms.push(new room("Chem Lab 2", 700, 525, 830, 655))
    floor1Rooms.push(new room("Dance Studio",320,160,545,400))
    //shops pit abstraction
    floor1Rooms.push(new room("Wearables Shop", 165, 450, 265, 550))
    floor1Rooms.push(new room("Set Design Shop", 265, 450, 365, 550))
    floor1Rooms.push(new room("Wood Shop", 365, 450, 465, 550))
    floor1Rooms.push(new room("Computer Lab", 65, 550, 165, 650))
    floor1Rooms.push(new room("Physics Room", 165, 550, 265, 650))
    floor1Rooms.push(new room("Electronics Shop", 265, 550, 365, 650))
    floor1Rooms.push(new room("Metal Shop", 365, 550, 465, 650))

}

function cycleFloor(){
    if (selectedFloor === 3) {
        selectedFloor = 1;
    } else {
        selectedFloor = selectedFloor + 1
    }
}

function draw() {
    background(200);
    strokeWeight(1)
    text(mouseX, 10, 10)
    text(mouseY, 10, 20)

    defaultX = 200
    defaultY = 100
    if (selectedFloor === 3){
        render3rd()
    }
    
    if (selectedFloor === 2){    
        render2nd()
    }
    if (selectedFloor === 1){
        render1st()
    }
    
    
    // Nothing here yet – we'll add features step by step
}

class room {
    constructor(id, cornerTLX, cornerTLY, cornerBRX, cornerBRY) {
      this.roomID = id
      this.building = this.roomID[0] + " Building"
      this.floor = this.roomID[1] + " Floor"
      this.x1 = cornerTLX
      this.y1 = cornerTLY
      this.x2 = cornerBRX
      this.y2 = cornerBRY
    }
    
    render(a) {
        if (a == 0) {
            strokeWeight(5)
            stroke(0)
            fill(255)
        } else if (a == 1) {
            strokeWeight(10)
            stroke("GREEN")
            fill(220)
        }
        rectMode(CORNERS)
        rect(this.x1 + defaultX, this.y1 + defaultY, this.x2 + defaultX, this.y2 + defaultY)
    }

    mouseOver() {
        if (this.x1 + defaultX < mouseX && this.x2 + defaultX > mouseX && this.y1 + defaultY < mouseY && this.y2 + defaultY > mouseY) {
            this.render(1)
            strokeWeight(5)
            fill("black")
            stroke("white")
            text(this.roomID, this.x2, this.y2)//tells you what room you're hovering your mouse over
        }
    }
}

function render3rd() {
    strokeWeight(5)
    stroke(155)
    fill(255)
    rectMode(CORNERS)
    rect(defaultX, defaultY, defaultX + 865, defaultY + 260) // building outline
    
    fill(190)
    rect(defaultX + 100, defaultY, defaultX + 165, defaultY + 115) // office 1

    beginShape() // bottom left offices
    vertex(defaultX + 0, defaultY + 260)
    vertex(defaultX + 0, defaultY + 180)
    vertex(defaultX + 165, defaultY + 160)
    vertex(defaultX + 380, defaultY + 180)
    vertex(defaultX + 380, defaultY + 260)
    endShape(CLOSE)
    
    beginShape() // bathrooms
    vertex(defaultX + 470, defaultY + 260)
    vertex(defaultX + 470, defaultY + 170)
    vertex(defaultX + 550, defaultY + 160)
    vertex(defaultX + 550, defaultY + 195)
    vertex(defaultX + 590, defaultY + 195)
    vertex(defaultX + 590, defaultY + 160)
    vertex(defaultX + 610, defaultY + 160)
    vertex(defaultX + 620, defaultY + 260)
    endShape(CLOSE)

    beginShape() // bottom right offices
    vertex(defaultX + 700, defaultY + 260)
    vertex(defaultX + 700, defaultY + 160)
    vertex(defaultX + 785, defaultY + 165)
    vertex(defaultX + 865, defaultY + 165)
    vertex(defaultX + 865, defaultY + 260)
    endShape(CLOSE)

    strokeWeight(1)
    stroke(255)
    fill("black")

    text("H Building 3rd Floor", defaultX + 150, defaultY - 20)
    text("Library (abstraction)", defaultX + 0, defaultY + 300)

    for (let i in floor3Rooms) {
        floor3Rooms[i].render(0)
    }
    for (let i in floor3Rooms) {
        floor3Rooms[i].mouseOver(0)
    }
}

function render2nd() {
    strokeWeight(5)
    stroke(155)
    fill(255)
    rectMode(CORNERS)
    
    beginShape() // building outline
    vertex(defaultX, defaultY)
    vertex(defaultX + 865, defaultY)
    vertex(defaultX + 865, defaultY + 260)
    vertex(defaultX + 700, defaultY + 260)
    vertex(defaultX + 700, defaultY + 375)
    vertex(defaultX + 830, defaultY + 375)
    vertex(defaultX + 830, defaultY + 505)
    vertex(defaultX + 800, defaultY + 505)
    vertex(defaultX + 800, defaultY + 525)
    vertex(defaultX + 830, defaultY + 655)
    vertex(defaultX + 100, defaultY + 655)
    vertex(defaultX + 100, defaultY + 360)
    vertex(defaultX + 620, defaultY + 360)
    vertex(defaultX + 620, defaultY + 260)
    vertex(defaultX, defaultY + 260)
    endShape()

    fill(190)
    
    beginShape() // bottom left offices
    vertex(defaultX + 100, defaultY + 260)
    vertex(defaultX + 130, defaultY + 160)
    vertex(defaultX + 290, defaultY + 175)
    vertex(defaultX + 290, defaultY + 260)
    endShape(CLOSE)
    
    beginShape() // teacher lounge and center offices
    vertex(defaultX + 370, defaultY + 260)
    vertex(defaultX + 370, defaultY + 170)
    vertex(defaultX + 470, defaultY + 170)
    vertex(defaultX + 610, defaultY + 160)
    vertex(defaultX + 620, defaultY + 260)
    endShape(CLOSE)

    beginShape() // bottom right offices
    vertex(defaultX + 700, defaultY + 260)
    vertex(defaultX + 700, defaultY + 160)
    vertex(defaultX + 765, defaultY + 165)
    vertex(defaultX + 865, defaultY + 160)
    vertex(defaultX + 865, defaultY + 260)
    endShape(CLOSE)

    beginShape() // history office
    vertex(defaultX + 700, defaultY + 375)
    vertex(defaultX + 700, defaultY + 260)
    vertex(defaultX + 800, defaultY + 260)
    vertex(defaultX + 800, defaultY + 375)
    endShape(CLOSE)

    beginShape() // science prep space
    vertex(defaultX + 700, defaultY + 505)
    vertex(defaultX + 700, defaultY + 525)
    vertex(defaultX + 800, defaultY + 525)
    vertex(defaultX + 800, defaultY + 505)
    endShape(CLOSE)

    strokeWeight(1)
    stroke(255)
    fill("black")

    text("H Building 2nd Floor", defaultX + 150, defaultY - 20)

    for (let i in floor2Rooms) {
        floor2Rooms[i].render(0)
    }
    for (let i in floor2Rooms) {
        floor2Rooms[i].mouseOver(0)
    }
}

function render1st() {
    strokeWeight(5)
    stroke(155)
    fill(255)
    rectMode(CORNERS)
    
    beginShape() // building outline
    vertex(defaultX, defaultY)
    vertex(defaultX + 865, defaultY)
    vertex(defaultX + 865, defaultY + 260)
    vertex(defaultX + 700, defaultY + 260)
    vertex(defaultX + 700, defaultY + 375)
    vertex(defaultX + 830, defaultY + 375)
    vertex(defaultX + 830, defaultY + 505)
    vertex(defaultX + 800, defaultY + 505)
    vertex(defaultX + 800, defaultY + 525)
    vertex(defaultX + 830, defaultY + 655)
    vertex(defaultX + 100, defaultY + 655)
    vertex(defaultX + 100, defaultY + 360)
    vertex(defaultX + 500, defaultY + 360)
    vertex(defaultX + 500, defaultY + 260)
    vertex(defaultX, defaultY + 260)
    endShape()

    fill(190)
    
    beginShape() // facilities & restrooms between science wing hall and the dance studio
    vertex(defaultX + 500, defaultY + 200)
    vertex(defaultX + 565, defaultY + 200)
    vertex(defaultX + 565, defaultY + 495)
    vertex(defaultX + 525, defaultY + 495)
    vertex(defaultX + 525, defaultY + 535)
    vertex(defaultX + 565, defaultY + 535)
    vertex(defaultX + 565, defaultY + 655)
    vertex(defaultX + 400, defaultY + 655)
    vertex(defaultX + 400, defaultY + 505)
    endShape(CLOSE)
    
    beginShape() // top left office and elevator
    vertex(defaultX + 65, defaultY)
    vertex(defaultX + 165, defaultY)
    vertex(defaultX + 165, defaultY + 115)
    vertex(defaultX + 65, defaultY + 115)
    endShape(CLOSE)

    beginShape() // bottom right offices
    vertex(defaultX + 700, defaultY + 260)
    vertex(defaultX + 700, defaultY + 160)
    vertex(defaultX + 765, defaultY + 165)
    vertex(defaultX + 865, defaultY + 160)
    vertex(defaultX + 865, defaultY + 260)
    endShape(CLOSE)

    beginShape() // science office
    vertex(defaultX + 700, defaultY + 375)
    vertex(defaultX + 700, defaultY + 260)
    vertex(defaultX + 800, defaultY + 260)
    vertex(defaultX + 800, defaultY + 375)
    endShape(CLOSE)

    beginShape() // science prep space
    vertex(defaultX + 700, defaultY + 505)
    vertex(defaultX + 700, defaultY + 525)
    vertex(defaultX + 800, defaultY + 525)
    vertex(defaultX + 800, defaultY + 505)
    endShape(CLOSE)

    strokeWeight(1)
    stroke(255)
    fill("black")

    text("H Building 1st Floor", defaultX + 150, defaultY - 20)
    text("Shops Pit", defaultX + 100, defaultY + 500)

    for (let i in floor1Rooms) {
        floor1Rooms[i].render(0)
    }
    for (let i in floor1Rooms) {
        floor1Rooms[i].mouseOver(0)
    }
}

function mouseClicked() {
    
}

//function refImages() {
//    defaultX = 400
//    defaultY = 10
//    image(floor3, defaultX - 75, defaultY - 69, floor3.width / 1.245, floor3.height / 1.245) //nice
//    defaultX = 400
//    defaultY = 410
//    image(floor2, defaultX - 160, defaultY - 90, floor3.width / 1.14, floor3.height / 1.15) //nice
//}