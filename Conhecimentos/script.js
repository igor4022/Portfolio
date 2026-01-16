
function animacaoEntrada() {

    const myObserver = new IntersectionObserver((verme) => {
        verme.forEach((ver) => {
            if(ver.isIntersecting){
                ver.target.classList.add('show')
            } else {
                ver.target.classList.remove('show')
            }
        })
    })


    const elementos = document.querySelectorAll('.hidden')

    elementos.forEach((elemen) => myObserver.observe(elemen))
}

animacaoEntrada()

/*Conteúdo de explicação das cartas*/

const html = document.querySelector('.text-html')
const css = document.querySelector('.text-css')
const php = document.querySelector('.text-php')
const js = document.querySelector('.text-js')
const python = document.querySelector('.text-python')
const java = document.querySelector('.text-java')
const botao = document.querySelector('button')

function Texto(texto) {

        const bloco = document.createElement('p')
        this.texto = texto
        bloco.classList.add(this.texto)
        this.texto.appendChild(bloco)
        console.log(bloco)
        
    }

const texto1 = new Texto(html)

    
botao.addEventListener('click', texto1)
    




    

function initSomClickBtn() {

    const botao = document.querySelectorAll('button')
    const somBtn = new Audio('sons/0115.mp4')

    function somClickBtn() {

        somBtn.play()
    }

    botao.forEach((bton) => {
        bton.addEventListener('click', somClickBtn)
    })
}

initSomClickBtn()

const fundo = document.querySelector('body')
let somFundo = new Audio('sons/chill-drum-loop-6887.mp3')

function musicaFundo() {
    somFundo.play()
}

window.addEventListener('mousemove', musicaFundo)