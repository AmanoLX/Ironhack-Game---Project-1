class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.player = new Player(this, 10, 0, 50, 50);
    this.sama = new Sama(this, 450, 450, 50, 50);
    this.obstacles = [];
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 500;
    this.timer = new Timer();
  }

  init() { // adding values we need for the game
    this.start();
    this.timer.updateCountdown();
    this.createObstacles();
  }

  start() {
    setInterval(() => {
      this.clearCanvas();
      this.drawPlayerCharacter();
      this.drawSamaCharacter();
      this.player.samaCollision(this.sama);
    
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].drawWall();
      }
      this.player.move(this.obstacles);
    }, 1000 / 60);
  }

  drawPlayerCharacter() {
    this.player.drawComponent('./images/daddy-2-475205.png');
  }

  drawSamaCharacter() {
    this.sama.drawComponent('./images/baby-idea-icon.png');
  }

  createObstacles() { 
    // initialX, initialY, endX, endY

    this.obstacles.push(new Obstacle(this, 70, 0, 70, 100)); // 0 vertical
    this.obstacles.push(new Obstacle(this, 70, 100, 200, 100)); // 1 horizontal
    this.obstacles.push(new Obstacle(this, 70, 170, 160, 170)); // 2 horizontal
    this.obstacles.push(new Obstacle(this, 70, 170, 70, 450)); // 3 vertical
    // this.obstacles.push(new Obstacle(this, 220, 100, 220, 230)); // 4 vertical
    // this.obstacles.push(new Obstacle(this, 130, 230, 200, 230)); // 5 horizontal
    // this.obstacles.push(new Obstacle(this, 130, 220, 130, 400)); // 6 vertical
    // this.obstacles.push(new Obstacle(this, 200, 260, 120, 260));
    // this.obstacles.push(new Obstacle(this, 120, 400, 300, 400));
    // this.obstacles.push(new Obstacle(this, 300, 0, 300, 400));
    // this.obstacles.push(new Obstacle(this, 360, 200, 500, 200));
    // this.obstacles.push(new Obstacle(this, 360, 160, 500, 160));
    // this.obstacles.push(new Obstacle(this, 360, 160, 360, 0));
    // this.obstacles.push(new Obstacle(this, 360, 260, 360, 400));
    // this.obstacles.push(new Obstacle(this, 360, 260, 440, 260));
    // this.obstacles.push(new Obstacle(this, 440, 250, 440, 460));
    // this.obstacles.push(new Obstacle(this, 60, 450, 440, 450));
    // this.obstacles.push(new Obstacle(this, 260, 450, 260, 500));
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }    
}   