// elements
const rgbToGuess = document.querySelector('#rgb-color');
const rgbBalls = document.querySelectorAll('.ball');
// Functions

const generateRandomRgb = () => {
  for (let index = 0; index < 6; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (index === 0) {
      rgbToGuess.innerText = `(${r}, ${g}, ${b})`;
    }
    rgbBalls[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
};

// loader
const loadButtons = () => {
  // bts
};
window.onload = () => {
  generateRandomRgb();
  loadButtons();
};
