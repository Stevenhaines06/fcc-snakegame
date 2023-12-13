//Define HTML Elements

const board = document.getElementById("game-board");

// Define Game variables

let snake = [{ x: 10, y: 10 }]

//Draw Game Map, snake, food
function draw() {
    board.innerHTML = "";
    drawSnake();
}

// Draw Snake
function drawSnake() {
    snake.forEach
}