const colorAnswer = document.querySelector('#rgb-color');
const colorsContainer = document.querySelector('#colors-container');

// Criando core aleatória
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

function createColorBalls(numberOfColors) {
  for (let i = 0; i < numberOfColors; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = `rgb + ${randomColor()}`;
    colorsContainer.appendChild(ball);
  }
}
colorAnswer.innerHTML = randomColor();
createColorBalls(6);
