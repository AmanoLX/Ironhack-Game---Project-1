class Obstacle extends Component {
  constructor(game, initialX, initialY, endX,endY ) {
      super(game);
      this.game = game;
      this.initialX = initialX;
      this.initialY = initialY;
      this.endX = endX;
      this.endY = endY;
      //this.wall = new Wall();
  }

  drawWall() {
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.initialX, this.initialY);
    this.game.ctx.lineTo(this.endX, this.endY);
    this.game.ctx.stroke();
  }
}

  // drawWall() {
  //     this.x = ctx.beginPath();
  //     this.y = ctx.moveTo(250, 0);
  //     this.width = ctx.lineTo(250, 400);
  //     this.height ctx.stroke();
  //   }
  // }

// this.ctx.beginPath();
// this.ctx.moveTo(250, 0);
// this.ctx.lineTo(250, 400);
// this.ctx.stroke();