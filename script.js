function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  return color;
}

function genColors() {
  const balls = document.getElementsByClassName('ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomRGB();
  }
  const colorToGuess = balls[Math.floor(Math.random() * 6)].style.backgroundColor;
  document.getElementById('rgb-color').innerText = colorToGuess
}
genColors();

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('ball')) {
    if (document.getElementById('rgb-color').innerText == event.target.style.backgroundColor) {
      document.getElementById('answer').innerText = 'Acertou!';
    } else {
      document.getElementById('answer').innerText = 'Errou! Tente novamente!';
    }
  }
});
