pRGB = document.getElementById('rgb-color');

function getNumberRandom() {
    return Math.ceil(Math.random()*255);
}
const number = getNumberRandom();
console.log(number);

const rgb = `(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`
pRGB.innerText = rgb;

balls = document.getElementsByClassName('ball');

for (let index = 0; index < balls.length; index +=1 ){
  balls[index].style.backgroundColor = `rgb(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`;
}
