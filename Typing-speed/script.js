const words = ["html", "css", "javascript", "developer", "frontend", "design"];
let score = 0;
let time = 30;
let timer;
let currentWord;

function randomWord(){
  return words[Math.floor(Math.random() * words.length)];
}

function startGame(){
  score = 0;
  time = 30;
  document.getElementById("score").innerText = score;
  document.getElementById("time").innerText = time;
  currentWord = randomWord();
  document.getElementById("word").innerText = currentWord;

  timer = setInterval(()=>{
    time--;
    document.getElementById("time").innerText = time;
    if(time === 0){
      clearInterval(timer);
      alert("Game Over! Score: " + score);
    }
  },1000);
}

document.getElementById("input").addEventListener("input", function(){
  if(this.value === currentWord){
    score++;
    document.getElementById("score").innerText = score;
    currentWord = randomWord();
    document.getElementById("word").innerText = currentWord;
    this.value = "";
  }
});
