function startNewGame() {
    if(players[0].name === '' || players[1].name === '') {
        return;
    }
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
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    switchPlayer();
}