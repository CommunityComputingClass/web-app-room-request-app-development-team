let headerText = "Room        |        Applicant Name | Email of Applicant                          |          Reason for Booking | Time | Application Number"
let data;
let buttonApproveRequest
let buttonDenyRequest
let ReasonForDenial;
let denialReasons = []
let contents = "";

function storeText(){
    contents = this.value()
}

function automatedEmailApproved(){
    //to be filled in later: will need gmail account integration
}

function automatedEmailDenied(){
    //to be filled in later: will need gmail account integration
    denialReasons.push(contents)
    console.log(contents)
    contents = "";
    ReasonForDenial.value("request denied on grounds of:")
    

}

function automatedEmailBookingOverridden(){
    //this is in here for when Admin insists on being able to schedule assemblies without two weeks' advance notice
    //and run roughshod over honest, hardworking club leaders and students who just want to meet in peace
    //also for when double bookings suddenly appear
    //It should only fire when the front desk person authorizes it, given that there might be false positives
}

function preload(){
    data = loadJSON("applications.json")

}

function setup(){
    createCanvas(1920,1080);
    background("white");
    console.log(data.applications[0])
    ReasonForDenial = createInput("request denied on these grounds:")
    ReasonForDenial.size(300,40)
    ReasonForDenial.position(60,140)
    ReasonForDenial.input(storeText)
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
        text(data.applications[n].time,920,specificY)//originally I was thinking clock time. 
        //However, if we're trying to pull information on assemblies/tutorial from the block schedule than this
        //could be based on a more uniform system, maybe a "morning m1/m2, tutorial, lunch, afternoon a1/a2, after school"
        //arrangement instead, which would also make it easier to machine check against double bookings.
        text(data.applications[n].serial,1060,specificY)
        //text(data.applications[n].date,1060,specificY)
        //we might want to add a "date" field to applications. this combined with a time block arrangement instead of free time input
        //could help us automate double booking prevention
        //although given Admin's habit of springing sudden assemblies on the school
        //they might want a backdoor which can overrule existing bookings
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