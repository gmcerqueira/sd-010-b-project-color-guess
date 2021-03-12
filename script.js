function requisito1() {
  document.body.appendChild(document.createElement('h1'));
  document.getElementsByTagName('h1')[0].id = 'title';
  document.getElementsByTagName('h1')[0].innerText = 'Color Guess - O jogo.';
}

function requisito2() {
  const rgbP = document.createElement('p');
  document.body.appendChild(rgbP);
  rgbP.innerText = `(168, 34, 1)`;
  rgbP.id = 'rgb-color';
}

window.onload = function init() {
  requisito1();
  requisito2();
};
