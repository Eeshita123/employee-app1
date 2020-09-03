var backgroundImg;

var canvas;

var bg ;

var datbase;

var sign;

var verify;

var pd , md;

var assignedpd;

var submittedpd;

var resubmitpd , missingpd , completedpd ;

var md;

var assignmd , aassignedmd , completedmd , missingmd , resubmitmd , submittedmd;

  function preload() {
    
  getBackgroundImg();

  }
function setup() {
  canvas = createCanvas(displayWidth - 30, displayHeight-40);
  database = firebase.database();

sign = new SignUp;
sign.display();

}

function draw() {
  
  if(backgroundImg)
        background(backgroundImg);
    

  textSize(40);

 text(mouseX+","+mouseY,mouseX,mouseY);
  
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();


  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  console.log(hour);
  
  if(hour>=06 && hour<=18){
      bg = "Day.jpg";
  }
  else{
      bg = "Night.jpg";
  }

  backgroundImg = loadImage(bg);
 console.log(backgroundImg);

}