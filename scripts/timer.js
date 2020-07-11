const timerEl = document.querySelector('.timer')
const modal = document.querySelector('.modal')

class Timer {
  constructor() {
    this.timerEl = timerEl;
    this.startingSeconds = 11;
  }
  
  updateCountdown() {  
  let timeinterval = setInterval(() => {
    this.startingSeconds--;
    this.timerEl.innerHTML = `${this.startingSeconds} seconds`;

    if(this.startingSeconds <= 3) {
      timerEl.style.color = 'red';
    }
    
    // if(this.player.x + this.player.width >= this.sama.x){
    //   clearInterval(timeinterval);
    //   setTimeout(() => {
    //     winScreen();
    //   }, 1500);
    // }


    if (this.startingSeconds <= 0) {
      clearInterval(timeinterval);
      setTimeout(() => {
        gameOverScreen();
        }, 1500);
      }
    }, 1000);
  }
}

function gameOverScreen() {
  canvas.style.display = 'none';
  modal.classList.add("lost");
  timerEl.style.color = '#000';

  modal.innerHTML = `
    <p class="timer">You lost the game!</p>
    <p>Oh no! Too late... Now Sama is crying. Try again to make her calm.</p>
    <img src="./images/baby-crying-icon.png" width="200px">
  `;
}

function winScreen() {
  canvas.style.display = 'none';
  modal.classList.add("won");
  timerEl.style.color = '#000';

  modal.innerHTML = `
    <p class="timer">You won the game!</p>
    <p>Yes you did it! Sama is so happy right now.</p>
    <img src="./images/baby-laughing-icon.png" width="200px">
  `;
}


