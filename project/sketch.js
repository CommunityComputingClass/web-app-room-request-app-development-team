//const fs = require('fs'); //txt getter
//const filePath = 'block.txt'


//let blockNumber //= 0

// document.addEventListener('blockNumberDefined', (event) => {
//   blockNumber = event.detail;
//   console.log("blockNumber received:", blockNumber);
// });

//maybe the problem is both being public? can i shove the calendar reader into the server?


let rooms = [];
let level = 1;
let block = 1;
let xOffset = 0;
let yOffset = 0;
let prevX = 0;
let prevY = 0;
let sp = 110;
let floorName = "First Floor & Shops Pit"
let periodCounter = 0

let period = 0;

let offset = 50;
let opacity = 100;
// 0 = error
// 1 = A
// 2 = B
// 3 = C
// 4 = D
// 5 = E
// 6 = F
// 7 = G
// 8 = H
// 9 = Tutorial
// 10 = Lunch

function preload() {
  roomsData = loadJSON("roomData.json");
  //blocksData = loadJSON("currentBlock.json");

}

function occupy() {
  for (let room of rooms) {
    let roomData = roomsData.rooms[room.id];
    if (period != 0) {
      room.o = roomData[period];
    }
    //gpt has the code for this, it needs testing, make a duplicate project please
  }
  if (period == 0) {
    for (let i = 0; i < rooms.length; i++) {
      rooms[i].o = 1;
    }
  }
}

function periodrotate() {
  // if (blockNumber !== undefined){
  //   periodCounter = blockNumber
  // }
  // console.log("periodCounter = " + periodCounter);
  // console.log("blockNumber = " + blockNumber);
  // if (frameCount % 60 == 0) {
  //   periodCounter++;
  // }
  // if (periodCounter > 10) {
  //   periodCounter = 1;
  // }

  if (periodCounter == 1) {
    period = "A";
  } else if (periodCounter == 2) {
    period = "B";
  } else if (periodCounter == 3) {
    period = "C";
  } else if (periodCounter == 4) {
    period = "D";
  } else if (periodCounter == 5) {
    period = "E";
  } else if (periodCounter == 6) {
    period = "F";
  } else if (periodCounter == 7) {
    period = "G";
  } else if (periodCounter == 8) {
    period = "H";
  } else if (periodCounter == 9) {
    period = "Tutorial";
  } else if (periodCounter == 10) {
    period = "Lunch";
  }
}

function floorNaming(){
  if(level==1){
    floorName="1st Floor & Shops Pit"
  }
  if(level==2){
    floorName="2nd Floor & Library Building"
  }
  if(level==3){
    floorName="3rd Floor"
  }
}

function bnum(blockNumber){
  periodCounter = blockNumber
  console.log(blockNumber + " was read!")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  socket=io.connect('http://localhost:3000')
  socket.on('info',bnum)


  //x, y, size, level, ID, occupiedBy
  //rooms.push(new room(x, y, size, level, ID, occupiedBy))
  //first floor
  rooms.push(new room(1, 0, 100, 1, "H103", 0));
  rooms.push(new room(2, 0, 100, 1, "H105", 0));
  rooms.push(new room(3, 0, 100, 1, "H107", 0));
  rooms.push(new room(4, 0, 100, 1, "H109", 0));
  rooms.push(new room(6, 0, 100, 1, "H113", 0));
  rooms.push(new room(7, 0, 100, 1, "H115", 0));

  rooms.push(new room(3, 2, 100, 1, "DANCE STUDIO", 0));

  rooms.push(new room(6, 3, 100, 1, "CHEM 1", 0));
  rooms.push(new room(6, 4, 100, 1, "CHEM 2", 0));

  rooms.push(new room(3, 4, 210, 1, "WOOD", 0));
  rooms.push(new room(4, 7, 210, 1, "FAB", 0));
  rooms.push(new room(3, 8, 100, 1, "ELECTRONIC", 0));
  rooms.push(new room(2, 6, 100, 1, "WEAR", 0));
  rooms.push(new room(2, 8, 100, 1, "PHYSICS", 0));
  rooms.push(new room(1, 8, 100, 1, "MACLAB", 0));
  rooms.push(new room(1, 4, 210, 1, "STAGECRAFT", 0));

  //second floor
  rooms.push(new room(-1, 2, 210, 2, "GYM", 0));

  rooms.push(new room(2, 0, 100, 2, "H203", 0));
  rooms.push(new room(3, 0, 100, 2, "H205", 0));
  rooms.push(new room(4, 0, 100, 2, "H207", 0));
  rooms.push(new room(5, 0, 100, 2, "H209", 0));
  rooms.push(new room(6, 0, 100, 2, "H211", 0));
  rooms.push(new room(7, 0, 100, 2, "H213", 0));

  rooms.push(new room(6, 3, 100, 2, "BIO 1", 0));
  rooms.push(new room(6, 4, 100, 2, "BIO 2", 0));
  rooms.push(new room(3, 3, 210, 2, "THEATRE", 0));

  rooms.push(new room(4, 7, 100, 2, "PHOTO", 0));
  rooms.push(new room(6, 7, 100, 2, "L251", 0));
  rooms.push(new room(6, 8, 100, 2, "L253", 0));
  rooms.push(new room(2, 9, 100, 2, "MEDIA", 0));
  rooms.push(new room(0, 8, 100, 2, "MUSIC", 0));
  rooms.push(new room(3, 7, 100, 2, "D&D", 0));
  rooms.push(new room(2, 7, 100, 2, "ART", 0));

  //third floor
  rooms.push(new room(1, 0, 100, 3, "H303", 0));
  rooms.push(new room(2, 0, 100, 3, "H305", 0));
  rooms.push(new room(4, 0, 100, 3, "H309", 0));
  rooms.push(new room(5, 0, 100, 3, "H311", 0));
  rooms.push(new room(6, 0, 100, 3, "H313", 0));
  rooms.push(new room(7, 0, 100, 3, "H315", 0));

  let levelButton = createButton("Cycle Floors");
  levelButton.position(10,125);
  levelButton.mousePressed(levelSelect);

  let viewResetButton = createButton("Reset View");
  viewResetButton.position(10,150);
  viewResetButton.mousePressed(viewReset);
}

function levelSelect() {
  level++;
  if (level > 3) {
    level = 1;
  }
  viewReset()
}
function viewReset() {
  xOffset = 0;
  yOffset = 0;
  keyCode = 0;
}

// function previewCycle() {
//   if (2 == 2) {
//     period++;
//     if (period > 10) {
//       period = 0;
//     }
//   }
// }

function draw() {
  resizeCanvas(windowWidth, windowHeight)
  
 
 
  
  background(220);
  for (let i = 0; i < rooms.length; i++) {
    //rooms[i].showAsBeneath();
    rooms[i].show();
    
  }
  floorNaming();
  push();
  stroke(255);
  fill(0);
  strokeWeight(3);
  textSize(100);
  text(period, 10, 80);
  textSize(25)
  text(floorName,10,110)
  pop();
  
  occupy();
  periodrotate();
  
  //keyboard controls -- backup/convenient alternative to buttons
  if (keyCode == 49) {
    //level selector
    level = 1;
  } else if (keyCode == 50) {
    level = 2;
  } else if (keyCode == 51) {
    level = 3;
  }
  if (keyCode == 32) {
    //view reset
    xOffset = 0;
    yOffset = 0;
    keyCode = 0;
  }
  //keyboard controsls end
}

function mouseDragged() {
  if (abs(mouseX - prevX) > 100) {
    //mobile corrector
    prevX = mouseX;
  }
  if (abs(mouseY - prevY) > 100) {
    prevY = mouseY;
  }
  xOffset = xOffset + mouseX - prevX; //movement
  yOffset = yOffset + mouseY - prevY;
  prevX = mouseX; //mouse tracker
  prevY = mouseY;
}

class room {
  constructor(x, y, size, level, ID, occupiedBy) {
    this.x = 10 + x * sp;
    this.y = 10 + y * sp;
    this.s = size;
    this.l = level;
    this.id = ID;
    this.o = occupiedBy;
  }
  show() {
    if (level == this.l) {
      push();
      if (this.o == 0) {
        fill(255);
      } else if (this.o == 1) {
        fill(0);
      } else if (this.o == 2) {
        fill(122);
      }
      square(this.x + xOffset, this.y + yOffset, this.s);
      stroke(255);
      fill(0);
      strokeWeight(3);
      textSize(14);
      text(this.id, this.x + xOffset + 5, this.y + yOffset + 5, 75);
      pop();
    }
  }
  // showAsBeneath() {
  //   if (level == this.l + 1) {
  //     push();
  //     if (this.o == 0) {
  //       fill(255, 255, 255, opacity);
  //     } else if (this.o == 1) {
  //       fill(0, 0, 0, opacity);
  //     } else if (this.o == 2) {
  //       fill(122, 122, 122, opacity);
  //     }
  //     square(this.x + xOffset + offset, this.y + yOffset + offset, this.s);
  //     stroke(255, 255, 255, opacity);
  //     fill(0, 0, 0, opacity);
  //     strokeWeight(3);
  //     textSize(14);
  //     text(
  //       this.id,
  //       this.x + xOffset + 5 + offset,
  //       this.y + yOffset + 5 + offset,
  //       75
  //     );
  //     pop();
  //   }
  // }
  // showAsAbove() {}
}
