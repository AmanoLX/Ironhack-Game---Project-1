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
    this.obstacles.push(new Obstacle(this, 70, 100, 230, 100)); // 1 horizontal
    this.obstacles.push(new Obstacle(this, 70, 170, 160, 170)); // 2 horizontal
    this.obstacles.push(new Obstacle(this, 70, 170, 70, 500)); // 3 vertical
    this.obstacles.push(new Obstacle(this, 230, 100, 230, 240)); // 4 vertical
    this.obstacles.push(new Obstacle(this, 140, 240, 230, 240)); // 5 horizontal
    this.obstacles.push(new Obstacle(this, 230, 240, 230, 310)); // 6 vertical
    this.obstacles.push(new Obstacle(this, 140, 310, 230, 310)); // 7 horizontal
    this.obstacles.push(new Obstacle(this, 140, 310, 140, 430)); // 8 vertical
    this.obstacles.push(new Obstacle(this, 140, 430, 300, 430)); // 9 horizontal
    this.obstacles.push(new Obstacle(this, 300, 0, 300, 430)); // 10 vertical
    this.obstacles.push(new Obstacle(this, 370, 200, 370, 430)); // 11 vertical
    this.obstacles.push(new Obstacle(this, 370, 200, 430, 200)); // 12 horizontal
    this.obstacles.push(new Obstacle(this, 370, 130, 500, 130)); // 13 horizontal
    this.obstacles.push(new Obstacle(this, 430, 200, 430, 500)); // 14 vertical
    this.obstacles.push(new Obstacle(this, 370, 0, 370, 70)); // 15 vertical
    this.obstacles.push(new Obstacle(this, 370, 70, 500, 70)); // 16 horizontal
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }    
}   