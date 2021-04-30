var bg, foto;
var balloons = [];

function preload() {
    bg = loadImage("assets/img/jakarta.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let x = 0; x < 10; x++) {
        balloons.push(new Balloon());
    }
}

function draw() {
    background(bg,0,0);

    for (let x = 0; x < balloons.length; x++) {
        balloons[x].show();
        balloons[x].up();
        balloons[x].checkEdge();
    }
}