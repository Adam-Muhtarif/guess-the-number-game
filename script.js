let mysteryNumber = document.querySelector(".number"),
  score = document.querySelector(".score"),
  highScore = document.querySelector(".high-score"),
  checkBtn = document.querySelector(".check"),
  guess = document.querySelector(".guess"),
  message = document.querySelector(".message"),
  againBtn = document.querySelector(".again"),
  randomNumber = 1;

function startGame() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
}

function wrongGuessing(text) {
  score.textContent--;
  message.textContent = text;
}

startGame();
checkBtn.addEventListener("click", () => {
  // Check If Is It A Valid Number
  if (guess.value && parseInt(guess.value) <= 20) {
    // If Guess Number Higher Or Lower Then Random Number
    parseInt(guess.value) < randomNumber
      ? wrongGuessing("Too Low ⬇️")
      : parseInt(guess.value) > randomNumber
      ? wrongGuessing("Too High ⬆️")
      : "";

    // If Number Is Correct
    if (parseInt(guess.value) === randomNumber) {
      message.textContent = "Correct Number";
      document.body.style.backgroundColor = "green";

      // Change High Score Only If Score >
      highScore.textContent < score.textContent
        ? (highScore.textContent = score.textContent)
        : "";

      mysteryNumber.textContent = randomNumber;
      checkBtn.classList.add("block");
    }
  } else {
    message.textContent = "Enter a valid number";
  }
});

againBtn.addEventListener("click", () => {
  startGame();
  message.textContent = "Start Guessing...";
  document.body.style.backgroundColor = "black";
  mysteryNumber.textContent = "?";
  guess.value = "";
  score.textContent = 20;
  checkBtn.classList.remove("block");
});
