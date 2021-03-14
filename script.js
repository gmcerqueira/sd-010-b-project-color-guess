function setColor() {
  const colorOne = Math.ceil(Math.random() * 255);
  const colorTwo = Math.ceil(Math.random() * 255);
  const colorThree = Math.ceil(Math.random() * 255);
  return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
}

const divColors = document.querySelector('#div-ball');

function makeColors(numbers) {
  for (let index = 0; index < numbers; index += 1) {
    const balls = document.createElement('div');
    balls.classList.add('ball');
    balls.style.backgroundColor = setColor();
    divColors.appendChild(balls);
  }
}
const numbers = 6;
makeColors(numbers);

const colorSurprise = document.querySelector('#rgb-color');

function surprise() {
  const array = [];
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < numbers; index += 1) {
    array.push(balls[index]);
    console.log(array[index]);
  }
  let sortNumber = array[Math.floor(Math.random() * (numbers))];
  sortNumber = sortNumber.style.backgroundColor;
  colorSurprise.innerHTML = sortNumber.replace('rgb', '');
}
surprise();
const answer = document.querySelector('#answer');
divColors.addEventListener('click', (event) => {
  const choseColor = event.target;
  if (choseColor.style.backgroundColor === `rgb${colorSurprise.innerHTML}`) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
});

const resetGame = document.querySelector('#reset-game');
const balls = document.querySelectorAll('.ball');
resetGame.addEventListener('click', () => {
  surprise();
  for (let index = 0; index < balls.length; index += 1) {
    divColors.firstChild.remove();
  }
  makeColors(numbers);
  answer.innerHTML = 'Escolha uma cor';
});
