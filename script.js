const maxBubbles = 102;
let collector = "";
let clock = 60;
let score = 0;
let newNum = 0;

function scoreIncrease() {
    score += 10;
    document.querySelector("#scoreup").textContent = score;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function updateNewNumber() {
    newNum = generateRandomNumber();
    document.querySelector("#val").textContent = newNum;
}

function countdown() {
    const timeCtrl = setInterval(function () {
        if (clock > 0) {
            clock--;
            document.querySelector("#Time").textContent = clock;
        } else {
            clearInterval(timeCtrl);
            document.querySelector("#pBottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function createBubble() {
    const bubble = document.createElement("div");
    const rad = generateRandomNumber();
    bubble.textContent = rad;
    bubble.className = "bubble";
    return bubble;
}

function bubbleMaker() {
    const pBottom = document.querySelector("#pBottom");
    pBottom.innerHTML = ""; // Clear previous bubbles
    for (let i = 0; i < maxBubbles; i++) {
        const bubble = createBubble();
        pBottom.appendChild(bubble);
    }
}

document.querySelector("#pBottom").addEventListener("click", function (event) {
    const numClick = Number(event.target.textContent);
    if (numClick === newNum) {
        scoreIncrease();
        updateNewNumber();
        bubbleMaker();
    }
});

countdown();
updateNewNumber();
bubbleMaker();
