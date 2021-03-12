const colorAnswer = document.querySelector('#rgb-color');
const colorsContainer = document.querySelector('#colors-container');
const answerText = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');

// Cria cor aleatória
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

// Verifica se a resposta está correta
function rightGuess(event) {
  const guess = event.target.id;
  const check = guess === 'rightAnswer';
  if (check) answerText.innerHTML = 'Acertou!';
  else answerText.innerHTML = 'Errou! Tente novamente!';
}

// Cria opções de cores
function createColorBalls(numberOfColors) {
  for (let i = 0; i < numberOfColors; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = `rgb${randomColor()}`;
    ball.addEventListener('click', rightGuess);
    colorsContainer.appendChild(ball);
  }
}

// seleciona resposta correta mostra a cor a ser adivinhada
function selectingAnswer() {
  const balls = document.querySelectorAll('.ball');
  const colors = [];
  balls.forEach((ball) => colors.push(ball.style.backgroundColor));
  const randomIndex = Math.floor(Math.random() * colors.length);
  balls[randomIndex].id = 'rightAnswer';
  colorAnswer.innerHTML = colors[randomIndex].slice(3);
}

function resetGame() {
  colorsContainer.innerHTML = '';
  createColorBalls(6);
  selectingAnswer();
  answerText.innerHTML = 'Escolha uma cor';
}

window.onload = () => {
  createColorBalls(6);
  selectingAnswer();
  resetBtn.addEventListener('click', resetGame);
};
