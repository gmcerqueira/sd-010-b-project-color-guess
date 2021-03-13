function generateNumber() {
  const number = Math.ceil(Math.random() * 255);
  return number;
}

function generateGuessRGB() {
  const rgbGuess = document.getElementById('rgb-color');
  rgbGuess.innerText = `(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
}

generateGuessRGB();
