window.onload = function (){
// ADD RGB ALEATORIO rgb-color
let h2 = document.getElementById('rgb-color');
function rndRGB() {
    let str = 'rgb(';
    for(let i = 0; i < 3; i++){
        let rnd = Math.ceil(Math.random()*260);
        str += rnd;
        if(i < 2){
            str += ', ';
        }
    }
    str += ')';
    return (str);
}
h2.innerHTML = rndRGB();


// ADD CORES ALEATORIAS PARA BOLAS E A COR DO H2 PARA UMA DAS BOLAS ALEATORIAMENTE
    function addCorBalls(h2) {
        let div = document.getElementById('balls');
        for(let i = 0; i < div.children.length; i++){
            let ball = div.children[i];
            ball.style.backgroundColor = rndRGB();
        }
        let num = Math.floor(Math.random()*(div.children.length));
        ball = div.children[num];
        ball.style.backgroundColor = h2.innerHTML;
        
    }
addCorBalls (h2);








}//window blablabla