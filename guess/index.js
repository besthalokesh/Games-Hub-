let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

guessBtn.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);
    attemptCount++;

    if (isNaN(userGuess)) {
        message.textContent = "Enter a valid number!";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "Correct! 🎉";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too High!";
    } else {
        message.textContent = "Too Low!";
    }

    attempts.textContent = "Attempts: " + attemptCount;
});

restartBtn.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    message.textContent = "";
    attempts.textContent = "";
    guessInput.value = "";
});
