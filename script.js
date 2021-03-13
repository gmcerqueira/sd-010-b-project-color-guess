const adivinha = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const resposta = document.querySelector('#answer');
const gameReset = document.querySelector('#reset-game');
const score = document.querySelector('#score');

function geraPaleta() {
  const indexColor = (Math.floor(Math.random() * 6));
  for (let index = 0; index < 6; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (index === indexColor) {
      adivinha.innerText = `(${r}, ${g}, ${b})`;
      balls[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
      balls[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }
};
geraPaleta();

chosenBall = document.getElementById('color-palette');
chosenBall.addEventListener('click', function (event) {
  const selectedBall = event.target;
  const selectedColor = selectedBall.style.backgroundColor;
  const colorBall = `rgb${adivinha.innerText}`;
  if (selectedColor === colorBall) {
    resposta.innerText = 'Acertou!';
    incrementaPlacar();
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
  }
});

function incrementaPlacar() {
  const placar = score.innerText + 3;
  score.innerText = placar;
};


