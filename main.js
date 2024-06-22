const btnBorder = document.querySelector('.border');
const btnGlass = document.querySelector('.glass');
const btnBorderSound = new Audio('borderSoundFile.mp3');
const btnGlassSound = new Audio('glassSoundFile.mp3');

function soundBorder() {
	btnBorderSound.play();
}

btnBorder.addEventListener('mouseover', soundBorder);

function soundGlass() {
	btnGlassSound.play();
}

btnBorder.addEventListener('mouseover', soundBorder);
btnGlass.addEventListener('mouseover', soundGlass);
