let userScore=0, compScore=0;
const choices=["rock","paper","scissors"];

function play(user){
  let comp=choices[Math.floor(Math.random()*3)];

  if(user===comp) result="Draw";
  else if(
    (user==="rock" && comp==="scissors") ||
    (user==="paper" && comp==="rock") ||
    (user==="scissors" && comp==="paper")
  ){
    userScore++;
    result="You Win!";
  } else{
    compScore++;
    result="Computer Wins!";
  }

  document.getElementById("result").innerText=result;
  document.getElementById("score").innerText=
  `You: ${userScore} | Computer: ${compScore}`;
}
