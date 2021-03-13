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



const balls = document.querySelector('.ball');
balls.add
