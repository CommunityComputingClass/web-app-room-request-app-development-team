let headerText = "Room | Name | Email | Purpose | Timeslot | Application Number"
let serial = [0,1,2,3]
let applications;

function preload(){
    applications = loadJSON("applications.json")

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
    printApplications()
}

function printApplications(){
    let specificY = 250
    for (let n = 0; n<serial.length; n++){
        textSize(20)
        textColor("white")
        text(applications[n].room,60,specificY)
        text(applications[n].name,180,specificY)
        text(applications[n].email,300,specificY)
        text(applications[n].purpose,420,specificY)
        text(applications[n].time,540,specificY)
        text(applications[n].serial,600,specificY)
        specificY +=50
        console.log(specificY)
    }

}