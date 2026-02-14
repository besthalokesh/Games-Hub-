const emojis = ["🍎","🍌","🍇","🍉","🍎","🍌","🍇","🍉"];
let firstCard, secondCard;
let score = 0;

emojis.sort(()=>0.5-Math.random());

const grid = document.getElementById("grid");

emojis.forEach(emoji=>{
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="inner">
      <div class="front"></div>
      <div class="back">${emoji}</div>
    </div>
  `;
  grid.appendChild(card);

  card.addEventListener("click", ()=>{
    card.querySelector(".inner").classList.add("flip");

    if(!firstCard) firstCard = card;
    else{
      secondCard = card;
      if(firstCard.innerHTML === secondCard.innerHTML){
        score++;
        document.getElementById("score").innerText = score;
        firstCard = null;
        if(score === 4){
          document.getElementById("popup").style.display="block";
        }
      } else {
        setTimeout(()=>{
          firstCard.querySelector(".inner").classList.remove("flip");
          secondCard.querySelector(".inner").classList.remove("flip");
          firstCard=null;
        },800);
      }
    }
  });
});
