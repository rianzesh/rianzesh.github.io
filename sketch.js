var bg, foto;
var balloons = [];
var soundFx;
var bgsound;

function preload() {
    bg = loadImage("assets/img/jakarta.png");
    soundFx = loadSound("assets/sfx/pop.mp3");
    bgsound = loadSound("assets/music/bgsound.mp3");
    // bgsound
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let x = 0; x < 20; x++) {
        balloons.push(new Balloon());
    }
}

function draw() {
    background(bg,0,0);

    for (let x = 0; x < balloons.length; x++) {
        balloons[x].show();
        balloons[x].up();
        balloons[x].checkEdge();
        if (balloons[x].mouseHover()) {
            balloons.splice(x, 1);
            bgsound.play();
        }
    }

    if (balloons.length <= 5) {
        for (let x = 0; x < 10; x++) {
            balloons.push(new Balloon());
        }
    }
}