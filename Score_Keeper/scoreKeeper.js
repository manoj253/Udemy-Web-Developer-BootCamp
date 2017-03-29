var p1 = document.querySelector('#p1');
var p1Display = document.querySelector('#p1Display');
var p2 = document.querySelector('#p2');
var p2Display = document.querySelector('#p2Display');
var limit = document.querySelector('#limit');
var numInput = document.querySelector('#numInput');
var resetButton = document.querySelector('#reset');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener("click",function(){
  if(!gameOver){
    p1Score++;
    if(p1Score===winningScore){
      p1Display.classList.add('winner');
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2.addEventListener("click",function(){
  if(!gameOver){
    p2Score++;
    if(p2Score===winningScore){
      p2Display.classList.add('winner');
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');
  gameOver = false;
}

numInput.addEventListener('change',function(){
  winningScore = Number(numInput.value);
  limit.textContent = Number(numInput.value);
  reset();
});

resetButton.addEventListener('click',function(){
  reset();
});
