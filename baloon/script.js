let score=0;

function createBalloon(){
  let balloon=document.createElement("div");
  balloon.className="balloon";
  balloon.style.left=Math.random()*90+"%";
  balloon.style.background=
  "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.appendChild(balloon);

  balloon.onclick=function(){
    score++;
    document.getElementById("score").innerText="Score: "+score;
    balloon.remove();
  }

  setTimeout(()=>balloon.remove(),3000);
}

setInterval(createBalloon,800);