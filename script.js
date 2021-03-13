pRGB = document.getElementById('rgb-color');

pFeedback = document.getElementById('answer');
pFeedback.innerText = 'Escolha uma cor';

function getNumberRandom() {
    return Math.ceil(Math.random() * 255);
}
const number = getNumberRandom();

const rgb = `(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`
pRGB.innerText = rgb;


balls = document.getElementsByClassName('ball');

function setBallsWithIdNull() {
    for (let index = 0; index < balls.length; index += 1) {
        balls[index].setAttribute('id', '');
    }
}

const score = document.getElementById('score');
let scoreValue = 0;

function setAnswer(ball) {
    pFeedback = document.getElementById('answer');
    pFeedback.innerText = '';
    if (ball.target.style.backgroundColor == `rgb${pRGB.innerText}`) {
        pFeedback.innerText = 'Acertou!';
        score.innerText = scoreValue += 3;
    } else {
        pFeedback.innerText = 'Errou! Tente novamente!';
    }
}

let ballSelected = Math.ceil(Math.random() * 6);
console.log(ballSelected);
for (let index = 1; index <= balls.length; index += 1) {
    if (index === ballSelected) {
        balls[index-1].style.backgroundColor = `rgb${rgb}`;
    } else {
        balls[index-1].style.backgroundColor = `rgb(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`;
    }
    balls[index-1].addEventListener('click', setAnswer)
}

/* 6 - Reiniciar jogo */


function resetGame() {
    let rgb = `(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`
    pRGB.innerText = rgb;

    let ballSelected = Math.ceil(Math.random() * 6);
console.log(ballSelected);
for (let index = 1; index <= balls.length; index += 1) {
    if (index === ballSelected) {
        balls[index-1].style.backgroundColor = `rgb${rgb}`;
    } else {
        balls[index-1].style.backgroundColor = `rgb(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`;
    }
    balls[index-1].addEventListener('click', setAnswer)
}
pFeedback = document.getElementById('answer');
    pFeedback.innerText = 'Escolha uma cor';
}
buttonReset = document.getElementById('reset-game');

buttonReset.addEventListener('click', resetGame);