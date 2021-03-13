const balls = document.getElementsByClassName('ball');
let rgbNumber = '';

function generateRGB() {
  const randomNumber = [];
  for (let x = 0; x < 3; x += 1) {
    randomNumber.push(Math.ceil(Math.random() * (255 - 0) + 0));
  }
  rgbNumber = `(${randomNumber[0]},${randomNumber[1]},${randomNumber[2]})`;
  document.querySelector('p').innerText = rgbNumber;
}

function colorCircles() {
  for (let x = 0; x < balls.length; x += 1) {
    generateRGB();
    balls[x].style.backgroundColor = (`rgb${rgbNumber}`);
  }
}

window.onload = function loadPage() {
  colorCircles();
};
