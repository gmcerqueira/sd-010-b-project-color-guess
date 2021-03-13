const balls = document.getElementsByClassName('ball');
let rgbNumber = '';

function generateRGB() {
  const randomNumber = [];
  for (let x = 0; x < 3; x += 1) {
    randomNumber.push(Math.ceil(Math.random() * (255 - 0) + 0));
  }
  rgbNumber = `(${randomNumber[0]},${randomNumber[1]},${randomNumber[2]})`;
}

function createBalls() {
  const getBallsDiv = document.getElementById('circle-container');
  for (let x = 0; x < 6; x += 1) {
    getBallsDiv.appendChild(document.createElement('div'));
    getBallsDiv.lastChild.className = 'ball';
  }
}

function colorCircles() {
  for (let x = 0; x < balls.length; x += 1) {
    generateRGB();
    balls[x].style.backgroundColor = (`rgb${rgbNumber}`);
  }
}

function chooseRandomCircle() {
  const chooseCircle = (Math.ceil(Math.random() * (5 - 0) + 0));
  balls[chooseCircle].id = 'answer';
}

function getRgbNumber() {
  let rgbText = '';
  const answer = document.getElementById('answer');
  for (let counter = 3; counter < answer.style.backgroundColor.length; counter += 1) {
    rgbText += answer.style.backgroundColor[counter];
  }
  document.querySelector('p').innerText = rgbText;
}

function gameStart() {
  const getH2 = document.querySelector('h2');
  getH2.innerText = 'Escolha uma cor';
  document.getElementById('circle-container').addEventListener('click', (event) => {
    const eventTargetColor = event.target.style.backgroundColor;
    const answerColor = document.getElementById('answer').style.backgroundColor;
    if (eventTargetColor === answerColor) {
      getH2.innerText = 'Acertou!';
    } else {
      getH2.innerText = 'Errou! Tente novamente!';
    }
  });
}

window.onload = function loadPage() {
  createBalls();
  colorCircles();
  chooseRandomCircle();
  getRgbNumber();
  gameStart();
};
