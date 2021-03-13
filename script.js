// elements

const colorName = document.getElementById('rgb-color');
const colors = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
const btnReset = document.getElementById('reset-game');
let count = 0;



const countScore = () => {
  count += 3;
  console.log(count);
  score.innerText = count;
  localStorage.setItem('score', count);
  localStorage.setItem('counter', count);
};

const guessColor = (e) => {
  if (e.target.style.backgroundColor === colorName.innerText) {
    answer.innerText = 'Acertou!';
    countScore();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
};

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', guessColor);
}

btnReset.addEventListener('click', () => {
  document.location.reload(true);
});
