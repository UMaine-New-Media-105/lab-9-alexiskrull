1. Modify the sketch so that it bounces in both x and y direction.
2. Use objects instead of variables to draw the balls.
3. Create at least 20 balls that are randomly bouncing off the walls.
4. Bonus: if you use classes to create the balls and move the functionality of drawSprite inside the classes.

I combined the first 3 objectives into 1 sketch. There are 20 balls that bounce in both x and y directions and are drawn using objects, like so:
```
for(let i = 0; i < 20; i++){
    ballList.push({
      x: random(25, width - 25),
      y: random(height),
      speedX: random(1, 5),
      speedY: random(1, 5),
      color: random(colorList)
    })
  }
```

LINK: https://editor.p5js.org/alexis.krull/sketches/tofa8Jg6u

For the last objective (#4) I changed pretty much everything to make the balls be drawn by using classes. Instead of newBall.x and things like that, they became this.x and the same with other variables like y, speed, color, etc. 

LINK: https://editor.p5js.org/alexis.krull/sketches/L1R-ouM6k
