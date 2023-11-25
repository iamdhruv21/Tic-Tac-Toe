const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');

const configOverlayCacelBtn = document.getElementById('cancel-config-btn');
const configOverlayConfirmBtn = document.getElementById('confirm-config-btn');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

configOverlayCacelBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);
