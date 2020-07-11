class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.player = new Player(this, 0, 0, 50, 50);
    this.sama = new Sama(this, 450, 450, 50, 50);
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 500;
    this.timer = new Timer();
  }

  init() { // adding values we need for the game
    this.start();
    this.timer.updateCountdown();
  }

  start() {
    this.drawPlayerCharacter();
    setInterval(() => {
      this.clearCanvas();
      this.drawPlayerCharacter();
      this.drawSamaCharacter();
      this.drawWall();
      this.player.move();      
    }, 1000 / 60);
  }

  drawPlayerCharacter() {
    this.player.drawComponent('./images/daddy-2-475205.png');
  }

  drawSamaCharacter() {
    this.sama.drawComponent('/images/baby-idea-icon.png');
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawWall() {
    this.ctx.beginPath();
  this.ctx.moveTo(250, 0);
  this.ctx.lineTo(250, 400);
  this.ctx.stroke();
  }
}