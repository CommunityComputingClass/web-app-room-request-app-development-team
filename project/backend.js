let headerText = "Room | Name | Email | Purpose | Timeslot | Application Number"
let serial = []
let application;

function preload(){
    application = loadJSON("applications.json")

}

function setup(){
    createCanvas(1920,1080);
    background("white");
}

function draw() {
    background(50);
    noStroke();
    fill(255);
    text(headerText,50,200)
}

function printApplications(){
    let specificY = 250
    for (let n = 0; n<serial.length; n++){
        textSize(20)
        text(applications[0].room[n],60,specificY)
        text(applications[0].name[n],180,specificY)
        text(applications[0].email[n],300,specificY)
        text(applications[0].purpose[n],420,specificY)
        text(applications[0].time[n],540,specificY)
        text(applications[0].serial[n],600,specificY)
        specificY +=50
        console.log(specificY)
    }

}