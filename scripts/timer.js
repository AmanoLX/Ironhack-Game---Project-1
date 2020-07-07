// Set time we're counting down from
// const timerEl = document.querySelector('.timer');
// const startingSeconds = 5;
// let seconds = startingSeconds;

const timerEl = document.querySelector('.timer')

class Timer {
  constructor() {
    this.timerEl = timerEl;
    this.startingSeconds = 11;

  }
  
  updateCountdown() {  
  let timeinterval = setInterval(() => {
    this.startingSeconds--;
    this.timerEl.innerHTML = `${this.startingSeconds} seconds`;

    if (this.startingSeconds <= 0) {
      clearInterval(timeinterval);
      setTimeout(() => alert('Game over!'), 1000);
      }
    }, 1000);
  }
}





