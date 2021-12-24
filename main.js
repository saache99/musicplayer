leftX = 0;
rightX = 0;
leftY = 0;
rightY = 0;

function setup()
{
    canvas = createCanvas(600,900);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelme);
    poseNet.on('pose',gotPoses);
}

function modelme()
{
    console.log("Model Is loaded");
}

function draw()
{
    image(video,0,0,600,500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;

        console.log("Values got by your hands are:-"+leftX+leftY+rightX+rightY);
    }
}

function preload()
{
    robot_song = loadSound("robot.mp3");
    dancewithmonkey_song = loadSound("dancewithmonkey.mp3")
}