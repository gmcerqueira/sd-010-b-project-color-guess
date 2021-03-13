const divColors = document.querySelector('#div-ball');

function makeColors(numbers) {
  for (let index = 0; index < numbers; index += 1) {
    const balls = document.createElement('div');
    balls.classList.add('ball');
    divColors.appendChild(balls);
  }
}
const numbers = 6;
makeColors(numbers);
