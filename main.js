var robot_song = "";
var dancewithmonkey_song = "";

var leftX = 0;
var rightX = 0;
var leftY = 0;
var rightY = 0;

setscore = 0;
function setup() {
  canvas = createCanvas(600, 900);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelme);
  poseNet.on("pose", gotPoses);
}

function modelme() {
  console.log("Model Is loaded");
}

function preload() {
  robot_song = loadSound("robot.mp3");
  dancewithmonkey_song = loadSound("dancewithmonkey.mp3");
}

function draw() {
  image(video, 0, 0, 600, 500);

  song1staus = "true";
  song2staus = "false";

  if (setscore > 0.2) {
    fill("#f9484a");
    stroke("#f9484a");
    circle(leftX, leftY, 20);

    song1staus = "false";

    if (song1staus == "false") {
      robot_song.play();
      img = document.getElementById("song_image").src;
      img = "monkey.jfif";
      document.getElementsById("song_name").innerHTML = "Robot Song";
      console.log("Robot Song is begin played please enjoy it.")
      song2staus = "true";
    }
  }
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    setscore = results[0].pose.keypoints[9].score;
    console.log(setscore);

    leftX = results[0].pose.leftWrist.x;
    leftY = results[0].pose.leftWrist.y;
    rightX = results[0].pose.rightWrist.x;
    rightY = results[0].pose.rightWrist.y;

    console.log(
      "Values got by your hands are:-" + leftX + leftY + rightX + rightY
    );
  }
}
