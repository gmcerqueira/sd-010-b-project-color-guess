let ballNumber = '';

function generateNumber() {
  const number = Math.ceil(Math.random() * 255);
  return number;
}

function generateGuessRGB() {
  const rgbGuess = document.getElementById('rgb-color');
  rgbGuess.innerText = `(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
}

generateGuessRGB();

function generateCorrectBall() {
  ballNumber = Math.ceil(Math.random() * 6);
  const ball = `ball${ballNumber}`;
  const correctBall = document.getElementById(ball);
  let value = document.getElementById('rgb-color').innerText;
  value = `rgb${value}`;
  correctBall.style.background = value;
}

generateCorrectBall();

function generateWrongBalls() {
  for (let index = 1; index < 7; index += 1) {
    if (index !== ballNumber) {
      const ball = `ball${index}`;
      const paintBall = document.getElementById(ball);
      const value = `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
      paintBall.style.background = value;
    }
  }
}

generateWrongBalls();
