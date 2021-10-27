ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for(let i = 0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
      score = 0;
    }
  }
  while (snake.length > tail){
    snake.shift();
  }
  if (appleX == px && appleY == py){
    tail++;
    score = score +1;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);
  if (bombX == px && bombY == py){
    tail=MIN;
    score = 0;
    bombX = Math.floor(Math.random()*canv.width/SIZE);
    bombY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "gray";
  ctx.fillRect(bombX*SIZE, bombY*SIZE, SIZE-2, SIZE-2);
  if(tail%5==0){
    if (apple2X == px && apple2Y == py){
      tail=tail + 2;
      score = score + 2;
      apple2X = Math.floor(Math.random()*canv.width/SIZE);
      apple2Y = Math.floor(Math.random()*canv.height/SIZE);
    }
    ctx.fillStyle = "purple";
    ctx.fillRect(apple2X*SIZE, apple2Y*SIZE, SIZE-2, SIZE-2);
  }
  console.log(score);
}, 1000/FPS);
