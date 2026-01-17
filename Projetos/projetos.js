function animacaoEntrada() {

    const somCarta = new Audio('sons/9fwticq5dm-transition-sfx-2.mp3')
    const myObserver = new IntersectionObserver((verme) => {
        verme.forEach((ver) => {
            if(ver.isIntersecting){
                ver.target.classList.add('show')
                somCarta.play()
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

const loja = document.querySelector('.loja')
const truco = document.querySelector('.truco')
const calculadora = document.getElementById('calculadora')
const login = document.getElementById('login')
const jogo = document.getElementById('jogo')
const cordel = document.getElementById('cordel')
const relogio = document.getElementById('relogio')

function texto1() {

    loja.textContent = 'uma loja virtual simples'
}

function texto2() {

    truco.textContent = 'Um contador de truco'
}

function texto3() {

    calculadora.textContent = 'Uma calculadora que faz ecuações básicas'
}

function texto4() {

    login.textContent = 'Uma tela de login'
}

function texto5() {

    jogo.textContent = 'Um jogo simples que é inspirado nas funções do jogo do dinossauro do Google.'
}

function texto6() {

    cordel.textContent = 'Um pequeno site que fala sobre um poema e o divulga.'
}

function texto7() {

    relogio.textContent = 'Um relogio de manual mas que na verda é digital.'
}



function efeitosSonoros() {

    const botao = document.querySelectorAll('button')
    const somBotao = new Audio('sons/0116.mp4')

    function somBtnFundo() {

        somBotao.play()
    }

    botao.forEach((btn) => {

        btn.addEventListener('click', somBtnFundo)
    })

    const fita = document.querySelectorAll('a')
    const somFundo = new Audio('sons/8bit-music-for-game-68698.mp3')

    function somMusicFundo() {
        somFundo.loop = true
        somFundo.play()
    }

    fita.forEach((fit) => {

        fit.addEventListener('click', somBtnFundo)
    })

    window.addEventListener('mousemove', somMusicFundo)
}

efeitosSonoros()