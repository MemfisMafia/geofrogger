const board = document.getElementById('game-board');
const player = document.getElementById('player');
const message = document.getElementById('message');

// Initial player position
let playerRow = 10;
let playerCol = 5;

// Function to move player
function movePlayer(event) {
  if (event.key === 'ArrowUp' && playerRow > 1) playerRow--;
  if (event.key === 'ArrowDown' && playerRow < 10) playerRow++;
  if (event.key === 'ArrowLeft' && playerCol > 1) playerCol--;
  if (event.key === 'ArrowRight' && playerCol < 10) playerCol++;
  updatePlayerPosition();
  checkWinCondition();
}

// Update player position on the grid
function updatePlayerPosition() {
  player.style.gridRow = playerRow;
  player.style.gridColumn = playerCol;
}

// Check if player has won
function checkWinCondition() {
  if (playerRow === 1) {
    message.textContent = "Congratulations! The geocache coordinates are N 28° 14.980 W 082° 38.140";
    document.removeEventListener('keydown', movePlayer);
  }
}

// Add event listener for player movement
document.addEventListener('keydown', movePlayer);
