function generateRGB() {
  let rgbNumber = '';
  const randomNumber = [];
  for (let x = 0; x < 3; x += 1) {
    randomNumber.push(Math.ceil(Math.random() * (255 - 0) + 0));
  }
  rgbNumber = `(${randomNumber[0]},${randomNumber[1]},${randomNumber[2]})`;
  document.querySelector('p').innerText = rgbNumber;
}

window.onload = function loadPage() {
  generateRGB();
};
