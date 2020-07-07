// Set time we're counting down from
const startingSeconds = 30;
let seconds = startingSeconds;

// Update the count down every 1 second
const timerEl = document.querySelector('.timer');

function updateCountdown() {
  timerEl.innerHTML = `${seconds} seconds`;
  seconds--;

  if (seconds < 0) {
    clearInterval(timeinterval);
    alert('Game over!')
  }
};

// run function once at first to avoid delay
let timeinterval = setInterval(updateCountdown, 1000);


