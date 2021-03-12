function requisito1 () {
  document.body.appendChild(document.createElement('h1'));
  document.getElementsByTagName('h1')[0].id = 'title';
  document.getElementsByTagName('h1')[0].innerText = 'Color Guess - O jogo.';
}

window.onload = function init () {
  requisito1();
}
