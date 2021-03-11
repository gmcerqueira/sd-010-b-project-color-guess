// elements
const rgbToGuess = document.querySelector('#rgb-color');
const rgbBalls = document.querySelectorAll('.ball');
const answerText = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');

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

//                      Listeners

// set rgbBall listener
const setRgbBall = () => {
  rgbBalls.forEach((ball) => {
    ball.addEventListener('click', () => {
      const currentBallColor = ball.style.backgroundColor;
      const colorToGuess = `rgb${rgbToGuess.innerText}`;
      if (colorToGuess === currentBallColor) {
        answerText.innerText = 'Acertou!';
      } else {
        answerText.innerText = 'Errou! Tente novamente!';
      }
    });
  });
};

// set Reset Button

const setResetBtn = () => {
  resetBtn.addEventListener('click', () => {
    generateRandomRgb();
    answerText.innerText = 'Escolha uma cor';
  });
};

// loader
const loadButtons = () => {
  // bts
  setRgbBall();
  setResetBtn();
};
window.onload = () => {
  generateRandomRgb();
  loadButtons();
};
