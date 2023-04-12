colorList = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function setup() {
  createCanvas(400, 400);
  balls = [];
  for (let numBalls = 0; numBalls < 25; numBalls++ ) {
    let thisX = random(25, width - 25);
    let thisY = random(25, height - 25);
    let thisColor = random(colorList);
    balls[numBalls] = new Ball(thisX, thisY, thisColor);
  }
}

function draw() {
  background(220);
  for (let ballsHere = 0; ballsHere < balls.length; ballsHere++) {
    balls[ballsHere].move();
    balls[ballsHere].show();
  }
}

class Ball {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedX = 5;
    this.speedY = 5;
  }
  move() {
    this.x = this.x + this.speedX;
    if(this.x > width - 25 || this.x < 25){
      this.speedX = -this.speedX;
    }
    this.y = this.y + this.speedY;
    if(this.y > height - 25 || this.y < 25){
      this.speedY = -this.speedY;
    }
  }
  show() {
    push();
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 50);
    pop();
  }
}
