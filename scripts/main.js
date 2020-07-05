// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(250, 0);
// ctx.lineTo(250, 400);
// ctx.stroke();

const startBtn = document.querySelector('.btn-start');
const instructions = document.querySelector('#instructions');

startBtn.addEventListener("click", function(){
  canvas.classList.add('active');
  canvas.style.display = "block";
  instructions.classList.add("inactive");
  startGame();
});



function startGame() {
  const myGame = new Game();
  myGame.init();
}