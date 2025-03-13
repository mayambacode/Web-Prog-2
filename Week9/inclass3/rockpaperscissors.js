"use strict";

class RPSHandler {
  constructor() {
    this.resultsText = ["Computer Wins!", "Player Wins!", "Tie!!"];
    this.moves = [
      { name: "rock",     beatBy: "paper",    beats: "scissors", img: "rock.png" },
      { name: "paper",    beatBy: "scissors", beats: "rock",     img: "paper.png" },
      { name: "scissors", beatBy: "rock",     beats: "paper",    img: "scissors.png" }
    ];

    // Tracking
    this.computer = null;
    this.player   = null;
    this.playerScore = 0;
    this.computerScore = 0;
  }

  getComputerMove() {
    return this.moves[Math.floor(Math.random() * 3)];
  }

  handleEvent(e) {
    const infoDiv = document.querySelector(".info-div");

    if (e.type === "mouseover" && e.target.matches(".player img")) {
      // Show "beats" info
      infoDiv.querySelector("div:first-child > span:first-child").textContent = e.target.alt;
      infoDiv.querySelector("div:last-child > span:last-child").textContent = e.target.alt;

      const move = this.moves.find(mv => mv.name === e.target.alt);
      infoDiv.querySelector("div:first-child > span:last-child").textContent = move.beats;
      infoDiv.querySelector("div:last-child > span:first-child").textContent = move.beatBy;

      infoDiv.classList.remove("hide");

    } else if (e.type === "mouseout" && e.target.matches(".player img")) {
      // Hide "beats" info
      infoDiv.classList.add("hide");

    } else if (e.type === "click" && e.target.matches(".player button")) {
      // Player chooses Rock/Paper/Scissors
      const choice = e.target.textContent.toLowerCase();
      this.player = this.moves.find(mv => mv.name === choice);
      this.computer = this.getComputerMove();

      // Show the computer’s move
      const compImg = document.querySelector("#computer img");
      compImg.src = `images/${this.computer.img}`;
      compImg.alt = this.computer.name;

      // Display result
      this.evaluateResult();

    } else if (e.type === "click" && e.target.matches("#newgame")) {
      // Reset game
      this.resetGame();
    }
  }

  evaluateResult() {
    // Compare this.player and this.computer
    let resultMsg = "";
    if (this.player.name === this.computer.name) {
      resultMsg = this.resultsText[2]; // Tie
    } else if (this.player.beats === this.computer.name) {
      resultMsg = this.resultsText[1]; // Player wins
      this.playerScore++;
    } else {
      resultMsg = this.resultsText[0]; // Computer wins
      this.computerScore++;
    }

    // Update DOM
    const resultsDiv = document.querySelector("#results > div");
    resultsDiv.classList.remove("hide");

    document.getElementById("player-choice").textContent = this.player.name;
    document.getElementById("computer-choice").textContent = this.computer.name;
    document.getElementById("result").textContent = resultMsg;

    // Update scores
    document.querySelector(".player-score .score").textContent   = this.playerScore;
    document.querySelector(".computer-score .score").textContent = this.computerScore;
  }

  resetGame() {
    // Clear choices
    this.player   = null;
    this.computer = null;

    // Reset the computer’s display image
    const compImg = document.querySelector("#computer img");
    compImg.src = "images/question.png";
    compImg.alt = "waiting for computer move";

    // Hide the “info” div
    document.querySelector(".info-div").classList.add("hide");

    // Hide the results
    const resultsDiv = document.querySelector("#results > div");
    resultsDiv.classList.add("hide");

    // If you also want to reset scores:
    this.playerScore = 0;
    this.computerScore = 0;
    document.querySelector(".player-score .score").textContent   = 0;
    document.querySelector(".computer-score .score").textContent = 0;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const handler = new RPSHandler();

  // Attach mouseover & mouseout to the images
  const imgs = document.querySelectorAll(".player img");
  imgs.forEach(img => {
    img.addEventListener("mouseover", handler);
    img.addEventListener("mouseout", handler);
  });

  // Attach click to the RPS buttons
  const buttons = document.querySelectorAll(".player button");
  buttons.forEach(btn => {
    btn.addEventListener("click", handler);
  });

  // Attach click to the “New Game” button
  document.querySelector("#newgame").addEventListener("click", handler);
});
