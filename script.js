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
let Moneynum = Number(Money.innerHTML);
let resetButton;
let userSelect;
let GameOver;
ViewSelect.style.display = "none";
Result.style.display = "none";
Rate.style.display = "none";
if (Bate.value <= 0) {
  Bate.value = 0;
}
// rock = 1, scissors = 2 , paper = 3

function setGameover() {
  if (Moneynum === Number(0)) {
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
  if (Moneynum === Number(0)) {
    resetButton.addEventListener("click", function () {
      Moneynum = Number(1000);
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

function creatReset() {
  resetButton = document.createElement("button");
  resetButton.textContent = "try again";
  resetButton.className = "resetButton";
  mainResult.appendChild(resetButton);
  resetButton.addEventListener("click", reset);
}

function win() {
  Select.style.display = "none";
  Result.textContent = "win";
  Result.style.backgroundColor = "green";
  Result.style.color = "white";
  Moneynum += Number(Bate.value) * Number(2);
  Money.innerHTML = Moneynum;
  Rate.textContent = "Money : +" + Number(Bate.value) * Number(2);
  ViewSelect.style.display = "block";
  Result.style.display = "flex";
  Rate.style.display = "flex";
  setGameover();
  creatReset();
  gameOver();
  Bating.style.display = "none";
}
function lost() {
  Select.style.display = "none";
  Result.textContent = "lost";
  Result.style.backgroundColor = "red";
  Result.style.color = "white";
  Moneynum -= Number(Bate.value);
  Money.innerHTML = Moneynum;
  Rate.textContent = "Money : -" + Number(Bate.value);
  ViewSelect.style.display = "block";
  Result.style.display = "flex";
  Rate.style.display = "flex";
  setGameover();
  creatReset();
  gameOver();
  Bating.style.display = "none";
}
function draw() {
  Select.style.display = "none";
  Result.textContent = "draw";
  Result.style.backgroundColor = "black";
  Result.style.color = "white";
  Rate.textContent = "Money : +0";
  ViewSelect.style.display = "block";
  Result.style.display = "flex";
  Rate.style.display = "flex";
  setGameover();
  creatReset();
  gameOver();
  Bating.style.display = "none";
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

Rock.addEventListener("click", function () {
  userSelect = 1;
  if (Number(Bate.value) < Number(0)) {
    alert("No input minus number!");
    Bate.value = 0;
  } else if (Number(Bate.value) > Number(Moneynum)) {
    alert("No input higher number!");
    Bate.value = 0;
  } else if (computerSelect == 2) {
    if (Number(Bate.value) >= Number(0)) {
      win();
    }
  } else if (computerSelect == 1) {
    if (Number(Bate.value) >= Number(0)) {
      draw();
    }
  } else if (computerSelect == 3) {
    if (Number(Bate.value) >= Number(0)) {
      lost();
    }
  }
  viewSelect();
});
Scissors.addEventListener("click", function () {
  userSelect = 2;
  if (Number(Bate.value) < Number(0)) {
    alert("No input minus number!");
    Bate.value = 0;
  } else if (Number(Bate.value) > Number(Moneynum)) {
    alert("No input higher number!");
    Bate.value = 0;
  } else if (computerSelect == 1) {
    if (Number(Bate.value) >= Number(0)) {
      win();
    }
  } else if (computerSelect == 2) {
    if (Number(Bate.value) >= Number(0)) {
      draw();
    }
  } else if (computerSelect == 3) {
    if (Number(Bate.value) >= Number(0)) {
      lost();
    }
  }
  viewSelect();
});
Paper.addEventListener("click", function () {
  userSelect = 3;
  if (Number(Bate.value) < Number(0)) {
    alert("No input minus number!");
    Bate.value = 0;
  } else if (Number(Bate.value) > Number(Moneynum)) {
    alert("No input higher number!");
    Bate.value = 0;
  } else if (computerSelect == 1) {
    if (Number(Bate.value) >= Number(0)) {
      win();
    }
  } else if (computerSelect == 3) {
    if (Number(Bate.value) >= Number(0)) {
      draw();
    }
  } else if (computerSelect == 2) {
    if (Number(Bate.value) >= Number(0)) {
      lost();
    }
  }
  viewSelect();
});
