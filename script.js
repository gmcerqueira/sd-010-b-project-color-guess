

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
}

genColors();