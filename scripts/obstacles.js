class Obstacle extends Component {
  constructor(game, initialX, initialY, endX, endY) {
      super(game);
      this.game = game;
      this.initialX = initialX;
      this.initialY = initialY;
      this.endX = endX;
      this.endY = endY;
  }

  drawWall() {
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.initialX, this.initialY);
    this.game.ctx.lineTo(this.endX, this.endY);
    this.game.ctx.stroke();
  }
}