//Define HTML Elements

const board = document.getElementById("game-board");

// Define Game variables
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;

//Draw Game Map, snake, food
function draw() {
    board.innerHTML = "";
    drawSnake();
    drawFood();
}

// Draw Snake (using 'div' and 'tag' to create an inline element in the code
//could also do for 'p' for creating paragraphs)
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

//Create a snake or food cube.div
//className creates a div with a className of 'Snake'
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//Set the position of the snake or the food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//Testing draw function
draw();
//Draw food function 
function drawFood() {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

// Moving the Snake
function move() {
    //How to make a shallow copy
    const head = { ...snake[0] };
    switch (direction) {
     case 'up':
        head.y--;
        break;
    case 'down':
        head.y++;
        break;
    case 'left':
        head.x--;
        break;
    case 'right':
        head.x++;
        break;
    }

    snake.unshift(head);


    // snake.pop();
    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        clearInterval(); // clear past interval
        gameInterval = setInterval(() => {
            move();
            draw();
        }, gameSpeedDelay)
    } else {
        snake.pop();
    }
} 

//Test Moving
// setInterval(() => {
//     move(); // Move first
//     draw(); // Then draw again new position
// }, 200);

// Start Game Function

function startGame() {
    gameStarted = true;
}