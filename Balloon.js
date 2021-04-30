class Balloon {
    constructor() {
        this.red = random(0, 255);
        this.green = random(0, 255);
        this.blue = random(0, 255);
        this.r = random(70, 150);
        this.pos = createVector(random(width), height + random(100, 500));
        this.lineSize = random(150, 200);
        this.stepUp = 5;
    }

    show() {
        push();
        fill(this.red, this.green, this.blue, 150);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
        pop();

        push();
        noFill();
        stroke(255);
        strokeWeight(2);
        line(this.pos.x, this.pos.y + this.r / 2, this.pos.x, this.pos.y + this.lineSize);
        pop();
    }

    up() {
        this.pos.y -= this.stepUp;
    }

    checkEdge() {
        if (this.pos.y < this.r / 2) {
            this.pos.y = this.r / 2;
        }
    }
}