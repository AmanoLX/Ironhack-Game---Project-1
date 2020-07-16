class Player extends Component {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }

  move(obstacle) {
    
    document.onkeydown = event => {
      const key = event.keyCode;
      const possibleKeysStrokes = [37, 38, 39, 40]; // arrow keys

      if (possibleKeysStrokes.includes(key)) {
        switch (key) {
          case 37: // left arrow, x axis
            if (this.x >= 10 && this.wallRightSide(obstacle)) {
              this.x -= 10;
            }
            break;
          case 38: // up arrow, y axis
            if (this.y >= 10 && this.wallUpSide(obstacle)) {
              this.y -= 10;
            }
            break;
          case 39: // right arrow, x axis
            if (this.x <= 490 - this.width && this.wallLeftSide(obstacle) ){
              this.x += 10;
            }
            break;
          case 40: // down arrow, y axis
            if (this.y <= 490 - this.height && this.wallDownSide(obstacle)) {
              this.y += 10;
            }
            break;
        }
      }
    }
  }
  samaCollision(sama){
    
    if(this.x + this.width > sama.x && this.y + this.height > sama.y){
      console.log('you win!');
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
  
  wallLeftSide(obstacle){
    
    if(obstacle.initialX > this.x + this.width && obstacle.endY > this.y){
      return false;
    }else {
      return true;
    }
  }
  wallRightSide(obstacle){
    if(obstacle.initialX >= this.x && obstacle.endY > this.y){
      return false;
    }else {
      return true;
    }
  }
// initialX, initialY, endX, endY
// this.obstacles.push(new Obstacle(this, 100, 0, 100, 100));
  wallUpSide(obstacle){
    if(obstacle.initialY === this.y  && obstacle.initialX < this.x + this.width && obstacle.endX > this.x){
      return false;
    } else {
      return true;
    }
  }

  wallDownSide(obstacle){
    console.log(this.x, obstacle.initialX, this.y, obstacle.initialY)
    if(obstacle.initialY === this.y + this.height && obstacle.initialX <= this.x && obstacle.endX > this.x){
      return false;
    } else {
      return true;
    }
  }
  

}