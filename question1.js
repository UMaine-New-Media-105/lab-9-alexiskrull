ball = {
  x: 100,
  y: 100,
  speedX: 2,
  speedY: 2,
  color: "blue"
}

colorList = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
ballList = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let i = 0; i < 5; i++){
    ballList.push({
      x: random(25, width - 25),
      y: random(height),
      speedX: random(1, 5),
      speedY: random(1, 5),
      color: random(colorList)
    })
  }
  
  for(let j = 0; j < 5; j++){
    let newBall = ballList[j];
    drawSprite(newBall.x, newBall.y, newBall.color);
    newBall.x = newBall.x + newBall.speedX;
    if(newBall.x > width - 25 || newBall.x < 25){
      newBall.speedX = -newBall.speedX;
    }
    newBall.y = newBall.y + newBall.speedY;
    if(newBall.y > height - 25 || newBall.y < 25){
      newBall.speedY = -newBall.speedY;
    }
  }
}

function drawSprite(x, y, color){
  fill(color);
  ellipse(x, y, 50);
}
