class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.player = new Player(this, 0, 0, 50, 50);
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
    this.obstacles.push(new Obstacle(this, 60, 0, 60, 100));
    this.obstacles.push(new Obstacle(this, 60, 100, 200, 100));
    this.obstacles.push(new Obstacle(this, 60, 160, 140, 160));
    this.obstacles.push(new Obstacle(this, 60, 160, 60, 450));
    this.obstacles.push(new Obstacle(this, 200, 260, 200, 100));
    this.obstacles.push(new Obstacle(this, 200, 210, 120, 210));
    this.obstacles.push(new Obstacle(this, 120, 260, 120, 400));
    this.obstacles.push(new Obstacle(this, 200, 260, 120, 260));
    this.obstacles.push(new Obstacle(this, 120, 400, 300, 400));
    this.obstacles.push(new Obstacle(this, 300, 0, 300, 400));
    this.obstacles.push(new Obstacle(this, 360, 200, 500, 200));
    this.obstacles.push(new Obstacle(this, 360, 150, 500, 150));
    this.obstacles.push(new Obstacle(this, 360, 150, 360, 0));
    this.obstacles.push(new Obstacle(this, 360, 250, 360, 400));
    this.obstacles.push(new Obstacle(this, 360, 250, 440, 250));
    this.obstacles.push(new Obstacle(this, 360, 250, 440, 250));
    this.obstacles.push(new Obstacle(this, 440, 250, 440, 450));
    this.obstacles.push(new Obstacle(this, 60, 450, 440, 450));
    this.obstacles.push(new Obstacle(this, 250, 450, 250, 500));
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }    
}   