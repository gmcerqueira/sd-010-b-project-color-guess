const rgbRandom = document.getElementById('rgb-color');

function generateRandomColor() {
  const color1 = parseInt(Math.random() * 255);
  const color2 = parseInt(Math.random() * 255);
  const color3 = parseInt(Math.random() * 255);

  rgbRandom.innerHTML = `(${color1}, ${color2}, ${color3})`;
}
generateRandomColor();
