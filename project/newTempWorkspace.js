let defaultX = 558
let defaultY = 270
let floor2
let floor3
let floor2Rooms = []
let floor3Rooms = []

function preload() {
    floor2 = loadImage("2ndFloor.png")
    floor3 = loadImage("3rdFloor.png")
}

function setup() {
    createCanvas(windowWidth - 18, windowHeight - 18);
    background(200);
    imageMode(CENTER);
    let defaultX = 558
    let defaultY = 270

    // The following creates the 3rd floor rooms
    floor3Rooms.push(new room("h301", 0,0, 100, 115))
    floor3Rooms.push(new room("h303", 100,0, 200, 115))
    floor3Rooms.push(new room("h304", 300,0, 400, 115))
    floor3Rooms.push(new room("h305", 400,0, 500, 115))
    floor3Rooms.push(new room("h306", 500,0, 600, 115))
    floor3Rooms.push(new room("h307", 600,0, 700, 115))
    
  }
  
function draw() {
    background(200);
    image(floor3, width / 2 - 198, height / 2 + 200, floor3.width, floor3.height);
    strokeWeight(1)
    text(mouseX, 10, 10)
    text(mouseY, 10, 20)
    
    for (let i in floor3Rooms) {
        floor3Rooms[i].render(0)
    }

    for (let i in floor3Rooms) {
        floor3Rooms[i].mouseOver()
    }

    // Nothing here yet – we'll add features step by step
}


class room {
    constructor(id, cornerTLX, cornerTLY, cornerBRX, cornerBRY) {
      this.roomID = id
      this.building = this.roomID[0] + " Building"
      this.floor = this.roomID[1] + " Floor"
      this.x1 = cornerTLX + defaultX
      this.y1 = cornerTLY + defaultY
      this.x2 = cornerBRX + defaultX
      this.y2 = cornerBRY + defaultY
    }

    render(a) {
        if (a == 0) {
            strokeWeight(5)
            stroke(0)
            fill(255)
        } else if (a == 1) {
            strokeWeight(10)
            stroke(20)
            fill(200)
        }
        rectMode(CORNERS)
        rect(this.x1, this.y1, this.x2, this.y2)
    }

    mouseOver() {
        if (this.x1 < mouseX && this.x2 > mouseX && this.y1 < mouseY && this.y2 > mouseY) {
            this.render(1)
        }
    }
}