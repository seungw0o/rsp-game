let computerSelect = Math.floor(Math.random() * 3 + 1);
const Select = document.querySelector(".select");
const Rock = document.querySelector("#Rock");
const Scissors = document.querySelector("#Scissors");
const Paper = document.querySelector("#Paper");
const Money = document.querySelector(".num");
const Result = document.querySelector(".result");
const mainResult = document.querySelector(".mainResult");
const Rate = document.querySelector(".rate");
let Moneynum = Number(Money.innerHTML);
let resetButton;
let userSelect;
// rock = 1, scissors = 2 , paper = 3

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
  Moneynum += 100;
  Money.innerHTML = Moneynum;
  Rate.textContent = "Money : +100";
}
function lost() {
  Select.style.display = "none";
  Result.textContent = "lost";
  Result.style.backgroundColor = "red";
  Result.style.color = "white";
  Moneynum -= 100;
  Money.innerHTML = Moneynum;
  Rate.textContent = "Money : -100";
}
function draw() {
  Select.style.display = "none";
  Result.textContent = "draw";
  Result.style.backgroundColor = "black";
  Result.style.color = "white";
  Rate.textContent = "Money : +" + 0;
}

function reset() {
  Select.style.display = "flex";
  resetButton.remove();
  computerSelect = Math.floor(Math.random() * 3 + 1);
}

Rock.addEventListener("click", function () {
  userSelect = 1;
  if (computerSelect == 2) {
    win();
  } else if (computerSelect == 1) {
    draw();
  } else if (computerSelect == 3) {
    lost();
  }
  creatReset();
  viewSelect();
});
Scissors.addEventListener("click", function () {
  userSelect = 2;
  if (computerSelect == 3) {
    win();
  } else if (computerSelect == 2) {
    draw();
  } else if (computerSelect == 1) {
    lost();
  }
  creatReset();
  viewSelect();
});
Paper.addEventListener("click", function () {
  userSelect = 3;
  if (computerSelect == 1) {
    win();
  } else if (computerSelect == 3) {
    draw();
  } else if (computerSelect == 2) {
    lost();
  }
  creatReset();
  viewSelect();
});
