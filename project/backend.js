let headerText = "Room        |        Applicant Name | Email of Applicant                          |          Reason for Booking | Time | Application Number"
let data;
let buttonApproveRequest
let buttonDenyRequest
let ReasonForDenial
function automatedEmailApproved(){

}
function automatedEmailDenied(){

}

function preload(){
    data = loadJSON("applications.json")

}

function setup(){
    createCanvas(1920,1080);
    background("white");
    console.log(data.applications[0])
   // ReasonForDenial = createInput("answer goes here")
   // ReasonForDenial.size(300,40)
   // ReasonForDenial.position(25,150)
   // ReasonForDenial.input(storeText)
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
    for (let n = 0; n<data.applications.length; n++){
        textSize(20)
        fill("white")
        text(data.applications[n].room,60,specificY)
        text(data.applications[n].name,200,specificY)
        text(data.applications[n].email,360,specificY)
        text(data.applications[n].purpose,720,specificY)
        text(data.applications[n].time,920,specificY)
        text(data.applications[n].serial,1060,specificY)
        let buttonTextApprove = "approve request"
        buttonApproveRequest = createButton(buttonTextApprove)
        buttonApproveRequest.position (1100,specificY)
        buttonApproveRequest.mousePressed(automatedEmailApproved);
        let buttontextdeny= "deny request"
        buttonDenyRequest = createButton(buttontextdeny)
        buttonDenyRequest.position (1250,specificY)
        buttonDenyRequest.mousePressed(automatedEmailDenied)
        specificY +=50
        //console.log(specificY)
    }

}