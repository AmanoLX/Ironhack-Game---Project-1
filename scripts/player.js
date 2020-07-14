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
            if (this.y >= 10) {
              this.y -= 10;
            }
            break;
          case 39: // right arrow, x axis
            if (this.x <= 490 - this.width && this.wallLeftSide(obstacle)){
              this.x += 10;
            }
            break;
          case 40: // down arrow, y axis
            if (this.y <= 490 - this.height) {
              this.y += 10;
            }
            break;
        }
      }
    }
  }
  
  wallLeftSide(obstacle){
    console.log(obstacle.endY, this.y)
    if(obstacle.initialX <= this.x + this.width && obstacle.endY >= this.y){
      return false
    }else{
      return true
    }
  }
  wallRightSide(obstacle){
    if(obstacle.initialX >= this.x && obstacle.endY >= this.y){
      return false
    }else{
      return true
    }
  }
  // initialX, initialY, endX, endY

  wallCollision(obstacle) {
    // y axis
    if (obstacle.initialY  <= this.player.y + this.player.height && obstacle.endY === this.player.y) {
      // x axis
      if (obstacle.initialX === this.player.x || obstacle.initialX === this.player.x + this.player.width) {
        setTimeout(() => {
          alert('cant move');
        }, 5);
      }
    }
  }
}