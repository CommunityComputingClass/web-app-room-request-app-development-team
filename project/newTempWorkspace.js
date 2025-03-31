let defaultX = 400
let defaultY = 10
let floor2
let floor3
let floor2Rooms = []
let floor3Rooms = []
let graphics = true

function preload() {
    floor2 = loadImage("2nd floor.png")
    floor3 = loadImage("3rd floor.png")
}

function setup() {
    createCanvas(windowWidth - 18, windowHeight - 18);
    background(200);
    imageMode(CORNER);

    // The following creates the 3rd floor rooms
    floor3Rooms.push(new room("h301", 165,0, 265, 115))
    floor3Rooms.push(new room("h303", 265,0, 365, 115))
    floor3Rooms.push(new room("h304", 465,0, 565, 115))
    floor3Rooms.push(new room("h305", 565,0, 665, 115))
    floor3Rooms.push(new room("h306", 665,0, 765, 115))
    floor3Rooms.push(new room("h307", 765,0, 865, 115))

    // The following creates the 2nd floor rooms
    floor2Rooms.push(new room("h201", 130, 0, 365, 115))
    floor2Rooms.push(new room("h202", 365, 0, 465, 115))
    floor2Rooms.push(new room("h203", 465, 0, 565, 115))
    floor2Rooms.push(new room("h204", 565, 0, 665, 115))
    floor2Rooms.push(new room("h205", 665, 0, 765, 115))
    floor2Rooms.push(new room("h206", 765, 0, 865, 115))
    floor2Rooms.push(new room("h207", 410, 170, 470, 260))
}

function draw() {
    background(200);
    strokeWeight(1)
    text(mouseX, 10, 10)
    text(mouseY, 10, 20)

    if (graphics) {
        defaultX = 400
        defaultY = 10

        render3rd()
        
        defaultX = 400
        defaultY = 310
        
        render2nd()
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

    for (let i in floor2Rooms) {
        floor2Rooms[i].render(0)
    }
    for (let i in floor2Rooms) {
        floor2Rooms[i].mouseOver(0)
    }
}

function mouseClicked() {
    graphics = !graphics
}

function refImages() {
    defaultX = 400
    defaultY = 10
    image(floor3, defaultX - 75, defaultY - 69, floor3.width / 1.245, floor3.height / 1.245) //nice
    defaultX = 400
    defaultY = 410
    image(floor2, defaultX - 160, defaultY - 90, floor3.width / 1.14, floor3.height / 1.15) //nice
}