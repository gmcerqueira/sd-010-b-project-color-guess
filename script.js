const rgbRandom = document.getElementById('rgb-color');
const backgroundColorBalls = document.getElementsByClassName('ball');

function generateRandomColor() {
  const color1 = parseInt(Math.random() * 255, 0);
  const color2 = parseInt(Math.random() * 255, 0);
  const color3 = parseInt(Math.random() * 255, 0);

  rgbRandom.innerHTML = `(${color1}, ${color2}, ${color3})`;
}
generateRandomColor();

function generateRandomColorsBalls() {
  for (let index = 0; index < backgroundColorBalls.length; index += 1) {
    backgroundColorBalls[index].style.backgroundColor = `rgb(${parseInt(Math.random() * 255, 0)}, 
    ${parseInt(Math.random() * 255, 0)}, 
    ${parseInt(Math.random() * 255, 0)})`;
  }
}
generateRandomColorsBalls();
