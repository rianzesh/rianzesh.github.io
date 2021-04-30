var bg, foto;
var balloons = [];
var soundFx;

function preload() {
    bg = loadImage("assets/img/bg1.jpg");
    soundFx = loadSound("assets/sfx/pop.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let x = 0; x < 20; x++) {
        balloons.push(new Balloon());
    }
}

function draw() {
    background(bg,0,0);
    if (startAll === true) {
        
        for (let x = 0; x < balloons.length; x++) {
            balloons[x].show();
            balloons[x].up();
            balloons[x].checkEdge();
            if (balloons[x].mouseHover()) {
                balloons.splice(x, 1);
                soundFx.play();
            }
        }
    
        if (balloons.length <= 5) {
            for (let x = 0; x < 10; x++) {
                balloons.push(new Balloon());
            }
        }
    }
}