const colorAnswer = document.querySelector('#rgb-color');
const colorsContainer = document.querySelector('#colors-container');
const answerText = document.querySelector('#answer');

// Criando core aleatória
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

function rightGuess(event) {
  const guess = event.target.id;
  const check = guess === 'rightAnswer';
  if (check) answerText.innerHTML = 'Acertou!';
  else answerText.innerHTML = 'Errou! Tente novamente!';
}

function createColorBalls(numberOfColors) {
  for (let i = 0; i < numberOfColors; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = `rgb${randomColor()}`;
    ball.addEventListener('click', rightGuess);
    colorsContainer.appendChild(ball);
  }
}

function selectingAnswer() {
  const balls = document.querySelectorAll('.ball');
  const colors = [];
  balls.forEach((ball) => colors.push(ball.style.backgroundColor));
  const randomIndex = Math.floor(Math.random() * colors.length);
  balls[randomIndex].id = 'rightAnswer';
  colorAnswer.innerHTML = colors[randomIndex].slice(3);
}

createColorBalls(6);
selectingAnswer();
