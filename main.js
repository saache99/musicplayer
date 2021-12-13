function setup()
{
    canvas = createCanvas(600,900);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}

function preload()
{
    robot_song = loadSound("robot.mp3");
    dancewithmonkey_song = loadSound("dancewithmonkey.mp3")
}