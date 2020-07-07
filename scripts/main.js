// ctx.beginPath();
// ctx.moveTo(250, 0);
// ctx.lineTo(250, 400);
// ctx.stroke();

const startBtn = document.querySelector('.btn-start');
const gameIntro = document.querySelector('#game-intro');
const gameSec = document.querySelector('#game-section');

startBtn.addEventListener("click", function(e){
  e.preventDefault();

  gameIntro.classList.add("inactive");
  gameSec.classList.add("active");
  startGame();
});



function startGame() {
  const myGame = new Game();
  myGame.init();
}