//Define HTML Elements

const board = document.getElementById("game-board");

//Draw Game Map, snake, food
function draw() {
    board.innerHTML = "";
    drawSnake();
}