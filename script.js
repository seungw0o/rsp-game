let computerSelect = Math.floor(Math.random() * 3 + 1);
let userSelect;
const Select = document.querySelector(".select");
const Rock = document.querySelector("#Rock");
const Scissors = document.querySelector("#Scissors");
const Paper = document.querySelector("#Paper");
const Money = document.querySelector(".num");
const Result = document.querySelector(".result");
let resetButton;
// rock = 1, scissors = 2 , paper = 3

function win() {
  Select.style.display = "none";
  Result.textContent = "win";
  Result.style.backgroundColor = "green";
  Result.style.color = "white";
}
function lost() {
  Select.style.display = "none";
  Result.textContent = "lost";
  Result.style.backgroundColor = "red";
  Result.style.color = "white";
}
function draw() {
  Select.style.display = "none";
  Result.textContent = "draw";
  Result.style.backgroundColor = "black";
  Result.style.color = "white";
}

function reset() {
  Select.style.display = "flex";
  resetButton.style.display = "none";
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
  resetButton = document.createElement("button");
  resetButton.textContent = "try again";
  resetButton.className = "resetButton";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", reset);
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
  resetButton = document.createElement("button");
  resetButton.textContent = "try again";
  resetButton.className = "resetButton";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", reset);
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
  resetButton = document.createElement("button");
  resetButton.textContent = "try again";
  resetButton.className = "resetButton";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", reset);
});
