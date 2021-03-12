function requisito1() {
  document.body.appendChild(document.createElement('h1'));
  document.getElementsByTagName('h1')[0].id = 'title';
  document.getElementsByTagName('h1')[0].innerText = 'Color Guess - O jogo.';
}

function requisito2() {
  const rgbP = document.createElement('p');
  document.body.appendChild(rgbP);
  rgbP.innerText = '(168, 34, 1)';
  rgbP.id = 'rgb-color';
}

function requisito3() {
  for (let x = 0; x < 6; x += 1) {
    document.body.appendChild(document.createElement('div'));
    document.body.lastChild.className = 'ball';
    document.body.lastChild.style.width = '70px';
    document.body.lastChild.style.height = '70px';
    document.body.lastChild.style.border = '1px solid black';
    document.body.lastChild.style.borderRadius = '50%';
    document.body.lastChild.style.display = 'inline-block';
  }
}

function requisito4() {
  for (let x = 0; x < 6; x += 1) {
    let numAleatorio = Math.ceil((Math.random() * (255 - 0) + 0));
    let numAleatorio2 = Math.ceil((Math.random() * (255 - 0) + 0));
    let numAleatorio3 = Math.ceil((Math.random() * (255 - 0) + 0));
    let rgbValue = `rgb(${numAleatorio},${numAleatorio2},${numAleatorio3})`;
    document.getElementsByClassName('ball')[x].style.backgroundColor = rgbValue;
  }
}

window.onload = function init() {
  requisito1();
  requisito2();
  requisito3();
  requisito4();
};
