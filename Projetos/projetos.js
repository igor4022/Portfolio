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

/*Texto dos projetos quando aperta o botão*/

const calculadora = document.getElementById('calculadora')
const login = document.getElementById('login')
const jogo = document.getElementById('jogo')
const cordel = document.getElementById('cordel')
const relogio = document.getElementById('relogio')

function texto1() {

    calculadora.textContent = 'Uma calculadora digital que pode executar ecuações basícas.'
}
function texto2() {

    login.textContent = 'Um login feito para indicar e autenticar um usuário em uma sistema digital.'
}

function texto3() {

    jogo.textContent = 'Um jogo simples que é inspirado nas funções do jodo do dinossauro do Google.'
}

function texto4() {

    cordel.textContent = 'Um pequeno site que fala sobre um poema e o divulga.'
}

function texto5() {

    relogio.textContent = 'Um relogio de manual mas que na verda é digital.'
}