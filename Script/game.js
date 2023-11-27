function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = '<h3>You won, <span id="winner-name">PLAYER NAME</span>!</h3>';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            gameBoard.children[gameBoardIndex].textContent = '';
            gameBoard.children[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if(players[0].name === '' || players[1].name === '') {
        return;
    }

    resetGameStatus();

    gameArea.style.display = 'block';
    activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayer() {
    if(activePlayer) {
        activePlayer = 0;
    }
    else {
        activePlayer = 1;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if(gameIsOver) {
        return;
    }
    
    const selectedColumn = event.target.dataset.col - 1;
    const selectedRow = event.target.dataset.row - 1;

    if(gameData[selectedRow][selectedColumn] > 0) {
        return;
    }

    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');



    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameover();
    
    if(winnerId !== 0){
        endGame(winnerId);
    }
    
    currentRound++;
    switchPlayer();
}

function checkForGameover() {
    //checking for rows
    for(let i  = 0; i < 3; i++){
        if(gameData[i][0] > 0 &&
           gameData[i][0] === gameData[i][1] && 
           gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
        }
    }

    //checking for columns
    for(let i  = 0; i < 3; i++){
        if(gameData[0][i] > 0 &&
           gameData[0][i] === gameData[1][i] && 
           gameData[0][i] === gameData[2][i]) {
            return gameData[0][i];
        }
    }
    //diagonal top left to bottom right
    if(gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }
    
    //diagonal top right to bottom left
    if(gameData[0][2] > 0 && gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0]) {
        return gameData[0][2];
    }

    if(currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';

    if(winnerId > 0) {
        gameOverElement.firstElementChild.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name;
        console.log(gameOverElement.firstElementChild.firstElementChild.firstElementChild);
    }
    else {
        gameOverElement.firstElementChild.textContent = 'it\'s a Draw!';
    }
}
