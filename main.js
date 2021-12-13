nosex = "";
nosey="";

function preload(){

}

function setup(){
   Canvas  = createCanvas(300,300);
   Canvas.center();
   video= createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   posenet = ml5.poseNet(video,modelloaded);
   posenet.on('pose',gotposes);
}

function modelloaded(){
   console.log("modelloaded");    
}

function gotposes(result){
    nosex = result[0].pose.nose.x;
    nosey = result[0].pose.nose.y+10;
    console.log(result);
    console.log("nosex =" + nosex);
    console.log("nosey =" + nosey);
}

function take_snapshot(){
    save("Seriously.png");
}
function draw(){
   image(video,0,0,300,300);
}
