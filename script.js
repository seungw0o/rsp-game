let computerSelect = Math.floor(Math.random() * 3 + 1);
const Select = document.querySelector(".select");
const Rock = document.querySelector("#Rock");
const Scissors = document.querySelector("#Scissors");
const Paper = document.querySelector("#Paper");
const Money = document.querySelector(".num");
const Result = document.querySelector(".result");
const mainResult = document.querySelector(".mainResult");
const Rate = document.querySelector(".rate");
const ViewSelect = document.querySelector(".viewSelect");
const Bate = document.querySelector(".bate");
const Bating = document.querySelector(".bating");
let Moneynum = +Money.innerHTML;
let resetButton;
let userSelect;
let GameOver;
ViewSelect.style.display = "none";
Result.style.display = "none";
Rate.style.display = "none";

function setGameover() {
  if (Moneynum === +0) {
    ViewSelect.style.display = "none";
    Result.style.display = "none";
    Rate.style.display = "none";
    GameOver = document.createElement("h1");
    GameOver.className = "gameover";
    GameOver.textContent = "Game Over !";
    mainResult.appendChild(GameOver);
  }
}

function gameOver() {
  if (Moneynum === 0) {
    resetButton.addEventListener("click", function () {
      Moneynum = 1000;
      Money.innerHTML = Moneynum;
      GameOver.remove();
    });
  }
}

function viewSelect() {
  const user = document.querySelector("#user");
  const computer = document.querySelector("#computer");
  switch (userSelect) {
    case 1:
      user.textContent = "USER : ROCK";
      break;
    case 2:
      user.textContent = "USER : SCISSORS";
      break;
    case 3:
      user.textContent = "USER : PAPER";
      break;
  }
  switch (computerSelect) {
    case 1:
      computer.textContent = "COMPUTER : ROCK";
      break;
    case 2:
      computer.textContent = "COMPUTER : SCISSORS";
      break;
    case 3:
      computer.textContent = "COMPUTER : PAPER";
      break;
  }
}

function setting() {
  ViewSelect.style.display = "block";
  Result.style.display = "flex";
  Rate.style.display = "flex";
  setGameover();
  creatReset();
  gameOver();
  Bating.style.display = "none";
}

function creatReset() {
  resetButton = document.createElement("button");
  resetButton.textContent = "try again";
  resetButton.className = "resetButton";
  mainResult.appendChild(resetButton);
  resetButton.addEventListener("click", reset);
}

function resultHandler(type, color) {
  Select.style.display = "none";
  Result.textContent = type;
  Result.style.backgroundColor = color;
  Result.style.color = "white";
  switch (type) {
    case "win":
      Moneynum += +Bate.value * 2;
      Money.innerHTML = Moneynum;
      Rate.textContent = `Money : +${+Bate.value * 2}`;
      break;
    case "lose":
      Moneynum -= +Bate.value;
      Money.innerHTML = Moneynum;
      Rate.textContent = `Money : -${+Bate.value}`;
      break;
    case "draw":
      Rate.textContent = "Money : +0";
      break;
  }

  setting();
}

function reset() {
  Select.style.display = "flex";
  resetButton.remove();
  computerSelect = Math.floor(Math.random() * 3 + 1);
  ViewSelect.style.display = "none";
  Result.style.display = "none";
  Rate.style.display = "none";
  Bating.style.display = "flex";
  Bate.value = 0;
}

// rock = 1, scissors = 2 , paper = 3
function btnHandler(kind) {
  userSelect = kind;
  if (+Bate.value < 0) {
    alert("No input minus +!");
    Bate.value = 0;
  } else if (+Bate.value > +Moneynum) {
    alert("No input higher +!");
    Bate.value = 0;
  } else if (+Bate.value >= 0) {
    switch (kind) {
      case 1:
        switch (computerSelect) {
          case 1:
            resultHandler("draw", "black");
            break;
          case 2:
            resultHandler("win", "green");
            break;

          case 3:
            resultHandler("lost", "red");
            break;
        }
        break;

      case 2:
        switch (computerSelect) {
          case 1:
            resultHandler("lost", "red");
            break;

          case 2:
            resultHandler("draw", "black");
            break;

          case 3:
            resultHandler("win", "green");
            break;
        }
        break;

      case 3:
        switch (computerSelect) {
          case 1:
            resultHandler("win", "green");
            break;

          case 2:
            resultHandler("lose", "red");
            break;

          case 3:
            resultHandler("draw", "black");
            break;
        }
        break;
    }
  }
  viewSelect();
}

Rock.addEventListener("click", function () {
  btnHandler(1);
});

Scissors.addEventListener("click", function () {
  btnHandler(2);
});
Paper.addEventListener("click", function () {
  btnHandler(3);
});
