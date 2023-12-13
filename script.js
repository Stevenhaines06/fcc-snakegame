//Define HTML Elements

const board = document.getElementById("game-board");

// Define Game variables

let snake = [{ x: 10, y: 10 }]

//Draw Game Map, snake, food
function draw() {
    board.innerHTML = "";
    drawSnake();
}

// Draw Snake (using 'div' and 'tag' to create an inline element in the code
//could also do for 'p' for creating paragraphs)
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
    });
}

//Create a snake or food cube.div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
}