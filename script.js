const rgbCode = document.getElementById('rgb-color')
const balls = document.querySelectorAll('.ball')

function rgbColor() {
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    rgbCode.innerHTML = '('+red+','+green+','+blue+')'
    balls[0].style.backgroundColor = 'rgb('+red+','+green+','+blue+')'
    balls[0].addEventListener('click', function () {
        document.getElementById('answer').innerHTML = 'Acertou!'
    })
    balls[1].style.backgroundColor = 'rgb('+green+','+blue+','+red+')'
    balls[1].addEventListener('click', function () {
        document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
    })
    balls[2].style.backgroundColor = 'rgb('+blue+','+red+','+green+')'
    balls[2].addEventListener('click', function () {
        document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
    })
    balls[3].style.backgroundColor = 'rgb('+red+','+blue+','+green+')'
    balls[3].addEventListener('click', function () {
        document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
    })
    balls[4].style.backgroundColor = 'rgb('+green+','+red+','+blue+')'
    balls[4].addEventListener('click', function () {
        document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
    })
    balls[5].style.backgroundColor = 'rgb('+blue+','+green+','+red+')'
    balls[5].addEventListener('click', function () {
        document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
    })
}
rgbColor()