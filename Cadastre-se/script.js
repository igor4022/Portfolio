const texto = document.createElement('a')
const ativo = document.querySelector('.ativo')
const botao = document.querySelector('.enviar')

function btnReserva() {

    texto.innerText = 'Caso o envio não tenha funcionada'
    texto.classList.add(ativo)
    ativo.appendChild(texto)
}

botao.addEventListener('click', btnReserva)

animacaoEntrada()

function initFundoSonoros() {

    const botao = document.querySelectorAll('input')
    const somBtn = new Audio('sons/0116.mp4')

    function somClickBtn() {

        somBtn.play()
    }

    botao.forEach((bton) => {
        bton.addEventListener('mousemove', somClickBtn)
    })

    const somFundo = new Audio('Cadastre-se/sons/static-drone-ambient-258064.mp3')

    function musicaFundo() {
        somFundo.play()
    }

    window.addEventListener('mousemove', musicaFundo)
}

initFundoSonoros()