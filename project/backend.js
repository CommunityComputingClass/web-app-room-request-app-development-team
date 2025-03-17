let headerText = "Room | Name | Email | Purpose | Timeslot"

function setup(){
    createCanvas(1920,1080);
    background("white");
}

function draw(){
    background(50);
    noStroke();
    fill(255);
    text(headerText,50,200)
}