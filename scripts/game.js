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
    // this.drawPlayerCharacter();
    // this.drawSamaCharacter();
    setInterval(() => {
      this.clearCanvas();
      this.drawPlayerCharacter();
      this.drawSamaCharacter();
  
        this.obstacles[0].drawWall(); 
      

      this.player.move();  
      
    }, 1000 / 60);
  }

  drawPlayerCharacter() {
    this.player.drawComponent('./images/daddy-2-475205.png');
  }

  drawSamaCharacter() {
    this.sama.drawComponent('/images/baby-idea-icon.png');
  }

  createObstacles() {
    this.obstacles.push(new Obstacle(this, 250, 0, 250, 400));


  }


  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}