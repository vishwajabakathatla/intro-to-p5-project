function preload(){}

function setup() {
    canvas=createCanvas(840, 560);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw() {
    image(video, 270, 150, 300, 280);
    tint(tint_color);

    fill(225, 255, 0);
    stroke(300, 300, 300);
    circle(50, 50, 75);

    fill(225, 255, 0);
    stroke(300, 300, 300);
    circle(790, 50, 75);

    fill(225, 255, 0);
    stroke(300, 300, 300);
    circle(790, 520, 75);

    fill(225, 255, 0);
    stroke(300, 300, 300);
    circle(50, 520, 75);

    fill(0, 0, 175);
    stroke(300, 300, 300);
    rect(81, 33, 678, 32, 8);

    fill(0, 0, 175);
    stroke(300, 300, 300);
    rect(35, 80, 32, 410, 8);

    fill(0, 0, 175);
    stroke(300, 300, 300);
    rect(775, 80, 32, 410, 8);

    fill(0, 0, 175);
    stroke(300, 300, 300);
    rect(81, 505, 678, 32, 8);
}

function take_snapshot() {
    save('keyur.png');
}

function filter_tint() {
    tint_color=document.getElementById("color_name").value;
}