let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const erorElement = document.getElementById('config-error');
const gameArea = document.getElementById('active-game')
const activePlayerName = document.getElementById('active-player-name');

const configOverlayCacelBtn = document.getElementById('cancel-config-btn');
const startGameBtn = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');
// const gameBoard = document.getElementById('game-board');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

configOverlayCacelBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startGameBtn.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}

// gameBoard.addEventListener('click', selectGameField);