"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let clickCount = 0;
document.querySelector(".develop-credit").style.display = "none";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = " Please Input Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Congrats!";
    document.querySelector(".body-part").style.backgroundColor = "#60b347";
    document.querySelector(".develop-credit").style.display = "block";
    document.querySelector(".body-part").style.transition = "all 2s";
    clickCount++;
    document.querySelector(".attempts").textContent = "Ateempts:" + clickCount;
  } else if (guess > secretNumber) {
    if (guess >= secretNumber + 1 && guess <= secretNumber + 2) {
      document.querySelector(".hint").textContent = "Hint : Up But Near";
      clickCount++;
      document.querySelector(".attempts").textContent =
        "Ateempts:" + clickCount;
    } else {
      document.querySelector(".hint").textContent = "Hint : Too High";
      clickCount++;
      document.querySelector(".attempts").textContent =
        "Ateempts:" + clickCount;
    }
  } else if (guess < secretNumber) {
    if (guess >= secretNumber - 2 && guess <= secretNumber - 1) {
      document.querySelector(".hint").textContent = "Hint : Near But Low";
      clickCount++;
      document.querySelector(".attempts").textContent =
        "Ateempts:" + clickCount;
    } else {
      document.querySelector(".hint").textContent = "Hint : Too low";
      clickCount++;
      document.querySelector(".attempts").textContent =
        "Ateempts:" + clickCount;
    }
  }
});
document.querySelector(".bt-again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".prev-attempts").textContent =
    "Previous Attempts Records :" + clickCount;
  document.querySelector(".body-part").style.backgroundColor = "#454545";

  document.querySelector(".body-part").style.transition = "all 2s";
  document.querySelector(".develop-credit").style.display = "none";
  document.querySelector(".input-nm").value = "";
  clickCount = 0;
  document.querySelector(".attempts").textContent = "Ateempts:" + clickCount;
});
