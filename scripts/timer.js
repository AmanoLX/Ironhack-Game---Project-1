const timerEl = document.querySelector('.timer')
const modal = document.querySelector('.modal')

class Timer {
  constructor() {
    this.timerEl = timerEl;
    this.startingSeconds = 51;
  }
  
  updateCountdown() {  
  let timeinterval = setInterval(() => {
    this.startingSeconds--;
    this.timerEl.innerHTML = `${this.startingSeconds} seconds`;

    if(this.startingSeconds <= 3) {
      timerEl.style.color = 'red';
    }
    
    if (this.startingSeconds <= 0) {
      clearInterval(timeinterval);
      setTimeout(() => {
        this.gameOverScreen();
        }, 1500);
      }
    }, 1000);
  }

  gameOverScreen() {
    canvas.style.display = 'none';
    modal.classList.add("lost");
    timerEl.style.color = '#000';
  
    modal.innerHTML = `
      <p class="timer">You lost the game!</p>
      <p>Oh no! Too late... Now Sama is crying. Try again to make her calm.</p>
      <img src="./images/baby-crying-icon.png" width="200px">
    `;
  }
}

// function gameOverScreen() {
//   canvas.style.display = 'none';
//   modal.classList.add("lost");
//   timerEl.style.color = '#000';

//   modal.innerHTML = `
//     <p class="timer">You lost the game!</p>
//     <p>Oh no! Too late... Now Sama is crying. Try again to make her calm.</p>
//     <img src="./images/baby-crying-icon.png" width="200px">
//   `;
// }