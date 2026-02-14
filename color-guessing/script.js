let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
document.getElementById("colorBox").style.background = randomColor;

function checkColor(){
  let userColor = document.getElementById("colorPicker").value;
  if(userColor.toLowerCase() === randomColor.toLowerCase()){
    document.getElementById("result").innerText = "Correct 🎉";
  } else {
    document.getElementById("result").innerText = "Wrong ❌";
  }
}

document.getElementById("output").style.background = randomColor