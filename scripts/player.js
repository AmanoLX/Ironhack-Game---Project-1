class Player extends Component {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }

  move(obstaclesArray) {
    
    document.onkeydown = event => {
      const key = event.keyCode;
      const possibleKeysStrokes = [37, 38, 39, 40]; // arrow keys

      

        

        if (possibleKeysStrokes.includes(key)) {
          switch (key) {
            case 37: // left arrow, x axis
              if (this.x >= 10 && this.wallRightSide(obstaclesArray)) {
                this.x -= 10;
              }
              break;
            case 38: // up arrow, y axis
              if (this.y >= 10 && this.wallUpSide(obstaclesArray)) {
                this.y -= 10;
              }
              break;
            case 39: // right arrow, x axis
              if (this.x <= 490 - this.width && this.wallLeftSide(obstaclesArray) ){
                this.x += 10;
              }
              break;
            case 40: // down arrow, y axis
              if (this.y <= 490 - this.height && this.wallDownSide(obstaclesArray)) {
                this.y += 10;
              }
              break;
            }
          }
      };
    }

  samaCollision(sama){
    if(this.x + this.width > sama.x && this.y + this.height > sama.y){
      modal.classList.add("won");
      timerEl.style.color = '#000';
    
      modal.innerHTML = `
        <p class="timer">You won the game!</p>
        <p>Yes you did it! Sama loves you!</p>
        <img src="./images/baby-sucking-icon.png" width="200px">
      `;
    }
    
    // if(sama.x >= this.x && sama.y > this.y){
    //   console.log('you win!');
    // }
    // if(sama.y === this.y  && sama.x < this.x + this.width && sama.x > this.x){
    //   console.log('you win!');
    // }
    // if(sama.y === this.y + this.height && sama.x <= this.x && sama.x > this.x) {
    //   console.log('you win!');
    // }
  }
  
  wallLeftSide(obstaclesArray){
    const collisionArray = obstaclesArray.map((obstacle) => {
    console.log(obstacle.initialX, this.x, obstacle.endY, this.y)
    if(obstacle.initialX === this.x + this.width + 10 && obstacle.endY > this.y && obstacle.initialY < this.y + this.height){
      return true;
    }else {
      return false;
    }
  })
  console.log(collisionArray)
    return collisionArray.includes(true) ? false : true
  }

  wallRightSide(obstaclesArray){
    const collisionArray = obstaclesArray.map((obstacle) => {
      console.log(obstacle.initialX, this.x, obstacle.endY, this.y)
      if(obstacle.initialX === this.x - 10 && obstacle.endY > this.y && obstacle.initialY < this.y + this.height){
        return true;
      }else {
        return false;
      }
    })
    console.log(collisionArray)
      return collisionArray.includes(true) ? false : true
  
  }

  wallUpSide(obstaclesArray){

    const collisionArray = obstaclesArray.map((obstacle) => {
      console.log(obstacle.initialX, this.x, obstacle.endY, this.y)
      if(obstacle.initialY === this.y  && obstacle.initialX < this.x + this.width && obstacle.endX > this.x){
        return true;
      }else {
        return false;
      }
    })
    console.log(collisionArray)
      return collisionArray.includes(true) ? false : true
  }

  wallDownSide(obstaclesArray){

    const collisionArray = obstaclesArray.map((obstacle) => {
      console.log(obstacle.initialX, this.x, obstacle.endY, this.y)
      if(obstacle.initialY === this.y + this.height && obstacle.initialX <= this.x && obstacle.endX > this.x){
        return true;
      }else {
        return false;
      }
    })
    console.log(collisionArray)
      return collisionArray.includes(true) ? false : true
  }
}