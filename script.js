pRGB = document.getElementById('rgb-color');

function getNumberRandom() {
    return Math.ceil(Math.random()*255);
}
const number = getNumberRandom();
console.log(number);

const rgb = `(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`
pRGB.innerText = rgb;
