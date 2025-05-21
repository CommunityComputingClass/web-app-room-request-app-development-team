let headerText = "Room        |        Requester      | Email of Applicant                          |          Reason for Request | Time | Application Number"
let data;
let buttonApproveRequest
let buttonDenyRequest
let ReasonForDenial;
let denialReasons = []
let contents = "";
let now = "";
let requests = []

function pingTime(){
    now = Date()
}

function storeText(){
    contents = this.value()
}

function requestApproved(){

}

function automatedEmailApproved(){
    //to be filled in later: will need gmail account integration
}

function requestDenied(){
    denialReasons.push(contents)
    console.log(contents)
    contents = "";
    this.if = "Denied";
    ReasonForDenial.value("request denied on grounds of:")
    
}

function automatedEmailDenied(){

}

function preload(){
    data = loadJSON("applications.json")

}

class application {
    constructor(serial, room, name, email, purpose, time, approvalstatus) {
        this.what = serial
        this.where = room
        this.who = name
        this.replyto = email
        this.why = purpose
        this.when = time
        this.if = approvalstatus
    }

    render(specificY){
            textSize(20)
           if(this.if==="Denied"){
            fill("red")
           }
          else if(this.if==="Pending Review"){
            fill("yellow")
           }
           else if(this.if==="Approved"){
            fill("green")
           }
           else(
            fill("white")
           )
          text(this.where,60,specificY)
          text(this.who,200,specificY)
          text(this.replyto,360,specificY)
          text(this.why,720,specificY)
          text(this.when,920,specificY)
          text(this.what,1060,specificY)
        
            if(this.if==="Pending Review"){
            let buttonTextApprove = "approve request"
            buttonApproveRequest = createButton(buttonTextApprove)
            buttonApproveRequest.position (1100,specificY)
            buttonApproveRequest.mousePressed(
                //requestApproved(),
                //this.if = "Approved"
            );
            let buttonTextDeny= "deny request"
            buttonDenyRequest = createButton(buttonTextDeny)
            buttonDenyRequest.position (1250,specificY)
            buttonDenyRequest.mousePressed(
                //requestDenied(),
                this.if = "Denied",
                console.log(this.if)
            )
            text(this.if,1350,specificY)
            
         }
         else{
            text(this.if,1100,specificY)
          }
        
        }
    }


function setup(){
    createCanvas(1920,1080);
    background("white");
    console.log(data.applications[0])
    ReasonForDenial = createInput("request denied on these grounds:")
    ReasonForDenial.size(300,40)
    ReasonForDenial.position(60,140)
    ReasonForDenial.input(storeText)
    for (let n = 0; n<data.applications.length; n++){
        requests.push(new application(data.applications[n].serial,data.applications[n].room,data.applications[n].name,
        data.applications[n].email,data.applications[n].purpose,data.applications[n].time,data.applications[n].approvalstatus))
        //console.log(requests[n])
    }
    
    
}

function draw() {
    background(50);
    noStroke();
    fill(255);
    text(headerText,50,200),
    pingTime();
    noStroke();
    fill("255");
    text(now,400,150)
    //printApplications()
    renderApplications()

}

function renderApplications(){
    specificY = 250
    for( let [i] in requests) {
        requests[i].render(specificY)
        specificY +=75
    }
}

function printApplications(){
    let specificY = 250
    for (let n = 0; n<data.applications.length; n++){
        textSize(20)
        if(data.applications[n].approvalstatus==="Denied"){
            fill("red")
        }
        else if(data.applications[n].approvalstatus==="Pending Review"){
            fill("yellow")
        }
        else if(data.applications[n].approvalstatus==="Approved"){
            fill("green")
        }
        else(
            fill("white")
        )
        text(data.applications[n].room,60,specificY)
        text(data.applications[n].name,200,specificY)
        text(data.applications[n].email,360,specificY)
        text(data.applications[n].purpose,720,specificY)
        text(data.applications[n].time,920,specificY)
        text(data.applications[n].serial,1060,specificY)
        

        if(data.applications[n].approvalstatus==="Pending Review"){
            let buttonTextApprove = "approve request"
            buttonApproveRequest = createButton(buttonTextApprove)
            buttonApproveRequest.position (1100,specificY)
            buttonApproveRequest.mousePressed(requestApproved);
            let buttontextdeny= "deny request"
            buttonDenyRequest = createButton(buttontextdeny)
            buttonDenyRequest.position (1250,specificY)
            buttonDenyRequest.mousePressed(requestDenied)
            text(data.applications[n].approvalstatus,1350,specificY)
            
        }
        else{
            text(data.applications[n].approvalstatus,1100,specificY)
        }
        
        specificY +=75
        
        //console.log(specificY)
    }

}