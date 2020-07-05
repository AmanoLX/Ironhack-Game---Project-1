class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.player = new Player(this, 200, 550, 100, 150);
    this.x = undefined;
    this.y = undefined;
    this.width = 100;
    this.height = 700;
  }

  init() { // adding values we need for the game
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.x = 0;
    this.y = 0;
    this.start();
  }

  start() {
    this.drawBackground();
    this.drawPlayerCharacter();
    setInterval(() => {
      this.clearCanvas();
      this.drawPlayerCharacter();
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
    this.player.drawComponent('../images/daddy-2-475205.png');
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}