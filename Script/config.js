function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; //+'2'(string) => 2(number)
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    erorElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();
    
    if(!enteredPlayerName){ // (enteredPlayerName === '')
        event.target.firstElementChild.classList.add('error');
        erorElement.textContent = 'Please enter a Valid Name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1] .name = enteredPlayerName;
    closePlayerConfig();
}