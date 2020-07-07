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
  }

  init() { // adding values we need for the game
    this.start();
  }

  start() {
    this.drawPlayerCharacter();
    setInterval(() => {
      this.clearCanvas();
      this.drawPlayerCharacter();
      this.drawSamaCharacter();
      this.player.move();
      // for (let i = 0; i < this.obstacles.length; i++) {
      //   this.obstacles[i].move();
      //   this.obstacles[i].draw();
      //   this.car.crashCollision(this.obstacles[i]);
      //   if (this.obstacles[i].y > 800) {
      //     this.obstacles.splice(i, 1);
      //   }
      // }
    }, 1000 / 60);
  }


  // drawBackground() {
  //   this.backgroundImg.src = './images/road.png';
  //   this.ctx.drawImage(
  //     this.backgroundImg,
  //     this.x,
  //     this.y,
  //     this.width,
  //     this.height
  //   );
  // }

  drawPlayerCharacter() {
    this.player.drawComponent('./images/daddy-2-475205.png');
  }

  drawSamaCharacter() {
    this.sama.drawComponent('/images/baby-idea-icon.png');
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}