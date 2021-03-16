document.onload = genColors();

function randomRGB() {
  const red = Math.floor(Math.random() * 256 );
  const green = Math.floor(Math.random() * 256 );
  const blue = Math.floor(Math.random() * 256 );
  const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  return color;
}

function genColors() {
  let balls = document.getElementsByClassName('ball');
  for (let ball of balls) {
    ball.style.backgroundColor = randomRGB();
  }
}
