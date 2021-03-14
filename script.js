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
  }
  const sortNumber = array[Math.floor(Math.random() * numbers + 1)];
  const bgColorSortNumber = sortNumber.style.backgroundColor;
  console.log(bgColorSortNumber);
  colorSurprise.innerHTML = bgColorSortNumber.replace('rgb', '');
}
surprise();

divColors.addEventListener('click', (event) => {

  const answer = document.querySelector('#answer');
  const choseColor = event.target;
  if (choseColor.style.backgroundColor === `rgb${colorSurprise.innerHTML}`) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou!!';
  }
});
