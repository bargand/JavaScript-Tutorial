const gameContainer = document.querySelector('.game-container');
const snakeElement = document.querySelector('.snake');
const foodElement = document.querySelector('.food');

let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let snakeSpeed = 1;
let snakeDirection = 'right';
const gridSize = 20;

function generateFood() {
    foodX = Math.floor(Math.random() * gridSize) * 20;
    foodY = Math.floor(Math.random() * gridSize) * 20;
    foodElement.style.left = `${foodX}px`;
    foodElement.style.top = `${foodY}px`;
}

function updateSnakePosition() {
    switch (snakeDirection) {
        case 'up':
            snakeY -= snakeSpeed;
            break;
        case 'down':
            snakeY += snakeSpeed;
            break;
        case 'left':
            snakeX -= snakeSpeed;
            break;
        case 'right':
            snakeX += snakeSpeed;
            break;
    }

    if (snakeX < 0) snakeX = gameContainer.offsetWidth - gridSize;
    if (snakeX >= gameContainer.offsetWidth) snakeX = 0;
    if (snakeY < 0) snakeY = gameContainer.offsetHeight - gridSize;
    if (snakeY >= gameContainer.offsetHeight) snakeY = 0;

    snakeElement.style.left = `${snakeX}px`;
    snakeElement.style.top = `${snakeY}px`;
}

function gameLoop() {
    updateSnakePosition();

    // Check for collision with food
    if (
        snakeX < foodX + gridSize &&
        snakeX + gridSize > foodX &&
        snakeY < foodY + gridSize &&
        snakeY + gridSize > foodY
    ) {
        generateFood();
    }

    requestAnimationFrame(gameLoop);
}

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowUp' && snakeDirection !== 'down') snakeDirection = 'up';
    if (key === 'ArrowDown' && snakeDirection !== 'up') snakeDirection = 'down';
    if (key === 'ArrowLeft' && snakeDirection !== 'right') snakeDirection = 'left';
    if (key === 'ArrowRight' && snakeDirection !== 'left') snakeDirection = 'right';
});

generateFood();
gameLoop();
