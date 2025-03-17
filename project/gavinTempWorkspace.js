function setup() {
    createCanvas(400, 400);
    background(200);
    let test = new Room("H201")
    console.log(test.roomID)
    console.log(test.building)
    console.log(test.floor)
  }
  
function draw() {
    // Nothing here yet – we'll add features step by step
  }
  
class Room {
    constructor(id) {
        this.roomID = id
        this.building = this.roomID[0] + " Building"
        this.floor = this.roomID[1] + " Floor"
    }
}