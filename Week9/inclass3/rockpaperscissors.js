
"use strict";

class RPSHandler {
    constructor() {
        this.results = ["Computer Wins!", "Player Wins!", "Tie!!"];
        this.moves = [
            {
                name: "rock",
                beatBy: "paper",
                beats: "scissors",
                img: "rock.png"
            },
            {
                name: "paper",
                beatBy: "scissors",
                beats: "rock",
                img: "paper.png"
            },
            {
                name: "scissors",
                beatBy: "rock",
                beats: "paper",
                img: "scissors.png"
            }
        ];
        this.computer = null;
        this.player = null;
    }
    getComputerMove() {
        return this.moves[Math.floor(Math.random() * 3)];
    }
    handleEvent(e) {

        const infoDiv = document.body.querySelector(".info-div");

            if (e.type == "mouseover") {
                            
            infoDiv.querySelector("div:first-child > span:first-child").textContent = e.target.alt;
            infoDiv.querySelector("div:last-child > span:last-child").textContent = e.target.alt;

            const move = this.moves.find(mv => mv.name == e.target.alt);
            infoDiv.querySelector("div:first-child > span:last-child").textContent = move.beats;
            infoDiv.querySelector("div:last-child > span:first-child").textContent = move.beatBy;

            infoDiv.classList.remove("hide");

            } else if (e.type == "mouseout") {

            infoDiv.classList.add("hide");

            } else if (e.type == "click") {

            this.computer = this.getComputerMove();
            const compImg = document.querySelector("#computer img");
            compImg.src = `images/${this.computer.img}`;
            compImg.alt = this.computer.name;
            }
        }
}


document.addEventListener("DOMContentLoaded", () => {
    const handler = new RPSHandler();

    const imgs = document.querySelectorAll(".player img");
    for (let img of imgs) {
        img.addEventListener("mouseover", handler);
        img.addEventListener("mouseout", handler);
    }
    const buttons = document.querySelectorAll(".player button");
    for (let btn of buttons) {
        btn.addEventListener("click", handler);
    }
});


