let defaultX = 400
let defaultY = 10
//let floor2
//let floor3
let floor1Rooms = []
let floor2Rooms = []
let floor3Rooms = []
let scienceWingLower = []
let scienceWingFloor2 = []
let graphics = true

//function preload() {
//    floor2 = loadImage("2nd floor.png")
//    floor3 = loadImage("3rd floor.png")
//}

function setup() {
    createCanvas(windowWidth + 30, windowHeight + 30);
    background(200);
    imageMode(CORNER);

    // The following creates the 3rd floor rooms
    floor3Rooms.push(new room("h301", 165,0, 265, 115))
    floor3Rooms.push(new room("h303", 265,0, 365, 115))
    floor3Rooms.push(new room("h304", 465,0, 565, 115))
    floor3Rooms.push(new room("h305", 565,0, 665, 115))
    floor3Rooms.push(new room("h306", 665,0, 765, 115))
    floor3Rooms.push(new room("h307", 765,0, 865, 115))

    // The following creates the 2nd floor rooms including its science wing
    floor2Rooms.push(new room("h201", 130, 0, 246, 115))
    floor2Rooms.push(new room("h203", 246, 0, 365, 115))
    floor2Rooms.push(new room("h205", 365, 0, 465, 115))
    floor2Rooms.push(new room("h207", 465, 0, 565, 115))
    floor2Rooms.push(new room("h209", 565, 0, 665, 115))
    floor2Rooms.push(new room("h211", 665, 0, 765, 115))
    floor2Rooms.push(new room("h213", 765, 0, 865, 115))
    floor2Rooms.push(new room("Bio Lab 1", 700, 375, 830, 505))
    floor2Rooms.push(new room("Bio Lab 2", 700, 525, 830, 655))
    floor2Rooms.push(new room("Ehrer Theatre",100,360,620,655))

    // The following creates the 1st floor rooms
    floor1Rooms.push(new room("h103", 165,0, 265, 115))
    floor1Rooms.push(new room("h105", 265,0, 365, 115))
    floor1Rooms.push(new room("h107", 465,0, 565, 115))
    floor1Rooms.push(new room("h109", 565,0, 665, 115))
    floor1Rooms.push(new room("h111", 665,0, 765, 115))
    floor1Rooms.push(new room("h113", 765,0, 865, 115))

}

function draw() {
    background(200);
    strokeWeight(1)
    text(mouseX, 10, 10)
    text(mouseY, 10, 20)

    if (graphics) {
        //defaultX = 400
        //defaultY = 10

        //render3rd()
        
        defaultX = 200
        defaultY = 200
        
        render2nd()

        //defaultX = 1395
       // defaultY = 325
    
       // render1st()
    } else {
        refImages()
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
    
    beginShape() // teacher lounge
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

    for (let i in floor2Rooms) {
        floor2Rooms[i].render(0)
    }
    for (let i in floor2Rooms) {
        floor2Rooms[i].mouseOver(0)
    }
}

function mouseClicked() {
    
//    graphics = !graphics
} //this has been commented out rather than deleted

//function refImages() {
//    defaultX = 400
//    defaultY = 10
//    image(floor3, defaultX - 75, defaultY - 69, floor3.width / 1.245, floor3.height / 1.245) //nice
//    defaultX = 400
//    defaultY = 410
//    image(floor2, defaultX - 160, defaultY - 90, floor3.width / 1.14, floor3.height / 1.15) //nice
//}