window.onload = function (){
// ADD RGB ALEATORIO rgb-color
let h2 = document.getElementById('rgb-color');
function rndRGB() {
    let str = '(';
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
}